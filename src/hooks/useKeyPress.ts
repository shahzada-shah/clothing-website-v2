/**
 * useKeyPress Hook
 *
 * Custom hook for detecting specific keyboard key presses.
 * Useful for implementing keyboard shortcuts and accessibility features.
 *
 * @module hooks/useKeyPress
 */

import { useEffect } from 'react';

/**
 * Hook that detects when a specific key is pressed
 *
 * @param targetKey - The key to listen for (e.g., 'Escape', 'Enter')
 * @param handler - Callback function to execute when key is pressed
 * @param enabled - Optional flag to enable/disable the listener (default: true)
 *
 * @example
 * useKeyPress('Escape', () => closeModal(), isModalOpen);
 * useKeyPress('Enter', () => submitForm());
 */
export const useKeyPress = (
  targetKey: string,
  handler: (event: KeyboardEvent) => void,
  enabled: boolean = true
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [targetKey, handler, enabled]);
};
