/**
 * SizeSelector Component
 *
 * An interactive size picker with smooth animations and clear visual feedback.
 * Shows available sizes with selected state and hover effects.
 *
 * Features:
 * - Smooth background fill animation on selection
 * - Hover effects with border color transitions
 * - Accessible with proper ARIA labels
 * - Responsive grid layout
 *
 * For Junior Developers:
 * This component allows users to choose a size for the product. The selected
 * size is highlighted with a black background and white text. The component
 * uses CSS transitions to smoothly animate changes.
 *
 * @module components/product-detail/SizeSelector
 */

import React from 'react';

interface SizeSelectorProps {
  /** Array of available sizes (e.g., ['XS', 'S', 'M', 'L', 'XL']) */
  sizes: string[];
  /** Currently selected size */
  selectedSize: string;
  /** Callback when a size is selected */
  onSizeChange: (size: string) => void;
}

/**
 * SizeSelector Component
 *
 * @param props - Component props
 * @returns Rendered size selector with options
 */
export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSizeChange
}) => {
  return (
    <div className="space-y-3">
      {/* Label with size guide link */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-900 transition-opacity duration-300">
          Size: <span className="text-gray-600">{selectedSize}</span>
        </label>
        <button
          className="text-xs text-gray-500 underline hover:text-gray-900 transition-colors duration-200"
          onClick={() => {
            // In a real app, this would open a size guide modal
            alert('Size guide would open here');
          }}
        >
          Size Guide
        </button>
      </div>

      {/* Size buttons grid */}
      <div className="grid grid-cols-6 gap-2">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;

          return (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`
                py-3 text-sm font-medium border-2
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                ${isSelected
                  ? 'border-black bg-black text-white scale-105'
                  : 'border-gray-300 text-gray-700 hover:border-black hover:scale-105'
                }
              `}
              aria-label={`Select size ${size}`}
              aria-pressed={isSelected}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};
