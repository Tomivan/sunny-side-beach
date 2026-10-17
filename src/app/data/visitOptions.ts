import { ArrivalSlot, SeatingPreference, SelectOption } from '../types/booking';

export const arrivalOptions: SelectOption<ArrivalSlot>[] = [
{ value: 'flexible', label: 'Flexible', hint: "We'll see you when we see you" },
{ value: 'morning', label: 'Morning', hint: 'Early sun, quiet sand' },
{ value: 'midday', label: 'Midday', hint: 'Lunch by the water' },
{ value: 'afternoon', label: 'Afternoon', hint: 'Long, lazy hours' },
{ value: 'sunset', label: 'Sunset', hint: 'Golden-hour drinks' }];


export const seatingPreferenceOptions: SelectOption<SeatingPreference>[] = [
{ value: 'none', label: 'No preference', hint: "We'll find you a sunny spot" },
{ value: 'cabana', label: 'Cabana interest', hint: 'Subject to availability' },
{ value: 'beach', label: 'Beach lounging', hint: 'Close to the sand and sea' },
{ value: 'dining', label: 'Dining by the water', hint: 'A table near the shoreline' }];


export const maxGuestsPerType = 20;