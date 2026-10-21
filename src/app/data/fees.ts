import { FeeTier } from '../types/content';

export const feeTiers: FeeTier[] = [
{ id: 'adult', label: 'Adults', description: 'Per adult guest', gateFee: 5000, minimumSpend: 15000 },
{ id: 'kid', label: 'Kids / Teens', description: 'Per kid or teen', gateFee: 2500, minimumSpend: 0 },
{ id: 'infant', label: 'Infants', description: 'Little ones go free', gateFee: 0, minimumSpend: 0 },
{ id: 'cabana', label: 'Cabana', description: 'Shaded private cabana', gateFee: 5000, minimumSpend: 150000 }];


export const feeNotice = "Outside food and drinks aren't allowed in.";