const Sidebar = () => {
  return (
    <aside className="shrink-0 border-r border-r-slate-200 w-62.5 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
        <div className="h-15 border-b border-b-slate-200 dark:border-b-slate-700 grid place-content-center">
            <h1 className="font-bangers text-2xl">Super Heros Hub</h1>
        </div>
        <div className="p-5 flex flex-col gap-3">
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="intelligence">Intelligence</label>
            <input className="accent-amber-400" type="range" name="intelligence" id="intelligence" />
          </div>
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="strength">Strength</label>
            <input className="accent-amber-400" type="range" name="strength" id="strength" />
          </div>
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="speed">Speed</label>
            <input className="accent-amber-400" type="range" name="speed" id="speed" />
          </div>
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="durability">Durability</label>
            <input className="accent-amber-400" type="range" name="durability" id="durability" />
          </div>
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="power">Power</label>
            <input className="accent-amber-400" type="range" name="power" id="power" />
          </div>
          <div className="relative flex flex-col gap-1">
            <span className="absolute right-0 top-2 text-xs text-slate-700 dark:text-slate-200">50</span>
            <label htmlFor="combat">Combat</label>
            <input className="accent-amber-400" type="range" name="combat" id="combat" />
          </div>
        </div>
    </aside>
  )
}

export default Sidebar