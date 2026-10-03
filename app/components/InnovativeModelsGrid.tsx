'use client';

import React, { useState } from 'react';
import { INNOVATIVE_MODELS_LIST, InnovativeModel } from '../data/models';
import { SourceLink } from './SourceLink';

export const InnovativeModelsGrid: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<InnovativeModel | null>(null);

  return (
    <div className="mb-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Practical Implementation Models</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          INNOVATIVE MODELS OF SUSTAINABLE DEVELOPMENT
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mt-3 font-medium leading-relaxed">
          &ldquo;Different approaches can combine economic progress, social wellbeing and environmental sustainability.&rdquo;
        </p>
      </div>

      {/* 6 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {INNOVATIVE_MODELS_LIST.map((model) => (
          <div
            key={model.id}
            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-extrabold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                  MODEL {model.id.toUpperCase()}
                </span>

                <div className="flex gap-1">
                  {model.relevantSdgs.map((sdg) => (
                    <span key={sdg} className="text-[9px] font-bold text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">
                      SDG {sdg}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-1">
                {model.title}
              </h3>

              <p className="text-xs font-semibold text-slate-400 mb-3">
                {model.subtitle}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                {model.oneLiner}
              </p>

              <div className="text-[11px] text-slate-400 mb-4">
                <strong className="text-slate-200 block mb-0.5">Real Application:</strong>
                <span>{model.exampleApplication}</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setSelectedModel(model)}
                className="w-full py-2 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Explore Model Framework</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Model Detail Educational Inspector Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-emerald-500/40 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Close inspector"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-xs font-bold uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 mb-2 inline-block">
              EDUCATIONAL FRAMEWORK INSPECTOR
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
              {selectedModel.title}
            </h3>
            <p className="text-sm font-semibold text-emerald-300 mb-6">
              {selectedModel.subtitle}
            </p>

            {/* Standard Educational UX Progression: WHAT IS IT? -> WHY DOES IT MATTER? -> HOW DOES IT WORK? -> EXAMPLE -> SOURCE */}
            <div className="space-y-4 text-xs text-slate-300 mb-6">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-bold text-cyan-400 uppercase mb-1">1. WHAT IS IT?</h4>
                <p className="leading-relaxed">{selectedModel.whatIsIt}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-bold text-emerald-400 uppercase mb-1">2. WHY DOES IT MATTER?</h4>
                <p className="leading-relaxed">{selectedModel.whyItMatters}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-bold text-amber-400 uppercase mb-1">3. HOW DOES IT WORK?</h4>
                <p className="leading-relaxed">{selectedModel.howItWorks}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-bold text-purple-300 uppercase mb-1">4. EXAMPLE / APPLICATION IN INDIA</h4>
                <p className="leading-relaxed">{selectedModel.exampleApplication}</p>
              </div>
            </div>

            <SourceLink source={selectedModel.source} />

            <button
              type="button"
              onClick={() => setSelectedModel(null)}
              className="w-full mt-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
