import React from 'react';
import { INTEGRATED_PILLARS } from '../data/pillarData';

export const PillarStrip: React.FC = () => {
  return (
    <section id="pillars-overview" className="py-12 relative z-10 border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
            Conceptual Pillars
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Three Pillars of Integrated Development
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Sustainable development requires balancing human empowerment, ecological resilience, and economic strength.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {INTEGRATED_PILLARS.map((pillar) => {
            const isAmber = pillar.colorAccent === 'amber';
            const isEmerald = pillar.colorAccent === 'emerald';

            return (
              <div
                key={pillar.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-800"
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isAmber
                      ? 'bg-amber-400'
                      : isEmerald
                      ? 'bg-emerald-400'
                      : 'bg-cyan-400'
                  }`}
                />

                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-2xl font-black tracking-widest ${
                      isAmber
                        ? 'text-amber-400'
                        : isEmerald
                        ? 'text-emerald-400'
                        : 'text-cyan-400'
                    }`}
                  >
                    {pillar.title}
                  </span>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isAmber
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : isEmerald
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}
                  >
                    {pillar.iconName === 'people' && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {pillar.iconName === 'planet' && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.055M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    )}
                    {pillar.iconName === 'prosperity' && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {pillar.tagline}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <strong className="text-slate-300 font-semibold block mb-0.5">Core Focus Metrics:</strong>
                  <span>{pillar.metricsSummary}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature / Data Strip (Labels instead of fake numerical claims) */}
        <div className="glass-panel rounded-xl p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 border border-slate-800 text-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">Interactive Modules</span>
            <span className="text-[10px] text-slate-400">Simulators & Explorers</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-blue-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">Real Statistics</span>
            <span className="text-[10px] text-slate-400">Strict Source Transparency</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-purple-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">Case Studies</span>
            <span className="text-[10px] text-slate-400">Grassroots & National Models</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-amber-400 mb-1" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">Data Sources</span>
            <span className="text-[10px] text-slate-400">Government & UN Publications</span>
          </div>
        </div>

      </div>
    </section>
  );
};
