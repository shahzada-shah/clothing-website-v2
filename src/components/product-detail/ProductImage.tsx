/**
 * ProductImage Component
 *
 * Displays the main product image with a consistent mockup style used throughout the site.
 * Shows a simplified wireframe/placeholder design that matches the ProductCard aesthetic.
 *
 * Features:
 * - Smooth color transitions when user changes color selection
 * - Hover effect with subtle scale animation
 * - Responsive aspect ratio
 * - Matches the site's minimalist design pattern
 *
 * For Junior Developers:
 * This component creates a visual representation of a product using simple shapes
 * and colors. The mockup updates based on the selected color, providing visual
 * feedback without requiring actual product photos.
 *
 * @module components/product-detail/ProductImage
 */

import React from 'react';

interface ProductImageProps {
  /** The hex color code for the product */
  color: string;
  /** Whether this is the main large image (true) or thumbnail (false) */
  isMain?: boolean;
}

/**
 * ProductImage Component
 *
 * @param props - Component props
 * @returns Rendered product image mockup
 */
export const ProductImage: React.FC<ProductImageProps> = ({
  color,
  isMain = false
}) => {
  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden group ${
      isMain ? 'aspect-[4/5]' : 'aspect-square'
    }`}>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full h-full flex items-center justify-center">
          {isMain ? (
            /* Main Product Mockup - Matches ProductCard style */
            <div className="relative w-2/3 h-4/5">
              <div
                className="w-full h-full rounded-lg transition-all duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundColor: color }}
              >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/5 rounded-lg" />
              </div>
            </div>
          ) : (
            /* Thumbnail Mockup */
            <div
              className="w-3/4 h-3/4 rounded transition-all duration-500"
              style={{ backgroundColor: color }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded" />
            </div>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
    </div>
  );
};
