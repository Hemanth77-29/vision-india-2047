import React from 'react';
import { IndicatorDataType } from '../types';

interface StatusBadgeProps {
  type: IndicatorDataType;
  customLabel?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ type, customLabel, className = '' }) => {
  const getBadgeStyle = () => {
    switch (type) {
      case 'current':
        return {
          bg: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
          text: customLabel || 'CURRENT DATA',
          aria: 'Data Type: Current observed empirical baseline data'
        };
      case 'target':
        return {
          bg: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30',
          dot: 'bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]',
          text: customLabel || 'OFFICIAL TARGET',
          aria: 'Data Type: Official government target or institutional pledge'
        };
      case 'projection':
        return {
          bg: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30',
          dot: 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
          text: customLabel || 'PROJECTION',
          aria: 'Data Type: Published demographic projection or model forecast'
        };
      case 'simulation':
        return {
          bg: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/30',
          dot: 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]',
          text: customLabel || 'SIMULATION',
          aria: 'Data Type: Interactive model simulation scenario'
        };
      case 'historical':
        return {
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
          dot: 'bg-slate-400',
          text: customLabel || 'HISTORICAL',
          aria: 'Data Type: Measured historical baseline data'
        };
      default:
        return {
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
          dot: 'bg-slate-400',
          text: customLabel || 'UNCLASSIFIED',
          aria: 'Data Type: Unclassified metric'
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border transition-colors ${style.bg} ${className}`}
      aria-label={style.aria}
      title={style.aria}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot} shrink-0`} aria-hidden="true" />
      <span>{style.text}</span>
    </span>
  );
};
