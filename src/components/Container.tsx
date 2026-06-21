import { useContext, useEffect, useRef, type Dispatch, type SetStateAction } from "react"
import { HeroContext } from "../contexts/HeroContext"
import HeroCard from "./HeroCard"
import HeroCardShimmer from "./HeroCardShimmer"
import type { HeroObj } from "../types/types"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { FaArrowLeft } from "react-icons/fa"

function generateCurrentFetchingIdsArray(herosData: HeroObj[], setHerosData: Dispatch<SetStateAction<HeroObj[] | string[]>>) {
  const loadingArray = ['loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading']
  setHerosData((prev: HeroObj[] | string[]) => {
    const array = prev.filter(elem => elem !== 'loading')
    return [...array, ...loadingArray]
  })
  const idsArray: number[] = []

  for (let i = herosData.length + 1; i <= herosData.length + 9; i++) {
    idsArray.push(i)
  }

  return idsArray
}

function fetchHerosData(herosData: HeroObj[] | string[], setHerosData: Dispatch<SetStateAction<HeroObj[] | string[]>>) {
    const herosId = generateCurrentFetchingIdsArray(herosData, setHerosData)

    const responseArray = herosId.map(heroId => fetch(`/superhero/api.php/${import.meta.env.VITE_ACCESS_TOKEN}/${heroId}`).then(response => response.json()))
    return Promise.all(responseArray)
}

const Container = () => {
  const {herosData, setHerosData, searchHero, searchError} = useContext(HeroContext)!
  const {setData} = useLocalStorage(herosData)

  const targetDiv = useRef<HTMLDivElement | null>(null)
  const scrollContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function setFetchedData(herosData: HeroObj[] | string[], setHerosData: Dispatch<SetStateAction<HeroObj[] | string[]>>) {
      fetchHerosData(herosData, setHerosData).then(data => {
        setHerosData(prev => {
          const heroObjArray = prev.filter(elem => elem !== 'loading')
          return [...heroObjArray, ...data]
        })
      })
    }

    setFetchedData(herosData, setHerosData)

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setFetchedData(herosData, setHerosData)
      }
    }, {
      root: scrollContainer.current,
      threshold: 1
    })

    const currentTarget = targetDiv.current

    if (currentTarget) {
      observer.observe(currentTarget)
    }
  }, [])

  useEffect(() => {
    setData(herosData)
  }, [herosData])

  if (searchError) {
    return (
      <main className="relative grow flex items-center justify-center dark:bg-slate-800 dark:text-slate-200 px-5 py-3">
        <button><FaArrowLeft /> <span>Back</span></button>
        <h2 className="text-xl absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">{searchError}</h2>
      </main>
    )
  }

  return (
    <main ref={scrollContainer} className="grow bg-slate-200 dark:bg-slate-800 dark:text-slate-200 overflow-y-scroll scrollbar-none items-start auto-rows-min">
        <section className="px-5 py-3 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3" style={{display: searchHero!.length >= 1 ? "none" : "grid"}}>
          {
            herosData.length > 0 ? herosData.map(heroData => {
              if (typeof heroData == "string") {
                return <HeroCardShimmer key={crypto.randomUUID()} />
              } else {
                return <HeroCard key={crypto.randomUUID()} hero={heroData} />
              }
            }) : Array.from({length:9}).map(() => <HeroCardShimmer key={crypto.randomUUID()} />)
          }
        </section>
        <div className="h-5" ref={targetDiv} style={{display: searchHero.length >= 1 ? "none" : "block"}}></div>
        <section className="px-5 py-3" style={{display: searchHero!.length >= 1 ? "grid" : "none"}}>
          <button><FaArrowLeft /> <span>Back</span></button>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
            {
              searchHero ? searchHero.map((heroObj: HeroObj) => <HeroCard key={crypto.randomUUID()} hero={heroObj} />) : Array.from({length: 9}).map(() => <HeroCardShimmer key={crypto.randomUUID()} />)
            }
          </div>
        </section>
    </main>
  )
}

export default Container