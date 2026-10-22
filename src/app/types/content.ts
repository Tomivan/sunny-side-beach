import { StaticImageData } from 'next/image';

export type FeeTierId = 'adult' | 'kid' | 'infant' | 'cabana';

export interface FeeTier {
  id: FeeTierId;
  label: string;
  description: string;
  gateFee: number;
  minimumSpend: number;
}

export type MenuGroup = 'food' | 'drink';

export interface MenuCategory {
  id: string;
  label: string;
  group: MenuGroup;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  group: MenuGroup;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

export type GalleryCategory =
'Beach' |
'Dining' |
'Food & Drinks' |
'Cabanas' |
'Sunset' |
'Gatherings';

export interface GalleryItem {
  id: string;
  src: string | StaticImageData;
  alt: string;
  category: GalleryCategory;
}

export type EventKind =
'Music & DJ' |
'Entertainment' |
'Special Gathering' |
'Seasonal Promotion';

export interface EventItem {
  id: string;
  title: string;
  kind: EventKind;
  dateLabel: string;
  timeLabel: string;
  description: string;
  image: string | StaticImageData;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
  isPlaceholder: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  topic: 'fees' | 'visit';
}

export interface Experience {
  id: 'restaurant' | 'bar' | 'beach-club';
  name: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Amenity {
  label: string;
  confirmed: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}