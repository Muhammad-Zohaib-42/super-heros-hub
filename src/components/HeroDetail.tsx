import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const HeroDetail = ({ hero }) => {
  if (!hero) return null;

  const radarData = {
    labels: ['Int', 'Str', 'Spd', 'Dur', 'Pwr', 'Cmb'],
    datasets: [{
      data: Object.values(hero.powerstats),
      backgroundColor: 'rgba(148, 163, 184, 0.2)', // Slate-400 tint
      borderColor: '#94a3b8', // Slate-400
      borderWidth: 2,
    }],
  };

  return (
    // The wrapper uses overflow-hidden to prevent horizontal scroll bars
    <div className="w-full min-h-screen bg-slate-200 dark:bg-slate-800 p-4 md:p-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header - Clinical and Symmetrical */}
        <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <img src={hero.images.sm} alt={hero.name} className="w-24 h-24 rounded border border-slate-300 dark:border-slate-700" />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{hero.name}</h1>
            <p className="text-slate-600 dark:text-slate-400">{hero.biography.fullName}</p>
          </div>
          <div className="h-40 w-40">
            <Radar data={radarData} options={{ maintainAspectRatio: false, scales: { r: { grid: { color: 'rgba(148, 163, 184, 0.3)' } } } }} />
          </div>
        </div>

        {/* Info Grid - Designed to never overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Biography">
            <Row label="Alignment" value={hero.biography.alignment} />
            <Row label="Publisher" value={hero.biography.publisher} />
            <Row label="Birth Place" value={hero.biography.placeOfBirth} />
          </InfoCard>

          <InfoCard title="Physical Stats">
            <Row label="Race" value={hero.appearance.race} />
            <Row label="Height" value={hero.appearance.height.join(' / ')} />
            <Row label="Weight" value={hero.appearance.weight.join(' / ')} />
          </InfoCard>
        </div>

        {/* Full width section */}
        <InfoCard title="Connections">
          <p className="text-sm text-slate-700 dark:text-slate-300">{hero.connections.groupAffiliation}</p>
        </InfoCard>

      </div>
    </div>
  );
};

// Clean Row component for internal data
const Row = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700 last:border-0">
    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{label}</span>
    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</span>
  </div>
);

// Wrapper for cards to ensure they stay within grid boundaries
const InfoCard = ({ title, children }) => (
  <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-6">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{title}</h2>
    {children}
  </div>
);

export default HeroDetail;