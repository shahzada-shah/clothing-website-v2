/**
 * CartContext - Global Shopping Cart State Management
 *
 * Provides cart functionality throughout the application using React Context.
 * Manages adding, removing, updating quantities, and persisting cart to localStorage.
 *
 * For Junior Developers:
 * Context is React's way of sharing data across your entire app without
 * having to pass props down manually at every level. This is perfect for
 * shopping cart data that needs to be accessed from multiple components.
 *
 * @module contexts/CartContext
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (productId: number, color: string, size: string) => void;
  updateQuantity: (productId: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider Component
 *
 * Wraps your app to provide cart state to all components
 */
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  /**
   * Add item to cart or update quantity if already exists
   */
  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems((currentItems) => {
      // Check if item with same product, color, and size already exists
      const existingIndex = currentItems.findIndex(
        (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
      );

      if (existingIndex > -1) {
        // Update quantity of existing item
        const updated = [...currentItems];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      } else {
        // Add new item
        return [...currentItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  /**
   * Remove item from cart
   */
  const removeFromCart = (productId: number, color: string, size: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.color === color && item.size === size)
      )
    );
  };

  /**
   * Update item quantity
   */
  const updateQuantity = (productId: number, color: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.color === color && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setItems([]);
  };

  // Calculate totals
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/**
 * Hook to use cart context
 *
 * @example
 * const { addToCart, items, totalItems } = useCart();
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
