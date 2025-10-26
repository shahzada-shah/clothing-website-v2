/**
 * ProductInfo Component
 *
 * Displays the product header information including name, category, price, and description.
 * Features smooth fade-in animations and a favorite button.
 *
 * For Junior Developers:
 * This component handles the top section of the product detail page. It's separated
 * from the main page to keep code organized and reusable. The component uses
 * React state to manage the favorite/wishlist functionality.
 *
 * @module components/product-detail/ProductInfo
 */

import React from 'react';
import { Heart } from 'lucide-react';
import { formatPrice } from '../../utils';

interface ProductInfoProps {
  /** Product name */
  name: string;
  /** Product category (e.g., "T-Shirt", "Jacket") */
  category: string;
  /** Optional product collection (e.g., "Essential", "Premium") */
  collection?: string;
  /** Product price in dollars */
  price: number;
  /** Optional product description */
  description?: string;
  /** Optional badge text (e.g., "New Release", "Sale") */
  badge?: string;
  /** Whether the product is favorited */
  isFavorited: boolean;
  /** Callback when favorite button is clicked */
  onToggleFavorite: () => void;
}

/**
 * ProductInfo Component
 *
 * @param props - Component props
 * @returns Rendered product information section
 */
export const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  category,
  collection,
  price,
  description,
  badge,
  isFavorited,
  onToggleFavorite
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header with name and favorite button */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 transition-opacity duration-300">
            {name}
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500 transition-colors duration-200 hover:text-gray-700">
              {category}
            </span>
            {collection && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 transition-colors duration-200 hover:text-gray-700">
                  {collection} Collection
                </span>
              </>
            )}
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={onToggleFavorite}
          className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-6 h-6 transition-all duration-300 ${
              isFavorited
                ? 'fill-red-500 text-red-500 scale-110'
                : 'text-gray-400 group-hover:text-red-400 group-hover:scale-110'
            }`}
          />
        </button>
      </div>

      {/* Price and Badge */}
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-gray-900 transition-transform duration-300 hover:scale-105">
          {formatPrice(price)}
        </span>
        {badge && (
          <span className="px-3 py-1 bg-black text-white text-xs font-medium uppercase tracking-wider transition-transform duration-300 hover:scale-105">
            {badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed transition-opacity duration-300">
        {description || 'Premium quality crafted with attention to detail. This piece combines timeless design with modern comfort, perfect for any occasion.'}
      </p>
    </div>
  );
};
