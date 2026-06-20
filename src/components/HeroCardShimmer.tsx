const HeroCardShimmer = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 p-6 font-sans animate-pulse">
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between pb-0">
          <div className="flex items-center gap-3 grow">
            <div className="h-20 w-20 rounded-lg bg-neutral-200 dark:bg-neutral-800 shrink-0" />

            <div className="grow space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-6 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div className="h-3 w-1/4 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex items-center justify-between gap-4">
                <div className="h-3 w-1/4 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-3 w-1/4 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-3 w-1/4 rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-9 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  );
};

export default HeroCardShimmer;
