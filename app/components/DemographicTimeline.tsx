'use client';

import React, { useState } from 'react';
import { DEMOGRAPHIC_TIMELINE_PERIODS } from '../data/demographicData';
import { StatusBadge } from './StatusBadge';

export const DemographicTimeline: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('2026');

  const activePeriod = DEMOGRAPHIC_TIMELINE_PERIODS.find(
    (p) => p.year === selectedPeriod
  ) || DEMOGRAPHIC_TIMELINE_PERIODS[3];

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Chronological Pathway
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
            1. Long-Term Demographic Timeline (1970 — 2100)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Select any year milestone to inspect historical observations, current baselines, and projected population dynamics.
          </p>
        </div>

        {/* Status Legend */}
        <div className="flex items-center gap-2 text-xs">
          <StatusBadge type="historical" customLabel="HISTORICAL" />
          <StatusBadge type="current" customLabel="CURRENT" />
          <StatusBadge type="projection" customLabel="PROJECTION" />
        </div>
      </div>

      {/* Timeline Controls (Desktop Horizontal / Mobile Responsive Grid) */}
      <div className="glass-panel rounded-2xl p-4 sm:p-6 mb-8 border border-slate-800">
        
        {/* Desktop / Tablet Timeline Track */}
        <div className="hidden md:block relative py-6">
          {/* Background Track Line */}
          <div className="absolute top-1/2 left-6 right-6 h-1 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="relative z-10 flex items-center justify-between">
            {DEMOGRAPHIC_TIMELINE_PERIODS.map((period) => {
              const isSelected = period.year === selectedPeriod;
              return (
                <button
                  key={period.year}
                  onClick={() => setSelectedPeriod(period.year)}
                  className="flex flex-col items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-2 transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isSelected
                        ? 'bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.8)] scale-125 ring-4 ring-emerald-500/30'
                        : period.type === 'current'
                        ? 'bg-emerald-950 text-emerald-300 border-2 border-emerald-400'
                        : period.type === 'historical'
                        ? 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-slate-500'
                        : 'bg-slate-900 text-purple-300 border border-purple-500/40 hover:border-purple-400'
                    }`}
                  >
                    {period.year}
                  </div>

                  <span className={`text-xs font-bold mt-2 transition-colors ${isSelected ? 'text-emerald-300' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {period.year}
                  </span>

                  <StatusBadge type={period.type} className="mt-1 scale-90" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical / Grid Timeline Buttons */}
        <div className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-2">
          {DEMOGRAPHIC_TIMELINE_PERIODS.map((period) => {
            const isSelected = period.year === selectedPeriod;
            return (
              <button
                key={period.year}
                onClick={() => setSelectedPeriod(period.year)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center gap-1 border ${
                  isSelected
                    ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-md font-extrabold'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{period.year}</span>
                <span className={`text-[9px] uppercase px-1 rounded ${
                  period.type === 'current' ? 'bg-emerald-950 text-emerald-300' :
                  period.type === 'historical' ? 'bg-slate-800 text-slate-400' : 'bg-purple-950 text-purple-300'
                }`}>
                  {period.type}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Period Detail Breakdown Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-2">
              <StatusBadge type={activePeriod.type} />
              <span className="text-xs font-bold text-slate-400">Total Population: <strong className="text-white">{activePeriod.population}</strong></span>
            </div>

            <h4 className="text-2xl font-black text-white mb-2">
              {activePeriod.year}: {activePeriod.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              {activePeriod.keyPhenomena}
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Strategic Policy Focus in {activePeriod.year}:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activePeriod.policyFocus}
              </p>
            </div>
          </div>

          {/* Key Metrics Quadrant */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Fertility Rate</span>
              <div className="text-2xl font-black text-emerald-400 mt-1">{activePeriod.tfr}</div>
              <span className="text-[10px] text-slate-400">Children / Woman</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Median Age</span>
              <div className="text-2xl font-black text-cyan-400 mt-1">{activePeriod.medianAge}</div>
              <span className="text-[10px] text-slate-400">National Average</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center col-span-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Working-Age Share (15-64)</span>
              <div className="text-2xl font-black text-amber-400 mt-1">{activePeriod.workingAgeShare}</div>
              <span className="text-[10px] text-slate-300">Labor Force Potential</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
