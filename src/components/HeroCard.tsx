export default function HeroCard({hero}) {
  // const hero = {
  //   name: "A-Bomb",
  //   powerstats: { strength: "100", speed: "17" },
  //   biography: { publisher: "Marvel Comics", alignment: "good" },
  //   image: { url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" }
  // };

  return (
    <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
      {/* Small Image */}
      <img className="w-20 h-20 rounded-lg object-cover" src={hero.image.url} alt={hero.name} />
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{hero.name}</h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-md uppercase font-bold 
            ${hero.biography.alignment === 'good' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {hero.biography.alignment}
          </span>
        </div>
        
        <p className="text-xs text-gray-500 mb-2">{hero.biography.publisher}</p>
        
        {/* Compact Stats */}
        <div className="flex gap-4">
          <div className="text-xs">
            <span className="text-gray-400">STR:</span> 
            <span className="ml-1 font-semibold dark:text-white">{hero.powerstats.strength}</span>
          </div>
          <div className="text-xs">
            <span className="text-gray-400">SPD:</span> 
            <span className="ml-1 font-semibold dark:text-white">{hero.powerstats.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}