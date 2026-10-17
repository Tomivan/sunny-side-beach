import { EventItem, EventKind } from '../types/content';
import { images } from './images';

export const eventKinds: EventKind[] = [
'Music & DJ',
'Entertainment',
'Special Gathering',
'Seasonal Promotion'];


// Placeholder events — replace with confirmed programming.
export const events: EventItem[] = [
{
  id: 'sunset-sessions',
  title: 'Sunset Sessions',
  kind: 'Music & DJ',
  dateLabel: 'Date to be announced',
  timeLabel: 'Around sunset',
  description: 'DJ sets on the sand as the sky turns gold. Included with your regular Sunny Side entry.',
  image: images.dj,
  isPlaceholder: true
},
{
  id: 'beach-social',
  title: 'Sunday Beach Social',
  kind: 'Special Gathering',
  dateLabel: 'Date to be announced',
  timeLabel: 'Afternoon',
  description: 'Bring your crew for a long afternoon of food, drinks and good company by the water.',
  image: images.sunset,
  isPlaceholder: true
},
{
  id: 'acoustic-afternoons',
  title: 'Live Acoustic Afternoons',
  kind: 'Entertainment',
  dateLabel: 'Date to be announced',
  timeLabel: 'Afternoon',
  description: 'Mellow live sets at the bar while you settle into a lounger.',
  image: images.bar,
  isPlaceholder: true
},
{
  id: 'seasonal-offer',
  title: 'Seasonal Sunshine Offer',
  kind: 'Seasonal Promotion',
  dateLabel: 'Season to be announced',
  timeLabel: 'All day',
  description: 'A limited-time treat for guests — details will be shared here first.',
  image: images.cocktails,
  isPlaceholder: true
}];