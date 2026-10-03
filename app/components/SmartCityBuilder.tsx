'use client';

import { useMemo, useState } from 'react';
import { CityCanvas } from './CityCanvas';
import { SmartCityHeader } from './SmartCityHeader';
import { SMART_CITY_INFRASTRUCTURE_CATALOG, INITIAL_SIMULATION_BUDGET_CR, InfrastructureCategory } from '../data/smartCity';
import { calculateSmartCitySimulation, InfrastructureSelection } from '../lib/smartCitySimulation';
import { PRIMARY_SOURCES } from '../data/sources';

const categories: InfrastructureCategory[] = ['PEOPLE', 'MOBILITY', 'ENERGY', 'ENVIRONMENT', 'DIGITAL'];
const measures: { key: keyof ReturnType<typeof calculateSmartCitySimulation>['indicators']; label: string; unit: string }[] = [
  { key: 'cleanEnergy', label: 'Clean energy readiness', unit: 'index' },
  { key: 'publicTransport', label: 'Public transport access', unit: 'index' },
  { key: 'greenCover', label: 'Green cover', unit: 'index' },
  { key: 'waterEfficiency', label: 'Water efficiency', unit: 'index' },
  { key: 'wasteManagement', label: 'Waste recovery', unit: 'index' },
  { key: 'wellbeing', label: 'Citizen wellbeing', unit: 'index' },
  { key: 'digitalInfra', label: 'Digital infrastructure', unit: 'index' },
  { key: 'economicActivity', label: 'Economic activity', unit: 'index' },
];
const money = (value: number) => `₹${value.toLocaleString('en-IN')} Cr`;

export function SmartCityBuilder() {
  const [goal, setGoal] = useState('balanced');
  const [selections, setSelections] = useState<InfrastructureSelection>({});
  const result = useMemo(() => calculateSmartCitySimulation(selections, goal), [selections, goal]);

  function changeItem(id: string, delta: number) {
    setSelections((current) => {
      const item = SMART_CITY_INFRASTRUCTURE_CATALOG.find((entry) => entry.id === id);
      if (!item) return current;
      const count = current[id] || 0;
      const nextCount = Math.max(0, Math.min(item.maxAllowed, count + delta));
      if (delta > 0 && nextCount > count && result.budgetUsedCr + item.costCr > INITIAL_SIMULATION_BUDGET_CR) return current;
      return { ...current, [id]: nextCount };
    });
  }

  return <section id="smart-city" className="py-20 border-t border-slate-800/80 bg-[#070c17] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SmartCityHeader selectedGoalId={goal} onSelectGoal={setGoal} />
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] gap-6 items-start">
        <div className="space-y-6">
          <CityCanvas selections={selections} />
          <section aria-labelledby="indicators-heading" className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-5"><div><p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Live scenario</p><h3 id="indicators-heading" className="text-xl font-extrabold text-white mt-1">City indicators</h3></div><p className="text-xs text-slate-400">Illustrative index · 0–100</p></div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {measures.map((measure) => <div key={measure.key}>
                <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-300">{measure.label}</span><span className="font-mono text-white">{result.indicators[measure.key]} / 100</span></div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden" role="meter" aria-label={measure.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={result.indicators[measure.key]}><div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-[width] duration-300" style={{ width: `${result.indicators[measure.key]}%` }} /></div>
              </div>)}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-900/80 border border-slate-800 p-4"><div className="flex flex-wrap justify-between gap-2 text-xs text-slate-300"><span>Illustrative weighted indicator score</span><strong className="text-emerald-300">{result.overallSynergyScore} / 100</strong></div><div className="flex flex-wrap justify-between gap-2 text-[11px] text-slate-400 mt-2"><span>{result.totalItemsCount} infrastructure item{result.totalItemsCount === 1 ? '' : 's'} selected</span><span>Priority: {result.goal.title}</span></div><p aria-live="polite" className="text-xs text-slate-400 mt-2 leading-relaxed">{result.feedbackSummary}</p></div>
          </section>
        </div>

        <aside className="space-y-5">
          <section aria-labelledby="budget-heading" className="glass-panel rounded-3xl p-5 sm:p-6 border border-amber-500/30">
            <p className="text-[11px] uppercase tracking-widest text-amber-300 font-bold">Illustrative planning envelope</p><h3 id="budget-heading" className="text-2xl font-black text-white mt-1">{money(result.budgetRemainingCr)} <span className="text-sm font-medium text-slate-400">remaining</span></h3>
            <div className="h-2 rounded-full bg-slate-800 mt-4 overflow-hidden" role="meter" aria-label="Illustrative budget used" aria-valuemin={0} aria-valuemax={INITIAL_SIMULATION_BUDGET_CR} aria-valuenow={result.budgetUsedCr}><div className="h-full bg-amber-400 rounded-full transition-[width]" style={{ width: `${Math.min(100, result.budgetUsedCr / INITIAL_SIMULATION_BUDGET_CR * 100)}%` }} /></div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-2"><span>Used: {money(result.budgetUsedCr)}</span><span>Envelope: {money(INITIAL_SIMULATION_BUDGET_CR)}</span></div>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-3">Fictional classroom budget and impact points. Costs are not project estimates, official allocations or real city statistics.</p>
          </section>

          <section aria-labelledby="toolbox-heading" className="glass-panel rounded-3xl p-5 sm:p-6 border border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-4"><div><p className="text-[11px] uppercase tracking-widest text-cyan-300 font-bold">Infrastructure toolbox</p><h3 id="toolbox-heading" className="text-xl font-extrabold text-white mt-1">Choose investments</h3></div><button type="button" onClick={() => setSelections({})} className="text-xs text-slate-300 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded">Reset city</button></div>
            <div className="space-y-5">
              {categories.map((category) => <div key={category}><h4 className="text-[10px] uppercase tracking-[.18em] text-slate-500 font-bold mb-2">{category}</h4><div className="space-y-2">
                {SMART_CITY_INFRASTRUCTURE_CATALOG.filter((item) => item.category === category).map((item) => {
                  const count = selections[item.id] || 0;
                  const overBudget = count < item.maxAllowed && result.budgetUsedCr + item.costCr > INITIAL_SIMULATION_BUDGET_CR;
                  return <article key={item.id} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <div className="flex gap-3"><span aria-hidden="true" className="text-xl">{item.icon}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap justify-between gap-x-2"><h5 className="text-xs font-bold text-white">{item.name}</h5><span className="text-[10px] text-amber-200">{money(item.costCr)} / unit</span></div><p className="text-[10px] leading-relaxed text-slate-400 mt-1">{item.description}</p><div className="flex items-center justify-between mt-2 gap-2"><span className="text-[10px] text-slate-500">Selected {count} / {item.maxAllowed}</span><div className="flex gap-2"><button type="button" aria-label={`Remove one ${item.name}`} disabled={count === 0} onClick={() => changeItem(item.id, -1)} className="w-8 h-8 rounded-lg border border-slate-700 text-white disabled:opacity-35 focus-visible:ring-2 focus-visible:ring-emerald-400">−</button><button type="button" aria-label={`Add one ${item.name}`} disabled={count >= item.maxAllowed || overBudget} onClick={() => changeItem(item.id, 1)} className="w-8 h-8 rounded-lg border border-emerald-700 bg-emerald-500/10 text-emerald-200 disabled:opacity-35 focus-visible:ring-2 focus-visible:ring-emerald-400">+</button></div></div></div></div>
                  </article>;
                })}
              </div></div>)}
            </div>
          </section>
        </aside>
      </div>

      <section aria-labelledby="city-approach" className="mt-8 glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/20">
        <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">An integrated approach</p><h3 id="city-approach" className="text-2xl font-black text-white mt-2">Connect the systems. Share the benefits.</h3>
        <p className="text-sm text-slate-300 leading-relaxed mt-3 max-w-4xl">A city works as a connected system: compact housing near transit can improve access; clean energy needs reliable grids and storage; water reuse and green spaces can support resilience; and digital services work best when they serve residents and local institutions. The indicators above are teaching devices that make these links and trade-offs visible.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5" aria-label="Integrated development relationships"><div className="rounded-2xl p-4 bg-emerald-500/10 border border-emerald-500/20"><strong className="text-sm text-emerald-200">People</strong><p className="text-xs text-slate-300 mt-1">Health, education, housing and accessible streets.</p></div><div className="rounded-2xl p-4 bg-cyan-500/10 border border-cyan-500/20"><strong className="text-sm text-cyan-200">Planet</strong><p className="text-xs text-slate-300 mt-1">Energy, water, green space and material cycles.</p></div><div className="rounded-2xl p-4 bg-amber-500/10 border border-amber-500/20"><strong className="text-sm text-amber-200">Prosperity</strong><p className="text-xs text-slate-300 mt-1">Mobility, digital access and economic opportunity.</p></div></div>
      </section>

      <section aria-labelledby="mission-heading" className="mt-8 grid lg:grid-cols-[1fr_auto] gap-5 items-center rounded-3xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
        <div><p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">India · factual context</p><h3 id="mission-heading" className="text-2xl font-black text-white mt-2">Smart Cities Mission</h3><p className="text-sm text-slate-300 leading-relaxed mt-3 max-w-4xl">India’s Smart Cities Mission frames urban development around core infrastructure, quality of life, a clean and sustainable environment, and smart solutions. Its strategy includes area-based improvement (retrofitting), redevelopment, greenfield development, and pan-city solutions. This builder is an educational illustration, not a representation of any selected Indian city or Mission project.</p><a href={PRIMARY_SOURCES.mohuaSmartCities.url} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-xs font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">Read MoHUA Smart Cities Mission guidelines ↗</a><p className="text-[10px] text-slate-500 mt-2">Official Government of India source · Ministry of Housing and Urban Affairs</p></div>
        <a href={PRIMARY_SOURCES.mohuaSmartCitiesDashboard.url} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-4 py-3 rounded-xl border border-slate-700 text-xs font-bold text-slate-200 hover:border-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Official Mission dashboard ↗</a>
      </section>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6"><p className="text-xs text-slate-400">Phase 4 · Smart City Builder complete</p><p className="text-sm font-bold text-emerald-300">Next unit: Public–Private Partnerships (PPP) →</p></div>
    </div>
  </section>;
}
