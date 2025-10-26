/**
 * Product Detail Components Index
 *
 * Central export point for all product detail page components.
 * This makes importing components easier and cleaner in other files.
 *
 * For Junior Developers:
 * Instead of importing each component individually like this:
 *   import { ProductImage } from './product-detail/ProductImage';
 *   import { ColorSelector } from './product-detail/ColorSelector';
 *
 * You can import multiple components from this index file:
 *   import { ProductImage, ColorSelector } from './product-detail';
 *
 * This pattern is called a "barrel export" and helps keep imports organized.
 *
 * @module components/product-detail
 */

export { ProductImage } from './ProductImage';
export { ProductInfo } from './ProductInfo';
export { ColorSelector } from './ColorSelector';
export type { ColorOption } from './ColorSelector';
export { SizeSelector } from './SizeSelector';
export { QuantitySelector } from './QuantitySelector';
export { ProductActions } from './ProductActions';
export { ProductFeatures } from './ProductFeatures';
export { ExpandableSection } from './ExpandableSection';
