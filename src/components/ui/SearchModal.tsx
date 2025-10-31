/**
 * SearchModal Component
 *
 * A full-screen modal overlay for product search functionality.
 * Features a blur background, keyboard navigation, and suggested searches.
 *
 * Key Features:
 * - Blur background overlay for focus
 * - Auto-focus on input when opened
 * - ESC key to close
 * - Click outside to close
 * - Prevents body scroll when open
 * - Popular searches and trending items
 *
 * UX Notes:
 * - Modal appears with slide-down animation
 * - Input is automatically focused for quick typing
 * - Background content is blurred to maintain focus
 * - Body scroll is locked to prevent confusion
 *
 * For Junior Developers:
 * This component demonstrates several important patterns:
 * 1. Modal management with state
 * 2. Keyboard event handling (ESC key)
 * 3. Click outside detection
 * 4. Preventing event bubbling with stopPropagation
 * 5. Managing body scroll
 * 6. Using refs for direct DOM access
 *
 * @module components/ui/SearchModal
 */

import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useKeyPress } from '../../hooks';
import { disableBodyScroll, enableBodyScroll } from '../../utils';

/**
 * Props for the SearchModal component
 */
interface SearchModalProps {
  /** Whether the modal is currently visible */
  isOpen: boolean;
  /** Callback function to close the modal */
  onClose: () => void;
}

/**
 * Popular search terms to display
 * These could be fetched from an API in a real application
 */
const POPULAR_SEARCHES = ['Handcrafted Glasses', 'Sunglasses', 'Aviators', 'Accessories'];

/**
 * Trending items to display
 * These could be dynamically loaded based on user behavior
 */
const TRENDING_ITEMS = ['New Arrivals Collection', 'Heritage Collection', 'Premium Collection'];

/**
 * SearchModal Component
 *
 * @param props - Component props
 * @returns SearchModal component or null if not open
 */
export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Handle modal visibility with animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimatingOut(false);
      // Small delay to trigger animation
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    } else if (isVisible) {
      setIsAnimatingOut(true);
      // Wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsAnimatingOut(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Handle ESC key press to close modal
  useKeyPress('Escape', handleClose, isOpen);

  // Manage body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    // Cleanup: restore scroll on unmount
    return () => {
      enableBodyScroll();
    };
  }, [isOpen]);

  // Don't render anything if modal is closed
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-start justify-center pt-32 px-4 transition-opacity duration-300 ${
        isAnimatingOut ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      {/* Blur Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 transition-all duration-300 ${
          isAnimatingOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backdropFilter: isAnimatingOut ? 'blur(0px)' : 'blur(8px)',
          WebkitBackdropFilter: isAnimatingOut ? 'blur(0px)' : 'blur(8px)',
        }}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isAnimatingOut
            ? 'opacity-0 scale-95 -translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Section */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for eyewear..."
            className="flex-1 text-lg outline-none text-gray-900 placeholder-gray-400"
            aria-label="Search for eyewear"
            id="search-modal-title"
          />
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
            aria-label="Close search"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search Suggestions Section */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Popular Searches */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term, index) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                    aria-label={`Search for ${term}`}
                    style={{
                      animation: isAnimatingOut ? 'none' : `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Now */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Trending Now
              </h3>
              <div className="space-y-2">
                {TRENDING_ITEMS.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700 transition-all duration-300 hover:translate-x-2 hover:shadow-sm"
                    style={{
                      animation: isAnimatingOut ? 'none' : `fadeInUp 0.3s ease-out ${0.2 + index * 0.05}s both`,
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
