/**
 * Formatting Utilities
 *
 * Common formatting functions used throughout the application.
 * These utilities help maintain consistency in data presentation.
 *
 * @module utils/formatting
 */

/**
 * Formats a number as a USD currency string
 *
 * @param amount - The numeric amount to format
 * @returns Formatted currency string (e.g., "$29.99")
 *
 * @example
 * formatPrice(29.99) // "$29.99"
 * formatPrice(100) // "$100.00"
 */
export const formatPrice = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

/**
 * Formats a number as a compact currency string
 *
 * @param amount - The numeric amount to format
 * @returns Compact formatted currency string (e.g., "$1.2K", "$1.5M")
 *
 * @example
 * formatCompactPrice(1200) // "$1.2K"
 * formatCompactPrice(1500000) // "$1.5M"
 */
export const formatCompactPrice = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  return formatPrice(amount);
};

/**
 * Calculates the total price for a quantity of items
 *
 * @param price - Price per item
 * @param quantity - Number of items
 * @returns Total price
 *
 * @example
 * calculateTotal(29.99, 2) // 59.98
 */
export const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity;
};
