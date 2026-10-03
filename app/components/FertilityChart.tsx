'use client';

import React, { useState } from 'react';
import { FERTILITY_TRANSITION_DATA, REPLACEMENT_LEVEL_TFR } from '../data/fertilityData';
import { StatusBadge } from './StatusBadge';
import { FertilityPoint } from '../types';

export const FertilityChart: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<FertilityPoint>(
    FERTILITY_TRANSITION_DATA.find((p) => p.type === 'current') || FERTILITY_TRANSITION_DATA[5]
  );

  const maxTFR = 6.5;

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Fertility Transition Curve
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            2. Total Fertility Rate (TFR) Transition
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Empirical decline in India&apos;s average children per woman compared against the natural replacement-level threshold of 2.1.
          </p>
        </div>

        {/* Replacement Threshold Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
          <span className="w-2.5 h-0.5 bg-amber-400" />
          <span>Replacement Benchmark = 2.1 TFR</span>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        
        {/* Chart Viewport Canvas Container */}
        <div className="relative h-64 sm:h-72 w-full pt-6 pb-8 mb-6 border-b border-slate-800/80">
          
          {/* Replacement Line (2.1 TFR) */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-amber-400/70 z-10 flex items-center justify-end pr-2 pointer-events-none"
            style={{ top: `${((maxTFR - REPLACEMENT_LEVEL_TFR) / maxTFR) * 100}%` }}
          >
            <span className="text-[10px] font-extrabold text-amber-400 bg-slate-950/90 px-2 py-0.5 rounded border border-amber-500/40">
              Replacement Level (2.1 TFR)
            </span>
          </div>

          {/* Grid Level Markers */}
          <div className="absolute left-0 top-0 text-[10px] text-slate-400">6.0 TFR</div>
          <div className="absolute left-0 top-1/2 text-[10px] text-slate-400">3.0 TFR</div>
          <div className="absolute left-0 bottom-6 text-[10px] text-slate-400">0.0 TFR</div>

          {/* Bar / Node Visual Curve */}
          <div className="h-full flex items-end justify-between px-6 sm:px-12 relative z-20">
            {FERTILITY_TRANSITION_DATA.map((pt) => {
              const heightPercent = (pt.tfr / maxTFR) * 100;
              const isSelected = selectedPoint.year === pt.year;
              const isBelowReplacement = pt.tfr < REPLACEMENT_LEVEL_TFR;

              return (
                <div
                  key={pt.year}
                  onClick={() => setSelectedPoint(pt)}
                  className="flex flex-col items-center group cursor-pointer h-full justify-end"
                >
                  {/* Floating TFR Value Badge */}
                  <span
                    className={`text-[11px] font-extrabold mb-2 transition-all ${
                      isSelected
                        ? 'text-emerald-300 scale-110 glow-text-emerald'
                        : isBelowReplacement
                        ? 'text-cyan-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {pt.tfr}
                  </span>

                  {/* Bar Element */}
                  <div
                    className={`w-6 sm:w-10 rounded-t-lg transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-t from-emerald-600 via-teal-400 to-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.8)]'
                        : pt.type === 'current'
                        ? 'bg-emerald-500/80 hover:bg-emerald-400'
                        : pt.type === 'historical'
                        ? 'bg-slate-700 hover:bg-slate-600'
                        : 'bg-purple-600/60 hover:bg-purple-500/80'
                    }`}
                    style={{ height: `${heightPercent}%` }}
                  />

                  {/* Label */}
                  <span className={`text-[10px] font-bold mt-2 ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                    {pt.label.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Data Point Inspector Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <StatusBadge type={selectedPoint.type} />
              <span className="text-xs font-bold text-slate-300">Period: {selectedPoint.label}</span>
            </div>
            <h4 className="text-base font-bold text-white">
              TFR: <span className="text-emerald-400 text-lg font-black">{selectedPoint.tfr}</span> children per woman
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              {selectedPoint.note}
            </p>
          </div>

          <div className="text-right sm:border-l border-slate-800 sm:pl-4">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Authoritative Source</span>
            <span className="text-xs text-emerald-400 font-semibold">{selectedPoint.sourceName}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
