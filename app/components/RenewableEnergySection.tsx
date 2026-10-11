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
            <span className="text-xs font-bold uppercase text-slate-400">Installed Renewable & Non-Fossil Capacity</span>
            <StatusBadge type="current" customLabel="AS OF OCTOBER 2024" />
          </div>

          <div className="flex flex-wrap items-baseline gap-2 my-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-white glow-text-emerald">
              {MNRE_ENERGY_DATA.summary.totalRenewableCapacity}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400">
              ({MNRE_ENERGY_DATA.summary.renewableSharePercent} of total installed power capacity)
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            As of <strong>{MNRE_ENERGY_DATA.summary.asOfDate}</strong> (MNRE / Central Electricity Authority). Total non-fossil capacity reached 211.36 GW (including 8.18 GW nuclear), or {MNRE_ENERGY_DATA.summary.nonFossilSharePercent}, out of {MNRE_ENERGY_DATA.summary.totalInstalledCapacity} total installed power capacity.
          </p>
        </div>

        {/* 2030 Climate Commitments Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">2030 Climate Commitments (Distinct Pledges)</span>
            <StatusBadge type="target" customLabel="OFFICIAL TARGETS" />
          </div>

          <ul className="text-xs text-slate-300 space-y-2.5 my-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>500 GW</strong> of non-fossil installed electric power capacity by 2030 (COP26 Panchamrit announcement).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>Approximately 50%</strong> cumulative installed electric power capacity from non-fossil sources by 2030 under India&apos;s updated NDC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>50%</strong> of energy requirements from renewable energy by 2030 (COP26 Panchamrit pledge).</span>
            </li>
          </ul>

          <p className="text-[11px] text-slate-400 border-t border-slate-800 pt-2">
            These commitments represent distinct metrics (installed capacity vs. energy requirements). Target pledges, not achieved.
          </p>
        </div>

      </div>

      {/* Energy Source Breakdown Cards Grid */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Installed Renewable Mix (GW) — October 2024:
        </div>
        <div className="text-[11px] text-slate-400 italic">
          MNRE / PIB October 2024 data · bars show share of listed renewable capacity
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                style={{ width: `${src.percentageShare}%` }} aria-hidden="true"
              />
            </div>

            <div className="flex justify-between text-[10px] text-slate-500 mb-1"><span>Share of renewable capacity</span><span>{src.percentageShare}%</span></div>
            <p className="text-[11px] text-slate-300 leading-normal">
              {src.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-400 mb-6 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
        {MNRE_ENERGY_DATA.notes}
      </p>

      <SourceLink source={MNRE_ENERGY_DATA.sourceMetadata} />
    </div>
  );
};
