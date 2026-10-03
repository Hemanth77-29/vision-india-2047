export type IndicatorDataType = 'current' | 'target' | 'projection' | 'simulation' | 'historical';

export interface DataSource {
  name: string;
  url: string;
  dateOrYear: string;
  publisher: string;
  notes?: string;
}

export interface IndicatorItem {
  id: string;
  title: string;
  category: string;
  value: string;
  unit: string;
  year: string;
  type: IndicatorDataType;
  statusLabel: string;
  description: string;
  source: DataSource;
  trend?: string;
  progressPercent?: number;
}

export interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'people' | 'planet' | 'prosperity';
  metricsSummary: string;
  colorAccent: 'emerald' | 'cyan' | 'amber';
}

export interface FertilityPoint {
  year: number;
  label: string;
  tfr: number;
  type: IndicatorDataType;
  sourceName: string;
  note: string;
}

export interface TimelinePeriod {
  year: string;
  title: string;
  tfr: string;
  medianAge: string;
  workingAgeShare: string;
  type: IndicatorDataType;
  keyPhenomena: string;
  policyFocus: string;
  population: string;
}

export interface ProjectionSliderPoint {
  year: number;
  label: string;
  totalPop: string;
  medianAge: number;
  workingAgePercent: number; // 15-64
  elderPercent: number; // 65+
  childPercent: number; // 0-14
  tfr: number;
  status: IndicatorDataType;
  summary: string;
}

export interface DividendEnabler {
  id: string;
  title: string;
  icon: string;
  description: string;
  currentStatus: string;
  keyStrategy: string;
}
