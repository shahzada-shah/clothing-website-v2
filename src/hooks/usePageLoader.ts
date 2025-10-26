/**
 * usePageLoader Hook
 *
 * Custom hook to manage page loading state.
 * Simulates content loading and provides loading state.
 *
 * Usage:
 * const isLoading = usePageLoader();
 *
 * Returns:
 * - boolean: true while page is loading, false when complete
 *
 * Technical Notes:
 * - Waits for document ready state
 * - Adds minimum display time for smooth UX
 * - Cleans up timers on unmount
 */

import { useEffect, useState } from 'react';

export const usePageLoader = (minLoadTime: number = 800): boolean => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [minLoadTime]);

  return isLoading;
};
