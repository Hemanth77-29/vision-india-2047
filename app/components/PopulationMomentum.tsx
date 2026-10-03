import React from 'react';

export const PopulationMomentum: React.FC = () => {
  const momentumSteps = [
    {
      step: '01',
      title: 'Higher Historical Fertility',
      desc: 'Generations born in the 1980s-2000s when national TFR was 3.0 to 4.5+ created large birth cohorts.'
    },
    {
      step: '02',
      title: 'Large Youth Base',
      desc: 'Those large cohorts reach reproductive ages today, forming India\'s largest ever childbearing group.'
    },
    {
      step: '03',
      title: 'High Absolute Birth Count',
      desc: 'Even with small family sizes (1.8-2.0 kids per couple), the total number of couples remains vast.'
    },
    {
      step: '04',
      title: 'Population Momentum',
      desc: 'Births temporarily outnumber deaths, sustaining population growth despite low individual fertility.'
    },
    {
      step: '05',
      title: 'Growth Slowdown & Peak',
      desc: 'As smaller youth cohorts reach adulthood, growth decelerates toward a peak (~1.69B in 2060s).'
    },
    {
      step: '06',
      title: 'Stabilization / Decline',
      desc: 'Long-term equilibrium achieved with gradual population aging and potential stabilization (~1.50B by 2100).'
    }
  ];

  return (
    <div className="mb-16">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Educational Concept • Demographic Inertia
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
          Why Does Population Grow Even When TFR &lt; 2.1?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-8">
          This phenomenon is called <strong>Population Momentum</strong>. Because past fertility was high, India currently has a large demographic base of young citizens entering family-building ages. Even though couples are having fewer children today, the high number of potential parents keeps total annual births above total annual deaths.
        </p>

        {/* Visual Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {momentumSteps.map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    STEP {item.step}
                  </span>
                  <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
          <span className="text-lg">📌</span>
          <span>
            <strong className="text-white">Key Takeaway:</strong> Low fertility does not instantly stop population growth. Population momentum ensures India will reach peak population around the 2060s before long-term stabilization.
          </span>
        </div>

      </div>
    </div>
  );
};
