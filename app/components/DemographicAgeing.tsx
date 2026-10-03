import React from 'react';
import { StatusBadge } from './StatusBadge';
import { SourceLink } from './SourceLink';
import { PRIMARY_SOURCES } from '../data/sources';

export const DemographicAgeing: React.FC = () => {
  const ageingImplications = [
    {
      title: 'Geriatric Healthcare',
      desc: 'Expanding primary healthcare and specialized non-communicable disease care for an elder population exceeding 300 million by 2050.',
      icon: '🏥'
    },
    {
      title: 'Pensions & Social Protection',
      desc: 'Creating sustainable pension fund mechanisms and universal social security nets for informal sector workers.',
      icon: '🛡️'
    },
    {
      title: 'Workforce & Productivity',
      desc: 'Integrating automation, AI, and lifelong reskilling to maintain high economic productivity as the youth working-age cohort shrinks.',
      icon: '⚡'
    },
    {
      title: 'Care Economy & Support Systems',
      desc: 'Developing institutional elder care, community caregiver networks, and silver economy services.',
      icon: '🤝'
    },
    {
      title: 'Age-Friendly Urban Planning',
      desc: 'Designing accessible public transit, elder-friendly housing, and barrier-free municipal infrastructure.',
      icon: '🏙️'
    }
  ];

  return (
    <div className="mb-16">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/30 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Future Transition • Mid-Century Horizon
            </span>
          </div>

          <StatusBadge type="projection" customLabel="UNFPA Ageing Forecast" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
          4. The Next Demographic Challenge: Population Ageing
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-8">
          As total fertility rates remain below replacement levels and medical advancements expand life expectancy beyond 75 years, India will transition from a youth-dominated society to a mature ageing society by mid-century.
        </p>

        {/* 3 Age Categories Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Children (Ages 0 - 14)</span>
            <div className="text-2xl font-black text-slate-300 mt-1">24.4% → 15.3%</div>
            <span className="text-[10px] text-slate-400">Decreasing share (2026 to 2100)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Working Age (Ages 15 - 64)</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">68.4% → 56.1%</div>
            <span className="text-[10px] text-slate-400">Peak today, gradual contraction</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Senior Citizens (Ages 65+)</span>
            <div className="text-2xl font-black text-purple-400 mt-1">7.2% → 28.6%</div>
            <span className="text-[10px] text-purple-300 font-semibold">Rising 4x by century end</span>
          </div>
        </div>

        {/* Implications Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {ageingImplications.map((imp, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-xl mb-2">{imp.icon}</div>
              <h4 className="text-sm font-bold text-white mb-1">{imp.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{imp.desc}</p>
            </div>
          ))}
        </div>

        <SourceLink source={PRIMARY_SOURCES.unfpaAgeing} />
      </div>
    </div>
  );
};
