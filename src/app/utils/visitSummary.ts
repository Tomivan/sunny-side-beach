import { feeTiers } from '../data/fees';
import { VisitDetails } from '../types/booking';
import { FeeTier, FeeTierId } from '../types/content';

export interface GateFeeLine {
  id: FeeTierId;
  label: string;
  count: number;
  unitFee: number;
  subtotal: number;
}

export interface VisitSummary {
  lines: GateFeeLine[];
  totalGuests: number;
  gateFeeTotal: number;
  minimumSpendTotal: number;
  adultMinimumSpend: number;
  cabana: FeeTier | null;
}

export function getFeeTier(id: FeeTierId): FeeTier {
  const tier = feeTiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Missing fee tier: ${id}`);
  return tier;
}

export function getVisitSummary(visit: Pick<VisitDetails, 'adults' | 'kids' | 'infants' | 'seating'>): VisitSummary {
  const adult = getFeeTier('adult');
  const kid = getFeeTier('kid');
  const infant = getFeeTier('infant');

  const lines: GateFeeLine[] = [
  { id: 'adult', label: adult.label, count: visit.adults, unitFee: adult.gateFee, subtotal: visit.adults * adult.gateFee },
  { id: 'kid', label: kid.label, count: visit.kids, unitFee: kid.gateFee, subtotal: visit.kids * kid.gateFee },
  { id: 'infant', label: infant.label, count: visit.infants, unitFee: infant.gateFee, subtotal: visit.infants * infant.gateFee }];


  const minimumSpendTotal =
  visit.adults * adult.minimumSpend + visit.kids * kid.minimumSpend + visit.infants * infant.minimumSpend;

  return {
    lines,
    totalGuests: visit.adults + visit.kids + visit.infants,
    gateFeeTotal: lines.reduce((sum, l) => sum + l.subtotal, 0),
    minimumSpendTotal,
    adultMinimumSpend: adult.minimumSpend,
    cabana: visit.seating === 'cabana' ? getFeeTier('cabana') : null
  };
}