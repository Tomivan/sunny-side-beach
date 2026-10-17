export type ArrivalSlot = 'morning' | 'midday' | 'afternoon' | 'sunset' | 'flexible';

export type SeatingPreference = 'none' | 'cabana' | 'beach' | 'dining';

export interface VisitDetails {
  date: string;
  arrival: ArrivalSlot;
  adults: number;
  kids: number;
  infants: number;
  seating: SeatingPreference;
}

export interface GuestDetails {
  fullName: string;
  email: string;
  phone: string;
  requests: string;
  agreed: boolean;
}

export type VisitErrors = Partial<Record<'date' | 'guests', string>>;

export type GuestErrors = Partial<Record<'fullName' | 'email' | 'phone' | 'agreed', string>>;

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
  hint: string;
}