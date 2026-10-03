import { IndicatorItem } from '../types';

export const INDIA_TODAY_INDICATORS: IndicatorItem[] = [
  {
    id: 'ind-population',
    title: 'Total Population Baseline',
    category: 'Demographics',
    value: '1.44B',
    unit: 'Total Citizens',
    year: '2024 (Observed)',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'India is currently the most populous country globally, entering a pivotal demographic dividend window with over 68% in working ages.',
    source: {
      name: 'UN World Population Prospects (2024 Revision)',
      publisher: 'United Nations Population Division',
      url: 'https://population.un.org/wpp/',
      dateOrYear: 'July 2024',
      notes: 'Official 2024 UN empirical census estimate.'
    },
    trend: '+0.9% annual growth (slowing)',
    progressPercent: 88
  },
  {
    id: 'ind-fertility',
    title: 'Total Fertility Rate (TFR)',
    category: 'Demographics',
    value: '2.0',
    unit: 'Children per woman',
    year: '2021-2023',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'National TFR has declined below the natural replacement level of 2.1 across 31 out of 36 States & Union Territories.',
    source: {
      name: 'National Family Health Survey (NFHS-5)',
      publisher: 'Ministry of Health & Family Welfare / IIPS',
      url: 'https://main.mohfw.gov.in/',
      dateOrYear: '2022',
      notes: 'Empirical survey across 636,699 households.'
    },
    trend: 'Declined from 5.9 in 1950s to 2.0 today',
    progressPercent: 95
  },
  {
    id: 'ind-gdp',
    title: 'Economic GDP & Viksit Target',
    category: 'Economy',
    value: '$3.9T',
    unit: 'GDP (Target $30T by 2047)',
    year: '2025 Current',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'World\'s 5th largest economy, aiming for high-income developed country status ($18,000+ per capita GDP) by 2047.',
    source: {
      name: 'Viksit Bharat @2047 National Framework & World Bank',
      publisher: 'NITI Aayog & World Bank Open Data',
      url: 'https://www.niti.gov.in/',
      dateOrYear: '2024-2025',
      notes: 'Current GDP combined with official 2047 national target.'
    },
    trend: '7.2% GDP growth rate',
    progressPercent: 13
  },
  {
    id: 'ind-urbanisation',
    title: 'Urban Population Share',
    category: 'Infrastructure',
    value: '36.5%',
    unit: 'Urban Residents Share',
    year: '2024',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'Urban population expansion requires integrated smart transit, decentralized local governance, and resilient housing.',
    source: {
      name: 'World Development Indicators & MoHUA',
      publisher: 'World Bank & Ministry of Housing and Urban Affairs',
      url: 'https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN',
      dateOrYear: '2024',
      notes: 'Urbanization index based on national reporting.'
    },
    trend: '+1.2% annual urban shift',
    progressPercent: 36
  },
  {
    id: 'ind-renewable',
    title: 'Non-Fossil Power Capacity',
    category: 'Sustainability',
    value: '203.7 GW',
    unit: '46.3% Share (Target 500 GW)',
    year: '2025 Current',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'Non-fossil sources comprise 46.3% of total installed power capacity, progressing toward the 500 GW Panchamrit 2030 pledge.',
    source: {
      name: 'Executive Summary on Power Sector',
      publisher: 'Central Electricity Authority (CEA) & MNRE',
      url: 'https://mnre.gov.in/',
      dateOrYear: 'January 2025',
      notes: 'Official installed capacity monitoring data.'
    },
    trend: 'On track to exceed 50% by 2030',
    progressPercent: 46
  },
  {
    id: 'ind-sdg-index',
    title: 'NITI SDG India Index Score',
    category: 'Integrated Approach',
    value: '66 / 100',
    unit: 'Composite National Score',
    year: '2023-2024',
    type: 'current',
    statusLabel: 'CURRENT',
    description: 'Tracks state-level progress across all 16 Sustainable Development Goals, led by SDG 13 (Climate Action) and SDG 7 (Clean Energy).',
    source: {
      name: 'SDG India Index & Dashboard 2023-24',
      publisher: 'NITI Aayog',
      url: 'https://sdgindiaindex.niti.gov.in/',
      dateOrYear: 'July 2024',
      notes: 'Comprehensive state-level performance index.'
    },
    trend: 'Score improved from 57 (2018) to 66 (2024)',
    progressPercent: 66
  }
];
