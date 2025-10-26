/**
 * ColorSelector Component
 *
 * An interactive color picker with smooth animations and visual feedback.
 * Users can select different color options, and the selected color is highlighted
 * with a ring animation.
 *
 * Features:
 * - Smooth scale animation on hover
 * - Ring indicator for selected color with slide-in animation
 * - Accessible with proper ARIA labels
 * - Color name display updates smoothly
 *
 * For Junior Developers:
 * This is a controlled component, meaning the parent component manages the
 * selected color state. We receive the current selection via props and notify
 * the parent when the user clicks a color via the onChange callback.
 *
 * @module components/product-detail/ColorSelector
 */

import React from 'react';

export interface ColorOption {
  /** Display name of the color */
  name: string;
  /** Hex code for the color (e.g., "#2D2D2D") */
  hex: string;
}

interface ColorSelectorProps {
  /** Array of available color options */
  colors: ColorOption[];
  /** Index of the currently selected color */
  selectedIndex: number;
  /** Callback when a color is selected */
  onColorChange: (index: number) => void;
  /** Total number of colors available for this product */
  totalColors: number;
}

/**
 * ColorSelector Component
 *
 * @param props - Component props
 * @returns Rendered color selector with options
 */
export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedIndex,
  onColorChange,
  totalColors
}) => {
  return (
    <div className="space-y-3">
      {/* Label and count */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-900 transition-opacity duration-300">
          Color: <span className="text-gray-600">{colors[selectedIndex].name}</span>
        </label>
        <span className="text-xs text-gray-500 transition-opacity duration-300">
          {totalColors} color{totalColors > 1 ? 's' : ''} available
        </span>
      </div>

      {/* Color swatches */}
      <div className="flex gap-3">
        {colors.map((color, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={index}
              onClick={() => onColorChange(index)}
              className={`
                relative w-12 h-12 rounded-full border-2
                transition-all duration-300 ease-out
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                ${isSelected
                  ? 'border-black ring-2 ring-black ring-offset-2 scale-105'
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Select ${color.name} color`}
              aria-pressed={isSelected}
            >
              {/* Selected indicator - subtle inner circle */}
              <div
                className={`
                  absolute inset-0 rounded-full border-2 border-white
                  transition-all duration-300 ease-out
                  ${isSelected ? 'scale-75 opacity-100' : 'scale-0 opacity-0'}
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
