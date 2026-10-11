export interface SdgGroup {
  category: 'PEOPLE' | 'PLANET' | 'PROSPERITY' | 'PARTNERSHIPS';
  color: 'amber' | 'emerald' | 'cyan' | 'purple';
  sdgs: {
    number: number;
    title: string;
    description: string;
    url: string;
  }[];
}

export interface RelationshipNode {
  id: string;
  title: string;
  icon: string;
  shortRole: string;
  description: string;
  contributesTo: {
    targetId: string;
    targetTitle: string;
    impactText: string;
  }[];
}

export const SUSTAINABLE_PILLARS_DETAIL = [
  {
    id: 'people',
    title: 'PEOPLE',
    subtitle: 'Human Capital & Equity',
    color: 'amber',
    focusPoints: [
      'Quality Education & Lifelong Learning',
      'Universal Healthcare & Disease Prevention',
      'Gender Equality & Social Protection',
      'Decent Employment & Poverty Alleviation',
      'Enhanced Quality of Life & Human Dignity'
    ]
  },
  {
    id: 'planet',
    title: 'PLANET',
    subtitle: 'Ecological Resilience & Stewardship',
    color: 'emerald',
    focusPoints: [
      'Climate Change Mitigation & Adaptation',
      'Biodiversity Conservation & Ecosystem Restoration',
      'Clean Energy & India’s Stated Long-Term Net-Zero Ambition',
      'Water Security & Ocean Health',
      'Sustainable Natural Resource Management'
    ]
  },
  {
    id: 'prosperity',
    title: 'PROSPERITY',
    subtitle: 'Inclusive & Innovative Economy',
    color: 'cyan',
    focusPoints: [
      'Sustainable Economic Growth & Job Creation',
      'R&D, Technological Innovation & Digital Public Infra',
      'Resilient Infrastructure & Industrialization',
      'Productivity Enhancements & Fair Trade',
      'Equitable Wealth Distribution & Financial Inclusion'
    ]
  }
];

export const INTEGRATED_RELATIONSHIP_NODES: RelationshipNode[] = [
  {
    id: 'economic',
    title: 'Economic Development',
    icon: 'chart-bar',
    shortRole: 'Resource & Investment Generator',
    description: 'Generates fiscal revenue, investment capital, and market opportunities necessary to fund social development and green technology.',
    contributesTo: [
      {
        targetId: 'social',
        targetTitle: 'Social Development',
        impactText: 'Provides fiscal resources for public schools, hospitals, and social security nets.'
      },
      {
        targetId: 'environmental',
        targetTitle: 'Environmental Sustainability',
        impactText: 'Unlocks capital for renewable energy grids and green infrastructure investment.'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Development',
    icon: 'users',
    shortRole: 'Human Capital & Productivity Engine',
    description: 'Improves literacy, public health, and social cohesion, which enhances workforce skill levels, innovation, and civic participation.',
    contributesTo: [
      {
        targetId: 'economic',
        targetTitle: 'Economic Development',
        impactText: 'Enhances worker productivity, creativity, and labor force participation.'
      },
      {
        targetId: 'governance',
        targetTitle: 'Good Governance',
        impactText: 'Fosters educated, empowered citizens who demand transparency and accountable institutions.'
      }
    ]
  },
  {
    id: 'environmental',
    title: 'Environmental Sustainability',
    icon: 'globe-americas',
    shortRole: 'Resource Foundation & Climate Shield',
    description: 'Protects natural capital, freshwater reserves, clean air, and fertile soil, preventing climate disasters and resource scarcity.',
    contributesTo: [
      {
        targetId: 'economic',
        targetTitle: 'Economic Development',
        impactText: 'Prevents economic losses from climate shocks, pollution health costs, and resource depletion.'
      },
      {
        targetId: 'social',
        targetTitle: 'Social Development',
        impactText: 'Ensures safe living environments, food security, and clean drinking water.'
      }
    ]
  },
  {
    id: 'governance',
    title: 'Good Governance',
    icon: 'scale',
    shortRole: 'Institutional Policy Coordinator',
    description: 'Establishes legal frameworks, decentralized administration, anti-corruption enforcement, and long-term strategic alignment.',
    contributesTo: [
      {
        targetId: 'economic',
        targetTitle: 'Economic Development',
        impactText: 'Ensures regulatory stability, contract enforcement, and investor confidence.'
      },
      {
        targetId: 'tech',
        targetTitle: 'Technology & Innovation',
        impactText: 'Formulates R&D incentives, digital public infrastructure standards, and IP protections.'
      }
    ]
  },
  {
    id: 'tech',
    title: 'Technology & Innovation',
    icon: 'cpu-chip',
    shortRole: 'Efficiency & Scalability Multiplier',
    description: 'Accelerates clean energy transition, precision agriculture, digital service delivery, and circular waste management systems.',
    contributesTo: [
      {
        targetId: 'environmental',
        targetTitle: 'Environmental Sustainability',
        impactText: 'Enables solar/wind efficiency gains, smart water grids, and carbon capture.'
      },
      {
        targetId: 'social',
        targetTitle: 'Social Development',
        impactText: 'Expands telemedicine, online education, and digital financial inclusion (e.g. UPI, Aadhaar).'
      }
    ]
  }
];

export const SDG_CONCEPTUAL_GROUPS: SdgGroup[] = [
  {
    category: 'PEOPLE',
    color: 'amber',
    sdgs: [
      {
        number: 1,
        title: 'No Poverty',
        description: 'Eradicating extreme poverty and expanding targeted social safety nets so all citizens can build resilient livelihoods.',
        url: 'https://sdgs.un.org/goals/goal1'
      },
      {
        number: 2,
        title: 'Zero Hunger',
        description: 'Ensuring nutritional security, climate-resilient farming, and equitable food distribution networks to end malnutrition.',
        url: 'https://sdgs.un.org/goals/goal2'
      },
      {
        number: 3,
        title: 'Good Health & Well-being',
        description: 'Strengthening primary healthcare delivery, reducing maternal and infant mortality, and lowering out-of-pocket health costs.',
        url: 'https://sdgs.un.org/goals/goal3'
      },
      {
        number: 4,
        title: 'Quality Education',
        description: 'Delivering equitable foundational learning, STEM skills, and industry-aligned vocational training for a modern workforce.',
        url: 'https://sdgs.un.org/goals/goal4'
      },
      {
        number: 5,
        title: 'Gender Equality',
        description: 'Closing gender gaps in workforce participation, leadership, property rights, and safety to unlock full societal potential.',
        url: 'https://sdgs.un.org/goals/goal5'
      }
    ]
  },
  {
    category: 'PLANET',
    color: 'emerald',
    sdgs: [
      {
        number: 6,
        title: 'Clean Water & Sanitation',
        description: 'Securing safe drinking water access, groundwater recharge, wastewater treatment, and watershed conservation.',
        url: 'https://sdgs.un.org/goals/goal6'
      },
      {
        number: 7,
        title: 'Affordable & Clean Energy',
        description: 'Accelerating universal clean electricity access, renewable grid integration, and clean cooking fuel transitions.',
        url: 'https://sdgs.un.org/goals/goal7'
      },
      {
        number: 12,
        title: 'Responsible Consumption & Production',
        description: 'Transitioning from linear resource extraction to circular economy practices, waste recovery, and sustainable supply chains.',
        url: 'https://sdgs.un.org/goals/goal12'
      },
      {
        number: 13,
        title: 'Climate Action',
        description: 'Deploying urgent emissions mitigation, renewable power expansion, and climate disaster adaptation for vulnerable regions.',
        url: 'https://sdgs.un.org/goals/goal13'
      },
      {
        number: 14,
        title: 'Life Below Water',
        description: 'Safeguarding marine ecosystems, coastal livelihoods, and oceanic biodiversity from pollution and unsustainable exploitation.',
        url: 'https://sdgs.un.org/goals/goal14'
      },
      {
        number: 15,
        title: 'Life on Land',
        description: 'Restoring degraded forests, protecting biodiversity corridors, and halting soil desertification for ecological balance.',
        url: 'https://sdgs.un.org/goals/goal15'
      }
    ]
  },
  {
    category: 'PROSPERITY',
    color: 'cyan',
    sdgs: [
      {
        number: 8,
        title: 'Decent Work & Economic Growth',
        description: 'Fostering formal job creation, labor productivity growth, and entrepreneurial ecosystems while protecting worker rights.',
        url: 'https://sdgs.un.org/goals/goal8'
      },
      {
        number: 9,
        title: 'Industry, Innovation & Infrastructure',
        description: 'Building robust physical, digital, and logistics backbones while expanding domestic R&D and clean manufacturing.',
        url: 'https://sdgs.un.org/goals/goal9'
      },
      {
        number: 10,
        title: 'Reduced Inequalities',
        description: 'Narrowing rural-urban, regional, and socioeconomic disparities through progressive fiscal policies and universal basic services.',
        url: 'https://sdgs.un.org/goals/goal10'
      },
      {
        number: 11,
        title: 'Sustainable Cities & Communities',
        description: 'Developing transit-oriented, climate-resilient urban centers with inclusive housing, clean air, and efficient civic utilities.',
        url: 'https://sdgs.un.org/goals/goal11'
      }
    ]
  },
  {
    category: 'PARTNERSHIPS',
    color: 'purple',
    sdgs: [
      {
        number: 16,
        title: 'Peace, Justice & Strong Institutions',
        description: 'Building accountable public administration, transparent legal systems, and citizen-responsive governance institutions.',
        url: 'https://sdgs.un.org/goals/goal16'
      },
      {
        number: 17,
        title: 'Partnerships for the Goals',
        description: 'Mobilizing public-private capital, technology transfers, and multi-stakeholder collaboration to achieve shared national and global targets.',
        url: 'https://sdgs.un.org/goals/goal17'
      }
    ]
  }
];
