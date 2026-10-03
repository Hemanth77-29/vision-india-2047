import React from 'react';
import { DIVIDEND_ENABLERS } from '../data/demographicData';

export const DemographicDividend: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Economic Window
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            3. The Demographic Dividend
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            A temporary economic opportunity created when the working-age population (15-64) exceeds dependent children and seniors.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold">
          <span>⚠️ Key Principle: The Dividend is NOT Automatic</span>
        </div>
      </div>

      {/* Visual Sequence Flow Banner */}
      <div className="glass-panel rounded-2xl p-4 sm:p-6 mb-8 border border-slate-800">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
          Demographic Dividend Causality Chain
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs font-black text-emerald-400 block mb-1">01. Falling Fertility</span>
            <span className="text-[11px] text-slate-400">Child dependency ratio drops</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs font-black text-cyan-400 block mb-1">02. Age Structure Shift</span>
            <span className="text-[11px] text-slate-400">Ratio of working adults peaks</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs font-black text-amber-400 block mb-1">03. Savings & Investment</span>
            <span className="text-[11px] text-slate-400">Increased capital accumulation</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs font-black text-emerald-300 block mb-1">04. Economic Expansion</span>
            <span className="text-[11px] text-slate-400">Accelerated per capita GDP growth</span>
          </div>
        </div>
      </div>

      {/* 4 Enabler Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DIVIDEND_ENABLERS.map((enabler) => (
          <div
            key={enabler.id}
            className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {enabler.title}
              </h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {enabler.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs space-y-2">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Current Baseline:</span>
                <span className="text-slate-200 font-semibold">{enabler.currentStatus}</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[10px] text-emerald-400 uppercase font-bold block">Strategic Imperative:</span>
                <span className="text-slate-300">{enabler.keyStrategy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
