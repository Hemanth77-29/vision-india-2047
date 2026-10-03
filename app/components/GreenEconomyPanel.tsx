import React from 'react';
import { SourceLink } from './SourceLink';
import { PRIMARY_SOURCES } from '../data/sources';

export const GreenEconomyPanel: React.FC = () => {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 mb-16 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            UNEP Macroeconomic Framework
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            Green Economy Definition & Causality
          </h3>
        </div>

        <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          Source: UNEP Framework
        </span>
      </div>

      {/* Definition Quote Box */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8">
        <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-1">
          Official UNEP Definition:
        </span>
        <blockquote className="text-sm text-slate-200 italic leading-relaxed">
          &ldquo;A Green Economy is one that results in improved human well-being and social equity, while significantly reducing environmental risks and ecological scarcities. It is low carbon, resource efficient, and socially inclusive.&rdquo;
        </blockquote>
      </div>

      {/* Causality Sequence Flow */}
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
        Green Economy Macroeconomic Progression:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-black text-cyan-400 block mb-1">01. Economic Activity</span>
          <p className="text-[11px] text-slate-300">Targeted public & private investment in clean technologies and green infrastructure.</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-black text-emerald-400 block mb-1">02. Resource Efficiency</span>
          <p className="text-[11px] text-slate-300">Reducing energy & raw material inputs per unit of GDP output.</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-black text-amber-400 block mb-1">03. Lower Pressure</span>
          <p className="text-[11px] text-slate-300">Mitigating greenhouse gas emissions, air pollution, and deforestation.</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-xs font-black text-purple-300 block mb-1">04. Sustainability</span>
          <p className="text-[11px] text-slate-300">Securing long-term per capita GDP growth and intergenerational equity.</p>
        </div>
      </div>

      <SourceLink source={PRIMARY_SOURCES.unepGreenEconomy} />
    </div>
  );
};
