import React from 'react';
import { SDG_CONCEPTUAL_GROUPS } from '../data/sustainableDevelopment';
import { SourceLink } from './SourceLink';
import { PRIMARY_SOURCES } from '../data/sources';

export const SdgGrouping: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Global Benchmark Framework
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            UN Sustainable Development Goals (SDGs)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            The 17 SDGs categorized into four conceptual pillars for integrated learning.
          </p>
        </div>

        {/* Conceptual Disclaimer Badge */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
          ℹ️ Conceptual grouping for educational alignment (Not an official UN classification)
        </div>
      </div>

      {/* 4 Category Pillar Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {SDG_CONCEPTUAL_GROUPS.map((group) => {
          const isAmber = group.color === 'amber';
          const isEmerald = group.color === 'emerald';
          const isCyan = group.color === 'cyan';

          return (
            <div
              key={group.category}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className={`text-xl font-black tracking-widest ${
                  isAmber ? 'text-amber-400' : isEmerald ? 'text-emerald-400' : isCyan ? 'text-cyan-400' : 'text-purple-300'
                }`}>
                  {group.category} PILLAR
                </span>

                <span className="text-xs font-bold text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {group.sdgs.length} Goals
                </span>
              </div>

              <div className="space-y-3">
                {group.sdgs.map((sdg) => (
                  <div key={sdg.number} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                      isAmber ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      isEmerald ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      isCyan ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {sdg.number}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">
                        SDG {sdg.number}: {sdg.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-normal">
                        {sdg.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <SourceLink source={PRIMARY_SOURCES.unSdgs} />
    </div>
  );
};
