/**
 * AnimatedProductGrid Component
 *
 * Displays products in a responsive grid with staggered fade-in animations.
 * Each product card appears sequentially with a smooth transition.
 *
 * Features:
 * - Responsive grid layout (1-4 columns depending on screen size)
 * - Staggered animation delays for each item
 * - Smooth transitions when filtering changes products
 *
 * For Junior Developers:
 * This component uses CSS animations to make products fade in one by one.
 * The delay is calculated based on the item's index, creating a "cascade" effect.
 * When the products array changes (e.g., due to filtering), the animation restarts.
 *
 * @module components/products/AnimatedProductGrid
 */

import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';

interface AnimatedProductGridProps {
  /** Array of products to display */
  products: Product[];
  /** Number of columns in the grid (default: 4) */
  columns?: number;
}

/**
 * AnimatedProductGrid Component
 *
 * @param props - Component props
 * @returns Rendered product grid with animations
 */
export const AnimatedProductGrid: React.FC<AnimatedProductGridProps> = ({
  products,
  columns = 4
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when products change
  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [products]);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-8`}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${index * 50}ms`,
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
