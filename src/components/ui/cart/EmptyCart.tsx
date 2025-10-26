/**
 * EmptyCart Component
 *
 * Displays when the shopping cart has no items.
 * Provides visual feedback to users that their cart is empty.
 *
 * For Junior Developers:
 * Empty states are important for UX! They help users understand
 * when something doesn't have content rather than appearing broken.
 *
 * @module components/ui/cart/EmptyCart
 */

import React from 'react';
import { ShoppingBag } from 'lucide-react';

/**
 * EmptyCart Component
 *
 * Simple component showing empty cart state with icon and message.
 *
 * @returns EmptyCart component
 */
export const EmptyCart: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">Your bag is empty</p>
    </div>
  );
};
