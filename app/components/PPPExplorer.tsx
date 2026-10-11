'use client';

import { useState } from 'react';
import { PRIMARY_SOURCES } from '../data/sources';

const models = [
  { id: 'service', title: 'Service contract', publicRole: 'Define the service, standards and oversight.', privateRole: 'Deliver a defined service for an agreed term.', tradeoff: 'Can add specialist capability; public authority retains asset and long-term service responsibility.' },
  { id: 'design-build', title: 'Design–build', publicRole: 'Set outcomes, procure and inspect delivery.', privateRole: 'Design and construct to the agreed requirements.', tradeoff: 'Single delivery contract can coordinate design and construction; financing and operations remain separate.' },
  { id: 'dbfot', title: 'Design–build–finance–operate', publicRole: 'Set service levels, regulate and monitor the contract.', privateRole: 'May design, build, finance and operate under a long-term agreement.', tradeoff: 'Can link construction and operations; creates long-term payment, demand and contract-management obligations.' },
  { id: 'concession', title: 'Concession', publicRole: 'Set access, price and service rules; protect public interest.', privateRole: 'Operate or maintain the defined asset and may collect user charges.', tradeoff: 'Can link revenue to use; demand risk and affordability need careful treatment.' },
];
const checks = [
  'A clearly defined public need and service outcome',
  'A credible comparison with public procurement',
  'Affordable payments across the full contract term',
  'Risks assigned to a party able to manage them',
  'Transparent oversight, performance data and remedies',
];

export function PPPExplorer() {
  const [modelId, setModelId] = useState('dbfot');
  const [checked, setChecked] = useState<boolean[]>(checks.map(() => false));
  const model = models.find((item) => item.id === modelId) || models[0];
  const count = checked.filter(Boolean).length;
  return <section id="ppp" className="py-20 border-t border-slate-800/80 bg-[var(--surface-deep)] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10"><p className="text-xs uppercase tracking-[.2em] text-cyan-300 font-bold">Public–Private Partnerships (PPP)</p><h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Who builds, pays and carries risk?</h2><p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4">A PPP is a way to structure a public service or infrastructure project with a private partner through a defined agreement. The public authority remains responsible for public outcomes. A private partner does not automatically make a project better or cheaper: payment rules, risk allocation, affordability and contract oversight matter.</p></div>
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-6 items-start">
        <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><label htmlFor="ppp-model" className="block text-sm font-bold text-white mb-3">Explore a contract pattern</label><select id="ppp-model" value={modelId} onChange={(event) => setModelId(event.target.value)} className="w-full rounded-xl bg-slate-950 text-white border border-slate-700 p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">{models.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select>
          <div className="mt-5 space-y-3"><div className="rounded-2xl p-4 bg-cyan-500/10 border border-cyan-500/20"><h3 className="text-xs uppercase tracking-wider font-bold text-cyan-200">Public authority</h3><p className="text-sm text-slate-200 mt-2">{model.publicRole}</p></div><div className="rounded-2xl p-4 bg-emerald-500/10 border border-emerald-500/20"><h3 className="text-xs uppercase tracking-wider font-bold text-emerald-200">Private partner</h3><p className="text-sm text-slate-200 mt-2">{model.privateRole}</p></div><div className="rounded-2xl p-4 bg-amber-500/10 border border-amber-500/20"><h3 className="text-xs uppercase tracking-wider font-bold text-amber-200">Trade-off to examine</h3><p className="text-sm text-slate-200 mt-2">{model.tradeoff}</p></div></div>
        </div>
        <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Learning check · not a formal appraisal</p><h3 className="text-xl font-extrabold text-white mt-2">Before choosing a PPP</h3></div><div className="text-xs text-slate-300 rounded-lg bg-slate-900 px-3 py-2" aria-live="polite">{count} of {checks.length} considerations checked</div></div><div className="mt-5 space-y-2">{checks.map((label, index) => <label key={label} className="flex items-start gap-3 p-3 rounded-xl border border-slate-800 bg-slate-950/70 text-sm text-slate-200 cursor-pointer"><input type="checkbox" checked={checked[index]} onChange={(event) => setChecked((previous) => previous.map((value, i) => i === index ? event.target.checked : value))} className="mt-0.5 accent-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400"/><span>{label}</span></label>)}</div><p className="mt-4 text-xs text-slate-400 leading-relaxed">This checklist supports discussion only. Real projects require legal, technical, fiscal, environmental and public-interest appraisal using applicable government procedures.</p><a className="inline-flex mt-4 text-xs font-semibold text-cyan-300 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href={PRIMARY_SOURCES.deaPppGuidelines.url} target="_blank" rel="noopener noreferrer">Read Government of India PPP guidelines ↗</a></div>
      </div>
      <div className="mt-7 flex flex-wrap gap-2 text-[11px] text-slate-400"><span className="rounded-full border border-slate-700 px-3 py-1.5">Not privatization by default</span><span className="rounded-full border border-slate-700 px-3 py-1.5">Not free public infrastructure</span><span className="rounded-full border border-slate-700 px-3 py-1.5">Contracts need public accountability</span></div>
    </div>
  </section>;
}
