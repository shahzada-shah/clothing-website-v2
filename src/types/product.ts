/**
 * Product Types
 *
 * Type definitions for product-related data structures.
 */

export type ProductCategory = 'Jacket' | 'T-Shirt' | 'Pants' | 'Shoes';
export type ProductType = 'T-Shirts' | 'Shirts' | 'Pants' | 'Jackets' | 'Accessories' | 'Tops' | 'Bottoms' | 'Dresses';
export type ProductMaterial = 'Cotton' | 'Linen' | 'Wool' | 'Denim' | 'Synthetic' | 'Silk' | 'Leather' | 'Cashmere';
export type ProductSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ProductColor = 'Black' | 'White' | 'Navy' | 'Gray' | 'Beige' | 'Brown' | 'Cream' | 'Blush';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: number;
  category: ProductCategory;
  collection?: string;
  badge?: string;
  description?: string;
  type?: ProductType;
  material?: ProductMaterial;
  availableSizes?: ProductSize[];
  availableColors?: ProductColor[];
  details?: {
    frame?: string;
    lens?: string;
  };
}

export interface CategoryFilter {
  id: string;
  label: string;
  value: ProductCategory | 'all';
}
