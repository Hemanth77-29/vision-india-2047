import { TimelinePeriod, ProjectionSliderPoint, DividendEnabler } from '../types';

export const DEMOGRAPHIC_TIMELINE_PERIODS: TimelinePeriod[] = [
  {
    year: '1970',
    title: 'High Fertility & High Mortality Decline',
    tfr: '5.4',
    medianAge: '19.3 Years',
    workingAgeShare: '55.2%',
    type: 'historical',
    population: '555 Million',
    keyPhenomena: 'Rapid population expansion driven by public health improvements and falling child mortality.',
    policyFocus: 'Primary healthcare rollout, basic immunization, family welfare campaigns.'
  },
  {
    year: '1990',
    title: 'Fertility Decline Begins',
    tfr: '4.0',
    medianAge: '21.1 Years',
    workingAgeShare: '58.1%',
    type: 'historical',
    population: '873 Million',
    keyPhenomena: 'Socio-economic shifts, rising female literacy, and urban growth trigger steady fertility reduction.',
    policyFocus: 'Girls secondary education, maternal nutrition programs, rural healthcare centers.'
  },
  {
    year: '2010',
    title: 'Demographic Dividend Window Opens',
    tfr: '2.6',
    medianAge: '25.1 Years',
    workingAgeShare: '64.2%',
    type: 'historical',
    population: '1.23 Billion',
    keyPhenomena: 'Working-age population surpasses youth dependency ratio; peak ratio of young adults entering labor force.',
    policyFocus: 'National Skill Development Mission, universal elementary education, industrial corridors.'
  },
  {
    year: '2024',
    title: 'Below-Replacement Fertility & Demographic Window',
    tfr: '2.0 (NFHS-5, 2019–21)',
    medianAge: '28.7 Years (2024 Est.)',
    workingAgeShare: '68.4% (2024 Est.)',
    type: 'current',
    population: '1.45 Billion (2024 Est.)',
    keyPhenomena: 'Latest national survey (NFHS-5, 2019–21) observed TFR at 2.0 (below 2.1 replacement level). India has one of the world\'s largest young and working-age populations, and population momentum sustains population growth after fertility falls below replacement.',
    policyFocus: 'Higher technical education, AI/digital skill empowerment, female labor force integration, green manufacturing.'
  },
  {
    year: '2047',
    title: 'Viksit Bharat Centenary Milestone',
    tfr: '1.69 (PROJECTION — UN WPP 2024)',
    medianAge: '37.2 Years',
    workingAgeShare: '66.8%',
    type: 'projection',
    population: '1.63 Billion (UN WPP 2024 Proj.)',
    keyPhenomena: 'Working-age population remains strong but median age rises. Later phase of demographic dividend as population transitions toward ageing.',
    policyFocus: 'High-value tech export economy, silver economy preparation, universal health insurance, urban automation.'
  },
  {
    year: '2062',
    title: 'Projected Population Peak',
    tfr: '1.66 (PROJECTION — UN WPP 2024)',
    medianAge: '42.1 Years',
    workingAgeShare: '62.5%',
    type: 'projection',
    population: '1.70 Billion (Projected Peak)',
    keyPhenomena: 'India is projected to reach its population peak of approximately 1.70 billion around 2062, after which population decline begins (PROJECTION — UN World Population Prospects 2024).',
    policyFocus: 'Geriatric healthcare infrastructure, pension fund solvency, high-productivity labor automation.'
  },
  {
    year: '2100',
    title: 'Population Decline After Peak',
    tfr: '1.52 (PROJECTION — UN WPP 2024)',
    medianAge: '48.5 Years',
    workingAgeShare: '56.1%',
    type: 'projection',
    population: '1.51 Billion (UN WPP 2024 Proj.)',
    keyPhenomena: 'Population decline after the projected peak contracts the national population to approximately 1.51 billion by 2100 (PROJECTION — UN World Population Prospects 2024); over 28% of citizens are projected to be seniors aged 65+.',
    policyFocus: 'Comprehensive elder care safety nets, robotic caregiving, sustainable circular economy.'
  }
];

export const DEMOGRAPHIC_SLIDER_POINTS: ProjectionSliderPoint[] = [
  {
    year: 2024,
    label: '2024 (Est.)',
    totalPop: '1.45 Billion (2024 Est.)',
    medianAge: 28.7,
    workingAgePercent: 68.4,
    elderPercent: 7.2,
    childPercent: 24.4,
    tfr: 2.0,
    status: 'current',
    summary: 'Demographic Window: India has one of the world\'s largest young and working-age populations (median age 28.7 years; 68.4% aged 15–64). India\'s working-age share remains high before gradually declining as the population ages (UN World Population Prospects 2024 estimate; NFHS-5 2019–21 TFR: 2.0).'
  },
  {
    year: 2047,
    label: '2047 (Proj.)',
    totalPop: '1.63 Billion',
    medianAge: 37.2,
    workingAgePercent: 66.8,
    elderPercent: 13.8,
    childPercent: 19.4,
    tfr: 1.69,
    status: 'projection',
    summary: 'Centenary Milestone: High ratio of skilled working adults supporting economic transition toward Viksit Bharat goals, with median age rising to 37.2 years (PROJECTION — UN World Population Prospects 2024).'
  },
  {
    year: 2062,
    label: '2062 (Peak)',
    totalPop: '1.70 Billion (Peak)',
    medianAge: 42.1,
    workingAgePercent: 62.5,
    elderPercent: 20.2,
    childPercent: 17.3,
    tfr: 1.66,
    status: 'projection',
    summary: 'Projected Population Peak: India\'s population reaches a projected peak of approximately 1.70 billion around 2062 before population decline begins (PROJECTION — UN World Population Prospects 2024).'
  },
  {
    year: 2100,
    label: '2100 (Proj.)',
    totalPop: '1.51 Billion',
    medianAge: 48.5,
    workingAgePercent: 56.1,
    elderPercent: 28.6,
    childPercent: 15.3,
    tfr: 1.52,
    status: 'projection',
    summary: 'Mature Ageing Society: Population decline after the projected peak contracts population to approximately 1.51 billion by 2100, with 28.6% senior citizens aged 65+ (PROJECTION — UN World Population Prospects 2024).'
  }
];

export const DIVIDEND_ENABLERS: DividendEnabler[] = [
  {
    id: 'edu-skills',
    title: 'Quality Education & Future Skills',
    icon: 'academic-cap',
    description: 'Transforming basic schooling into industry-aligned technical, AI, and vocational skill sets.',
    currentStatus: 'Latest available official release reviewed: higher-education GER was 30.0% in AISHE 2023–24 (Ministry of Education; report released July 2026).',
    keyStrategy: 'Align curriculum with NEP 2020 and vocational apprenticeship models.'
  },
  {
    id: 'female-workforce',
    title: 'Female Labor Force Participation (FLPR)',
    icon: 'women',
    description: 'Unlocking half the population\'s productive capacity through safe workplaces, care infrastructure, and equal pay.',
    currentStatus: 'Latest available annual report reviewed: female LFPR was 40.0% in PLFS 2025 (usual status, age 15+; calendar-year series).',
    keyStrategy: 'Paid maternity leave, rural micro-entrepreneurship, and targeted STEM scholarships.'
  },
  {
    id: 'health-nutrition',
    title: 'Healthcare & Preventive Wellness',
    icon: 'heart-pulse',
    description: 'Supporting health and workforce participation while reducing the risk of high out-of-pocket healthcare costs.',
    currentStatus: 'Latest available update reviewed: 48.51 crore people held Ayushman cards as of 21 September 2026; PM-JAY was expanded to all people aged 70+ in October 2024.',
    keyStrategy: 'Expand primary Health & Wellness Centers and universal health insurance.'
  },
  {
    id: 'job-creation',
    title: 'Formal Employment & Manufacturing',
    icon: 'briefcase',
    description: 'Creating high-productivity jobs in electronics manufacturing, green energy, logistics, and digital services.',
    currentStatus: 'PLI (Production Linked Incentive) schemes expanding domestic supply chains.',
    keyStrategy: 'Ease of doing business, labor reforms, and cluster-based industrial parks.'
  }
];
