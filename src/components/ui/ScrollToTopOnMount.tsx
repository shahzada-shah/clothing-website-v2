/**
 * ScrollToTopOnMount Component
 *
 * Automatically scrolls to the top of the page when the component mounts.
 * Used to ensure smooth navigation between routes - when user navigates to
 * a new page, they start at the top rather than maintaining scroll position.
 *
 * Technical Details:
 * - Uses useEffect to trigger on component mount
 * - Scrolls instantly (no smooth behavior) for immediate feedback
 * - Works with React Router's location changes
 *
 * For Junior Developers:
 * This component doesn't render anything visible. It only performs a side effect
 * (scrolling) when it mounts. This is a common pattern for "utility components".
 *
 * Usage:
 * Place this component inside your Router, and it will scroll to top whenever
 * the route changes, since route changes cause this component to remount.
 *
 * @module components/ui/ScrollToTopOnMount
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopOnMount Component
 *
 * Scrolls window to top whenever the route location changes
 *
 * @returns null - This component doesn't render anything
 */
export const ScrollToTopOnMount: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};
