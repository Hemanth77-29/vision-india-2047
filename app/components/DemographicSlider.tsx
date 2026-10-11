'use client';

import React, { useState } from 'react';
import { DEMOGRAPHIC_SLIDER_POINTS } from '../data/demographicData';
import { StatusBadge } from './StatusBadge';

export const DemographicSlider: React.FC = () => {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);

  const activePoint = DEMOGRAPHIC_SLIDER_POINTS[activeYearIndex];

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Interactive Projection Engine
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            5. Demographic Horizon Simulator (2024 — 2100)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Drag the slider across future milestones to observe changes in total population, median age, working-age share, and senior dependency.
          </p>
        </div>

        <StatusBadge type={activePoint.status} customLabel={activePoint.status === 'current' ? 'LATEST ESTIMATE' : 'PROJECTION — UN WPP 2024'} />
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 relative">
        
        {/* Interactive Slider Track */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-3">
            <span>2024 Baseline</span>
            <span>2047 Centenary</span>
            <span>2062 Peak</span>
            <span>2100 Horizon</span>
          </div>

          <input
            type="range"
            min={0}
            max={DEMOGRAPHIC_SLIDER_POINTS.length - 1}
            step={1}
            value={activeYearIndex}
            onChange={(e) => setActiveYearIndex(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Demographic timeline projection slider"
          />

          <div className="flex justify-between mt-2">
            {DEMOGRAPHIC_SLIDER_POINTS.map((pt, idx) => (
              <button
                key={pt.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-md transition-all ${
                  activeYearIndex === idx
                    ? 'bg-emerald-400 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {pt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Demographic Pyramid Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          
          {/* Main Selected Stats Display */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-black text-white">{activePoint.label}</span>
              <StatusBadge type={activePoint.status} />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Population</span>
                <span className="text-2xl font-black text-emerald-400">{activePoint.totalPop}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Median Age</span>
                <span className="text-2xl font-black text-cyan-400">{activePoint.medianAge} Years</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              {activePoint.summary}
            </p>
          </div>

          {/* Dynamic Population Structure Bars */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-emerald-400">Working-Age Population (15-64)</span>
                <span className="text-white">{activePoint.workingAgePercent}%</span>
              </div>
              <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${activePoint.workingAgePercent}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-cyan-400">Children Population (0-14)</span>
                <span className="text-white">{activePoint.childPercent}%</span>
              </div>
              <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-cyan-500 transition-all duration-500"
                  style={{ width: `${activePoint.childPercent}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-purple-400">Senior Citizens (65+)</span>
                <span className="text-white">{activePoint.elderPercent}%</span>
              </div>
              <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-purple-500 transition-all duration-500"
                  style={{ width: `${activePoint.elderPercent}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
