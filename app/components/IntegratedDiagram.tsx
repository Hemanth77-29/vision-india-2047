'use client';

import React, { useState } from 'react';
import { INTEGRATED_RELATIONSHIP_NODES } from '../data/sustainableDevelopment';

export const IntegratedDiagram: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('economic');

  const activeNode = INTEGRATED_RELATIONSHIP_NODES.find(
    (n) => n.id === selectedNodeId
  ) || INTEGRATED_RELATIONSHIP_NODES[0];

  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Systemic Interconnectedness
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            The Integrated Approach Diagram
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Select any component to inspect how economic growth, social equity, ecology, governance, and technology reinforce each other.
          </p>
        </div>

        <div className="text-xs font-bold text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
          💡 Interactive Relationship Canvas
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 5-Node Radial Selector */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-4">
              Center: Integrated Approach Hub
            </div>

            <div className="w-full space-y-2.5">
              {INTEGRATED_RELATIONSHIP_NODES.map((node) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full p-3.5 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-black'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`} />
                      <span>{node.title}</span>
                    </div>

                    <span className="text-[10px] text-slate-400 font-normal truncate max-w-[130px]">
                      {node.shortRole}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Interconnection Explanation */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                  SELECTED COMPONENT
                </span>
                <span className="text-xs font-semibold text-slate-400">{activeNode.shortRole}</span>
              </div>

              <h4 className="text-2xl font-black text-white mb-2">
                {activeNode.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                {activeNode.description}
              </p>

              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                How {activeNode.title} Reinforces Other Dimensions:
              </h5>

              <div className="space-y-3">
                {activeNode.contributesTo.map((impact, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
                      <span>{activeNode.title}</span>
                      <span>→</span>
                      <span className="text-emerald-400">{impact.targetTitle}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {impact.impactText}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
