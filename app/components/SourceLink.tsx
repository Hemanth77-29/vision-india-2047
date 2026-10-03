import React from 'react';
import { DataSource } from '../types';

interface SourceLinkProps {
  source: DataSource;
  className?: string;
}

export const SourceLink: React.FC<SourceLinkProps> = ({ source, className = '' }) => {
  return (
    <div className={`text-xs flex items-center justify-between border-t border-slate-800/80 pt-2.5 mt-3 ${className}`}>
      <div className="flex flex-col text-slate-400 truncate max-w-[80%]">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Primary Source</span>
        <span className="truncate text-slate-300 font-medium">{source.name}</span>
        <span className="text-[10px] text-slate-400">{source.publisher} • {source.dateOrYear}</span>
      </div>
      
      {source.url !== '#' ? (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-xs font-semibold px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label={`Verify source: ${source.name}`}
        >
          <span>Source</span>
          <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5m0-4.5L11 13.5M6 18h12" />
          </svg>
        </a>
      ) : (
        <span className="text-[11px] text-amber-400/90 italic bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          Internal Model
        </span>
      )}
    </div>
  );
};
