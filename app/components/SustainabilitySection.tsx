import React from 'react';
import { SustainableHeader } from './SustainableHeader';
import { IntegratedDiagram } from './IntegratedDiagram';
import { SdgGrouping } from './SdgGrouping';
import { InnovativeModelsGrid } from './InnovativeModelsGrid';
import { CircularEconomyVisual } from './CircularEconomyVisual';
import { GreenEconomyPanel } from './GreenEconomyPanel';
import { RenewableEnergySection } from './RenewableEnergySection';
import { SmartCityConceptCard } from './SmartCityConceptCard';
import { ModelComparisonTable } from './ModelComparisonTable';
import { FromConceptToCityPanel } from './FromConceptToCityPanel';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="integrated-pillars" className="py-20 relative bg-[#060913] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. WHY SUSTAINABLE DEVELOPMENT? & 3 Pillars Intersection */}
        <SustainableHeader />

        {/* 2. Integrated Relationship Diagram */}
        <IntegratedDiagram />

        {/* 3. UN Sustainable Development Goals Connection */}
        <SdgGrouping />

        {/* 4. INNOVATIVE MODELS OF SUSTAINABLE DEVELOPMENT */}
        <InnovativeModelsGrid />

        {/* 5. Circular Economy Linear vs Circular Interactive Visual */}
        <CircularEconomyVisual />

        {/* 6. Green Economy UNEP Framework */}
        <GreenEconomyPanel />

        {/* 7. Renewable Energy Transition (MNRE Current vs 2030 Target) */}
        <RenewableEnergySection />

        {/* 8. Smart Cities Conceptual Introduction */}
        <SmartCityConceptCard />

        {/* 9. Multi-Dimensional Model Comparison Table */}
        <ModelComparisonTable />

        {/* 10. FROM CONCEPT TO CITY Transition Panel */}
        <FromConceptToCityPanel />

      </div>
    </section>
  );
};
