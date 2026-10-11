import React from 'react';
import { IndicatorItem } from '../types';
import { StatusBadge } from './StatusBadge';
import { SourceLink } from './SourceLink';

interface DataCardProps {
  indicator: IndicatorItem;
  onSelect?: (indicator: IndicatorItem) => void;
}

export const DataCard: React.FC<DataCardProps> = ({ indicator, onSelect }) => {
  return (
    <article
      className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative group"
    >
      <div>
        {/* Category & Status Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-700/50">
            {indicator.category}
          </span>
          <StatusBadge type={indicator.type} customLabel={indicator.statusLabel} />
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-2">
          {indicator.title}
        </h3>

        {/* Primary Value Display */}
        <div className="my-4 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold tracking-tight text-white glow-text-emerald">
            {indicator.value}
          </span>
          <span className="text-sm font-semibold text-slate-300">
            {indicator.unit}
          </span>
        </div>

        {/* Year indicator */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Period / Benchmark: <strong className="text-slate-200">{indicator.year}</strong></span>
        </div>

        {/* Brief Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3 whitespace-pre-line">
          {indicator.description}
        </p>
      </div>

      {/* Source Link Section */}
      <div>
        <SourceLink source={indicator.source} />
        
        {onSelect && (
          <button
            onClick={() => onSelect(indicator)}
            className="w-full mt-3 py-1.5 px-3 rounded-lg text-xs font-semibold bg-slate-800/60 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/20 transition-all flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Inspect Methodology & Detail</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};
