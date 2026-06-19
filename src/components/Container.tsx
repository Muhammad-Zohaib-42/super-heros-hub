import HeroCard from "./HeroCard"

const Container = () => {
  return (
    <main className="grow px-5 py-3 dark:bg-slate-800 dark:text-slate-200 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
        {
            Array.from({length: 10}).map(() => <HeroCard />)
        }
    </main>
  )
}

export default Container