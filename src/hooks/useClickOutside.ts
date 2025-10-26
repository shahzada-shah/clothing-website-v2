/**
 * useClickOutside Hook
 *
 * Custom hook for detecting clicks outside of a referenced element.
 * Commonly used for closing dropdowns, modals, and popovers.
 *
 * @module hooks/useClickOutside
 */

import { useEffect, RefObject } from 'react';

/**
 * Hook that detects clicks outside of a specified element
 *
 * @param ref - Reference to the element to monitor
 * @param handler - Callback function to execute when clicking outside
 * @param enabled - Optional flag to enable/disable the listener (default: true)
 *
 * @example
 * const dropdownRef = useRef<HTMLDivElement>(null);
 * useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void,
  enabled: boolean = true
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, enabled]);
};
