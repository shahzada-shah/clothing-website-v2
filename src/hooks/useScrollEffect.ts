/**
 * Custom Hook: useScrollEffect
 *
 * Tracks scroll position and returns useful scroll state.
 * Used for implementing scroll-based animations and effects.
 *
 * @returns {Object} - Object containing scrollY position and isScrolled boolean
 *
 * @example
 * const { scrollY, isScrolled } = useScrollEffect();
 */

import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
}

export const useScrollEffect = (threshold: number = 50): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollState({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
};
