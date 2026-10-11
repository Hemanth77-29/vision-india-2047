import React from 'react';

export const FromConceptToCityPanel: React.FC = () => {
  return (
    <div id="smart-city-transition" className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/40 relative overflow-hidden bg-gradient-to-br from-[#060913] via-[#0b1326] to-[#04060d]">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
          Continue to Smart City Builder
        </span>

        <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          FROM CONCEPT TO CITY
        </h3>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
          &ldquo;We&apos;ve explored the principles. Now put them into practice.&rdquo;
        </p>

        <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto">
          Construct and test a virtual city by balancing energy, mobility, water, public services and an illustrative planning budget.
        </p>

        <a
          href="#smart-city"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-105"
        >
          <span>BUILD A SMART CITY →</span>
        </a>
      </div>

    </div>
  );
};
