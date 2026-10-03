'use client';

import React, { useState } from 'react';
import { INTEGRATED_INTERSECTIONS } from '../data/pillarData';

export const IntegratedVenn: React.FC = () => {
  const [activeIntersection, setActiveIntersection] = useState('core-integrated');

  const selectedData = INTEGRATED_INTERSECTIONS.find(
    (item) => item.id === activeIntersection
  ) || INTEGRATED_INTERSECTIONS[3];

  return (
    <section id="integrated-pillars" className="py-20 relative bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Unit 5 Core Theme
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Why Integrated Development?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Isolated sectoral policies fail in complex national economies. Sustainable growth requires an integrated model where social equity, environmental stewardship, and financial growth reinforce each other.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Visual Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px] p-6 glass-panel rounded-3xl border border-slate-800">
            
            {/* Interactive Nodes Ring */}
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              
              {/* Central Glowing Hub */}
              <button
                type="button"
                onClick={() => setActiveIntersection('core-integrated')}
                className={`absolute z-20 w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeIntersection === 'core-integrated'
                    ? 'bg-gradient-to-br from-emerald-500/40 via-teal-500/40 to-cyan-500/40 border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.5)] scale-110'
                    : 'bg-slate-900/90 border border-slate-700 hover:border-emerald-400/50 hover:scale-105'
                }`}
              >
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">UNIT 5 CORE</span>
                <span className="text-xs font-black text-white leading-tight">INTEGRATED DEVELOPMENT</span>
                <span className="text-[9px] text-slate-300 mt-0.5">Click Core</span>
              </button>

              {/* Node 1: PEOPLE (Top Left) */}
              <button
                type="button"
                onClick={() => setActiveIntersection('people-prosperity')}
                className={`absolute top-0 left-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  activeIntersection === 'people-prosperity'
                    ? 'bg-amber-500/30 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <span className="text-xs font-black text-amber-400">PEOPLE</span>
                <span className="text-[9px] text-slate-300">Empowered Citizens</span>
              </button>

              {/* Node 2: PLANET (Top Right) */}
              <button
                type="button"
                onClick={() => setActiveIntersection('people-planet')}
                className={`absolute top-0 right-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeIntersection === 'people-planet'
                    ? 'bg-emerald-500/30 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400'
                }`}
              >
                <span className="text-xs font-black text-emerald-400">PLANET</span>
                <span className="text-[9px] text-slate-300">Greener India</span>
              </button>

              {/* Node 3: PROSPERITY (Bottom Center) */}
              <button
                type="button"
                onClick={() => setActiveIntersection('planet-prosperity')}
                className={`absolute bottom-0 z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  activeIntersection === 'planet-prosperity'
                    ? 'bg-cyan-500/30 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400'
                }`}
              >
                <span className="text-xs font-black text-cyan-400">PROSPERITY</span>
                <span className="text-[9px] text-slate-300">Strong Economy</span>
              </button>

            </div>

            <p className="text-[11px] text-slate-400 mt-6 text-center">
              💡 Interactive: Click any node or central hub to explore policy intersections.
            </p>
          </div>

          {/* Right Column: Detailed Intersection Explanation Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  Selected Synergy Mode
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                {selectedData.title}
              </h3>

              <p className="text-sm font-semibold text-emerald-300 mb-4">
                {selectedData.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm leading-relaxed mb-6">
                {selectedData.description}
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                {INTEGRATED_INTERSECTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIntersection(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeIntersection === item.id
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
