import { IndicatorItem } from '../types';

export const INDIA_TODAY_INDICATORS: IndicatorItem[] = [
  {
    id: 'ind-population',
    title: 'Total Population Baseline',
    category: 'Demographics',
    value: '1.45B',
    unit: 'Total Population (UN Estimate)',
    year: '2024 (Estimate)',
    type: 'current',
    statusLabel: 'LATEST ESTIMATE',
    description: 'India has one of the world\'s largest young and working-age populations (over 68% in working ages 15–64). UN World Population Prospects 2024 estimates the population at approximately 1.45 billion in 2024, projecting a peak around 2062 (~1.70 billion) before gradual decline.',
    source: {
      name: 'UN World Population Prospects (2024 Revision)',
      publisher: 'United Nations Population Division',
      url: 'https://population.un.org/wpp/',
      dateOrYear: 'July 2024',
      notes: 'Authoritative UN demographic estimates and medium-variant projections.'
    },
    trend: '+0.9% annual growth (slowing toward projected peak around 2062)',
    progressPercent: 88
  },
  {
    id: 'ind-fertility',
    title: 'Total Fertility Rate (TFR)',
    category: 'Demographics',
    value: '2.0',
    unit: 'Children per woman',
    year: 'NFHS-5, 2019–21',
    type: 'current',
    statusLabel: 'LATEST SURVEY',
    description: 'Latest national survey:\nTFR: 2.0 children per woman\nSource period: NFHS-5, 2019–21.\nNational TFR has fallen below the 2.1 replacement benchmark across 31 of 36 States and Union Territories.',
    source: {
      name: 'National Family Health Survey (NFHS-5)',
      publisher: 'Ministry of Health & Family Welfare / IIPS',
      url: 'https://main.mohfw.gov.in/',
      dateOrYear: '2019–21 (Survey Period)',
      notes: 'Empirical survey across 636,699 households across all states and UTs.'
    },
    trend: 'Declined from 5.9 in 1950s to 2.0 in NFHS-5 (2019–21)',
    progressPercent: 95
  },
  {
    id: 'ind-gdp',
    title: 'Economic GDP & Viksit Target',
    category: 'Economy',
    value: '$3.9T',
    unit: 'Nominal GDP (2024 Estimate)',
    year: '2024–25 (Estimate)',
    type: 'current',
    statusLabel: 'LATEST ESTIMATE',
    description: 'Ranked world\'s 5th largest economy by nominal GDP in 2024 (IMF World Economic Outlook / World Bank). NITI Aayog scenario: per-capita GDP above $18,000 by 2047 as part of the Viksit Bharat vision.',
    source: {
      name: 'Viksit Bharat @2047 National Framework & IMF / World Bank',
      publisher: 'NITI Aayog & International Monetary Fund / World Bank',
      url: 'https://www.niti.gov.in/',
      dateOrYear: '2024',
      notes: 'Dated 2024 nominal GDP estimate alongside NITI Aayog 2047 aspirational scenario.'
    },
    trend: 'Estimated ~7.0% real annual growth rate',
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
    title: 'Renewable & Non-Fossil Power Capacity',
    category: 'Sustainability',
    value: '203.2 GW',
    unit: 'Renewable Capacity (Oct 2024)',
    year: 'October 2024',
    type: 'current',
    statusLabel: 'AS OF OCTOBER 2024',
    description: 'Renewable installed capacity was 203.18 GW in October 2024 (44.9% of 452.69 GW, calculated). Non-fossil capacity including 8.18 GW nuclear was 211.36 GW (46.7%, calculated). These are distinct from the 500 GW non-fossil capacity target for 2030.',
    source: {
      name: 'MNRE / PIB October 2024 Renewable Capacity Overview (PRID 2073038)',
      publisher: 'MNRE & Central Electricity Authority (CEA)',
      url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2073038',
      dateOrYear: '13 November 2024 (October 2024 data)',
      notes: 'The published 203.18 GW renewable and 211.36 GW non-fossil totals yield calculated shares of 44.9% and 46.7% of 452.69 GW respectively.'
    },
    trend: '44.9% renewable; 46.7% non-fossil (calculated)',
    progressPercent: 46
  },
  {
    id: 'ind-sdg-index',
    title: 'NITI SDG India Index Score',
    category: 'Integrated Approach',
    value: '71 / 100',
    unit: 'Composite National Score (2023–24)',
    year: '2023–24',
    type: 'current',
    statusLabel: 'LATEST AVAILABLE',
    description: 'Composite national score of 71/100 on NITI Aayog SDG India Index 2023–24 (PIB PRID 2032857). Evaluates progress across 16 Sustainable Development Goals; the previous score was 66/100 in 2020–21.',
    source: {
      name: 'SDG India Index & Dashboard 2023-24 (PIB PRID 2032857)',
      publisher: 'NITI Aayog, Government of India',
      url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2032857',
      dateOrYear: 'July 2024 (2023–24 Edition)',
      notes: 'Official release documenting national score increase to 71 in 2023–24 from 66 in 2020–21 and 57 in 2018.'
    },
    trend: 'Score improved from 57 (2018) to 66 (2020–21) to 71 (2023–24)',
    progressPercent: 71
  }
];
