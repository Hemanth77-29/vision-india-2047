import React from 'react';
import { SourceLink } from './SourceLink';
import { PRIMARY_SOURCES } from '../data/sources';

export const SmartCityConceptCard: React.FC = () => {
  const cityComponents = [
    { title: 'Digital Infrastructure', desc: 'IoT sensor grids, high-speed fiber connectivity, and Integrated Command Centers.' },
    { title: 'Smart Mobility', desc: 'Electric bus fleets, intelligent traffic signals, and integrated transit cards.' },
    { title: 'Clean Energy & Water', desc: 'Renewable energy options, smart metering, reliable water services, and leakage detection.' },
    { title: 'Waste Management', desc: 'Automated waste segregation, waste-to-energy plants, and circular recycling.' },
    { title: 'Civic Services', desc: 'E-governance portals, public safety CCTV networks, and participatory budgeting.' }
  ];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-blue-500/30 mb-16 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Urban Transformation Conceptual Framework
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
            Smart Cities & Integrated Urban Infrastructure
          </h3>
        </div>

        <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          Source: Smart Cities Mission (MoHUA)
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
        Smart City development combines digital technology, resilient urban planning, and environmental stewardship to build inclusive, climate-ready cities for India&apos;s urban century.
      </p>

      {/* Components Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cityComponents.map((comp, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <h4 className="text-xs font-bold text-blue-300 mb-1">
              0{idx + 1}. {comp.title}
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {comp.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Phase 4 Builder Link */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/80 border border-blue-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider block mb-1">
            Phase 4 · Interactive City Builder
          </span>
          <h4 className="text-lg font-extrabold text-white">
            Build & test an illustrative smart city
          </h4>
          <p className="text-xs text-slate-300">
            Choose urban energy, transport, water, people-focused, and environmental infrastructure in the interactive builder.
          </p>
        </div>

        <a
          href="#smart-city"
          className="px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-blue-400 hover:bg-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all shrink-0"
        >
          OPEN THE BUILDER →
        </a>
      </div>

      <SourceLink source={PRIMARY_SOURCES.mohuaSmartCities} className="mt-6" />
    </div>
  );
};
