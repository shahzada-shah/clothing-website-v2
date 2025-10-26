/**
 * DOM Utilities
 *
 * Helper functions for common DOM operations and interactions.
 * These utilities help manage document-level behaviors like scrolling.
 *
 * @module utils/dom
 */

/**
 * Prevents body scroll (useful for modals and overlays)
 *
 * Call this function when opening a modal to prevent
 * background content from scrolling.
 *
 * @example
 * disableBodyScroll(); // Body scroll is now disabled
 */
export const disableBodyScroll = (): void => {
  document.body.style.overflow = 'hidden';
};

/**
 * Re-enables body scroll
 *
 * Call this function when closing a modal to restore
 * normal scrolling behavior.
 *
 * @example
 * enableBodyScroll(); // Body scroll is now enabled
 */
export const enableBodyScroll = (): void => {
  document.body.style.overflow = 'unset';
};

/**
 * Checks if an element is clicked outside of a referenced element
 *
 * @param ref - React ref to the element
 * @param event - Mouse event to check
 * @returns True if clicked outside, false if clicked inside
 *
 * @example
 * const dropdownRef = useRef<HTMLDivElement>(null);
 * if (isClickedOutside(dropdownRef, event)) {
 *   closeDropdown();
 * }
 */
export const isClickedOutside = (
  ref: React.RefObject<HTMLElement>,
  event: MouseEvent
): boolean => {
  return ref.current !== null && !ref.current.contains(event.target as Node);
};
