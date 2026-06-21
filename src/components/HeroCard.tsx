import type { HeroObj } from "../types/types";

type HeroCardProps = {
  hero: HeroObj;
};

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-neutral-950 p-6 font-sans dark:shadow-2xl">
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between pb-0">
          <div className="flex items-center gap-3 grow">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-lime-400/10 shrink-0">
              <img className="h-full w-full object-cover rounded-lg" src={hero.image.url} alt={`${hero.name} image`} loading="lazy" />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between">
                <p className="font-semibold dark:text-neutral-200">{hero.name}</p>
                <div className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-[12px] font-normal">{hero.biography.alignment}</div>
              </div>
              <p className="text-xs text-neutral-500 mb-4">{hero.biography.publisher}</p>
              <div className="flex items-center justify-between text-xs">
                <div className="text-neutral-600 dark:text-neutral-100 text-xs font-medium">
                  <span className="text-neutral-500 dark:text-neutral-400">POW : </span>
                  <span>{hero.powerstats.power}</span>
                </div>
                <div className="text-neutral-600 dark:text-neutral-100 text-xs font-medium">
                  <span className="text-neutral-500 dark:text-neutral-400">STR : </span>
                  <span>{hero.powerstats.power}</span>
                </div>
                <div className="text-neutral-600 dark:text-neutral-100 text-xs font-medium">
                  <span className="text-neutral-500 dark:text-neutral-400">SPEED : </span>
                  <span>{hero.powerstats.power}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full rounded-lg border border-lime-400/50 bg-transparent px-4 py-2 text-sm font-medium text-lime-400 transition-colors duration-300 hover:bg-lime-400 hover:text-neutral-950 cursor-pointer">View Hero Profile</button>
      </div>
    </div>
  );
};

export default HeroCard;
