'use client';

import { useEffect, useRef, useState } from 'react';

const EXPLORE_LINKS = [
  { name: 'India Today', href: '#india-today', desc: 'Development snapshot' },
  { name: 'Demographics', href: '#demographics', desc: 'Population transition' },
  { name: 'Sustainability', href: '#integrated-pillars', desc: 'Integrated development' },
  { name: 'Smart City Builder', href: '#smart-city', desc: 'Design an illustrative city' },
  { name: 'PPP Explorer', href: '#ppp', desc: 'Partnership models and trade-offs' },
  { name: 'Decentralization', href: '#decentralization', desc: 'Government levels and local delivery' },
];
const OTHER_LINKS = [
  { name: 'Strategies', href: '#strategies' },
  { name: 'Future India', href: '#future' },
  { name: 'Nation Simulator', href: '#nation-simulator' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Quiz', href: '#quiz' },
  { name: 'Sources', href: '#sources' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setExploreOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setExploreOpen(false); setMobileMenuOpen(false); }
    };
    window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const closeMenus = () => { setExploreOpen(false); setMobileMenuOpen(false); };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#060913]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' : 'bg-gradient-to-b from-[#060913]/80 to-transparent py-5'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
      <a href="#hero" onClick={closeMenus} className="flex items-center gap-2 text-base sm:text-xl font-extrabold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg px-1 py-1 shrink-0"><span aria-hidden="true" className="text-xl sm:text-2xl">🌿</span><span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-black">VISION INDIA 2047</span></a>
      <nav aria-label="Main navigation" className="hidden 2xl:flex items-center gap-1">
        <a href="#hero" className="px-2.5 py-2 rounded-md text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Home</a>
        <div className="relative" ref={dropdownRef}><button type="button" onClick={() => setExploreOpen((open) => !open)} aria-expanded={exploreOpen} aria-haspopup="true" className="px-2.5 py-2 rounded-md text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Explore <span aria-hidden="true">⌄</span></button>
          {exploreOpen && <div className="absolute top-full left-0 mt-2 w-72 glass-panel rounded-2xl p-2 border border-emerald-500/30 shadow-2xl z-50"><p className="px-3 py-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800">Explore modules</p>{EXPLORE_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="flex flex-col px-3 py-2 rounded-xl text-xs hover:bg-slate-800/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><span className="font-bold text-slate-100 group-hover:text-emerald-300">{link.name}</span><span className="text-[10px] text-slate-400 mt-0.5">{link.desc}</span></a>)}</div>}
        </div>
        {OTHER_LINKS.map((link) => <a key={link.name} href={link.href} className="px-2 py-2 rounded-md text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">{link.name}</a>)}
      </nav>
      <a href="#smart-city" className="hidden sm:inline-flex 2xl:hidden items-center px-3 py-2 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Build a city</a>
      <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="2xl:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" aria-expanded={mobileMenuOpen} aria-controls="mobile-nav" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{mobileMenuOpen ? <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}</button>
    </div>
    {mobileMenuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="2xl:hidden fixed inset-x-0 top-[60px] bg-[#060913]/98 backdrop-blur-xl border-b border-slate-800 p-5 sm:p-6 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"><div className="max-w-2xl mx-auto space-y-5"><div><h2 className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-2">Explore</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{EXPLORE_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="px-3 py-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-emerald-300 hover:bg-slate-800/60 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><span className="block">{link.name}</span><span className="block mt-1 text-[10px] text-slate-400 font-normal">{link.desc}</span></a>)}</div></div><div><h2 className="text-[10px] uppercase font-bold text-cyan-300 tracking-wider mb-2">Plan and learn</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{OTHER_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="px-3 py-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/60 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">{link.name}</a>)}</div></div></div></nav>}
  </header>;
};
