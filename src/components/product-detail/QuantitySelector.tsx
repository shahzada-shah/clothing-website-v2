/**
 * QuantitySelector Component
 *
 * An interactive quantity picker with increment/decrement buttons.
 * Features smooth animations and prevents negative values.
 *
 * Features:
 * - Plus/minus buttons with hover effects
 * - Smooth number transitions
 * - Minimum quantity of 1 enforced
 * - Optional stock indicator
 * - Accessible with proper ARIA labels
 *
 * For Junior Developers:
 * This component lets users choose how many items they want to purchase.
 * It uses two buttons (+ and -) to increase or decrease the quantity.
 * We use Math.max() to ensure the quantity never goes below 1.
 *
 * @module components/product-detail/QuantitySelector
 */

import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  /** Current quantity value */
  quantity: number;
  /** Callback when quantity changes */
  onQuantityChange: (newQuantity: number) => void;
  /** Optional stock count to display */
  stockCount?: number;
  /** Minimum allowed quantity (default: 1) */
  minQuantity?: number;
  /** Maximum allowed quantity (optional) */
  maxQuantity?: number;
}

/**
 * QuantitySelector Component
 *
 * @param props - Component props
 * @returns Rendered quantity selector with controls
 */
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  stockCount,
  minQuantity = 1,
  maxQuantity
}) => {
  const handleDecrement = () => {
    const newQuantity = Math.max(minQuantity, quantity - 1);
    if (newQuantity !== quantity) {
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    if (!maxQuantity || newQuantity <= maxQuantity) {
      onQuantityChange(newQuantity);
    }
  };

  const isDecrementDisabled = quantity <= minQuantity;
  const isIncrementDisabled = maxQuantity ? quantity >= maxQuantity : false;

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-900 transition-opacity duration-300">
        Quantity
      </label>

      <div className="flex items-center gap-4">
        {/* Quantity controls */}
        <div className="flex items-center border-2 border-gray-300 transition-colors duration-200 hover:border-gray-400">
          {/* Decrement button */}
          <button
            onClick={handleDecrement}
            disabled={isDecrementDisabled}
            className={`
              p-3 transition-all duration-200
              ${isDecrementDisabled
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-gray-100 active:bg-gray-200'
              }
            `}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>

          {/* Quantity display */}
          <span className="px-6 py-3 text-center font-medium min-w-[60px] transition-all duration-200">
            {quantity}
          </span>

          {/* Increment button */}
          <button
            onClick={handleIncrement}
            disabled={isIncrementDisabled}
            className={`
              p-3 transition-all duration-200
              ${isIncrementDisabled
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-gray-100 active:bg-gray-200'
              }
            `}
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Stock indicator */}
        {stockCount !== undefined && (
          <span className="text-sm text-gray-500 transition-opacity duration-300">
            Only {stockCount} item{stockCount !== 1 ? 's' : ''} left
          </span>
        )}
      </div>
    </div>
  );
};
