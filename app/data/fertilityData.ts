import { FertilityPoint } from '../types';

export const FERTILITY_TRANSITION_DATA: FertilityPoint[] = [
  {
    year: 1950,
    label: '1950',
    tfr: 5.9,
    type: 'historical',
    sourceName: 'UN WPP 2024',
    note: 'Post-independence era with high infant mortality and large family norms.'
  },
  {
    year: 1970,
    label: '1970',
    tfr: 5.4,
    type: 'historical',
    sourceName: 'UN WPP 2024',
    note: 'Initial national family planning campaigns launched.'
  },
  {
    year: 1990,
    label: '1990',
    tfr: 4.0,
    type: 'historical',
    sourceName: 'Sample Registration System (SRS)',
    note: 'Economic reforms and rising female literacy accelerate fertility reduction.'
  },
  {
    year: 2005,
    label: '2005',
    tfr: 2.9,
    type: 'historical',
    sourceName: 'NFHS-3 Survey (2005–06)',
    note: 'Rapid rural health expansion and urbanization.'
  },
  {
    year: 2015,
    label: '2015',
    tfr: 2.3,
    type: 'historical',
    sourceName: 'NFHS-4 Survey (2015–16)',
    note: 'Approaching natural replacement level.'
  },
  {
    year: 2021,
    label: '2019–21',
    tfr: 2.0,
    type: 'historical',
    sourceName: 'NFHS-5, 2019–21',
    note: 'Latest national survey: TFR: 2.0 children per woman (Source period: NFHS-5, 2019–21). National fertility observed below the 2.1 replacement level.'
  },
  {
    year: 2026,
    label: '2026 (Proj.)',
    tfr: 1.94,
    type: 'projection',
    sourceName: 'PROJECTION — UN World Population Prospects 2024',
    note: 'PROJECTION — UN World Population Prospects 2024: Medium-variant projection of 1.94 children per woman for 2026.'
  },
  {
    year: 2047,
    label: '2047 (Proj.)',
    tfr: 1.69,
    type: 'projection',
    sourceName: 'PROJECTION — UN World Population Prospects 2024',
    note: 'PROJECTION — UN World Population Prospects 2024: Centenary projection with stabilizing low fertility.'
  },
  {
    year: 2062,
    label: '2062 (Peak)',
    tfr: 1.66,
    type: 'projection',
    sourceName: 'PROJECTION — UN World Population Prospects 2024',
    note: 'PROJECTION — UN World Population Prospects 2024: Projected national population peak (~1.70 Billion around 2062).'
  },
  {
    year: 2100,
    label: '2100 (Proj.)',
    tfr: 1.52,
    type: 'projection',
    sourceName: 'PROJECTION — UN World Population Prospects 2024',
    note: 'PROJECTION — UN World Population Prospects 2024: Long-term population contraction to approximately 1.51 Billion.'
  }
];

export const REPLACEMENT_LEVEL_TFR = 2.1;
