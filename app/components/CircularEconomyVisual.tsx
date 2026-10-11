import React from 'react';
import { SourceLink } from './SourceLink';
import { PRIMARY_SOURCES } from '../data/sources';

export const CircularEconomyVisual: React.FC = () => {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 mb-16 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Material Loop Paradigm
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            Linear vs. Circular Economy Model
          </h3>
        </div>

        <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          Source: Ellen MacArthur Foundation Framework
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-3xl">
        Traditional industrial models follow a high-waste linear path. A circular economy replaces extraction and disposal with closed-loop systems that design out waste, keep materials at peak utility, and regenerate natural capital.
      </p>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Linear Model Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-red-500/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-extrabold text-red-400 uppercase tracking-wider">
              1. Traditional Linear Economy
            </span>
            <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20">
              High Waste / Depletion
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-300 my-6 px-2">
            <span className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">TAKE</span>
            <span>→</span>
            <span className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">MAKE</span>
            <span>→</span>
            <span className="bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">USE</span>
            <span>→</span>
            <span className="bg-red-950 text-red-300 px-3 py-2 rounded-lg border border-red-800">DISCARD</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Extracts raw natural resources, processes them into short-lived goods, and disposes of them in landfills or incinerators, creating resource scarcity and severe environmental pollution.
          </p>
        </div>

        {/* Circular Model Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider">
              2. Sustainable Circular Economy
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
              Closed Loop ↺
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-slate-200 my-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30">DESIGN</span>
            <span>→</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">MAKE</span>
            <span>→</span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">USE</span>
            <span>→</span>
            <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">REUSE</span>
            <span>→</span>
            <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">REPAIR</span>
            <span>→</span>
            <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded border border-amber-500/30">REFURBISH</span>
            <span>→</span>
            <span className="bg-emerald-400 text-slate-950 px-2 py-1 rounded font-black">RECYCLE ↺</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Keeps products, components, and raw materials at their highest utility value at all times. Minimizes virgin resource extraction, reduces waste, and keeps materials in productive use for longer.
          </p>
        </div>

      </div>

      <SourceLink source={PRIMARY_SOURCES.ellenMacArthur} />
    </div>
  );
};
