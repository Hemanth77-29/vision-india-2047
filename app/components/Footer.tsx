import React from 'react';
import { StatusBadge } from './StatusBadge';
import { PRIMARY_SOURCES } from '../data/sources';

const SOURCE_GROUPS = [
  { title: 'People, population & development', keys: ['unWpp', 'nfhs5', 'worldBank', 'unfpaAgeing', 'nitiSdg', 'nitiViksit', 'unSdgs', 'aisheEdu', 'plfsLabor', 'ayushmanBharat'] },
  { title: 'Policy, governance & urban delivery', keys: ['mnrePanchamrit', 'mohuaSmartCities', 'mohuaSmartCitiesDashboard', 'indiaConstitution', 'deaPppGuidelines'] },
  { title: 'Models, strategies & case studies', keys: ['ellenMacArthur', 'unepGreenEconomy', 'unHabitat', 'singaporeGreenPlan', 'japanSociety5', 'netherlandsDelta', 'indoreWasteCase', 'indorePppCase', 'curitibaCase'] },
];

export const Footer: React.FC = () => {
  return (
    <footer id="sources" className="bg-[var(--page-bg)] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section: Data Transparency Legend */}
        <div className="glass-panel rounded-2xl p-6 mb-12 border border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Strict Source & Data Classification Policy</span>
          </h3>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            This page labels observed data, estimates, targets, projections and simulations separately. Each linked source gives the reference period; figures may be revised as publishers release new data.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <StatusBadge type="current" className="mb-2" />
              <p className="text-slate-300 text-[11px]">Empirically measured values verified by official censuses, NFHS surveys, or multilateral datasets.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <StatusBadge type="target" className="mb-2" />
              <p className="text-slate-300 text-[11px]">Formally adopted government policies, Panchamrit climate pledges, or statutory development milestones.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <StatusBadge type="projection" className="mb-2" />
              <p className="text-slate-300 text-[11px]">Demographic forecasts calculated by UN Population Division or NITI Aayog demographic models.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <StatusBadge type="simulation" className="mb-2" />
              <p className="text-slate-300 text-[11px]">Exploratory scenario models designed for educational simulation within this web platform.</p>
            </div>
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-lg font-black text-white mb-3">
              <span>🌿</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                VISION INDIA 2047
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              &ldquo;Explore. Understand. Plan. Build.&rdquo;
              <br />
              An interactive educational framework on Unit 5 Integrated Approaches.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Core Modules</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">01. Vision India 2047</a></li>
              <li><a href="#india-today" className="hover:text-emerald-400 transition-colors">02. India Today Baseline</a></li>
              <li><a href="#demographics" className="hover:text-emerald-400 transition-colors">03. Demographic Transition</a></li>
              <li><a href="#integrated-pillars" className="hover:text-emerald-400 transition-colors">04. Sustainable Integrated Approach</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Interactive Explorers</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#smart-city" className="hover:text-cyan-300 transition-colors">Smart City Builder</a></li>
              <li><a href="#ppp" className="hover:text-cyan-300 transition-colors">PPP Explorer</a></li>
              <li><a href="#decentralization" className="hover:text-cyan-300 transition-colors">Decentralization Explorer</a></li>
              <li><a href="#strategies" className="hover:text-cyan-300 transition-colors">International strategies</a></li>
              <li><a href="#nation-simulator" className="hover:text-cyan-300 transition-colors">Nation Simulator</a></li>
              <li><a href="#future" className="hover:text-cyan-300 transition-colors">Future India</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-300 transition-colors">Case studies & quiz</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">How to use this learning platform</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Government strategies and case studies link to their publishers. Simulation points are fictional learning aids and do not describe real budgets, current performance or forecasts.</p>
          </div>

        </div>

        <section aria-labelledby="source-directory-title" className="mb-10 scroll-mt-24">
          <h3 id="source-directory-title" className="text-lg font-extrabold text-white mb-2">Sources & further reading</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-3xl">Primary and institutional references used across the learning modules. Check each publisher for updates; live dashboards may change.</p>
          <div className="grid md:grid-cols-3 gap-4">{SOURCE_GROUPS.map((group) => <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"><h4 className="text-xs font-bold text-emerald-300 mb-3">{group.title}</h4><ul className="space-y-3">{group.keys.map((key) => { const src = PRIMARY_SOURCES[key]; return <li key={key}><a href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-200 hover:text-cyan-300 underline decoration-slate-700 underline-offset-2">{src.name} ↗</a><span className="block text-[10px] text-slate-500 mt-1">{src.publisher} · {src.dateOrYear}</span>{src.notes && <span className="block text-[10px] text-slate-400 leading-relaxed mt-1">{src.notes}</span>}</li>; })}</ul></div>)}</div>
        </section>

        {/* Bottom Copyright & Accessibility Notice */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Vision India 2047 Platform • Built for Educational & National Development Learning.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Keyboard-friendly controls • Responsive layout</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
