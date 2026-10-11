'use client';

import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => (
  <section id="hero" className="hero-section relative min-h-[90svh] pt-28 pb-16 flex items-center overflow-hidden bg-grid-pattern">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <p className="hero-eyebrow inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-[.14em] uppercase mb-6">
            <span className="tricolour-dot" aria-hidden="true" /> India&apos;s journey to 2047
          </p>
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[.98] mb-5">
            VISION<br /><span className="india-title"><span>INDIA </span><span className="saffron-text">20</span><span className="green-text">47</span></span>
          </h1>
          <div className="tricolour-rule mb-6" aria-hidden="true"><span /><span /><span /></div>
          <p className="hero-tagline text-xl sm:text-2xl font-bold mb-4">Sustainable People, Prosperous Nation</p>
          <p className="hero-description text-base sm:text-lg max-w-xl leading-relaxed mb-7">
            Explore India&apos;s path towards sustainable, inclusive and integrated development through data, policy, technology, and people.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-7">
            <a href="#india-today" className="hero-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              Explore the Journey <span aria-hidden="true">→</span>
            </a>
            <a href="#integrated-pillars" className="hero-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2">
              See the development themes <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-pillars text-xs font-bold tracking-[.12em] uppercase"><span>People</span><i>·</i><span>Planet</span><i>·</i><span>Prosperity</span></p>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="hero-photo-frame relative rounded-[1.75rem] p-2 sm:p-3">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-[1.25rem] overflow-hidden">
              <Image src="/india-gate-kartavya-path.jpg" alt="Aerial view of India Gate and Kartavya Path in New Delhi at night" fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 48vw" />
              <div className="hero-photo-label"><span>A developed India by 2047</span><span className="hero-photo-accent" aria-hidden="true" /></div>
            </div>
            <div className="hero-photo-caption"><span>India&apos;s urban development vision</span><a href="https://commons.wikimedia.org/wiki/File:Aerial_night_view_of_India_Gate_and_Kartavya_Path.jpg" target="_blank" rel="noopener noreferrer">Photo: Narendra Modi YouTube Channel, Government of India · CC BY-SA 4.0 ↗</a></div>
          </div>
          <div className="hero-concepts mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5" aria-label="Developed India themes">
            {['Smart & liveable cities', 'Sustainable growth', 'Inclusive development', 'Technological innovation', 'People-centric governance'].map((item) => <span key={item} className="rounded-xl px-3 py-2.5 text-xs font-semibold">{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
