'use client';

import React from 'react';
import { CITY_GOALS } from '../data/smartCity';
import { StatusBadge } from './StatusBadge';

interface SmartCityHeaderProps {
  selectedGoalId: string;
  onSelectGoal: (goalId: string) => void;
}

export const SmartCityHeader: React.FC<SmartCityHeaderProps> = ({
  selectedGoalId,
  onSelectGoal,
}) => {
  return (
    <div className="mb-10 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Unit 5 • Interactive Simulation Module</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
        SMART CITY BUILDER
      </h2>

      <p className="text-base sm:text-lg text-slate-300 mt-2 font-medium">
        &ldquo;Design a city that balances people, planet and prosperity.&rdquo;
      </p>

      <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto leading-relaxed">
        A smart city combines physical infrastructure, digital technologies, sustainable resource management and citizen-focused services to improve urban life. Select infrastructure items to observe systemic trade-offs.
      </p>

      {/* Simulation Disclaimer Badge */}
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
        <StatusBadge type="simulation" customLabel="SIMULATION" />
        <span>Illustrative simulation output — not an empirical forecast or real project budget.</span>
      </div>

      {/* Planning Goal Priority Selector */}
      <div className="mt-8 pt-6 border-t border-slate-800">
        <span id="planning-goal-label" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
          Select planning priority · affects score weighting only:
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CITY_GOALS.map((goal) => {
            const isSelected = goal.id === selectedGoalId;
            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => onSelectGoal(goal.id)}
                aria-pressed={isSelected}
                aria-label={`${goal.title}: ${goal.description}`}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-left border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-black'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <span className="block text-white font-extrabold mb-0.5">{goal.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal leading-tight block">
                    {goal.targetFocus}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
