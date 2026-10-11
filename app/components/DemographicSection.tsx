import React from 'react';
import { DemographicTimeline } from './DemographicTimeline';
import { FertilityChart } from './FertilityChart';
import { PopulationMomentum } from './PopulationMomentum';
import { DemographicDividend } from './DemographicDividend';
import { DemographicAgeing } from './DemographicAgeing';
import { DemographicSlider } from './DemographicSlider';
import { TransitionPanel } from './TransitionPanel';

export const DemographicSection: React.FC = () => {
  return (
    <section id="demographics" className="py-20 relative bg-[var(--page-bg)] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Unit 5 • Demographic Dynamics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            India&apos;s Demographic Transition
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-3 font-medium leading-relaxed">
            &ldquo;India&apos;s population story is changing — from rapid growth to falling fertility, a large working-age population, and eventually population ageing.&rdquo;
          </p>
        </div>

        {/* 1. Long-Term Timeline (1970 - 2100) */}
        <DemographicTimeline />

        {/* 2. Fertility Transition Curve & Replacement Level Line */}
        <FertilityChart />

        {/* 3. Educational Explanation: Population Momentum */}
        <PopulationMomentum />

        {/* 4. Demographic Dividend & Non-Automatic Enablers */}
        <DemographicDividend />

        {/* 5. Ageing & Next Demographic Challenge */}
        <DemographicAgeing />

        {/* 6. Interactive Horizon Slider (2026 -> 2100) */}
        <DemographicSlider />

        {/* 7. Integration Bridge to Development Strategies */}
        <TransitionPanel />

      </div>
    </section>
  );
};
