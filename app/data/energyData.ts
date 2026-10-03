import { DataSource } from '../types';

export interface EnergySourceItem {
  id: string;
  name: string;
  capacityGw: number;
  percentageShare: number;
  type: 'current' | 'target';
  description: string;
}

export const MNRE_ENERGY_DATA = {
  summary: {
    totalNonFossilCapacity: '203.7 GW',
    nonFossilSharePercent: '46.3%',
    totalGridCapacity: '440+ GW',
    asOfDate: 'January 2025',
    target2030: '500 GW',
    targetShare2030: '50% of Installed Capacity'
  },
  sourcesBreakdown: [
    {
      id: 'solar',
      name: 'Solar Power (Utility + Rooftop)',
      capacityGw: 97.4,
      percentageShare: 47.8,
      type: 'current',
      description: 'Ultra-mega solar parks, PM-KUSUM agricultural pumps, and PM Surya Ghar rooftop solar initiative.'
    },
    {
      id: 'wind',
      name: 'Wind Energy (Onshore + Offshore)',
      capacityGw: 47.9,
      percentageShare: 23.5,
      type: 'current',
      description: 'Onshore wind corridors in Tamil Nadu, Gujarat, and Rajasthan; expanding offshore wind potential.'
    },
    {
      id: 'hydro',
      name: 'Hydro Power (Large & Small Hydro)',
      capacityGw: 51.6,
      percentageShare: 25.3,
      type: 'current',
      description: 'Himalayan and Western Ghats hydro projects providing essential grid balancing and storage.'
    },
    {
      id: 'bioenergy',
      name: 'Bioenergy & Biomass',
      capacityGw: 10.8,
      percentageShare: 5.3,
      type: 'current',
      description: 'Biomass power, bagasse cogeneration, and Compressed Bio-Gas (CBG) under SATAT initiative.'
    }
  ] as EnergySourceItem[],
  sourceMetadata: {
    name: 'Executive Summary on Power Sector',
    publisher: 'Central Electricity Authority (CEA) & MNRE',
    url: 'https://mnre.gov.in/',
    dateOrYear: 'January 2025',
    notes: 'Official monthly progress report on non-fossil fuel installed capacity.'
  } as DataSource
};
