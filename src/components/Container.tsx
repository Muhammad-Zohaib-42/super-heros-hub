import { useContext, useEffect } from "react"
import { HeroContext } from "../contexts/HeroContext"
import HeroCard from "./HeroCard"
import HeroCardShimmer from "./HeroCardShimmer"

function fetchHerosData() {
    const herosId = [1,2,3,4,5,6]

    const responseArray = herosId.map(heroId => fetch(`/superhero/api.php/621dfa4f126d4e554bbcb7c0e9d35f33/${heroId}`).then(response => response.json()))
    return Promise.all(responseArray)
}

const Container = () => {
  const {herosData, setHerosData, searchHero, setSearchHero} = useContext(HeroContext)!

  useEffect(() => {
    fetchHerosData().then(data => setHerosData(data))
  }, [])

  return (
    <main className="grow px-5 py-3 dark:bg-slate-800 dark:text-slate-200">
        <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3" style={{display: searchHero ? "none" : "grid"}}>
          {
            herosData.length > 0 ? herosData.map(heroData => <HeroCard hero={heroData} />) : Array.from({length:6}).map(() => <HeroCardShimmer />)
          }
        </section>
        <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3" style={{display: searchHero ? "grid" : "none"}}>
          {
            searchHero ? <HeroCard hero={searchHero} /> : <HeroCardShimmer />
          }
        </section>
        <div className="flex py-8 justify-end">
          <button className="rounded-full border border-lime-400/50 bg-lime-400 px-4 py-2 text-sm font-medium text-neutral-950 cursor-pointer">Load More</button>
        </div>
    </main>
  )
}

export default Container