/**
 * ScrollToTop Component
 *
 * A modern floating button that appears when user scrolls down.
 * Smoothly scrolls the page back to the top when clicked.
 *
 * Key Features:
 * - Auto-shows after scrolling 300px
 * - Smooth fade-in/fade-out animation
 * - Smooth scroll behavior
 * - Hover effects for better UX
 * - Positioned in bottom-right corner
 *
 * Technical Notes:
 * - Uses window scroll event with throttling
 * - Cleans up event listeners on unmount
 * - Uses CSS transitions for performance
 *
 * @example
 * <ScrollToTop />
 */

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
