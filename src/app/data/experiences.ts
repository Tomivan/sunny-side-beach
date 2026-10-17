import { Amenity, Experience } from '../types/content';
import { images } from './images';

export const experiences: Experience[] = [
{
  id: 'restaurant',
  name: 'Restaurant',
  title: 'Good Food, Ocean Views',
  summary: 'Long, lazy lunches and fresh plates served steps from the water.',
  image: images.restaurant,
  imageAlt: 'Beachfront tables set with grilled seafood and drinks overlooking the sea',
  href: '/experience#restaurant'
},
{
  id: 'bar',
  name: 'Bar',
  title: 'Sip Into Sunshine',
  summary: 'Signature cocktails, cool mocktails and the best seat for sunset.',
  image: images.bar,
  imageAlt: 'Open-air thatched beach bar with a bartender pouring a drink',
  href: '/experience#bar'
},
{
  id: 'beach-club',
  name: 'Beach Club',
  title: 'Find Your Sunny Side',
  summary: 'Cabanas, loungers, music and soft sand for the whole afternoon.',
  image: images.cabanas,
  imageAlt: 'Row of cream canvas cabanas with daybeds on the beach',
  href: '/experience#beach-club'
}];


export const seatingOptions = [
{
  name: 'Cabanas',
  detail: 'Shaded, private and made for groups who want a base for the day.'
},
{
  name: 'Beach lounging',
  detail: 'Stretch out on the sand with the sea right in front of you.'
},
{
  name: 'Dining by the water',
  detail: 'Tables close to the shoreline for long lunches and sunset dinners.'
}];


// Mark facilities as confirmed only once Sunny Side verifies them.
export const amenities: Amenity[] = [
{ label: 'Beachfront restaurant', confirmed: true },
{ label: 'Full bar', confirmed: true },
{ label: 'Cabanas', confirmed: true },
{ label: 'Beach lounging', confirmed: true },
{ label: 'Music & DJ sessions', confirmed: false },
{ label: 'Changing rooms', confirmed: false },
{ label: 'Showers', confirmed: false },
{ label: 'Parking', confirmed: false }];