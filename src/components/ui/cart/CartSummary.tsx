/**
 * CartSummary Component
 *
 * Displays the cart total and action buttons (Checkout, View Bag).
 * This is a child component of BagDropdown.
 *
 * For Junior Developers:
 * This component is responsible for displaying totals and CTAs.
 * Separating it from the main BagDropdown keeps each component focused.
 *
 * @module components/ui/cart/CartSummary
 */

import React from 'react';
import { formatPrice } from '../../../utils';

/**
 * Props for the CartSummary component
 */
interface CartSummaryProps {
  /** Total amount in USD */
  total: number;
  /** Optional callback when checkout button is clicked */
  onCheckout?: () => void;
  /** Optional callback when view bag button is clicked */
  onViewBag?: () => void;
}

/**
 * CartSummary Component
 *
 * @param props - Component props
 * @returns CartSummary component
 */
export const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout, onViewBag }) => {
  return (
    <div className="p-4 border-t border-gray-100 space-y-4">
      {/* Subtotal Display */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Subtotal</span>
        <span className="text-lg font-bold text-gray-900">{formatPrice(total)}</span>
      </div>

      {/* Checkout Button - Primary Action */}
      <button
        onClick={onCheckout}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
      >
        Checkout
      </button>

      {/* View Bag Button - Secondary Action */}
      <button
        onClick={onViewBag}
        className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
      >
        View Bag
      </button>
    </div>
  );
};
