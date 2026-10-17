import { MenuCategory, MenuItem } from '../types/content';
import { images } from './images';

// Sample menu — replace items and prices with the confirmed Sunny Side menu.
export const menuCategories: MenuCategory[] = [
{ id: 'small-plates', label: 'Small Plates', group: 'food' },
{ id: 'from-the-sea', label: 'From the Sea', group: 'food' },
{ id: 'grills', label: 'Grills & Mains', group: 'food' },
{ id: 'sides', label: 'Sides', group: 'food' },
{ id: 'cocktails', label: 'Signature Cocktails', group: 'drink' },
{ id: 'mocktails', label: 'Mocktails', group: 'drink' },
{ id: 'soft', label: 'Soft Drinks & More', group: 'drink' }];


export const menuItems: MenuItem[] = [
{ id: 'peppered-snail', name: 'Peppered Snail', description: 'Tender snails tossed in a smoky pepper sauce.', price: 9500, group: 'food', category: 'small-plates' },
{ id: 'suya-prawns', name: 'Suya Prawn Skewers', description: 'Charred prawns, yaji spice, sliced onions and lime.', price: 12000, group: 'food', category: 'small-plates', tags: ['Spicy'] },
{ id: 'calamari', name: 'Crispy Calamari', description: 'Lightly fried squid with a citrus-pepper dip.', price: 10500, group: 'food', category: 'small-plates' },
{ id: 'seafood-platter', name: 'Sunny Side Seafood Platter', description: 'Grilled prawns, catch of the day, dodo, peppers and herb sauce. Built for sharing.', price: 45000, group: 'food', category: 'from-the-sea', tags: ['To share'], image: images.seafood, featured: true },
{ id: 'catch', name: 'Grilled Catch of the Day', description: 'Whole or fillet, finished with lemon butter and fresh herbs.', price: 18000, group: 'food', category: 'from-the-sea', featured: true },
{ id: 'garlic-prawns', name: 'Garlic Butter Prawns', description: 'Pan-roasted prawns, garlic butter, toasted bread.', price: 17500, group: 'food', category: 'from-the-sea' },
{ id: 'jollof-chicken', name: 'Smoky Party Jollof & Chicken', description: 'Firewood-style jollof with grilled chicken and coleslaw.', price: 11000, group: 'food', category: 'grills' },
{ id: 'beef-suya', name: 'Beef Suya Plate', description: 'Thin-sliced spiced beef, onions, tomatoes and cabbage.', price: 9000, group: 'food', category: 'grills', tags: ['Spicy'] },
{ id: 'asun', name: 'Asun', description: 'Peppered grilled goat meat, a beach favourite.', price: 8500, group: 'food', category: 'grills' },
{ id: 'dodo', name: 'Fried Plantain', description: 'Sweet, caramelised dodo.', price: 3000, group: 'food', category: 'sides' },
{ id: 'chips', name: 'Seasoned Chips', description: 'Crisp fries with sea salt.', price: 3500, group: 'food', category: 'sides' },
{ id: 'coleslaw', name: 'Coleslaw', description: 'Creamy, crunchy and cool.', price: 2500, group: 'food', category: 'sides' },
{ id: 'spritz', name: 'Sunny Side Spritz', description: 'Bright, bubbly and citrusy — our house signature.', price: 9000, group: 'drink', category: 'cocktails', tags: ['Signature'], image: images.cocktails, featured: true },
{ id: 'coral-sunset', name: 'Coral Sunset', description: 'Rum, passion fruit, grenadine and lime.', price: 9500, group: 'drink', category: 'cocktails' },
{ id: 'driftwood', name: 'Driftwood Old Fashioned', description: 'Whiskey, bitters and a hint of orange.', price: 11000, group: 'drink', category: 'cocktails' },
{ id: 'ocean-breeze', name: 'Ocean Breeze', description: 'Vodka, blue curaçao, pineapple and coconut.', price: 9000, group: 'drink', category: 'cocktails' },
{ id: 'pineapple-cooler', name: 'Pineapple Mint Cooler', description: 'Fresh pineapple, mint and soda over crushed ice.', price: 5500, group: 'drink', category: 'mocktails', tags: ['Non-alcoholic'], image: images.mocktail, featured: true },
{ id: 'zobo-fizz', name: 'Zobo Fizz', description: 'Hibiscus, ginger and a splash of sparkling water.', price: 4500, group: 'drink', category: 'mocktails', tags: ['Non-alcoholic'] },
{ id: 'chapman', name: 'Classic Chapman', description: 'The fruity, fizzy Nigerian favourite.', price: 5000, group: 'drink', category: 'mocktails', tags: ['Non-alcoholic'] },
{ id: 'coconut', name: 'Fresh Coconut', description: 'Served chilled, straight from the shell.', price: 3500, group: 'drink', category: 'soft' },
{ id: 'soft-drinks', name: 'Soft Drinks', description: 'Assorted chilled sodas.', price: 1500, group: 'drink', category: 'soft' },
{ id: 'water', name: 'Still Water', description: 'Chilled bottled water.', price: 1000, group: 'drink', category: 'soft' }];