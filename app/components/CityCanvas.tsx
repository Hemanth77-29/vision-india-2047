'use client';

import { InfrastructureSelection } from '../lib/smartCitySimulation';
import { SMART_CITY_INFRASTRUCTURE_CATALOG } from '../data/smartCity';

export function CityCanvas({ selections }: { selections: InfrastructureSelection }) {
  const chosen = SMART_CITY_INFRASTRUCTURE_CATALOG.flatMap((item) =>
    Array.from({ length: selections[item.id] || 0 }, (_, index) => ({ item, index }))
  );
  return <section aria-label="Illustrative city map" className="glass-panel rounded-3xl p-4 sm:p-6 border border-emerald-500/30 bg-slate-950/90">
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 mb-3 border-b border-slate-800 pb-3"><span className="font-bold">Conceptual 2D city canvas</span><span className="text-[10px] text-amber-300">Illustrative · updates with your choices</span></div>
    <div className="relative min-h-[240px] sm:min-h-[320px] rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-[var(--surface-mid)] via-[var(--surface-mid)] to-[var(--surface-deep)]">
      <svg aria-hidden="true" viewBox="0 0 800 360" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-50"><path d="M0 260H800M0 120H800M190 0V360M600 0V360" stroke="#64748b" strokeWidth="12" strokeDasharray="18 12" fill="none"/><path d="M0 320C180 290 250 360 420 310S650 280 800 330" stroke="#38bdf8" strokeWidth="8" fill="none"/><circle cx="400" cy="180" r="120" stroke="#34d399" strokeWidth="2" strokeDasharray="8 8" fill="none"/></svg>
      {chosen.length === 0 ? <div className="absolute inset-0 grid place-content-center text-center px-5"><span aria-hidden="true" className="text-4xl">🏗️</span><strong className="text-sm text-white mt-2">Start with a city plot</strong><span className="text-xs text-slate-400 mt-1">Select projects in the toolbox to place them here.</span></div> : <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 sm:p-6">
        {chosen.map(({ item, index }) => <div key={`${item.id}-${index}`} className="min-h-16 rounded-xl border border-white/15 bg-slate-950/85 backdrop-blur-sm p-2 flex items-center gap-2 shadow-lg"><span aria-hidden="true" className="text-xl">{item.icon}</span><span className="text-[10px] leading-tight text-white font-semibold">{item.name}</span></div>)}
      </div>}
    </div>
    <p className="text-[10px] text-slate-400 mt-3 text-center">Map is a conceptual visualization, not a geographic map or a real city plan.</p>
  </section>;
}
