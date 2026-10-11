export type InfrastructureCategory = 'PEOPLE' | 'MOBILITY' | 'ENERGY' | 'ENVIRONMENT' | 'DIGITAL';

export interface InfrastructureItem {
  id: string;
  name: string;
  category: InfrastructureCategory;
  icon: string;
  costCr: number; // Illustrative simulation cost in ₹ Crore
  description: string;
  renderType: 'building' | 'transit' | 'energy' | 'nature' | 'tech';
  maxAllowed: number;
  impacts: {
    cleanEnergy?: number;
    publicTransport?: number;
    greenCover?: number;
    waterEfficiency?: number;
    wasteManagement?: number;
    wellbeing?: number;
    digitalInfra?: number;
    economicActivity?: number;
  };
}

export interface CityGoal {
  id: 'balanced' | 'green' | 'connected' | 'healthy';
  title: string;
  description: string;
  targetFocus: string;
}

export const INITIAL_SIMULATION_BUDGET_CR = 10000; // Illustrative ₹10,000 Cr

export const CITY_GOALS: CityGoal[] = [
  {
    id: 'balanced',
    title: 'Balanced City',
    description: 'Harmonizes economic growth, ecological stewardship, and human social services equally.',
    targetFocus: 'Broad stability across all 8 indicators'
  },
  {
    id: 'green',
    title: 'Green City',
    description: 'Illustrates an aspirational low-emissions city with renewable energy, urban forests, and water conservation.',
    targetFocus: 'High Clean Energy, Green Cover & Water Efficiency'
  },
  {
    id: 'connected',
    title: 'Connected City',
    description: 'Emphasizes high-speed public transit, smart traffic grids, IoT sensors, and digital public services.',
    targetFocus: 'High Public Transport, Digital Infra & Economic Activity'
  },
  {
    id: 'healthy',
    title: 'Healthy City',
    description: 'Focuses on public healthcare, quality education, parks, clean air, and civic well-being.',
    targetFocus: 'High Citizen Wellbeing, Healthcare & Environment'
  }
];

export const SMART_CITY_INFRASTRUCTURE_CATALOG: InfrastructureItem[] = [
  // CATEGORY 1 — PEOPLE
  {
    id: 'school',
    name: 'Public School & Skill Center',
    category: 'PEOPLE',
    icon: '🏫',
    costCr: 400,
    description: 'Smart digital classrooms, vocational training hubs, and STEM laboratories.',
    renderType: 'building',
    maxAllowed: 5,
    impacts: { wellbeing: 15, economicActivity: 10, digitalInfra: 8 }
  },
  {
    id: 'hospital',
    name: 'Multi-Specialty Hospital',
    category: 'PEOPLE',
    icon: '🏥',
    costCr: 750,
    description: 'Advanced emergency care, telemedicine networks, and public health centers.',
    renderType: 'building',
    maxAllowed: 4,
    impacts: { wellbeing: 22, economicActivity: 6 }
  },
  {
    id: 'housing',
    name: 'Affordable Smart Housing',
    category: 'PEOPLE',
    icon: '🏘',
    costCr: 1200,
    description: 'Energy-efficient green residential blocks with solar rooftops and community parks.',
    renderType: 'building',
    maxAllowed: 6,
    impacts: { wellbeing: 18, greenCover: 5, waterEfficiency: 6 }
  },
  {
    id: 'civic-center',
    name: 'Public Services Hub',
    category: 'PEOPLE',
    icon: '🏢',
    costCr: 500,
    description: 'One-stop civic center for municipal services, legal aid, and community sports.',
    renderType: 'building',
    maxAllowed: 3,
    impacts: { wellbeing: 12, digitalInfra: 10, economicActivity: 8 }
  },

  // CATEGORY 2 — MOBILITY
  {
    id: 'metro',
    name: 'Metro Rail System',
    category: 'MOBILITY',
    icon: '🚇',
    costCr: 2500,
    description: 'High-capacity electric metro transit connecting residential and business hubs.',
    renderType: 'transit',
    maxAllowed: 3,
    impacts: { publicTransport: 30, economicActivity: 18, wellbeing: 10, cleanEnergy: 8 }
  },
  {
    id: 'ebus',
    name: 'Electric Bus Fleet',
    category: 'MOBILITY',
    icon: '🚌',
    costCr: 800,
    description: 'Battery-electric buses with no tailpipe emissions, smart depot charging, and GPS tracking.',
    renderType: 'transit',
    maxAllowed: 4,
    impacts: { publicTransport: 20, cleanEnergy: 12, wellbeing: 8 }
  },
  {
    id: 'cycling',
    name: 'Dedicated Cycling Track',
    category: 'MOBILITY',
    icon: '🚲',
    costCr: 300,
    description: 'Protected non-motorized transport lanes with public bicycle sharing stations.',
    renderType: 'transit',
    maxAllowed: 4,
    impacts: { publicTransport: 10, wellbeing: 14, greenCover: 6 }
  },
  {
    id: 'pedestrian',
    name: 'Pedestrian Walkways',
    category: 'MOBILITY',
    icon: '🚶',
    costCr: 200,
    description: 'Shaded, barrier-free footpaths with solar street lighting and bench seating.',
    renderType: 'transit',
    maxAllowed: 4,
    impacts: { wellbeing: 12, publicTransport: 6 }
  },

  // CATEGORY 3 — ENERGY
  {
    id: 'solar-farm',
    name: 'Solar Power Park',
    category: 'ENERGY',
    icon: '☀',
    costCr: 1200,
    description: 'Utility-scale photovoltaic array supplying clean solar electricity to the city grid.',
    renderType: 'energy',
    maxAllowed: 4,
    impacts: { cleanEnergy: 28, economicActivity: 10 }
  },
  {
    id: 'wind-energy',
    name: 'Wind Turbine Corridor',
    category: 'ENERGY',
    icon: '🌬',
    costCr: 1100,
    description: 'High-efficiency wind turbines harnessing wind currents for green power.',
    renderType: 'energy',
    maxAllowed: 3,
    impacts: { cleanEnergy: 22, economicActivity: 8 }
  },
  {
    id: 'battery-storage',
    name: 'Battery Energy Storage System',
    category: 'ENERGY',
    icon: '🔋',
    costCr: 900,
    description: 'Grid-scale lithium battery storage that supports grid balancing and renewable-energy integration.',
    renderType: 'energy',
    maxAllowed: 3,
    impacts: { cleanEnergy: 18, digitalInfra: 10 }
  },
  {
    id: 'smart-grid',
    name: 'Smart Electric Grid',
    category: 'ENERGY',
    icon: '⚡',
    costCr: 700,
    description: 'Automated digital distribution grid with smart meters and bi-directional flow.',
    renderType: 'energy',
    maxAllowed: 3,
    impacts: { cleanEnergy: 15, digitalInfra: 16, economicActivity: 10 }
  },

  // CATEGORY 4 — ENVIRONMENT
  {
    id: 'park',
    name: 'Urban Botanical Park',
    category: 'ENVIRONMENT',
    icon: '🌳',
    costCr: 350,
    description: 'Biodiverse public green space with native trees, walking trails, and playgrounds.',
    renderType: 'nature',
    maxAllowed: 5,
    impacts: { greenCover: 22, wellbeing: 16, waterEfficiency: 8 }
  },
  {
    id: 'urban-forest',
    name: 'Miyawaki Urban Forest',
    category: 'ENVIRONMENT',
    icon: '🌲',
    costCr: 450,
    description: 'Dense native forest patch absorbing urban heat, noise, and air pollutants.',
    renderType: 'nature',
    maxAllowed: 4,
    impacts: { greenCover: 28, wellbeing: 12 }
  },
  {
    id: 'water-treatment',
    name: 'Water Recycling Plant',
    category: 'ENVIRONMENT',
    icon: '💧',
    costCr: 850,
    description: 'Advanced sewage treatment plant recycling wastewater for industrial & park reuse.',
    renderType: 'nature',
    maxAllowed: 3,
    impacts: { waterEfficiency: 30, wellbeing: 10 }
  },
  {
    id: 'rainwater',
    name: 'Rainwater Harvesting Grid',
    category: 'ENVIRONMENT',
    icon: '🌧',
    costCr: 400,
    description: 'City-wide percolation wells and storm-drain recharge structures.',
    renderType: 'nature',
    maxAllowed: 4,
    impacts: { waterEfficiency: 20, greenCover: 8 }
  },
  {
    id: 'waste-mgmt',
    name: 'Circular Waste Recycling Hub',
    category: 'ENVIRONMENT',
    icon: '♻',
    costCr: 650,
    description: 'Automated waste segregation facility, composting plant, and material recovery.',
    renderType: 'nature',
    maxAllowed: 3,
    impacts: { wasteManagement: 35, wellbeing: 8 }
  },

  // CATEGORY 5 — DIGITAL
  {
    id: 'iot-sensors',
    name: 'City IoT Sensor Network',
    category: 'DIGITAL',
    icon: '📡',
    costCr: 550,
    description: 'Environmental monitoring sensors tracking air quality, noise, and flood levels.',
    renderType: 'tech',
    maxAllowed: 3,
    impacts: { digitalInfra: 25, wellbeing: 8, wasteManagement: 10 }
  },
  {
    id: 'smart-traffic',
    name: 'Adaptive Smart Traffic System',
    category: 'DIGITAL',
    icon: '🚦',
    costCr: 600,
    description: 'AI-driven traffic lights prioritizing emergency vehicles and buses.',
    renderType: 'tech',
    maxAllowed: 3,
    impacts: { digitalInfra: 20, publicTransport: 12, economicActivity: 10 }
  },
  {
    id: 'digital-gov',
    name: 'Integrated Command Center (ICCC)',
    category: 'DIGITAL',
    icon: '📊',
    costCr: 800,
    description: 'Centralized municipal monitoring hub for emergency response and civic services.',
    renderType: 'tech',
    maxAllowed: 2,
    impacts: { digitalInfra: 30, economicActivity: 14, wellbeing: 10 }
  }
];
