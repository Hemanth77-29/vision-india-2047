import { DataSource } from '../types';

export const PRIMARY_SOURCES: Record<string, DataSource> = {
  unWpp: {
    name: 'UN World Population Prospects (2024 Revision)',
    publisher: 'United Nations Population Division',
    url: 'https://population.un.org/wpp/',
    dateOrYear: 'July 2024',
    notes: 'Primary authoritative dataset for global demographic estimates and projections.'
  },
  nfhs5: {
    name: 'National Family Health Survey (NFHS-5)',
    publisher: 'Ministry of Health and Family Welfare / IIPS',
    url: 'https://main.mohfw.gov.in/',
    dateOrYear: '2021-2022',
    notes: 'Empirical survey tracking TFR, maternal health, child nutrition across Indian states.'
  },
  nitiViksit: {
    name: 'Viksit Bharat @2047 Strategy Framework',
    publisher: 'NITI Aayog & Government of India',
    url: 'https://www.niti.gov.in/',
    dateOrYear: '2023-2024',
    notes: 'Official national vision document targeting $30T economy by centenary of independence.'
  },
  mnrePanchamrit: {
    name: 'Executive Summary on Power Sector & Panchamrit Pledges',
    publisher: 'Central Electricity Authority & MNRE',
    url: 'https://mnre.gov.in/',
    dateOrYear: 'January 2025',
    notes: 'Official monthly reporting on installed non-fossil power capacity.'
  },
  worldBank: {
    name: 'World Development Indicators',
    publisher: 'World Bank Open Data',
    url: 'https://data.worldbank.org/country/india',
    dateOrYear: '2024',
    notes: 'Global development indicators for GDP, urban population share, and labor force data.'
  },
  nitiSdg: {
    name: 'SDG India Index & Dashboard 2023-24',
    publisher: 'NITI Aayog',
    url: 'https://sdgindiaindex.niti.gov.in/',
    dateOrYear: 'July 2024',
    notes: 'Composite score evaluating 16 Sustainable Development Goals across states and UTs.'
  },
  unfpaAgeing: {
    name: 'India Ageing Report 2023',
    publisher: 'UNFPA India & International Institute for Population Sciences',
    url: 'https://india.unfpa.org/en/publications/india-ageing-report-2023',
    dateOrYear: 'September 2023',
    notes: 'Comprehensive study on demographic transition and ageing projections in India.'
  },
  ellenMacArthur: {
    name: 'Ellen MacArthur Foundation Circular Economy Framework',
    publisher: 'Ellen MacArthur Foundation',
    url: 'https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
    dateOrYear: '2023-2024',
    notes: 'Explanatory conceptual framework for circular material loops.'
  },
  unepGreenEconomy: {
    name: 'UNEP Green Economy Initiative',
    publisher: 'United Nations Environment Programme (UNEP)',
    url: 'https://www.unep.org/explore-topics/green-economy',
    dateOrYear: '2023',
    notes: 'Authoritative international guidance on green economy transition.'
  },
  unSdgs: {
    name: 'UN Sustainable Development Goals Knowledge Platform',
    publisher: 'United Nations Department of Economic and Social Affairs',
    url: 'https://sdgs.un.org/goals',
    dateOrYear: '2024',
    notes: 'Official UN portal for the 17 Sustainable Development Goals.'
  },
  mohuaSmartCities: {
    name: 'Smart Cities Mission — Mission Strategy and Guidelines',
    publisher: 'Ministry of Housing and Urban Affairs (MoHUA), Government of India',
    url: 'https://mohua.gov.in/upload/uploadfiles/files/2688HUA-ENGLISH-19-4-2023.pdf',
    dateOrYear: 'Official Mission strategy document',
    notes: 'Primary Government of India source describing area-based development and pan-city Smart Solutions; linked claims in the builder are limited to this scope.'
  },
  mohuaSmartCitiesDashboard: {
    name: 'Smart Cities Mission Dashboard',
    publisher: 'Ministry of Housing and Urban Affairs (MoHUA), Government of India',
    url: 'https://gmis.smartcities.gov.in/missionDashboard/',
    dateOrYear: 'Live dashboard',
    notes: 'Official dashboard for current Mission project and city information; values should be read directly from the live dashboard.'
  },
  indiaConstitution: {
    name: 'Constitution of India — Part IX-A and Twelfth Schedule',
    publisher: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.indiacode.nic.in/bitstream/123456789/19151/1/constitution_of_india.pdf',
    dateOrYear: 'Official constitutional text',
    notes: 'Primary source for municipal institutions and the Twelfth Schedule. Actual devolution and implementation depend on the applicable state law.'
  },
  deaPppGuidelines: {
    name: 'Guidelines for Formulation, Appraisal and Approval of PPP Projects',
    publisher: 'Department of Economic Affairs, Ministry of Finance, Government of India',
    url: 'https://www.dea.gov.in/files/guidelines_documents/Document1_Guidelines_formulation_appraisal_approval_PPP_Projects.pdf',
    dateOrYear: 'Official Government of India guidelines',
    notes: 'Primary reference for the central-sector PPP appraisal process and project preparation.'
  },
  singaporeGreenPlan: {
    name: 'Singapore Green Plan 2030 — Overview',
    publisher: 'Government of Singapore',
    url: 'https://www.greenplan.gov.sg/overview/',
    dateOrYear: 'Live national plan',
    notes: 'Official overview of five national sustainability pillars. Presented as a context-specific strategy, not a direct template for India.'
  },
  japanSociety5: {
    name: 'Society 5.0',
    publisher: 'Cabinet Office, Government of Japan',
    url: 'https://www8.cao.go.jp/cstp/english/society5_0/',
    dateOrYear: 'Official policy vision',
    notes: 'Government of Japan description of a human-centred society connecting digital and physical systems to address social challenges.'
  },
  netherlandsDelta: {
    name: 'National Delta Programme',
    publisher: 'Government of the Netherlands / Delta Commissioner',
    url: 'https://english.deltaprogramma.nl/delta-programme/what-is-the-delta-programme',
    dateOrYear: 'Live national programme',
    notes: 'Official description of flood-risk, freshwater and climate-resilient spatial planning, developed through national and regional collaboration.'
  },
  indoreWasteCase: {
    name: 'Indore — Swachh Bharat Mission and municipal waste management',
    publisher: 'Indore Municipal Corporation',
    url: 'https://www.imcindore.mp.gov.in/SwachhBharatMission',
    dateOrYear: 'Municipal programme information',
    notes: 'City-government account of collection, source segregation and waste processing. The page is the source for this case summary.'
  },
  indorePppCase: {
    name: 'Gobardhan Bio-CNG Plant — PPP Best Practice',
    publisher: 'Public Private Partnerships in India, Department of Economic Affairs',
    url: 'https://www.pppinindia.gov.in/bestpractices/best-practice-detail/gobardhan-bio-cng-plant',
    dateOrYear: 'Government case profile',
    notes: 'Official project profile describing an Indore municipal organic-waste-to-energy PPP.'
  },
  curitibaCase: {
    name: 'Curitiba — Transit-oriented development case study',
    publisher: 'World Bank Public-Private Partnership Resource Center',
    url: 'https://ppp.worldbank.org/library/model-transit-oriented-development-curitiba-brazil',
    dateOrYear: '2016 case study',
    notes: 'World Bank case account of Curitiba’s shift toward linear growth and transit-oriented development.'
  },
  unHabitat: {
    name: 'World Cities Report & Sustainable Urbanization Framework',
    publisher: 'UN-Habitat (United Nations Human Settlements Programme)',
    url: 'https://unhabitat.org/',
    dateOrYear: '2024',
    notes: 'Global authoritative guidance on urban resilience and SDG 11 compliance.'
  }
};
