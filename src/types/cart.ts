/**
 * Shopping Cart Type Definitions
 *
 * Type definitions for shopping cart functionality.
 * These types ensure type safety when working with cart items.
 *
 * @module types/cart
 */

/**
 * Represents a single item in the shopping cart
 *
 * @interface CartItem
 */
export interface CartItem {
  /** Unique identifier for the cart item */
  id: number;

  /** Product name */
  name: string;

  /** Price per unit in USD */
  price: number;

  /** Quantity of items */
  quantity: number;

  /** Optional: Selected size (e.g., 'S', 'M', 'L', 'XL') */
  size?: string;

  /** Optional: Selected color */
  color?: string;
}

/**
 * Mock cart items for development
 * In production, these would come from a database or API
 */
export const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: 'Essential Cotton T-Shirt',
    price: 29.99,
    quantity: 2,
    size: 'M',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Denim Pants',
    price: 79.99,
    quantity: 1,
    size: 'L',
    color: 'Navy',
  },
];
