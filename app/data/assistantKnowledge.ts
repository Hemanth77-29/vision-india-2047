import { INDIA_TODAY_INDICATORS } from './indicatorData';
import { PRIMARY_SOURCES } from './sources';
import type { SessionQuestion } from './questionSessions';

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


export type QuizQuestion = SessionQuestion & { question: string; choices: string[]; correct: number; explanation: string };
export type VivaQuestion = SessionQuestion & { prompt: string; answer: string; guidance: string; source: { name: string; url: string; dateOrYear?: string } };
let quizRowIndex=0;
const q=(id:string,topic:string,question:string,choices:string[],explanation:string):QuizQuestion=>{const correct=quizRowIndex++%3;const options=[...choices.slice(1)];options.splice(correct,0,choices[0]);return{id,topic,question,choices:options,correct,explanation};};
export const QUIZ_QUESTIONS: QuizQuestion[] = [
q('q-city','Smart City Builder','The city builder is best understood as…',['An illustrative simulation','An official cost estimate','A forecast'],'Its values illustrate trade-offs, not official estimates.'),
q('q-nonfossil','Energy','Non-fossil capacity includes…',['Nuclear capacity','Only solar and wind','A 2030 target'],'Nuclear is included in non-fossil, while renewables are reported separately.'),
q('q-sdg-groups','SDGs','The site’s four-part SDG grouping is…',['A conceptual learning aid','An official UN classification','A replacement for 17 goals'],'The page labels it conceptual, not an official UN classification.'),
q('q-adaptation','Strategies','How should international examples inform India’s planning?',['Adapt lessons to context','Copy unchanged','Ignore institutions'],'They are comparisons, not direct templates.'),
q('q-tfr','Demographics','What TFR is reported from NFHS-5?',['2.0 children per woman','2.1 children per woman','3.0 children per woman'],'The site reports 2.0 for the 2019–21 survey.'),
q('q-replacement','Demographics','What replacement benchmark is shown?',['2.1 children per woman','1.0 children per woman','3.5 children per woman'],'The demographic section uses 2.1 as a mathematical benchmark.'),
q('q-momentum','Demographics','Why can population grow below replacement fertility?',['Population momentum','The benchmark changes yearly','Fertility is unrelated'],'A large cohort entering family-building ages can sustain births.'),
q('q-peak','Demographics','When is India’s population projected to peak in UN WPP 2024?',['Around 2062','In 2024','Exactly in 2047'],'The page labels around 2062 as a projection.'),
q('q-dividend','Demographics','What creates a potential demographic dividend?',['A high working-age share','Guaranteed growth','Declining services'],'It is an opportunity, not automatic; enabling policies matter.'),
q('q-sdg-count','SDGs','How many goals are in the UN SDG framework?',['17','4','16'],'The site describes 17 goals and a separate conceptual grouping.'),
q('q-circular','Sustainability','Which practice is central to a circular economy?',['Reuse, repair and recycling','Use once then discard','Increase virgin extraction'],'Circular approaches keep materials in use and reduce waste.'),
q('q-green','Sustainability','The green-economy description combines wellbeing with…',['Lower environmental risks and resource efficiency','Unlimited resource use','Only short-term output'],'It is described as low-carbon, resource-efficient and inclusive.'),
q('q-mission','Smart City Builder','Which approaches are in the Smart Cities Mission framework?',['Area-based development and pan-city solutions','Only new cities','Only rural services'],'The site identifies area-based improvement and pan-city solutions.'),
q('q-priority','Smart City Builder','What does the builder’s planning priority affect?',['Illustrative score weighting','Official city budget','Measured national data'],'The priority changes the simulation weighting only.'),
q('q-systems','Smart City Builder','Which combination appears in the builder toolbox?',['Energy, mobility, water and digital systems','Only highways','Only housing prices'],'The toolbox spans connected urban systems.'),
q('q-ppp-risk','PPP','What should a PPP agreement make clear?',['Responsibilities, risks and performance obligations','Private delivery always costs less','No oversight needed'],'The site emphasizes risk allocation, affordability and oversight.'),
q('q-ppp-appraisal','PPP','Is a PPP automatically better or cheaper than public delivery?',['No; appraisal and oversight are needed','Yes, always','Only for large projects'],'Results depend on preparation and contract design.'),
q('q-devolution','Governance','What shapes the actual division of municipal functions?',['State law and devolution','One identical arrangement','The builder score'],'The constitutional framework exists; actual powers depend on state law.'),
q('q-capacity','Governance','What should accompany local responsibilities?',['Authority, resources, capacity and accountability','Responsibility without funding','Only a slogan'],'The site links responsibilities to resources and capacity.'),
q('q-singapore','Strategies','Which Singapore policy example appears on the site?',['Green Plan 2030','Society 5.0','Delta Programme'],'Singapore’s Green Plan 2030 is a comparative example.'),
q('q-japan','Strategies','Which example connects digital and physical systems around social needs?',['Japan’s Society 5.0','Singapore’s Green Plan','Delta Programme'],'The site describes Society 5.0 as people-centred.'),
q('q-delta','Strategies','The Netherlands’ Delta Programme focuses on…',['Water safety, freshwater and resilient land use','Quiz design','Fertility'],'It concerns long-term water and spatial planning.'),
q('q-future','Future India','How are the Future India pathways described?',['Discussion lenses, not forecasts or targets','Guaranteed outcomes','Current statistics'],'The page explicitly says they are discussion pathways.'),
q('q-capabilities','Future India','What matches the “Capabilities for all” lens?',['Education, health, decent work and services','Only exports','Only city construction'],'It connects human capabilities and essential services.'),
q('q-indore','Case studies','Which parts are connected in the Indore waste case?',['Sorting, collection and treatment','Only landfill','Only awareness'],'The case connects sorting, collection and processing.'),
q('q-case-structure','Case studies','What structure do the case studies use?',['Problem, approach, stakeholders, outcome and lesson','Only city and ranking','Budget and forecast'],'Each case follows a problem-to-lesson structure.'),
q('q-curitiba','Case studies','What relationship does the Curitiba case highlight?',['Transit and land use','Energy and fertility','Schools and GDP'],'It centres on transit-oriented development and urban growth.'),
q('q-target','Energy','The 500 GW figure refers to what 2030 commitment?',['Non-fossil installed electric capacity','Achieved renewable capacity','Monthly generation'],'It is a target, distinct from the current baseline.'),
q('q-index','SDGs','What SDG India Index score is reported for 2023–24?',['71/100','100/100','66/100'],'The dashboard reports 71/100 for that edition.'),
q('q-tradeoffs','Integrated development','Why use integrated rather than siloed planning?',['Choices in one dimension affect others','Every policy has one outcome','It removes need for evidence'],'Integration makes dependencies and trade-offs visible.'),
q('q-capacity-terms','Energy','Which statement distinguishes renewable and non-fossil capacity?',['Non-fossil includes nuclear','They always mean the same','Non-fossil means solar only'],'The site reports separate totals; non-fossil includes nuclear.')
];
const v=(id:string,topic:string,prompt:string,answer:string,guidance:string,sourceKey:keyof typeof PRIMARY_SOURCES):VivaQuestion=>({id,topic,prompt,answer,guidance,source:PRIMARY_SOURCES[sourceKey]});
export const VIVA_QUESTIONS: VivaQuestion[] = [
v('v-integration','Integrated development','Why integrate social, economic and environmental goals?','Decisions in each area affect others; integration makes shared benefits, dependencies and trade-offs visible.','Mention cross-effects and trade-offs.','unSdgs'),
v('v-mission','Smart City Builder','How does the Smart Cities Mission describe its approach?','Area-based development and pan-city smart solutions; the site builder is illustrative, not an official estimate.','Name both approaches and distinguish the simulation.','mohuaSmartCities'),
v('v-energy','Energy','Explain a distinction between renewable and non-fossil capacity.','Non-fossil includes nuclear; renewable is distinct. The site dates its figures to October 2024.','Explain nuclear’s inclusion and give the date.','mnrePanchamrit'),
v('v-adaptation','Strategies','Why are international examples not direct templates for India?','They arise under different institutions and conditions, so useful lessons need adaptation.','Mention local context and adaptation.','nitiViksit'),
v('v-fertility','Demographics','What TFR and source period does the site report?','2.0 children per woman in NFHS-5, conducted in 2019–21.','Include value, unit and survey period.','nfhs5'),
v('v-momentum','Demographics','How can population momentum sustain growth below replacement fertility?','A large cohort entering family-building ages can sustain births despite smaller average family size.','Connect age structure to continued births.','unWpp'),
v('v-peak','Demographics','What population peak is shown as a UN WPP 2024 projection?','About 1.70 billion around 2062, followed by projected gradual decline.','Give approximate timing and label it projected.','unWpp'),
v('v-dividend','Demographics','Why is the demographic dividend not automatic?','A high working-age share is an opportunity; outcomes depend on education, health, skills and jobs.','Name at least one enabling condition.','unWpp'),
v('v-sdgs','SDGs','How does the site group SDGs, and what caveat applies?','The 17 goals are grouped as People, Planet, Prosperity and Partnerships for learning, not as an official UN classification.','Name the groups and caveat.','unSdgs'),
v('v-circular','Sustainability','How does a circular economy differ from take-make-dispose?','It keeps materials useful longer through reuse, repair and recycling, reducing waste.','Contrast disposal with circular practices.','ellenMacArthur'),
v('v-green','Sustainability','What characterizes the green economy described on the site?','Improved wellbeing and equity with lower environmental risks; it is low-carbon and resource-efficient.','Mention wellbeing and resource efficiency.','unepGreenEconomy'),
v('v-city-values','Smart City Builder','What should users understand about the builder’s budget and indicators?','They are fictional learning values, not official budgets, measured statistics or forecasts.','Distinguish simulation from empirical values.','mohuaSmartCities'),
v('v-systems','Smart City Builder','Name systems users can connect in the city builder.','Energy, mobility, water, public services, environment and digital infrastructure.','Name at least three connected systems.','mohuaSmartCities'),
v('v-ppp-risk','PPP','What should a PPP arrangement clarify?','Responsibilities, risk allocation, performance obligations, affordability and oversight.','Mention risk and accountability.','deaPppGuidelines'),
v('v-ppp-value','PPP','Why is a PPP not automatically better or cheaper?','It requires preparation, risk allocation, affordability checks and contract oversight.','Give one appraisal concern.','deaPppGuidelines'),
v('v-devolution','Governance','How do constitutional provisions relate to state law for municipal functions?','The Constitution provides for municipalities; actual powers and devolution are shaped by state law.','Distinguish framework from implementation.','indiaConstitution'),
v('v-local','Governance','What should accompany responsibilities assigned to local institutions?','Clear authority, predictable resources, technical capacity and public accountability.','Mention resources and capacity.','indiaConstitution'),
v('v-singapore','Strategies','What planning idea does Singapore’s Green Plan illustrate?','It joins nature, energy, daily life, economy and resilience; lessons need adapting to India.','Describe linked priorities and adaptation.','singaporeGreenPlan'),
v('v-society','Strategies','What does Japan’s Society 5.0 emphasize?','Connecting digital and physical systems to address social needs with people at the centre.','Mention connection and human-centred purpose.','japanSociety5'),
v('v-delta','Strategies','What connected issues appear in the Netherlands’ Delta Programme?','Water safety, freshwater planning and climate-resilient land use over time.','Name water plus another planning area.','netherlandsDelta'),
v('v-future','Future India','How should users interpret the Future India pathways?','As planning lenses, not guaranteed outcomes, forecasts or official targets.','Distinguish a lens from a prediction.','nitiViksit'),
v('v-capabilities','Future India','Which issues are connected by “Capabilities for all”?','Education, health, decent work and essential services, with attention to participation in growth.','Name multiple areas and link to inclusion.','nitiViksit'),
v('v-indore','Case studies','Which service elements are connected in the Indore waste case?','Household sorting, reliable collection and waste processing.','Describe the service chain.','indoreWasteCase'),
v('v-biocng','Case studies','What lesson does the Indore Bio-CNG PPP case invite?','A partnership can connect waste-service goals and private delivery, while requiring clear outcomes and oversight.','Mention public goals and accountability.','indorePppCase'),
v('v-curitiba','Case studies','What planning relationship does the Curitiba case highlight?','Transit-oriented development and urban growth show how transport and land use can be coordinated.','Connect transit and land use.','curitibaCase'),
v('v-cases','Case studies','What structure can readers use to analyze the case studies?','Problem, integrated approach, stakeholders, outcome and lesson, read in local context.','Give the sequence and mention context.','indoreWasteCase'),
v('v-target','Energy','How should the 500 GW figure be described?','A 2030 target for non-fossil installed electric capacity, not an achieved renewable total.','Include year, measure and status.','mnrePanchamrit'),
v('v-index','SDGs','What score and period does the site report for the SDG India Index?','71 out of 100 for the 2023–24 edition.','Include score and period.','nitiSdg'),
v('v-tradeoffs','Integrated development','What does integrated planning make visible?','Dependencies, shared benefits and trade-offs across social, economic, environmental and institutional dimensions.','Mention interactions and trade-offs.','unSdgs'),
v('v-capacity-terms','Energy','Why should renewable and non-fossil figures not be interchangeable?','Non-fossil includes nuclear while renewable is distinct; the site reports separate dated totals.','Identify nuclear and separate measures.','mnrePanchamrit')
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
