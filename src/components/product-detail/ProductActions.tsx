/**
 * ProductActions Component
 *
 * Action buttons for product purchase and sharing.
 * Includes Add to Bag, Buy Now, and Share buttons with smooth animations.
 *
 * For Junior Developers:
 * This component contains the main call-to-action buttons that users click
 * to purchase or share a product. Each button has hover effects and transitions
 * to make the interface feel responsive and polished.
 *
 * @module components/product-detail/ProductActions
 */

import React from 'react';
import { ShoppingBag, Share2 } from 'lucide-react';

interface ProductActionsProps {
  /** Callback when "Add to Bag" is clicked */
  onAddToBag: () => void;
  /** Callback when "Buy Now" is clicked */
  onBuyNow: () => void;
  /** Callback when "Share" is clicked */
  onShare: () => void;
}

/**
 * ProductActions Component
 *
 * @param props - Component props
 * @returns Rendered action buttons
 */
export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToBag,
  onBuyNow,
  onShare
}) => {
  return (
    <div className="space-y-3 pt-4">
      {/* Add to Bag button - Primary action */}
      <button
        onClick={onAddToBag}
        className="
          w-full bg-black text-white py-4 font-medium
          hover:bg-gray-900 active:bg-gray-800
          transition-all duration-300 ease-out
          flex items-center justify-center gap-2
          transform hover:scale-[1.02] active:scale-[0.98]
        "
      >
        <ShoppingBag className="w-5 h-5" />
        Add to Bag
      </button>

      {/* Buy Now button - Secondary action */}
      <button
        onClick={onBuyNow}
        className="
          w-full border-2 border-black py-4 font-medium
          hover:bg-gray-50 active:bg-gray-100
          transition-all duration-300 ease-out
          transform hover:scale-[1.02] active:scale-[0.98]
        "
      >
        Buy Now
      </button>

      {/* Share button - Tertiary action */}
      <button
        onClick={onShare}
        className="
          w-full flex items-center justify-center gap-2
          py-3 text-sm text-gray-700
          hover:text-gray-900 hover:bg-gray-50
          transition-all duration-200 ease-out
          rounded
        "
      >
        <Share2 className="w-4 h-4" />
        Share this product
      </button>
    </div>
  );
};
