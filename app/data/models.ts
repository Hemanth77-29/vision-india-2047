import { DataSource } from '../types';

export interface InnovativeModel {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  oneLiner: string;
  whatIsIt: string;
  whyItMatters: string;
  howItWorks: string;
  exampleApplication: string;
  relevantSdgs: number[];
  source: DataSource;
  colorAccent: 'emerald' | 'cyan' | 'amber' | 'purple' | 'blue';
}

export interface ComparisonRow {
  modelId: string;
  modelName: string;
  primaryFocus: string;
  economicDim: string;
  environmentalDim: string;
  socialDim: string;
  techRole: string;
  exampleApp: string;
  sdgs: string;
}

export const INNOVATIVE_MODELS_LIST: InnovativeModel[] = [
  {
    id: 'circular-economy',
    title: 'Circular Economy',
    subtitle: 'Eliminating Waste & Keeping Materials in Use',
    icon: 'arrow-path',
    oneLiner: 'Shifting from linear "Take-Make-Dispose" to a closed-loop system of reuse, repair, and recycling.',
    whatIsIt: 'A circular economy is an economic framework that eliminates waste and pollution, keeps products and materials in use at their highest value, and regenerates natural systems.',
    whyItMatters: 'Extends raw material life, reduces greenhouse gas emissions from virgin extraction, and creates new repair, remanufacturing, and recycling industries.',
    howItWorks: 'Products are designed for durability, modular repair, disassembly, and biological or technical nutrient recovery.',
    exampleApplication: 'E-waste recycling hubs, industrial symbiosis eco-parks, and battery remanufacturing for electric vehicles in India.',
    relevantSdgs: [12, 9, 13, 8],
    colorAccent: 'emerald',
    source: {
      name: 'Ellen MacArthur Foundation Circular Economy Framework',
      publisher: 'Ellen MacArthur Foundation',
      url: 'https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
      dateOrYear: '2023-2024',
      notes: 'Explanatory conceptual framework for circular material loops.'
    }
  },
  {
    id: 'green-economy',
    title: 'Green Economy',
    subtitle: 'Low-Carbon, Resource-Efficient & Socially Inclusive',
    icon: 'leaf',
    oneLiner: 'Economic activity that improves human well-being and social equity while reducing environmental risks and ecological scarcities.',
    whatIsIt: 'A green economy is defined by UNEP as one that results in improved human well-being and social equity, while significantly reducing environmental risks and ecological scarcities.',
    whyItMatters: 'Decouples GDP growth from environmental degradation and resource depletion.',
    howItWorks: 'Directs public capital and fiscal policy toward clean energy, public transit, sustainable forestry, and eco-taxation.',
    exampleApplication: 'India\'s Sovereign Green Bonds, Green Hydrogen Mission, and FAME scheme for electric mobility.',
    relevantSdgs: [8, 13, 7, 15],
    colorAccent: 'cyan',
    source: {
      name: 'UNEP Green Economy Initiative Framework',
      publisher: 'United Nations Environment Programme (UNEP)',
      url: 'https://www.unep.org/explore-topics/green-economy',
      dateOrYear: '2023',
      notes: 'Authoritative international guidance on green economy transition.'
    }
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Transition',
    subtitle: 'Solar, Wind, Hydro & Green Hydrogen Power',
    icon: 'sun',
    oneLiner: 'Replacing fossil fuels with clean, infinite energy sources to achieve energy security and Net-Zero by 2070.',
    whatIsIt: 'Harnessing naturally replenishing energy flows — solar irradiation, wind currents, hydro-flow, and biomass — to generate zero-emission electricity.',
    whyItMatters: 'Reduces carbon emissions intensity, cuts fossil fuel import bills, and improves ambient air quality in urban regions.',
    howItWorks: 'Deploys utility-scale solar parks, offshore wind farms, pumped-hydro storage, and smart microgrids.',
    exampleApplication: 'Bhadla Solar Park (Rajasthan), PM-KUSUM solar farming scheme, and offshore wind corridors.',
    relevantSdgs: [7, 13, 9, 11],
    colorAccent: 'amber',
    source: {
      name: 'Ministry of New & Renewable Energy (MNRE)',
      publisher: 'Government of India & CEA',
      url: 'https://mnre.gov.in/',
      dateOrYear: 'January 2025',
      notes: 'Official installed non-fossil power capacity statistics.'
    }
  },
  {
    id: 'smart-cities',
    title: 'Smart Cities & Integrated Urbanism',
    subtitle: 'Data-Driven, Sustainable & Livable Cities',
    icon: 'building-office',
    oneLiner: 'Leveraging digital technology, smart transit, and efficient utilities to build sustainable, climate-resilient urban centers.',
    whatIsIt: 'Smart cities integrate digital infrastructure, intelligent transportation, energy efficiency, waste management, and citizen participation to improve urban livability.',
    whyItMatters: 'Accommodates India\'s growing urban population (36.5% today → 50% by 2050) without ecological collapse.',
    howItWorks: 'Uses IoT sensors, Integrated Command and Control Centers (ICCC), electric bus fleets, and rainwater harvesting grids.',
    exampleApplication: 'Smart Cities Mission across 100 Indian cities, Integrated Traffic Management in Ahmedabad and Pune.',
    relevantSdgs: [11, 9, 6, 13],
    colorAccent: 'blue',
    source: {
      name: 'Smart Cities Mission Framework',
      publisher: 'Ministry of Housing and Urban Affairs (MoHUA)',
      url: 'https://smartcities.gov.in/',
      dateOrYear: '2024',
      notes: 'National urban transformation initiative.'
    }
  },
  {
    id: 'sustainable-agriculture',
    title: 'Sustainable Agriculture & Climate Resilience',
    subtitle: 'Soil Health, Precision Irrigation & Agro-Ecology',
    icon: 'sparkles',
    oneLiner: 'Farming methods that optimize crop yields while preserving soil fertility, conserving groundwater, and adapting to climate risks.',
    whatIsIt: 'Agricultural practices that integrate natural ecosystem processes, precision micro-irrigation, organic soil enrichment, and crop diversification.',
    whyItMatters: 'Ensures long-term national food security while mitigating agricultural methane and groundwater depletion.',
    howItWorks: 'Deploys drip irrigation, zero-budget natural farming (ZBNF), soil health cards, and drought-resistant seed varieties.',
    exampleApplication: 'Per Drop More Crop (PMKSY) micro-irrigation, Soil Health Card Scheme, and Andhra Pradesh Natural Farming (APCNF).',
    relevantSdgs: [2, 6, 15, 13],
    colorAccent: 'emerald',
    source: {
      name: 'Ministry of Agriculture & Farmers Welfare & FAO',
      publisher: 'Government of India & Food and Agriculture Organization',
      url: 'https://agricoop.nic.in/',
      dateOrYear: '2024',
      notes: 'Sustainable agriculture policy guidelines.'
    }
  },
  {
    id: 'eco-villages',
    title: 'Eco-Villages & Sustainable Communities',
    subtitle: 'Decentralized Community Self-Reliance',
    icon: 'home',
    oneLiner: 'Local communities designed around renewable energy, water conservation, organic farming, and participatory governance.',
    whatIsIt: 'Human settlements consciously designed through participatory processes to combine a supportive social environment with a low-impact ecological lifestyle.',
    whyItMatters: 'Demonstrates decentralized rural resilience, reduces rural-urban distress migration, and preserves traditional ecological knowledge.',
    howItWorks: 'Combines solar microgrids, watershed management, biogas energy, local artisan cooperatives, and Gram Panchayat governance.',
    exampleApplication: 'Ralegan Siddhi & Hiware Bazar (Water Conservation Models in Maharashtra), Odanthurai Eco-Panchayat (Tamil Nadu).',
    relevantSdgs: [11, 6, 7, 12],
    colorAccent: 'purple',
    source: {
      name: 'Ministry of Panchayati Raj & Global Ecovillage Network',
      publisher: 'Government of India & GEN',
      url: 'https://panchayat.gov.in/',
      dateOrYear: '2023',
      notes: 'Decentralized eco-panchayat case studies.'
    }
  }
];

export const MODEL_COMPARISON_MATRIX: ComparisonRow[] = [
  {
    modelId: 'circular-economy',
    modelName: 'Circular Economy',
    primaryFocus: 'Material Loop Closure & Waste Elimination',
    economicDim: 'New repair & recycling business models; material cost savings',
    environmentalDim: 'Drastic reduction in virgin resource extraction & landfill waste',
    socialDim: 'Job creation in informal recycling, repair & remanufacturing sectors',
    techRole: 'Modular product design, material tracing tags & automated sorting',
    exampleApp: 'E-waste recycling parks, EV battery refurbishment',
    sdgs: 'SDG 12, SDG 9, SDG 13'
  },
  {
    modelId: 'green-economy',
    modelName: 'Green Economy',
    primaryFocus: 'Low-Carbon Macro-Growth & Social Equity',
    economicDim: 'Decoupling GDP from pollution; green fiscal incentives & bonds',
    environmentalDim: 'Lower carbon emissions intensity & ecosystem preservation',
    socialDim: 'Just transition for workers, green job creation, reduced pollution risk',
    techRole: 'Clean tech R&D, digital public infrastructure, carbon accounting',
    exampleApp: 'Sovereign Green Bonds, Green Hydrogen Mission',
    sdgs: 'SDG 8, SDG 13, SDG 7'
  },
  {
    modelId: 'renewable-energy',
    modelName: 'Renewable Energy',
    primaryFocus: 'Clean Power Generation & Net-Zero Transition',
    economicDim: 'Reduces fossil fuel import expenditure; clean energy investment',
    environmentalDim: 'Eliminates power sector greenhouse gases & urban smog',
    socialDim: 'Improves respiratory public health; decentralized rural energy access',
    techRole: 'High-efficiency PV cells, offshore wind turbines, battery storage',
    exampleApp: 'Bhadla Solar Park, PM-KUSUM solar pumps',
    sdgs: 'SDG 7, SDG 13, SDG 9'
  },
  {
    modelId: 'smart-cities',
    modelName: 'Smart Cities',
    primaryFocus: 'Sustainable Urban Utilities & Infrastructure',
    economicDim: 'Optimizes municipal operational costs & urban productivity',
    environmentalDim: 'Reduces urban transport emissions, water loss & waste bottlenecks',
    socialDim: 'Improves civic services, public safety & urban mobility access',
    techRole: 'IoT sensor grids, Integrated Command Control Centers (ICCC), e-buses',
    exampleApp: '100 Smart Cities Mission, Pune Intelligent Transit',
    sdgs: 'SDG 11, SDG 9, SDG 6'
  },
  {
    modelId: 'sustainable-agriculture',
    modelName: 'Sustainable Agriculture',
    primaryFocus: 'Soil Health, Water Security & Agro-Ecology',
    economicDim: 'Protects farmer income against climate shocks; cuts fertilizer costs',
    environmentalDim: 'Conserves groundwater tables, restores soil carbon & biodiversity',
    socialDim: 'Ensures national food security & rural nutritional well-being',
    techRole: 'Precision micro-irrigation, soil health cards, climate-smart seeds',
    exampleApp: 'AP Natural Farming (APCNF), Drip Irrigation (PMKSY)',
    sdgs: 'SDG 2, SDG 6, SDG 15'
  },
  {
    modelId: 'eco-villages',
    modelName: 'Eco-Villages',
    primaryFocus: 'Decentralized Rural Self-Reliance & Ecology',
    economicDim: 'Strengthens local rural economies & village artisan cooperatives',
    environmentalDim: 'Local watershed rejuvenation, solar microgrids, organic farming',
    socialDim: 'Empowers Gram Sabhas, promotes social equity & prevents distress migration',
    techRole: 'Appropriate small-scale tech, biogas digesters, local solar mini-grids',
    exampleApp: 'Hiware Bazar Watershed, Odanthurai Eco-Panchayat',
    sdgs: 'SDG 11, SDG 6, SDG 7'
  }
];
