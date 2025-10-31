/**
 * Product Constants
 *
 * Mock product data for new arrivals section.
 * In production, this would come from an API or database.
 */

import { Product, CategoryFilter } from '../types/product';
import { publicUrl } from '../utils/paths';

export const NEW_ARRIVALS: Product[] = [
  {
    id: 1,
    name: 'Classic Round Two-Tone',
    price: 485.00,
            image: publicUrl('images/product_01.png'),
    colors: 7,
    category: 'Eyewear',
    collection: 'Heritage',
    badge: 'New Release',
    description: 'Handcrafted round-frame eyeglasses featuring a distinctive two-tone acetate design. The upper frame transitions from rich brown to golden amber, showcasing traditional Japanese craftsmanship.',
    type: 'Eyeglasses',
    material: 'Cellulose Acetate',
    availableSizes: ['50mm', '52mm', '54mm', '56mm'],
    availableColors: ['Brown/Amber', 'Tortoise', 'Black', 'Navy', 'Gray', 'Beige', 'Gold'],
    details: {
      frame: 'Two-tone acetate round frame',
      lens: 'Prescription-ready, anti-reflective coating available',
    },
  },
  {
    id: 2,
    name: 'Octagonal Blue Acetate',
    price: 525.00,
            image: publicUrl('images/product_02.png'),
    colors: 2,
    category: 'Eyewear',
    collection: 'Premium',
    description: 'Artisan-crafted octagonal frames in deep blue acetate with precision-cut angles. Features hand-polished surfaces and titanium temples for durability and comfort.',
    type: 'Eyeglasses',
    material: 'Cellulose Acetate',
    availableSizes: ['52mm', '54mm', '56mm'],
    availableColors: ['Navy Blue', 'Deep Blue'],
    details: {
      frame: 'Octagonal acetate frame with titanium temples',
      lens: 'Prescription-ready, blue light filtering available',
    },
  },
  {
    id: 3,
    name: 'Aviator Heritage Gold',
    price: 595.00,
            image: publicUrl('images/product_03.png'),
    colors: 3,
    category: 'Eyewear',
    collection: 'Heritage',
    description: 'Luxury aviator-style frames crafted from premium stainless steel with a hand-applied gold accent bar. Each pair is individually finished by master craftsmen in Japan.',
    type: 'Eyeglasses',
    material: 'Stainless Steel',
    availableSizes: ['54mm', '56mm', '58mm'],
    availableColors: ['Gold/Silver', 'Rose Gold', 'Gunmetal'],
    details: {
      frame: 'Stainless steel aviator with gold accent bar',
      lens: 'Prescription-ready, polarized lens option available',
    },
  },
  {
    id: 4,
    name: 'Double Bridge Aviator',
    price: 650.00,
            image: publicUrl('images/product_04.png'),
    colors: 2,
    category: 'Eyewear',
    collection: 'Premium',
    description: 'Exclusive double-bridge aviator design handcrafted from titanium. Features a distinctive dual-bridge structure that showcases exceptional attention to detail and Japanese precision engineering.',
    type: 'Eyeglasses',
    material: 'Titanium',
    availableSizes: ['52mm', '54mm', '56mm'],
    availableColors: ['Silver', 'Gunmetal'],
    details: {
      frame: 'Titanium double-bridge aviator frame',
      lens: 'Prescription-ready, premium anti-reflective coating',
    },
  },
];

export const EVERYDAY_WEAR: Product[] = [
  {
    id: 5,
    name: 'Classic Aviator Sunglasses',
    price: 425.00,
            image: publicUrl('images/product_05.png'),
    colors: 3,
    category: 'Sunglasses',
    collection: 'Heritage',
    description: 'Timeless aviator-style sunglasses featuring polarized lenses and premium metal frames. Perfect for everyday wear with UV protection and scratch-resistant coating.',
    type: 'Sunglasses',
    material: 'Stainless Steel',
    availableSizes: ['54mm', '56mm', '58mm'],
    availableColors: ['Gold', 'Silver', 'Black'],
    details: {
      frame: 'Metal aviator frame',
      lens: 'Polarized lenses, UV400 protection',
    },
  },
  {
    id: 6,
    name: 'Round Frame Sunglasses',
    price: 485.00,
            image: publicUrl('images/product_06.png'),
    colors: 2,
    category: 'Sunglasses',
    collection: 'Premium',
    description: 'Handcrafted round-frame sunglasses with vintage-inspired design. Features premium acetate frames and gradient lenses for classic style with modern protection.',
    type: 'Sunglasses',
    material: 'Cellulose Acetate',
    availableSizes: ['52mm', '54mm', '56mm'],
    availableColors: ['Tortoise', 'Black'],
    details: {
      frame: 'Acetate round frame',
      lens: 'Gradient polarized lenses, UV400 protection',
    },
  },
  {
    id: 7,
    name: 'Cat-Eye Sunglasses',
    price: 455.00,
            image: publicUrl('images/product_07.png'),
    colors: 4,
    category: 'Sunglasses',
    collection: 'Essential',
    description: 'Elegant cat-eye sunglasses with sophisticated design. Crafted from premium acetate with hand-applied detailing for a refined, timeless look.',
    type: 'Sunglasses',
    material: 'Cellulose Acetate',
    availableSizes: ['50mm', '52mm', '54mm'],
    availableColors: ['Black', 'Tortoise', 'Navy', 'Amber'],
    details: {
      frame: 'Acetate cat-eye frame',
      lens: 'Polarized lenses, UV400 protection',
    },
  },
];

export const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: 'handcrafted-glasses', label: 'Handcrafted Glasses', value: 'Eyewear' },
  { id: 'sunglasses', label: 'Sunglasses', value: 'Sunglasses' },
  { id: 'accessories', label: 'Accessories', value: 'Accessories' },
];

export const products: Product[] = [...NEW_ARRIVALS, ...EVERYDAY_WEAR];
