'use client';

import { useState } from 'react';
import { PRIMARY_SOURCES } from '../data/sources';

const tiers = [
  { id: 'union', title: 'Union', subtitle: 'National coordination', work: ['National laws and standards', 'Inter-state and national infrastructure', 'Fiscal transfers and national programmes'], question: 'Which problems cross state borders or need shared national standards?' },
  { id: 'state', title: 'State', subtitle: 'State policy and support', work: ['State legislation and institutions', 'Support and oversight for local bodies', 'Coordination across districts and cities'], question: 'What powers, resources and staff will local institutions need to act?' },
  { id: 'local', title: 'Local government', subtitle: 'Place-based services', work: ['Local planning and civic services', 'Resident consultation and grievance channels', 'Maintenance and local monitoring'], question: 'How can residents shape priorities and check service quality nearby?' },
];

export function DecentralizationExplorer() {
  const [selected, setSelected] = useState('local');
  const tier = tiers.find((item) => item.id === selected) || tiers[2];
  return <section id="decentralization" className="py-20 border-t border-slate-800/80 bg-[var(--page-bg)] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10"><p className="text-xs uppercase tracking-[.2em] text-emerald-300 font-bold">Decentralization & Local Governance</p><h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Put decisions close to the people affected.</h2><p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4">Decentralization distributes responsibilities and decision-making across levels of government. It can make services more responsive, while requiring clear authority, capable institutions, adequate resources and accountability. India’s Constitution provides for municipalities and lists municipal functions; which functions and powers are devolved is shaped by state law.</p></div>
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-6">
        <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><div role="tablist" aria-label="Government level" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">{tiers.map((item) => <button key={item.id} id={`tier-tab-${item.id}`} type="button" role="tab" aria-selected={selected === item.id} aria-controls="tier-panel" onClick={() => setSelected(item.id)} className={`rounded-xl p-4 text-left border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${selected === item.id ? 'bg-emerald-500/15 border-emerald-500/50' : 'bg-slate-950/50 border-slate-800 hover:border-slate-600'}`}><strong className="block text-sm text-white">{item.title}</strong><span className="block text-xs text-slate-400 mt-1">{item.subtitle}</span></button>)}</div>
          <div className="mt-5 rounded-2xl bg-slate-900/70 p-4 border border-slate-800"><p className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold">A useful design question</p><p className="text-sm text-slate-200 leading-relaxed mt-2">{tier.question}</p></div>
        </div>
        <div id="tier-panel" role="tabpanel" aria-labelledby={`tier-tab-${selected}`} className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><p className="text-xs uppercase tracking-wider text-slate-400">Example responsibilities to coordinate</p><h3 className="text-2xl font-black text-white mt-2">{tier.title}</h3><ul className="mt-5 space-y-3">{tier.work.map((work) => <li key={work} className="flex gap-3 text-sm text-slate-200"><span aria-hidden="true" className="text-emerald-300">◆</span>{work}</li>)}</ul><div className="mt-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4"><strong className="text-xs text-amber-200">Design principle</strong><p className="text-xs text-slate-300 leading-relaxed mt-2">Match each responsibility with decision authority, predictable funding, technical capacity and a way for the public to see results. The appropriate division varies by service and by state.</p></div><a className="inline-flex mt-5 text-xs font-semibold text-cyan-300 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href={PRIMARY_SOURCES.indiaConstitution.url} target="_blank" rel="noopener noreferrer">Read the Constitution of India · Part IX-A and Twelfth Schedule ↗</a></div>
      </div>
    </div>
  </section>;
}
