import { GalleryCategory, GalleryItem } from '../types/content';
import { images } from './images';

export const galleryCategories: GalleryCategory[] = [
'Beach',
'Dining',
'Food & Drinks',
'Cabanas',
'Sunset',
'Gatherings'];


export const galleryItems: GalleryItem[] = [
{ id: 'g-beach', src: images.hero, alt: 'Thatched cabanas and daybeds along the shoreline at golden hour', category: 'Beach' },
{ id: 'g-cocktails', src: images.cocktails, alt: 'Two signature cocktails on the bar at sunset', category: 'Food & Drinks' },
{ id: 'g-cabanas', src: images.cabanas, alt: 'Cream canvas cabanas with cushioned daybeds', category: 'Cabanas' },
{ id: 'g-sunset', src: images.sunset, alt: 'Friends sharing drinks on the beach as the sun goes down', category: 'Sunset' },
{ id: 'g-dining', src: images.restaurant, alt: 'Tables set for lunch with ocean views', category: 'Dining' },
{ id: 'g-seafood', src: images.seafood, alt: 'Grilled seafood platter with prawns, fish and plantain', category: 'Food & Drinks' },
{ id: 'g-dj', src: images.dj, alt: 'Evening DJ set on the sand under string lights', category: 'Gatherings' },
{ id: 'g-loungers', src: images.loungers, alt: 'Loungers and parasols on golden sand', category: 'Beach' },
{ id: 'g-mocktail', src: images.mocktail, alt: 'Pineapple and mint mocktail over ice', category: 'Food & Drinks' },
{ id: 'g-bar', src: images.bar, alt: 'Bartender pouring drinks at the open-air bar', category: 'Dining' }];