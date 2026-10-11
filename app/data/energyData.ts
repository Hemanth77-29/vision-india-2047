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
    totalRenewableCapacity: '203.18 GW',
    totalNonFossilCapacity: '203.18 GW RE (211.36 GW Non-Fossil)',
    renewableSharePercent: '44.9%',
    nonFossilSharePercent: '46.7%',
    totalInstalledCapacity: '452.69 GW',
    asOfDate: 'October 2024',
    // Distinct climate & clean energy targets:
    target2030NonFossilCapacity: '500 GW of non-fossil installed capacity by 2030 (COP26 Panchamrit pledge)',
    target2030NDCShare: '50% cumulative non-fossil power capacity by 2030 (India updated NDC)',
    target2030EnergyReq: '50% of energy requirements from renewable energy by 2030 (Panchamrit pledge)',
    target2030: '500 GW',
    targetShare2030: '50% Non-Fossil NDC Target'
  },
  sourcesBreakdown: [
    {
      id: 'solar',
      name: 'Solar Power (Utility + Rooftop)',
      capacityGw: 92.12,
      percentageShare: 45.3,
      type: 'current',
      description: 'Installed solar capacity as reported in the October 2024 MNRE/PIB overview.'
    },
    {
      id: 'wind',
      name: 'Wind Energy (Onshore; Offshore Potential)',
      capacityGw: 47.72,
      percentageShare: 23.5,
      type: 'current',
      description: 'Installed wind capacity in this October 2024 snapshot; it does not include offshore wind potential or proposed projects.'
    },
    {
      id: 'hydro',
      name: 'Hydro Power (Large & Small Hydro)',
      capacityGw: 52.0,
      percentageShare: 25.6,
      type: 'current',
      description: 'Large hydro (46.93 GW) and small hydro (5.07 GW), as reported in the October 2024 overview.'
    },
    {
      id: 'bioenergy',
      name: 'Biopower (Biomass & Biogas)',
      capacityGw: 11.32,
      percentageShare: 5.6,
      type: 'current',
      description: 'Biopower capacity reported by MNRE/PIB, including biomass and biogas.'
    }
  ] as EnergySourceItem[],
  notes: 'The MNRE/PIB overview dated 13 November 2024 reports the October component values shown here; they sum to 203.16 GW, within rounding of its 203.18 GW renewable headline. Bar percentages are each component’s share of the listed renewable components. The same overview states renewable capacity is more than 46.3% of 452.69 GW, but 203.18 ÷ 452.69 = 44.9%; including nuclear, 211.36 ÷ 452.69 = 46.7%. This page uses the calculated ratios and does not repeat the inconsistent 46.3% statement.',
  sourceMetadata: {
    name: 'October 2024 Renewable Capacity by Source (MNRE / PIB PRID 2073038)',
    publisher: 'MNRE & Central Electricity Authority (CEA)',
    url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2073038',
    dateOrYear: '13 November 2024 (October 2024 data)',
    notes: 'MNRE/PIB overview reports 203.18 GW renewable capacity, 211.36 GW non-fossil capacity including nuclear, 452.69 GW total capacity, and the October component breakdown. Its stated renewable share conflicts with those headline values; see the calculation note.'
  } as DataSource
};
