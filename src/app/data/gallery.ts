import { GalleryCategory, GalleryItem } from '../types/content';
import Hero from '../../../public/assets/images/hero.jpeg';
import Cocktails from '../../../public/assets/images/cocktails.jpeg';
import Cabanas from '../../../public/assets/images/cabanas.jpeg';
import SunsetImage from '../../../public/assets/images/sunset.jpeg';
import Seafood from '../../../public/assets/images/seafood.jpeg';
import Mocktail from '../../../public/assets/images/mocktails.jpeg';
import Loungers from '../../../public/assets/images/loungers.jpeg';
import Bar from '../../../public/assets/images/bar.jpeg';

export const galleryCategories: GalleryCategory[] = [
  'Beach',
  'Dining',
  'Food & Drinks',
  'Cabanas',
  'Sunset',
  'Gatherings',
];

export const galleryItems: GalleryItem[] = [
  { id: 'g-beach', src: Hero, alt: 'Thatched cabanas and daybeds along the shoreline at golden hour', category: 'Beach' },
  { id: 'g-cocktails', src: Cocktails, alt: 'Two signature cocktails on the bar at sunset', category: 'Food & Drinks' },
  { id: 'g-cabanas', src: Cabanas, alt: 'Cream canvas cabanas with cushioned daybeds', category: 'Cabanas' },
  { id: 'g-sunset', src: SunsetImage, alt: 'Friends sharing drinks on the beach as the sun goes down', category: 'Sunset' },
  { id: 'g-seafood', src: Seafood, alt: 'Grilled seafood platter with prawns, fish and plantain', category: 'Food & Drinks' },
  { id: 'g-loungers', src: Loungers, alt: 'Loungers and parasols on golden sand', category: 'Beach' },
  { id: 'g-mocktail', src: Mocktail, alt: 'Pineapple and mint mocktail over ice', category: 'Food & Drinks' },
  { id: 'g-bar', src: Bar, alt: 'Bartender pouring drinks at the open-air bar', category: 'Dining' }
];