import { useContext } from "react"
import { HeroContext } from "../contexts/HeroContext"
import HeroCard from "./HeroCard"
import HeroCardShimmer from "./HeroCardShimmer"
import type { HeroObj } from "../types/types"
import { FaArrowLeft } from "react-icons/fa"
import { data } from "../utils/data"
import HeroDetail from "./HeroDetail"

const Container = () => {
  const {herosData, setHerosData, searchHero, setSearchHero, searchError, setSearchError, showProfile, setShowProfile} = useContext(HeroContext)!

  function handleLoadMore() {
    const loadMoreData = data.slice(herosData.length, herosData.length + 9)
    setHerosData(prev => ([...prev, ...loadMoreData]))
  }

  function backToMainContent() {
    setSearchError("")
    setSearchHero([])
    setShowProfile(null)
  }

  if (showProfile) {
    return (
      <main className="grow dark:bg-slate-800 dark:text-slate-200 px-5 py-3 overflow-y-scroll scrollbar-none">
        <button onClick={backToMainContent} className=" mt-1 border-none outline-none bg-slate-200 dark:bg-slate-700 py-1.5 px-4 text-sm rounded-full flex items-center justify-center cursor-pointer transition hover:bg-slate-300 dark:hover:bg-slate-600 gap-2"><FaArrowLeft /> <span>Back</span></button>
        <HeroDetail hero={showProfile} />
      </main>
    )
  }

  if (searchError) {
    return (
      <main className="relative grow dark:bg-slate-800 dark:text-slate-200 px-5 py-3">
        <button onClick={backToMainContent} className="border-none outline-none bg-slate-200 dark:bg-slate-700 py-1.5 px-4 text-sm rounded-full flex items-center justify-center cursor-pointer transition hover:bg-slate-300 dark:hover:bg-slate-600 gap-2"><FaArrowLeft /> <span>Back</span></button>
        <h2 className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{searchError}</h2>
      </main>
    )
  }

  return (
    <main className="grow dark:bg-slate-800 dark:text-slate-200 overflow-y-scroll scrollbar-none items-start auto-rows-min">
        <section className="px-5 py-3 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3" style={{display: searchHero!.length >= 1 ? "none" : "grid"}}>
          {
            herosData.map(heroData => <HeroCard key={heroData.id} hero={heroData} />)
          }
        </section>
        <div className="flex items-center justify-end p-5 pt-2 pb-6" style={{display: searchHero!.length >= 1 ? "none" : "grid"}}>
          <button onClick={handleLoadMore} className="rounded-full border border-lime-400/50 px-4 py-2 text-sm font-bold bg-lime-400 text-neutral-950 cursor-pointer">Load More</button>
        </div>
        <section className="px-5 py-3" style={{display: searchHero!.length >= 1 ? "grid" : "none"}}>
          <button onClick={backToMainContent} className="bg-slate-200 dark:bg-slate-700 py-1.5 px-4 pr-5 text-sm rounded-full flex items-center justify-center cursor-pointer transition hover:bg-slate-300 dark:hover:bg-slate-600 gap-2 w-fit mb-5"><FaArrowLeft /> <span>Back</span></button>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
            {
              searchHero ? searchHero.map((heroObj: HeroObj) => <HeroCard key={heroObj.id} hero={heroObj} />) : Array.from({length: 9}).map(() => <HeroCardShimmer key={crypto.randomUUID()} />)
            }
          </div>
        </section>
    </main>
  )
}

export default Container