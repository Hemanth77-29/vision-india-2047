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
    year: '2026',
    title: 'Below Replacement Fertility Achieved',
    tfr: '2.0',
    medianAge: '28.7 Years',
    workingAgeShare: '68.4%',
    type: 'current',
    population: '1.44 Billion',
    keyPhenomena: 'TFR drops to 2.0 (below 2.1 replacement level). India enjoys its peak working-age cohort ratio.',
    policyFocus: 'Higher technical education, AI/digital skill empowerment, female labor force integration, green manufacturing.'
  },
  {
    year: '2047',
    title: 'Viksit Bharat Centenary Milestone',
    tfr: '1.69',
    medianAge: '37.2 Years',
    workingAgeShare: '66.8%',
    type: 'projection',
    population: '1.63 Billion',
    keyPhenomena: 'Working-age population remains strong but median age rises. Last phase of demographic dividend.',
    policyFocus: 'High-value tech export economy, silver economy preparation, universal health insurance, urban automation.'
  },
  {
    year: '2060s',
    title: 'National Population Peak',
    tfr: '1.65',
    medianAge: '42.1 Years',
    workingAgeShare: '62.5%',
    type: 'projection',
    population: '1.69 Billion (Peak)',
    keyPhenomena: 'India\'s population reaches its projected maximum of ~1.69 Billion around 2064 and begins stabilization.',
    policyFocus: 'Geriatric healthcare infrastructure, pension fund solvency, high-productivity labor automation.'
  },
  {
    year: '2100',
    title: 'Mature Stabilized Society',
    tfr: '1.52',
    medianAge: '48.5 Years',
    workingAgeShare: '56.1%',
    type: 'projection',
    population: '1.50 Billion',
    keyPhenomena: 'Population contracts to ~1.50 Billion; over 28% of citizens are seniors aged 65+.',
    policyFocus: 'Comprehensive elder care safety nets, robotic caregiving, sustainable circular economy.'
  }
];

export const DEMOGRAPHIC_SLIDER_POINTS: ProjectionSliderPoint[] = [
  {
    year: 2026,
    label: '2026 (Present)',
    totalPop: '1.44 Billion',
    medianAge: 28.7,
    workingAgePercent: 68.4,
    elderPercent: 7.2,
    childPercent: 24.4,
    tfr: 2.0,
    status: 'current',
    summary: 'Golden Demographic Window: Largest young working population in human history. Dependency ratio is at historic low.'
  },
  {
    year: 2047,
    label: '2047 (Centenary)',
    totalPop: '1.63 Billion',
    medianAge: 37.2,
    workingAgePercent: 66.8,
    elderPercent: 13.8,
    childPercent: 19.4,
    tfr: 1.69,
    status: 'projection',
    summary: 'Peak Economic Maturity: High ratio of skilled working adults supporting economic transition to Viksit Bharat goal.'
  },
  {
    year: 2064,
    label: '2060s (Peak Pop)',
    totalPop: '1.69 Billion',
    medianAge: 42.1,
    workingAgePercent: 62.5,
    elderPercent: 20.2,
    childPercent: 17.3,
    tfr: 1.65,
    status: 'projection',
    summary: 'Population Peak: Absolute national population reaches maximum plateau. Elderly cohort equals 1 in 5 citizens.'
  },
  {
    year: 2100,
    label: '2100 (Future)',
    totalPop: '1.50 Billion',
    medianAge: 48.5,
    workingAgePercent: 56.1,
    elderPercent: 28.6,
    childPercent: 15.3,
    tfr: 1.52,
    status: 'projection',
    summary: 'Mature Society: Population plateaus downward with 28.6% senior citizens. Requires automated infrastructure.'
  }
];

export const DIVIDEND_ENABLERS: DividendEnabler[] = [
  {
    id: 'edu-skills',
    title: 'Quality Education & Future Skills',
    icon: 'academic-cap',
    description: 'Transforming basic schooling into industry-aligned technical, AI, and vocational skill sets.',
    currentStatus: 'Gross Enrollment Ratio (GER) in Higher Education at 28.4%.',
    keyStrategy: 'Align curriculum with NEP 2020 and vocational apprenticeship models.'
  },
  {
    id: 'female-workforce',
    title: 'Female Labor Force Participation (FLPR)',
    icon: 'women',
    description: 'Unlocking half the population\'s productive capacity through safe workplaces, care infrastructure, and equal pay.',
    currentStatus: 'FLPR increased to 37.0% (PLFS 2022-23), but significant upside remains.',
    keyStrategy: 'Paid maternity leave, rural micro-entrepreneurship, and targeted STEM scholarships.'
  },
  {
    id: 'health-nutrition',
    title: 'Healthcare & Preventive Wellness',
    icon: 'heart-pulse',
    description: 'Ensuring a healthy workforce capable of sustained productivity without out-of-pocket health poverty.',
    currentStatus: 'Ayushman Bharat covers 550M+ vulnerable citizens.',
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
