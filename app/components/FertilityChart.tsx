'use client';

import React, { useState } from 'react';
import { FERTILITY_TRANSITION_DATA, REPLACEMENT_LEVEL_TFR } from '../data/fertilityData';
import { StatusBadge } from './StatusBadge';
import { FertilityPoint } from '../types';

export const FertilityChart: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<FertilityPoint>(
    FERTILITY_TRANSITION_DATA.find((p) => p.year === 2021) || FERTILITY_TRANSITION_DATA[5]
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
        <div className="relative mb-6">
          
          {/* Plotting Canvas Area (Unified 0 to maxTFR Coordinate Space) */}
          <div className="relative h-60 sm:h-72 w-full">
            
            {/* Grid Level Marker: 6.0 TFR */}
            <div
              className="absolute left-0 right-0 border-t border-slate-800/60 pointer-events-none flex items-center justify-start"
              style={{ bottom: `${(6.0 / maxTFR) * 100}%` }}
            >
              <span className="text-[10px] text-slate-500 font-mono -mt-4">6.0 TFR</span>
            </div>

            {/* Grid Level Marker: 4.0 TFR */}
            <div
              className="absolute left-0 right-0 border-t border-slate-800/60 pointer-events-none flex items-center justify-start"
              style={{ bottom: `${(4.0 / maxTFR) * 100}%` }}
            >
              <span className="text-[10px] text-slate-500 font-mono -mt-4">4.0 TFR</span>
            </div>

            {/* Replacement Benchmark Line: Mathematically exact at 2.1 TFR */}
            <div
              className="absolute left-0 right-0 border-t-2 border-dashed border-amber-400/80 z-10 pointer-events-none flex items-center justify-end pr-2"
              style={{ bottom: `${(REPLACEMENT_LEVEL_TFR / maxTFR) * 100}%` }}
            >
              <span className="text-[10px] font-extrabold text-amber-400 bg-slate-950/95 px-2 py-0.5 rounded border border-amber-500/40 shadow-sm -mt-6 sm:-mt-5">
                Replacement Benchmark (2.1 TFR)
              </span>
            </div>

            {/* Grid Level Marker: 0.0 TFR (Baseline) */}
            <div className="absolute left-0 right-0 bottom-0 border-t border-slate-800 pointer-events-none flex items-center justify-start">
              <span className="text-[10px] text-slate-500 font-mono -mt-4">0.0 TFR</span>
            </div>

            {/* Bars Area: Placed strictly within the 0 -> maxTFR canvas */}
            <div className="h-full flex items-end justify-between px-6 sm:px-12 relative z-20">
              {FERTILITY_TRANSITION_DATA.map((pt) => {
                const heightPercent = (pt.tfr / maxTFR) * 100;
                const isSelected = selectedPoint.year === pt.year;
                const isBelowReplacement = pt.tfr < REPLACEMENT_LEVEL_TFR;

                return (
                  <div
                    key={pt.year}
                    onClick={() => setSelectedPoint(pt)}
                    className="h-full flex flex-col justify-end items-center group cursor-pointer relative"
                  >
                    {/* Floating TFR Value Badge: Mathematically anchored above the bar top */}
                    <span
                      className={`absolute text-[10px] sm:text-[11px] font-extrabold transition-all whitespace-nowrap pointer-events-none ${
                        isSelected
                          ? 'text-emerald-300 scale-110 font-black'
                          : isBelowReplacement
                          ? 'text-cyan-400'
                          : 'text-slate-300'
                      }`}
                      style={{ bottom: `calc(${heightPercent}% + 4px)` }}
                    >
                      {pt.tfr}
                    </span>

                    {/* Bar Element: Height exactly matches (TFR / maxTFR) * 100% */}
                    <div
                      className={`w-5 sm:w-9 rounded-t-lg transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-t from-emerald-600 via-teal-400 to-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.8)]'
                          : pt.type === 'current' || pt.year === 2021
                          ? 'bg-emerald-500/80 hover:bg-emerald-400'
                          : pt.type === 'historical'
                          ? 'bg-slate-700 hover:bg-slate-600'
                          : 'bg-purple-600/60 hover:bg-purple-500/80'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                );
              })}
            </div>

          </div>

          {/* X-Axis Labels: Separated from Y-scale canvas to prevent vertical offset distortion */}
          <div className="flex items-center justify-between px-6 sm:px-12 pt-3 border-t border-slate-800/80">
            {FERTILITY_TRANSITION_DATA.map((pt) => {
              const isSelected = selectedPoint.year === pt.year;
              return (
                <button
                  key={pt.year}
                  type="button"
                  onClick={() => setSelectedPoint(pt)}
                  className={`text-[9px] sm:text-[10px] font-bold text-center focus-visible:outline-none ${
                    isSelected ? 'text-emerald-300 font-black' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {pt.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Data Point Inspector Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <StatusBadge type={selectedPoint.type} customLabel={selectedPoint.type === 'projection' ? 'PROJECTION' : 'OBSERVED / SURVEY'} />
              <span className="text-xs font-bold text-slate-300">Period: {selectedPoint.label}</span>
            </div>
            <h4 className="text-base font-bold text-white">
              TFR: <span className="text-emerald-400 text-lg font-black">{selectedPoint.tfr}</span> children per woman
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl whitespace-pre-line">
              {selectedPoint.note}
            </p>
          </div>

          <div className="text-left sm:text-right sm:border-l border-slate-800 sm:pl-4">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Authoritative Source</span>
            <span className="text-xs text-emerald-400 font-semibold">{selectedPoint.sourceName}</span>
          </div>
        </div>

        {/* Near-Chart Authoritative Source Citations */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-semibold uppercase text-[10px]">Sources near chart:</span>
            <a
              href="https://main.mohfw.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline font-medium"
            >
              NFHS-5 (2019–21) ↗
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://population.un.org/wpp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline font-medium"
            >
              UN WPP 2024 Revision ↗
            </a>
          </div>
          <span className="text-[10px] text-slate-400">
            Replacement line: 2.1 children per woman (mathematical benchmark)
          </span>
        </div>

      </div>
    </div>
  );
};
