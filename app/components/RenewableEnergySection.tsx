import React from 'react';
import { MNRE_ENERGY_DATA } from '../data/energyData';
import { StatusBadge } from './StatusBadge';
import { SourceLink } from './SourceLink';

export const RenewableEnergySection: React.FC = () => {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 mb-16 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Panchamrit Climate Pledge
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            India&apos;s Renewable Energy Transition
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Empirical reporting on India&apos;s installed non-fossil electric power capacity compared against official 2030 climate pledges.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge type="current" customLabel="CURRENT DATA" />
          <StatusBadge type="target" customLabel="2030 TARGET" />
        </div>
      </div>

      {/* Comparison Headline Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Current Installed Capacity Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">Installed Non-Fossil Capacity</span>
            <StatusBadge type="current" />
          </div>

          <div className="flex items-baseline gap-2 my-2">
            <span className="text-4xl font-extrabold text-white glow-text-emerald">
              {MNRE_ENERGY_DATA.summary.totalNonFossilCapacity}
            </span>
            <span className="text-sm font-semibold text-emerald-400">
              ({MNRE_ENERGY_DATA.summary.nonFossilSharePercent} of Total Grid)
            </span>
          </div>

          <p className="text-xs text-slate-400">
            As of <strong>{MNRE_ENERGY_DATA.summary.asOfDate}</strong> (Central Electricity Authority).
          </p>
        </div>

        {/* 2030 Panchamrit Target Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">Panchamrit 2030 Goal</span>
            <StatusBadge type="target" />
          </div>

          <div className="flex items-baseline gap-2 my-2">
            <span className="text-4xl font-extrabold text-white">
              {MNRE_ENERGY_DATA.summary.target2030}
            </span>
            <span className="text-sm font-semibold text-blue-400">
              ({MNRE_ENERGY_DATA.summary.targetShare2030})
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Official COP26 commitment targeting 500 GW non-fossil capacity by 2030.
          </p>
        </div>

      </div>

      {/* Energy Source Breakdown Cards Grid */}
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
        Current Installed Non-Fossil Mix Breakdown (GW):
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {MNRE_ENERGY_DATA.sourcesBreakdown.map((src) => (
          <div key={src.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-200">{src.name}</span>
              <StatusBadge type="current" customLabel="CURRENT" />
            </div>

            <div className="text-2xl font-black text-amber-400 mb-1">
              {src.capacityGw} GW
            </div>

            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div
                className="h-full bg-amber-400"
                style={{ width: `${src.percentageShare}%` }}
              />
            </div>

            <p className="text-[11px] text-slate-300 leading-normal">
              {src.description}
            </p>
          </div>
        ))}
      </div>

      <SourceLink source={MNRE_ENERGY_DATA.sourceMetadata} />
    </div>
  );
};
