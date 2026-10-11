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
  { name: 'Strategies', href: '#strategies' }, { name: 'Future India', href: '#future' },
  { name: 'Nation Simulator', href: '#nation-simulator' }, { name: 'Case Studies', href: '#case-studies' },
  { name: 'Quiz', href: '#quiz' }, { name: 'Sources', href: '#sources' },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => { const frame = window.requestAnimationFrame(() => setIsDark(document.documentElement.dataset.theme !== 'light')); return () => window.cancelAnimationFrame(frame); }, []);
  function toggleTheme() {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem('vision-india-theme', next); } catch { /* Storage may be disabled; keep this session's choice. */ }
    setIsDark(next === 'dark');
  }
  return <button type="button" onClick={toggleTheme} className="theme-toggle inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-bold focus-visible:outline-none focus-visible:ring-2" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
    {isDark ? <><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg><span>Light</span></> : <><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/></svg><span>Dark</span></>}
  </button>;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onOutsideClick = (event: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setExploreOpen(false); };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setExploreOpen(false); setMobileMenuOpen(false); } };
    window.addEventListener('scroll', onScroll); document.addEventListener('mousedown', onOutsideClick); document.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('mousedown', onOutsideClick); document.removeEventListener('keydown', onKey); };
  }, []);
  const closeMenus = () => { setExploreOpen(false); setMobileMenuOpen(false); };
  return <header className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'is-scrolled' : ''}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 py-3">
      <a href="#hero" onClick={closeMenus} className="brand-link flex items-center gap-2 text-base sm:text-lg font-extrabold tracking-tight rounded-lg px-1 py-1 shrink-0 focus-visible:outline-none focus-visible:ring-2"><span className="brand-mark" aria-hidden="true">◉</span><span>VISION INDIA <b>2047</b></span></a>
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
        <a href="#hero" className="nav-link px-2.5 py-2 rounded-lg text-xs font-semibold">Home</a>
        <div className="relative" ref={dropdownRef}><button type="button" onClick={() => setExploreOpen((open) => !open)} aria-expanded={exploreOpen} aria-haspopup="true" className="nav-link px-2.5 py-2 rounded-lg text-xs font-semibold">Explore <span aria-hidden="true">⌄</span></button>
          {exploreOpen && <div className="absolute top-full left-0 mt-2 w-72 glass-panel rounded-2xl p-2 border shadow-2xl z-50"><p className="px-3 py-2 text-[10px] uppercase font-bold tracking-wider border-b">Explore modules</p>{EXPLORE_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="nav-dropdown-link flex flex-col px-3 py-2 rounded-xl text-xs"><span className="font-bold">{link.name}</span><span className="text-[10px] mt-0.5">{link.desc}</span></a>)}</div>}
        </div>
        <a href="#strategies" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Strategies</a>
        <a href="#future" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Future India</a>
        <a href="#nation-simulator" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Nation Simulator</a>
        <a href="#case-studies" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Case Studies</a>
        <a href="#quiz" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Quiz</a>
        <a href="#sources" className="nav-link px-2 py-2 rounded-lg text-xs font-semibold">Sources</a>
        <ThemeToggle />
      </nav>
      <div className="flex items-center gap-2 lg:hidden"><ThemeToggle /><button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="menu-toggle p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2" aria-expanded={mobileMenuOpen} aria-controls="mobile-nav" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{mobileMenuOpen ? <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}</button></div>
    </div>
    {mobileMenuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav lg:hidden fixed inset-x-0 top-[56px] p-4 sm:p-6 shadow-2xl max-h-[calc(100dvh-56px)] overflow-y-auto"><div className="max-w-2xl mx-auto space-y-5"><div><h2 className="mobile-nav-heading text-[10px] uppercase font-bold tracking-wider mb-2">Explore</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{EXPLORE_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="mobile-nav-link px-3 py-3 rounded-xl text-xs font-semibold border"><span className="block">{link.name}</span><span className="block mt-1 text-[10px] font-normal">{link.desc}</span></a>)}</div></div><div><h2 className="mobile-nav-heading text-[10px] uppercase font-bold tracking-wider mb-2">Plan and learn</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{OTHER_LINKS.map((link) => <a key={link.name} href={link.href} onClick={closeMenus} className="mobile-nav-link px-3 py-3 rounded-xl text-xs font-semibold border">{link.name}</a>)}</div></div></div></nav>}
  </header>;
};
