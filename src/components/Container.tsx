import { useContext, useEffect } from "react"
import { HeroContext } from "../contexts/HeroContext"
import HeroCard from "./HeroCard"

function fetchHerosData() {
    const herosId = [1,2,3,4,5,6,7,8,9]

    const responseArray = herosId.map(heroId => fetch(`/superhero/api.php/621dfa4f126d4e554bbcb7c0e9d35f33/${heroId}`).then(response => response.json()))
    return Promise.all(responseArray)
}

const Container = () => {
  const {herosData, setHerosData} = useContext(HeroContext)!

  useEffect(() => {
    fetchHerosData().then(data => setHerosData(data))
  }, [])

  return (
    <main className="grow px-5 py-3 dark:bg-slate-800 dark:text-slate-200 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 overflow-y-scroll scrollbar-none items-start auto-rows-min">
        {
          herosData.length > 0 ? herosData.map(heroData => <HeroCard hero={heroData} />) : <p>Loading Heros Data</p>
        }
    </main>
  )
}

export default Container