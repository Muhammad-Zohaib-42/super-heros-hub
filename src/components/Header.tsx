import { useContext, useEffect } from "react"
import { HeroContext } from "../contexts/HeroContext"
import { FaMoon, FaSearch, FaSun } from "react-icons/fa"

const Header = () => {
  const {isDark, setIsDark} = useContext(HeroContext)!

  useEffect(() => {
    isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <header className="h-15 border-b border-b-slate-200 dark:border-b-slate-700 flex items-center justify-between px-5 dark:bg-slate-800 dark:text-slate-200 shrink-0">
        <div>
            <form className="border border-slate-200 dark:border-slate-700 focus-within:border-slate-300 dark:focus-within:border-slate-600 h-10 w-87.5 flex rounded-full relative">
                <input className="border-none outline-none pl-4 pr-12 py-2 h-full grow text-slate-700 dark:text-slate-200 font-normal" type="text" placeholder="Search superhero" />
                <button className="border-none outline-none bg-slate-200 dark:bg-slate-700 py-1.5 px-4 text-sm rounded-full flex items-center justify-center cursor-pointer transition hover:bg-slate-300 dark:hover:bg-slate-600 absolute top-1/2 -translate-y-1/2 right-0.5 text-slate-700 dark:text-slate-200">Search</button>
            </form>
        </div>
        <div>
            <button onClick={() => setIsDark(!isDark)} className="border-none outline-none bg-slate-200 dark:bg-slate-700 h-9 w-9 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200">{isDark ? <FaSun /> : <FaMoon />}</button>
        </div>
    </header>
  )
}

export default Header