export interface SdgGroup {
  category: 'PEOPLE' | 'PLANET' | 'PROSPERITY' | 'PARTNERSHIPS';
  color: 'amber' | 'emerald' | 'cyan' | 'purple';
  sdgs: {
    number: number;
    title: string;
    description: string;
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
      'Clean Energy & Net-Zero Transition',
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
      { number: 1, title: 'No Poverty', description: 'End poverty in all its forms everywhere.' },
      { number: 2, title: 'Zero Hunger', description: 'End hunger, achieve food security, and promote sustainable agriculture.' },
      { number: 3, title: 'Good Health & Well-being', description: 'Ensure healthy lives and promote well-being for all at all ages.' },
      { number: 4, title: 'Quality Education', description: 'Ensure inclusive and equitable quality education and promote lifelong learning.' },
      { number: 5, title: 'Gender Equality', description: 'Achieve gender equality and empower all women and girls.' }
    ]
  },
  {
    category: 'PLANET',
    color: 'emerald',
    sdgs: [
      { number: 6, title: 'Clean Water & Sanitation', description: 'Ensure availability and sustainable management of water and sanitation for all.' },
      { number: 7, title: 'Affordable & Clean Energy', description: 'Ensure access to affordable, reliable, sustainable, and modern energy.' },
      { number: 12, title: 'Responsible Consumption & Production', description: 'Ensure sustainable consumption and production patterns.' },
      { number: 13, title: 'Climate Action', description: 'Take urgent action to combat climate change and its impacts.' },
      { number: 14, title: 'Life Below Water', description: 'Conserve and sustainably use the oceans, seas, and marine resources.' },
      { number: 15, title: 'Life on Land', description: 'Protect, restore, and promote sustainable use of terrestrial ecosystems.' }
    ]
  },
  {
    category: 'PROSPERITY',
    color: 'cyan',
    sdgs: [
      { number: 8, title: 'Decent Work & Economic Growth', description: 'Promote sustained, inclusive, and sustainable economic growth and full employment.' },
      { number: 9, title: 'Industry, Innovation & Infrastructure', description: 'Build resilient infrastructure, promote inclusive industrialization, and foster innovation.' },
      { number: 10, title: 'Reduced Inequalities', description: 'Reduce inequality within and among countries.' },
      { number: 11, title: 'Sustainable Cities & Communities', description: 'Make cities and human settlements inclusive, safe, resilient, and sustainable.' }
    ]
  },
  {
    category: 'PARTNERSHIPS',
    color: 'purple',
    sdgs: [
      { number: 16, title: 'Peace, Justice & Strong Institutions', description: 'Promote peaceful societies, provide access to justice, and build effective institutions.' },
      { number: 17, title: 'Partnerships for the Goals', description: 'Strengthen the means of implementation and revitalize global partnerships.' }
    ]
  }
];
