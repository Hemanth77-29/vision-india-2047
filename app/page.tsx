import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarStrip } from './components/PillarStrip';
import { IndiaTodaySection } from './components/IndiaTodaySection';
import { DemographicSection } from './components/DemographicSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { Footer } from './components/Footer';
import { SmartCityBuilder } from './components/SmartCityBuilder';
import { PPPExplorer } from './components/PPPExplorer';
import { DecentralizationExplorer } from './components/DecentralizationExplorer';
import { StrategiesSection } from './components/StrategiesSection';
import { FutureIndia } from './components/FutureIndia';
import { NationSimulator } from './components/NationSimulator';
import { CaseStudiesQuiz } from './components/CaseStudiesQuiz';
import { AskVisionAssistant } from './components/AskVisionAssistant';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060913] selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Sticky Responsive Header Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with clean visual artwork */}
        <Hero />

        {/* 3 Conceptual Pillars Strip (PEOPLE • PLANET • PROSPERITY) */}
        <PillarStrip />

        {/* Module 2A: INDIA TODAY — Current Development Snapshot */}
        <IndiaTodaySection />

        {/* Module 2B: INDIA'S DEMOGRAPHIC TRANSITION */}
        <DemographicSection />

        {/* Module 3: SUSTAINABLE DEVELOPMENT + INNOVATIVE MODELS */}
        <SustainabilitySection />

        {/* Module 4: interactive smart city planning simulation */}
        <SmartCityBuilder />

        {/* Module 5: public-private partnerships and local governance */}
        <PPPExplorer />
        <DecentralizationExplorer />

        {/* Module 6: international strategies and development exercise */}
        <StrategiesSection />
        <NationSimulator />

        {/* Module 7: Future India pathways */}
        <FutureIndia />

        {/* Module 8: sourced case studies and interactive knowledge check */}
        <CaseStudiesQuiz />
      </main>

      {/* Footer & Centralized Source Directory */}
      <Footer />
      <AskVisionAssistant />
    </div>
  );
}
