import {
  SMART_CITY_INFRASTRUCTURE_CATALOG,
  INITIAL_SIMULATION_BUDGET_CR,
  CITY_GOALS,
  CityGoal
} from '../data/smartCity';

export interface InfrastructureSelection {
  [itemId: string]: number; // itemId -> count
}

export interface SimulationResult {
  budgetUsedCr: number;
  budgetRemainingCr: number;
  totalItemsCount: number;
  goal: CityGoal;
  indicators: {
    cleanEnergy: number;
    publicTransport: number;
    greenCover: number;
    waterEfficiency: number;
    wasteManagement: number;
    wellbeing: number;
    digitalInfra: number;
    economicActivity: number;
  };
  overallSynergyScore: number;
  feedbackSummary: string;
}

export function calculateSmartCitySimulation(
  selections: InfrastructureSelection,
  goalId: string = 'balanced'
): SimulationResult {
  let budgetUsedCr = 0;
  let totalItemsCount = 0;

  const rawIndicators = {
    cleanEnergy: 10, // baseline 10%
    publicTransport: 10,
    greenCover: 10,
    waterEfficiency: 10,
    wasteManagement: 10,
    wellbeing: 15,
    digitalInfra: 10,
    economicActivity: 15
  };

  // 1. Calculate budget & raw indicator sums
  Object.entries(selections).forEach(([itemId, count]) => {
    if (count <= 0) return;
    const item = SMART_CITY_INFRASTRUCTURE_CATALOG.find((i) => i.id === itemId);
    if (!item) return;

    budgetUsedCr += item.costCr * count;
    totalItemsCount += count;

    const imp = item.impacts;
    if (imp.cleanEnergy) rawIndicators.cleanEnergy += imp.cleanEnergy * count;
    if (imp.publicTransport) rawIndicators.publicTransport += imp.publicTransport * count;
    if (imp.greenCover) rawIndicators.greenCover += imp.greenCover * count;
    if (imp.waterEfficiency) rawIndicators.waterEfficiency += imp.waterEfficiency * count;
    if (imp.wasteManagement) rawIndicators.wasteManagement += imp.wasteManagement * count;
    if (imp.wellbeing) rawIndicators.wellbeing += imp.wellbeing * count;
    if (imp.digitalInfra) rawIndicators.digitalInfra += imp.digitalInfra * count;
    if (imp.economicActivity) rawIndicators.economicActivity += imp.economicActivity * count;
  });

  const budgetRemainingCr = Math.max(0, INITIAL_SIMULATION_BUDGET_CR - budgetUsedCr);
  const selectedGoal = CITY_GOALS.find((g) => g.id === goalId) || CITY_GOALS[0];

  // A priority changes the score's emphasis, never the underlying indicators.
  const finalIndicators = {
    cleanEnergy: Math.min(100, rawIndicators.cleanEnergy),
    publicTransport: Math.min(100, rawIndicators.publicTransport),
    greenCover: Math.min(100, rawIndicators.greenCover),
    waterEfficiency: Math.min(100, rawIndicators.waterEfficiency),
    wasteManagement: Math.min(100, rawIndicators.wasteManagement),
    wellbeing: Math.min(100, rawIndicators.wellbeing),
    digitalInfra: Math.min(100, rawIndicators.digitalInfra),
    economicActivity: Math.min(100, rawIndicators.economicActivity)
  };

  const weights: Record<keyof typeof finalIndicators, number> = {
    cleanEnergy: selectedGoal.id === 'green' ? 2 : 1,
    publicTransport: selectedGoal.id === 'connected' ? 2 : 1,
    greenCover: selectedGoal.id === 'green' || selectedGoal.id === 'healthy' ? 2 : 1,
    waterEfficiency: selectedGoal.id === 'green' || selectedGoal.id === 'healthy' ? 2 : 1,
    wasteManagement: 1,
    wellbeing: selectedGoal.id === 'healthy' ? 2 : 1,
    digitalInfra: selectedGoal.id === 'connected' ? 2 : 1,
    economicActivity: selectedGoal.id === 'connected' ? 2 : 1
  };
  const weightedTotal = (Object.keys(finalIndicators) as (keyof typeof finalIndicators)[])
    .reduce((total, key) => total + finalIndicators[key] * weights[key], 0);
  const totalWeight = Object.values(weights).reduce((total, weight) => total + weight, 0);
  const overallSynergyScore = Math.round(weightedTotal / totalWeight);

  let feedbackSummary = 'Add infrastructure items to start building your conceptual smart city.';
  if (totalItemsCount > 0) {
    if (overallSynergyScore >= 75) {
      feedbackSummary = `Excellent integrated planning under the ${selectedGoal.title} priority. High synergy across energy, transport, and citizen well-being.`;
    } else if (overallSynergyScore >= 50) {
      feedbackSummary = `Solid foundational city layout. Consider balancing environment or digital infrastructure to boost overall synergy under ${selectedGoal.title}.`;
    } else {
      feedbackSummary = `Initial city layout in progress. Add more mobility, energy, or environmental infrastructure items to expand city performance.`;
    }
  }

  return {
    budgetUsedCr,
    budgetRemainingCr,
    totalItemsCount,
    goal: selectedGoal,
    indicators: finalIndicators,
    overallSynergyScore,
    feedbackSummary
  };
}
