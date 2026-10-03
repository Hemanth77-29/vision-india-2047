'use client';

import React, { useState } from 'react';
import { SUSTAINABLE_PILLARS_DETAIL } from '../data/sustainableDevelopment';

export const SustainableHeader: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('people');

  const activePillar = SUSTAINABLE_PILLARS_DETAIL.find((p) => p.id === selectedPillar) || SUSTAINABLE_PILLARS_DETAIL[0];

  return (
    <div className="mb-20">
      
      {/* Main Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Unit 5 • Sustainable Development Core</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          WHY SUSTAINABLE DEVELOPMENT?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mt-3 font-medium leading-relaxed">
          &ldquo;Development is not only about economic growth. It is about creating lasting prosperity while protecting people and the planet.&rdquo;
        </p>
      </div>

      {/* 3 Pillars Visual Intersection Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        
        {/* Left Column: Intersecting Venn Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px] p-6 glass-panel rounded-3xl border border-slate-800">
          
          <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
            
            {/* Center Core: INTEGRATED DEVELOPMENT */}
            <div className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/40 via-teal-500/40 to-cyan-500/40 border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.5)] flex flex-col items-center justify-center text-center p-2">
              <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest">CENTRAL CORE</span>
              <span className="text-xs font-black text-white leading-tight">INTEGRATED DEVELOPMENT</span>
              <span className="text-[9px] text-slate-300 mt-0.5">Synergy Hub</span>
            </div>

            {/* PEOPLE Node (Top) */}
            <button
              type="button"
              onClick={() => setSelectedPillar('people')}
              className={`absolute top-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                selectedPillar === 'people'
                  ? 'bg-amber-500/30 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-110'
                  : 'bg-slate-900/90 border border-amber-500/30 hover:border-amber-400'
              }`}
            >
              <span className="text-xs font-black text-amber-400">PEOPLE</span>
              <span className="text-[9px] text-slate-300">Human Capital</span>
            </button>

            {/* PLANET Node (Bottom Left) */}
            <button
              type="button"
              onClick={() => setSelectedPillar('planet')}
              className={`absolute bottom-0 left-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedPillar === 'planet'
                  ? 'bg-emerald-500/30 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-110'
                  : 'bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400'
              }`}
            >
              <span className="text-xs font-black text-emerald-400">PLANET</span>
              <span className="text-[9px] text-slate-300">Ecology</span>
            </button>

            {/* PROSPERITY Node (Bottom Right) */}
            <button
              type="button"
              onClick={() => setSelectedPillar('prosperity')}
              className={`absolute bottom-0 right-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                selectedPillar === 'prosperity'
                  ? 'bg-cyan-500/30 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)] scale-110'
                  : 'bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400'
              }`}
            >
              <span className="text-xs font-black text-cyan-400">PROSPERITY</span>
              <span className="text-[9px] text-slate-300">Economy</span>
            </button>

          </div>

          <p className="text-[11px] text-slate-400 mt-6 text-center">
            💡 Interactive: Select any pillar to inspect core focus areas and human impact.
          </p>
        </div>

        {/* Right Column: Active Pillar Detailed Cards */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-2xl font-black tracking-widest ${
                activePillar.color === 'amber' ? 'text-amber-400' :
                activePillar.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
              }`}>
                {activePillar.title}
              </span>
              <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                {activePillar.subtitle}
              </span>
            </div>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Essential Dimensions of {activePillar.title}:
            </h4>

            <ul className="space-y-2.5 mb-6">
              {activePillar.focusPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200">
                  <span className={`w-2 h-2 rounded-full ${
                    activePillar.color === 'amber' ? 'bg-amber-400' :
                    activePillar.color === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'
                  }`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {SUSTAINABLE_PILLARS_DETAIL.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedPillar === p.id
                      ? 'bg-slate-800 text-white border-emerald-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-slate-200'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
