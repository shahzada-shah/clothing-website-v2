/**
 * BagDropdown Component
 *
 * Shopping cart dropdown that appears when hovering over the bag icon.
 * Displays cart items, total, and action buttons.
 *
 * Key Features:
 * - Hover to open (stays open until click outside)
 * - Shows cart item count badge
 * - Scrollable list for many items
 * - Empty state when cart is empty
 * - Total calculation
 *
 * Component Architecture:
 * This component has been broken down into smaller sub-components:
 * - CartItem: Individual cart item display
 * - CartSummary: Total and action buttons
 * - EmptyCart: Empty state display
 *
 * For Junior Developers:
 * Notice how we import sub-components from './cart'. This is called
 * "component composition" and helps keep our code organized and maintainable.
 *
 * @module components/ui/BagDropdown
 */

import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useClickOutside } from '../../hooks';
import { CartItem, CartSummary, EmptyCart } from './cart';
import { useCart } from '../../contexts/CartContext';
import { useDropdown } from '../../contexts/DropdownContext';
import { useToast } from './Toast';

/**
 * Props for the BagDropdown component
 */
interface BagDropdownProps {
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * BagDropdown Component
 *
 * @param props - Component props
 * @returns BagDropdown component
 */
export const BagDropdown: React.FC<BagDropdownProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items, removeFromCart, totalItems, totalPrice } = useCart();
  const { setActiveDropdown, isDropdownActive } = useDropdown();
  const { showToast } = useToast();
  const dropdownId = 'bag-dropdown';

  // Sync with global dropdown state
  useEffect(() => {
    if (!isDropdownActive(dropdownId)) {
      setIsOpen(false);
    }
  }, [isDropdownActive, dropdownId]);

  // Handle opening dropdown
  const handleOpen = () => {
    setIsOpen(true);
    setActiveDropdown(dropdownId);
  };

  // Handle closing dropdown
  const handleClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, handleClose, isOpen);

  /**
   * Handler for removing an item from cart
   */
  const handleRemoveItem = (productId: number, color: string, size: string) => {
    removeFromCart(productId, color, size);
    showToast({ type: 'info', message: 'Removed from bag', description: `${size} · ${color}` });
  };

  /**
   * Handler for checkout button
   */
  const handleCheckout = () => {
    console.log('Proceed to checkout');
    handleClose();
    // TODO: Navigate to checkout page
  };

  /**
   * Handler for view bag button
   */
  const handleViewBag = () => {
    console.log('View full bag');
    handleClose();
    // TODO: Navigate to cart page
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleOpen}
    >
      {/* Bag Icon Button */}
      <button
        className="relative text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:scale-105"
        aria-label="Shopping bag"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <ShoppingBag className="w-5 h-5" />

        {/* Item Count Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-fadeInDown z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Shopping Bag</h3>
            <p className="text-sm text-gray-500 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Cart Items or Empty State */}
          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={`${item.productId}-${item.color}-${item.size}`}
                    item={item}
                    onRemove={() => handleRemoveItem(item.productId, item.color, item.size)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Summary and Actions */}
          {items.length > 0 && (
            <CartSummary total={totalPrice} onCheckout={handleCheckout} onViewBag={handleViewBag} />
          )}
        </div>
      )}
    </div>
  );
};
