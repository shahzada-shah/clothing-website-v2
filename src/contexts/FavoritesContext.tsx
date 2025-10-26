/**
 * FavoritesContext - Global Wishlist/Favorites State Management
 *
 * Manages favorited/wishlisted items across the application.
 * Persists favorites to localStorage so they're saved between sessions.
 *
 * For Junior Developers:
 * This context works similar to CartContext but for items users want to
 * save for later. Users can "heart" products and come back to them later.
 *
 * @module contexts/FavoritesContext
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface FavoriteItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  category: string;
  addedAt: string; // ISO date string
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: Omit<FavoriteItem, 'addedAt'>) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  toggleFavorite: (productId: number, item?: Omit<FavoriteItem, 'addedAt'>) => void;
  clearFavorites: () => void;
  totalFavorites: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

/**
 * FavoritesProvider Component
 *
 * Wraps your app to provide favorites state to all components
 */
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  /**
   * Add item to favorites
   */
  const addToFavorites = (item: Omit<FavoriteItem, 'addedAt'>) => {
    setFavorites((current) => {
      // Don't add if already exists
      if (current.some((fav) => fav.productId === item.productId)) {
        return current;
      }
      return [...current, { ...item, addedAt: new Date().toISOString() }];
    });
  };

  /**
   * Remove item from favorites
   */
  const removeFromFavorites = (productId: number) => {
    setFavorites((current) => current.filter((item) => item.productId !== productId));
  };

  /**
   * Check if item is favorited
   */
  const isFavorite = (productId: number): boolean => {
    return favorites.some((item) => item.productId === productId);
  };

  /**
   * Toggle favorite status (add if not favorited, remove if already favorited)
   */
  const toggleFavorite = (productId: number, item?: Omit<FavoriteItem, 'addedAt'>) => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else if (item) {
      addToFavorites(item);
    }
  };

  /**
   * Clear all favorites
   */
  const clearFavorites = () => {
    setFavorites([]);
  };

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
        clearFavorites,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Hook to use favorites context
 *
 * @example
 * const { isFavorite, toggleFavorite } = useFavorites();
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
