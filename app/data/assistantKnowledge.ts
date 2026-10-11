import { INDIA_TODAY_INDICATORS } from './indicatorData';
import { PRIMARY_SOURCES } from './sources';

export type AssistantAnswer = {
  title: string;
  answer: string;
  sectionId: string;
  keywords: string[];
  sources: { name: string; url: string; date?: string }[];
};

const indicatorSection: Record<string, string> = {
  'ind-population': 'india-today', 'ind-fertility': 'demographics',
  'ind-gdp': 'india-today', 'ind-urbanisation': 'india-today',
  'ind-renewable': 'india-today', 'ind-sdg-index': 'integrated-pillars',
};

const indicatorEntries: AssistantAnswer[] = INDIA_TODAY_INDICATORS.map((item) => ({
  title: item.title,
  answer: `${item.value} ${item.unit}. Reference period: ${item.year}. ${item.description}`,
  sectionId: indicatorSection[item.id] ?? 'india-today',
  keywords: [item.title, item.category, item.unit, item.year, item.description],
  sources: [{ name: item.source.name, url: item.source.url, date: item.source.dateOrYear }],
}));

export const ASSISTANT_KNOWLEDGE: AssistantAnswer[] = [
  ...indicatorEntries,
  {
    title: 'Integrated development',
    answer: 'Integrated development considers social outcomes, economic opportunity, environmental resilience and capable institutions together. Choices in one area can affect the others, so plans should make trade-offs and shared benefits visible.',
    sectionId: 'integrated-pillars', keywords: ['integrated development', 'people planet prosperity', 'pillars', 'sustainability', 'interdependence'],
    sources: [{ name: PRIMARY_SOURCES.unSdgs.name, url: PRIMARY_SOURCES.unSdgs.url, date: PRIMARY_SOURCES.unSdgs.dateOrYear }],
  },
  {
    title: 'Renewable and non-fossil capacity',
    answer: 'The site reports October 2024 installed capacity as 203.18 GW renewable, and 211.36 GW non-fossil when nuclear is included. These are distinct measures; the 500 GW figure is a 2030 non-fossil target, not an achieved value.',
    sectionId: 'india-today', keywords: ['renewable', 'non fossil', 'nuclear', 'solar', 'wind', 'energy', 'power', '500 gw', 'target'],
    sources: [{ name: PRIMARY_SOURCES.mnrePanchamrit.name, url: PRIMARY_SOURCES.mnrePanchamrit.url, date: PRIMARY_SOURCES.mnrePanchamrit.dateOrYear }],
  },
  {
    title: 'Sustainable Development Goals',
    answer: 'The United Nations framework has 17 Sustainable Development Goals. The site groups related goals under People, Planet, Prosperity and Partnerships as a learning aid; this grouping is conceptual, not the UN’s official classification.',
    sectionId: 'integrated-pillars', keywords: ['sdg', 'sdgs', 'sustainable development goals', 'un goals', 'people planet prosperity partnerships'],
    sources: [{ name: PRIMARY_SOURCES.unSdgs.name, url: PRIMARY_SOURCES.unSdgs.url, date: PRIMARY_SOURCES.unSdgs.dateOrYear }],
  },
  {
    title: 'Smart Cities Mission',
    answer: 'The Smart Cities Mission uses area-based development and pan-city smart solutions. The builder on this site is an illustrative planning simulation: its costs and impact indicators are not official project estimates or forecasts.',
    sectionId: 'smart-city', keywords: ['smart city', 'smart cities', 'urban', 'city builder', 'simulation', 'infrastructure', 'budget'],
    sources: [{ name: PRIMARY_SOURCES.mohuaSmartCities.name, url: PRIMARY_SOURCES.mohuaSmartCities.url, date: PRIMARY_SOURCES.mohuaSmartCities.dateOrYear }],
  },
  {
    title: 'Public-private partnerships',
    answer: 'A public-private partnership is a project arrangement in which public and private parties define responsibilities, risks and performance obligations. Project preparation and appraisal matter; a PPP is not automatically cheaper or more effective than public delivery.',
    sectionId: 'ppp', keywords: ['ppp', 'public private partnership', 'private finance', 'risk', 'contracts', 'appraisal'],
    sources: [{ name: PRIMARY_SOURCES.deaPppGuidelines.name, url: PRIMARY_SOURCES.deaPppGuidelines.url, date: PRIMARY_SOURCES.deaPppGuidelines.dateOrYear }],
  },
  {
    title: 'Local government and decentralization',
    answer: 'Municipal institutions and their functions are set out in Part IX-A and the Twelfth Schedule of the Constitution. Actual responsibilities depend on applicable state law and the extent of devolution.',
    sectionId: 'decentralization', keywords: ['local government', 'decentralization', 'decentralisation', 'municipality', 'municipal', 'governance', 'twelfth schedule'],
    sources: [{ name: PRIMARY_SOURCES.indiaConstitution.name, url: PRIMARY_SOURCES.indiaConstitution.url, date: PRIMARY_SOURCES.indiaConstitution.dateOrYear }],
  },
  {
    title: 'Strategies for a Developed India',
    answer: 'The strategy section compares approaches from other countries while emphasizing that policies need adaptation to India’s institutions, geography and local needs. Its examples include Singapore’s Green Plan, Japan’s Society 5.0 and the Netherlands’ Delta Programme.',
    sectionId: 'strategies', keywords: ['developed india', 'strategies', 'international comparison', 'singapore', 'japan', 'netherlands', 'green plan', 'society 5.0', 'delta programme'],
    sources: [
      { name: PRIMARY_SOURCES.singaporeGreenPlan.name, url: PRIMARY_SOURCES.singaporeGreenPlan.url },
      { name: PRIMARY_SOURCES.japanSociety5.name, url: PRIMARY_SOURCES.japanSociety5.url },
      { name: PRIMARY_SOURCES.netherlandsDelta.name, url: PRIMARY_SOURCES.netherlandsDelta.url },
    ],
  },
  {
    title: 'Circular economy',
    answer: 'A circular economy aims to reduce waste and keep products and materials in use through strategies such as reuse, repair and recycling. It complements, rather than replaces, safe production and consumption choices.',
    sectionId: 'integrated-pillars', keywords: ['circular economy', 'waste', 'recycling', 'reuse', 'repair', 'materials'],
    sources: [{ name: PRIMARY_SOURCES.ellenMacArthur.name, url: PRIMARY_SOURCES.ellenMacArthur.url, date: PRIMARY_SOURCES.ellenMacArthur.dateOrYear }],
  },
  {
    title: 'Case studies',
    answer: 'The case studies use a common structure: problem, integrated approach, stakeholders, outcome and lesson. They are examples for analysis, not universal templates; outcomes should be read in the context and source linked with each case.',
    sectionId: 'case-studies', keywords: ['case study', 'case studies', 'indore', 'curitiba', 'examples', 'lesson', 'outcome'],
    sources: [
      { name: PRIMARY_SOURCES.indoreWasteCase.name, url: PRIMARY_SOURCES.indoreWasteCase.url },
      { name: PRIMARY_SOURCES.curitibaCase.name, url: PRIMARY_SOURCES.curitibaCase.url },
    ],
  },
  {
    title: 'Future trends',
    answer: 'The Future India section explores pathways as planning scenarios, not numeric predictions. The outcomes depend on policy choices, institutions, resources and changing conditions.',
    sectionId: 'future', keywords: ['future trends', 'future india', 'pathways', 'scenario', '2047', 'projection'],
    sources: [{ name: PRIMARY_SOURCES.nitiViksit.name, url: PRIMARY_SOURCES.nitiViksit.url, date: PRIMARY_SOURCES.nitiViksit.dateOrYear }],
  },
];

export const QUIZ_QUESTIONS = [
  { question: 'The site’s city builder is best understood as…', choices: ['An illustrative simulation', 'An official cost estimate', 'A forecast of city outcomes'], correct: 0, explanation: 'Its budget and indicator changes illustrate trade-offs; they are not official estimates or forecasts.', keywords: ['smart city', 'simulation'] },
  { question: 'The October 2024 non-fossil capacity figure includes…', choices: ['Nuclear capacity', 'Only solar and wind', 'A 2030 target'], correct: 0, explanation: 'The site distinguishes 203.18 GW renewable from 211.36 GW non-fossil, which includes nuclear.', keywords: ['energy', 'renewable'] },
  { question: 'Which statement about the SDG grouping on this site is correct?', choices: ['It is a conceptual learning aid', 'It replaces the UN framework', 'It contains only four SDGs'], correct: 0, explanation: 'The site’s People, Planet, Prosperity and Partnerships grouping is conceptual; the UN framework has 17 goals.', keywords: ['sdg'] },
  { question: 'What should be considered when comparing international policy examples?', choices: ['Adaptation to local context', 'Copying the policy unchanged', 'Ignoring institutions'], correct: 0, explanation: 'The strategies section presents examples for comparison, not direct templates for India.', keywords: ['strategies'] },
];

export const VIVA_QUESTIONS = [
  { prompt: 'Why should development planning integrate social, economic and environmental goals?', keywords: ['integrated'], answer: 'Because decisions in each area affect the others. Integrated planning makes shared benefits, dependencies and trade-offs visible.', source: PRIMARY_SOURCES.unSdgs },
  { prompt: 'How does the Smart City Mission describe its approach?', keywords: ['smart city'], answer: 'Through area-based development and pan-city smart solutions. This site’s city builder is an illustrative simulation, not an official project estimate.', source: PRIMARY_SOURCES.mohuaSmartCities },
  { prompt: 'What is one key distinction between renewable and non-fossil power capacity?', keywords: ['energy'], answer: 'Non-fossil capacity includes nuclear; renewable capacity is a separate measure. The site labels both figures and dates them to October 2024.', source: PRIMARY_SOURCES.mnrePanchamrit },
  { prompt: 'Why are international development examples not direct templates?', keywords: ['strategies'], answer: 'They were developed under different institutions and conditions, so any lesson needs adaptation to India’s local context.', source: PRIMARY_SOURCES.nitiViksit },
];

const SYNONYMS: Record<string, string[]> = {
  population: ['demographic', 'people', 'ageing', 'aging'], fertility: ['tfr', 'birth', 'children'],
  jobs: ['employment', 'labour', 'labor', 'work'], education: ['school', 'learning', 'aishe'],
  health: ['healthcare', 'hospital'], energy: ['renewable', 'solar', 'wind', 'power', 'non fossil'],
  climate: ['sustainability', 'planet', 'net zero'], economy: ['gdp', 'prosperity'],
  city: ['urban', 'municipal', 'smart city'],
};

export function findAssistantAnswers(question: string): AssistantAnswer[] {
  const query = question.toLowerCase().trim();
  if (query.length < 3) return [];
  const terms = new Set(query.split(/[^a-z0-9]+/).filter((term) => term.length > 2));
  for (const [key, synonyms] of Object.entries(SYNONYMS)) {
    if (terms.has(key) || synonyms.some((word) => query.includes(word))) {
      terms.add(key);
      synonyms.forEach((word) => terms.add(word));
    }
  }
  const ranked = ASSISTANT_KNOWLEDGE.map((entry) => {
    const text = `${entry.title} ${entry.answer} ${entry.keywords.join(' ')}`.toLowerCase();
    let score = 0;
    for (const term of terms) if (text.includes(term)) score += entry.title.toLowerCase().includes(term) ? 3 : 1;
    if (query.length > 5 && text.includes(query)) score += 5;
    return { entry, score };
  }).sort((a, b) => b.score - a.score);
  if (!ranked.length || ranked[0].score < 2) return [];
  const selected = ranked.filter((item) => item.score >= Math.max(2, ranked[0].score * 0.55));
  const concise = selected.filter((item, index) => !selected.slice(0, index).some(({ entry }) => {
    const first = entry.title.toLowerCase();
    const second = item.entry.title.toLowerCase();
    return first.includes(second) || second.includes(first);
  }));
  return concise.slice(0, 2).map(({ entry }) => entry);
}
