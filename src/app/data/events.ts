import { EventItem, EventKind } from '../types/content';
import WellnessImage from '../../../public/assets/images/wellness.jpeg';
import Wings from '../../../public/assets/images/wings.jpeg';

export const eventKinds: EventKind[] = [
'Music & DJ',
'Entertainment',
'Special Gathering',
'Seasonal Promotion'];

export const events: EventItem[] = [
{
  id: 'sunset-sessions',
  title: 'Wellness Sessions',
  kind: 'Special Gathering',
  dateLabel: 'Date to be announced',
  timeLabel: 'Around sunset',
  description: 'Move. Nourish. Connect. Unwind. Movement Guided by Flow Easy Wellness ',
  image: WellnessImage,
  isPlaceholder: true
},
{
  id: 'seasonal-offer',
  title: 'Wings & Tequila',
  kind: 'Entertainment',
  dateLabel: 'Every Wednesdays',
  timeLabel: '5pm - 8pm',
  description: 'Unlimited wings + tequila shots every Wednesday',
  image: Wings,
  isPlaceholder: true
}];