import React from 'react';

export const TransitionPanel: React.FC = () => {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/40 relative overflow-hidden bg-gradient-to-br from-[#0b1120] via-[#080d19] to-[#04060d]">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
          Unit 5 Integration Bridge
        </span>

        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Why Does Demographics Matter for Vision 2047?
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          Demographics provides the human foundation of national planning. The demographic dividend provides a limited 25-year window to elevate workforce productivity before population ageing sets in.
        </p>

        {/* 2 Strategic Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
          
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-3 text-emerald-400 font-extrabold text-sm uppercase tracking-wider">
              <span>🚀 Youth Dividend Growth Pathway</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-200">
              <span className="bg-slate-800 px-2.5 py-1 rounded">Education</span>
              <span>→</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded">Skills</span>
              <span>→</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded">Jobs</span>
              <span>→</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Productivity</span>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              Converting working-age citizens into high-income contributors to achieve the $30 Trillion Viksit Bharat economic milestone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-3 text-purple-300 font-extrabold text-sm uppercase tracking-wider">
              <span>🛡️ Mature Ageing Resilience Pathway</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-200">
              <span className="bg-slate-800 px-2.5 py-1 rounded">Ageing</span>
              <span>→</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded">Healthcare</span>
              <span>→</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded">Pensions</span>
              <span>→</span>
              <span className="bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded border border-purple-500/30">Automation</span>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              Building long-term social safety nets, geriatric wellness, and high-tech automation to sustain prosperity in a mature society.
            </p>
          </div>

        </div>

        <a
          href="#integrated-pillars"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all hover:scale-105"
        >
          <span>Explore Integrated Development Strategies</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

      </div>
    </div>
  );
};
