'use client';

import React, { useState } from 'react';
import { MODEL_COMPARISON_MATRIX } from '../data/models';

export const ModelComparisonTable: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>('all');

  const filteredMatrix = MODEL_COMPARISON_MATRIX.filter((row) => {
    if (selectedModelId === 'all') return true;
    return row.modelId === selectedModelId;
  });

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 mb-16 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Comparative Synthesis Matrix
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            Multi-Dimensional Model Comparison
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            An educational evaluation matrix comparing sustainable development models across economic, environmental, and social dimensions.
          </p>
        </div>

        {/* Educational Disclaimer */}
        <div className="w-full md:w-auto max-w-full min-w-0 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] leading-relaxed text-slate-400 whitespace-normal">
          ⚖️ Educational comparative analysis (No model is ranked as &apos;best&apos;)
        </div>
      </div>

      {/* Model Filter Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-slate-800">
        <button
          onClick={() => setSelectedModelId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedModelId === 'all'
              ? 'bg-emerald-400 text-slate-950 font-extrabold'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          Compare All 6 Models
        </button>

        {MODEL_COMPARISON_MATRIX.map((m) => (
          <button
            key={m.modelId}
            onClick={() => setSelectedModelId(m.modelId)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedModelId === m.modelId
                ? 'bg-slate-800 text-emerald-300 border border-emerald-500/40 font-bold'
                : 'bg-slate-950 text-slate-400 border border-slate-900 hover:text-slate-200'
            }`}
          >
            {m.modelName}
          </button>
        ))}
      </div>

      {/* Responsive Table / Card Layout */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300 uppercase tracking-wider font-bold">
              <th className="p-4 rounded-tl-xl min-w-[160px]">Model</th>
              <th className="p-4 min-w-[180px]">Primary Focus</th>
              <th className="p-4 min-w-[200px]">Economic Dimension</th>
              <th className="p-4 min-w-[200px]">Environmental Dimension</th>
              <th className="p-4 min-w-[200px]">Social Dimension</th>
              <th className="p-4 min-w-[180px]">Technology Role</th>
              <th className="p-4 rounded-tr-xl min-w-[140px]">Relevant SDGs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {filteredMatrix.map((row) => (
              <tr key={row.modelId} className="hover:bg-slate-900/60 transition-colors">
                <td className="p-4 font-black text-white text-sm bg-slate-950/60">
                  {row.modelName}
                </td>
                <td className="p-4 text-emerald-300 font-semibold">
                  {row.primaryFocus}
                </td>
                <td className="p-4 text-slate-300">
                  {row.economicDim}
                </td>
                <td className="p-4 text-slate-300">
                  {row.environmentalDim}
                </td>
                <td className="p-4 text-slate-300">
                  {row.socialDim}
                </td>
                <td className="p-4 text-cyan-300">
                  {row.techRole}
                </td>
                <td className="p-4 text-amber-400 font-bold">
                  {row.sdgs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
