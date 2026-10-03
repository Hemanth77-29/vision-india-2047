'use client';

import React, { useState } from 'react';
import { INDIA_TODAY_INDICATORS } from '../data/indicatorData';
import { DataCard } from './DataCard';
import { IndicatorItem } from '../types';
import { StatusBadge } from './StatusBadge';

export const IndiaTodaySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorItem | null>(null);

  const filteredIndicators = INDIA_TODAY_INDICATORS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="india-today" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>National Development Baseline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            INDIA TODAY
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-2 font-medium">
            &ldquo;Understand the starting point before exploring the future.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
            An interactive national development dashboard. Every metric is backed by empirical primary sources and strictly classified into Current Baselines, Official Targets, Projections, or Simulations.
          </p>
        </div>

        {/* Data Badge Key Strip & Filter Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-none">
            {[
              { id: 'all', label: 'All 6 Key Metrics' },
              { id: 'current', label: '🟢 CURRENT DATA' },
              { id: 'target', label: '🔵 TARGETS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === tab.id
                    ? 'bg-emerald-400 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-extrabold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Strict Data Key Legend */}
          <div className="w-full lg:w-auto max-w-full min-w-0 p-2.5 glass-panel rounded-xl border border-slate-800 flex flex-nowrap items-center gap-2 text-xs overflow-x-auto scrollbar-none">
            <span className="text-[10px] text-slate-400 uppercase font-bold mr-1 shrink-0 whitespace-nowrap">Data Key:</span>
            <StatusBadge type="current" customLabel="CURRENT" className="shrink-0" />
            <StatusBadge type="target" customLabel="TARGET" className="shrink-0" />
            <StatusBadge type="projection" customLabel="PROJECTION" className="shrink-0" />
            <StatusBadge type="simulation" customLabel="SIMULATION" className="shrink-0" />
          </div>
        </div>

        {/* 6 Reusable Data Cards Responsive Grid (Desktop: 3x2, Tablet: 2x3, Mobile: 1x6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndicators.map((indicator) => (
            <DataCard
              key={indicator.id}
              indicator={indicator}
              onSelect={(item) => setSelectedIndicator(item)}
            />
          ))}
        </div>

        {/* Detail Inspection Modal */}
        {selectedIndicator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-emerald-500/40 relative shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedIndicator(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Close detail modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-2 mb-3">
                <StatusBadge type={selectedIndicator.type} customLabel={selectedIndicator.statusLabel} />
                <span className="text-xs font-bold text-slate-400">{selectedIndicator.category}</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {selectedIndicator.title}
              </h3>

              <div className="my-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-white glow-text-emerald">
                  {selectedIndicator.value}
                </span>
                <span className="text-sm font-semibold text-slate-300">
                  {selectedIndicator.unit}
                </span>
              </div>

              <div className="text-xs text-slate-300 space-y-3 mb-6">
                <p><strong>Benchmark Period:</strong> {selectedIndicator.year}</p>
                <p><strong>Detailed Analysis:</strong> {selectedIndicator.description}</p>
                {selectedIndicator.trend && (
                  <p className="text-emerald-400 font-semibold"><strong>Observed Dynamics:</strong> {selectedIndicator.trend}</p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Authoritative Source Publication</h4>
                <p className="text-xs text-white font-bold">{selectedIndicator.source.name}</p>
                <p className="text-[11px] text-slate-400">{selectedIndicator.source.publisher} • {selectedIndicator.source.dateOrYear}</p>
                
                {selectedIndicator.source.url !== '#' && (
                  <a
                    href={selectedIndicator.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-3 pt-2 border-t border-slate-800 w-full"
                  >
                    <span>Open Verified Source URL ↗</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndicator(null)}
                className="w-full mt-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
