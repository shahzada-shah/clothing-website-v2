/**
 * CartItem Component
 *
 * Displays a single item in the shopping cart dropdown.
 * Shows product info, size, color, quantity, and price.
 *
 * This is a child component of BagDropdown, separated for better organization.
 *
 * For Junior Developers:
 * Breaking components into smaller pieces like this makes them:
 * 1. Easier to test
 * 2. Easier to maintain
 * 3. More reusable
 * 4. Simpler to understand
 *
 * @module components/ui/cart/CartItem
 */

import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { CartItem as CartItemType } from '../../../contexts/CartContext';
import { formatPrice, calculateTotal } from '../../../utils';

/**
 * Props for the CartItem component
 */
interface CartItemProps {
  /** The cart item to display */
  item: CartItemType;
  /** Optional callback when remove button is clicked */
  onRemove?: () => void;
}

/**
 * CartItem Component
 *
 * @param props - Component props
 * @returns CartItem component
 */
export const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const totalPrice = calculateTotal(item.price, item.quantity);

  return (
    <div className="flex gap-4">
      {/* Product Image Placeholder */}
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <ShoppingBag className="w-8 h-8 text-gray-300" />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>

        {/* Size and Color Info */}
        {(item.size || item.color) && (
          <div className="flex gap-2 mt-1">
            {item.size && <span className="text-xs text-gray-500">Size: {item.size}</span>}
            {item.color && <span className="text-xs text-gray-500">• {item.color}</span>}
          </div>
        )}

        {/* Quantity */}
        <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>

        {/* Price */}
        <p className="text-sm font-semibold text-gray-900 mt-1">{formatPrice(totalPrice)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove?.()}
        className="p-1 hover:bg-gray-100 rounded-full h-fit transition-colors duration-200"
        aria-label={`Remove ${item.name} from cart`}
      >
        <X className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
};
