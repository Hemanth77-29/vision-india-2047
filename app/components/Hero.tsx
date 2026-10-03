'use client';

import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Blur Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Unit 5 Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Unit 5 • Integrated Approaches Platform</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-4">
              VISION <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent glow-text-emerald">
                INDIA 2047
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold tracking-wide text-slate-200 mb-4 border-l-4 border-emerald-400 pl-4 py-1 bg-slate-900/40 rounded-r-lg">
              &ldquo;Explore. Understand. Plan. Build.&rdquo;
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-6">
              An interactive learning experience exploring India&apos;s path toward sustainable, inclusive and integrated development — spanning demographic transitions, innovative policy models, public-private partnerships, and decentralized governance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#india-today"
                className="px-7 py-3.5 rounded-xl text-sm font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Start Exploring</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#india-today"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/40 transition-all text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Explore India Today</span>
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Subtle Conceptual Pillar Badge Strip (PEOPLE • PLANET • PROSPERITY) */}
            <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">3 Core Pillars:</span>
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <span className="text-amber-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  PEOPLE
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  PLANET
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  PROSPERITY
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Hero Visual Viewport (No Embedded Text Claims) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-emerald-500/30 p-2 shadow-2xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="/futuristic_india_2047.jpg"
                  alt="Futuristic Indian Sustainable Smart City Landscape 2047"
                  fill
                  priority
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-70" />
              </div>

              <div className="p-3 bg-slate-950/80 rounded-b-xl flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Integrated Urban & Ecological Vision
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">VISION 2047</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
