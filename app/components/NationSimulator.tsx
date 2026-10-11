'use client';

import { useMemo, useState } from 'react';

const initial = { capabilities: 25, connectivity: 20, green: 20, innovation: 15, local: 20 };
const choices: { id: keyof typeof initial; name: string; note: string; effects: Partial<Record<string, number>> }[] = [
  { id: 'capabilities', name: 'People and capabilities', note: 'Education, health, skills and social protection', effects: { opportunity: .55, inclusion: .8, resilience: .2 } },
  { id: 'connectivity', name: 'Connected infrastructure', note: 'Mobility, housing, water and reliable utilities', effects: { opportunity: .6, inclusion: .3, resilience: .5, access: .55 } },
  { id: 'green', name: 'Nature and resource security', note: 'Clean energy, ecosystems and efficient resource use', effects: { environment: .8, resilience: .65 } },
  { id: 'innovation', name: 'Innovation and enterprise', note: 'Research, productive jobs and digital capability', effects: { opportunity: .8, access: .45 } },
  { id: 'local', name: 'Institutions and local delivery', note: 'Responsive public institutions and implementation capacity', effects: { inclusion: .5, resilience: .45, access: .5 } },
];
const outcomes = [
  { id: 'opportunity', name: 'Opportunity and livelihoods', base: 25 },
  { id: 'inclusion', name: 'Inclusion and essential services', base: 25 },
  { id: 'environment', name: 'Environmental stewardship', base: 25 },
  { id: 'resilience', name: 'Resilience to shocks', base: 25 },
  { id: 'access', name: 'Connected service access', base: 25 },
];

export function NationSimulator() {
  const [allocation, setAllocation] = useState(initial);
  const total = Object.values(allocation).reduce((sum, value) => sum + value, 0);
  const remaining = 100 - total;
  const scores = useMemo(() => Object.fromEntries(outcomes.map((outcome) => {
    const gain = choices.reduce((sum, choice) => sum + allocation[choice.id] * (choice.effects[outcome.id] || 0), 0);
    return [outcome.id, Math.min(100, Math.round(outcome.base + gain))];
  })), [allocation]);
  function adjust(id: keyof typeof initial, amount: number) {
    setAllocation((current) => {
      const next = current[id] + amount;
      const used = Object.values(current).reduce((sum, value) => sum + value, 0);
      if (next < 0 || next > 60 || (amount > 0 && used + amount > 100)) return current;
      return { ...current, [id]: next };
    });
  }
  return <section id="nation-simulator" className="py-20 border-t border-slate-800/80 bg-[#080e1a] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mb-10"><p className="text-xs uppercase tracking-[.2em] text-amber-300 font-bold">Nation Simulator · Integrated Development Exercise</p><h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Allocate effort. Notice the trade-offs.</h2><p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4">Distribute a fictional pool of 100 planning points across five policy areas. The simple index responds to those choices so you can compare priorities. It is a classroom model, not a measure of India today or a forecast of 2047.</p></div>
      <div className="grid lg:grid-cols-2 gap-6"><div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><div className="flex justify-between gap-3 items-end mb-5"><div><p className="text-xs uppercase tracking-wider text-cyan-300 font-bold">Fictional allocation</p><h3 className="text-xl font-extrabold text-white mt-1">Policy choices</h3></div><div className="text-right text-xs text-slate-300"><strong className="text-white">{total} / 100</strong><br />{remaining} remaining</div></div><div className="h-2 rounded-full bg-slate-800 mb-5" role="meter" aria-label="Planning points allocated" aria-valuemin={0} aria-valuemax={100} aria-valuenow={total}><div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: `${total}%` }} /></div><div className="space-y-3">{choices.map((choice) => <div key={choice.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"><div className="flex items-center justify-between gap-2"><div><strong className="block text-sm text-white">{choice.name}</strong><span className="block text-xs text-slate-400 mt-1">{choice.note}</span></div><div className="flex items-center gap-2 shrink-0"><button type="button" aria-label={`Reduce ${choice.name} allocation by 5 points`} disabled={allocation[choice.id] === 0} onClick={() => adjust(choice.id, -5)} className="w-8 h-8 rounded-lg border border-slate-700 text-white disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-emerald-400">−</button><span className="w-8 text-center font-mono text-sm text-emerald-200">{allocation[choice.id]}</span><button type="button" aria-label={`Increase ${choice.name} allocation by 5 points`} disabled={allocation[choice.id] >= 60 || remaining < 5} onClick={() => adjust(choice.id, 5)} className="w-8 h-8 rounded-lg border border-emerald-700 text-emerald-200 disabled:opacity-40 focus-visible:ring-2 focus-visible:ring-emerald-400">+</button></div></div></div>)}</div><button type="button" onClick={() => setAllocation(initial)} className="mt-4 text-xs text-slate-300 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded">Reset allocation</button></div>
        <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><div className="mb-5"><p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Illustrative scenario output</p><h3 className="text-xl font-extrabold text-white mt-1">Relative development lenses</h3><p className="text-xs text-slate-400 mt-2">Index points generated only by this exercise’s fictional rules.</p></div><div className="space-y-5">{outcomes.map((outcome) => { const value = scores[outcome.id] as number; return <div key={outcome.id}><div className="flex justify-between gap-3 text-xs mb-2"><span className="text-slate-300">{outcome.name}</span><strong className="font-mono text-white">{value} / 100</strong></div><div className="h-2 rounded-full bg-slate-800 overflow-hidden" role="meter" aria-label={outcome.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}><div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-[width]" style={{ width: `${value}%` }} /></div></div>; })}</div><div className="mt-6 rounded-2xl p-4 bg-amber-500/10 border border-amber-500/20"><strong className="text-xs text-amber-200">Read the result carefully</strong><p aria-live="polite" className="text-xs text-slate-300 leading-relaxed mt-2">Changing an allocation changes the exercise’s index, not real conditions. The model leaves out costs, time, geography, distribution, policy quality and many other factors. Use the pattern to discuss priorities, not to rank real policies.</p></div></div>
      </div>
    </div>
  </section>;
}
