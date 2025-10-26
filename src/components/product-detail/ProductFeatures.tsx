/**
 * ProductFeatures Component
 *
 * Displays key product features like Free Shipping, Returns, and Secure Payment.
 * Features icon-based design with smooth hover animations.
 *
 * For Junior Developers:
 * This component shows trust badges and key benefits to help convince
 * customers to make a purchase. The icons and text are evenly spaced
 * in a grid layout that works on all screen sizes.
 *
 * @module components/product-detail/ProductFeatures
 */

import React from 'react';
import { Truck, RotateCcw, ShieldCheck, LucideIcon } from 'lucide-react';

interface Feature {
  /** The icon component to display */
  icon: LucideIcon;
  /** The feature text */
  label: string;
}

/**
 * Default features displayed on all products
 */
const DEFAULT_FEATURES: Feature[] = [
  { icon: Truck, label: 'Free Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: 'Secure Payment' }
];

interface ProductFeaturesProps {
  /** Optional custom features (uses defaults if not provided) */
  features?: Feature[];
}

/**
 * ProductFeatures Component
 *
 * @param props - Component props
 * @returns Rendered product features section
 */
export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features = DEFAULT_FEATURES
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="
              text-center space-y-2 group
              transition-transform duration-300 ease-out
              hover:scale-105
            "
          >
            <Icon className="
              w-6 h-6 mx-auto text-gray-700
              transition-all duration-300
              group-hover:text-black group-hover:scale-110
            " />
            <p className="
              text-xs text-gray-600
              transition-colors duration-300
              group-hover:text-gray-900
            ">
              {feature.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
