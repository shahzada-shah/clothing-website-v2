/**
 * UI Components Barrel Export
 *
 * Centralized export for all reusable UI components.
 * Makes importing cleaner throughout the application.
 *
 * Components:
 * - AnimatedButton: Button with hover and click animations
 * - FadeInSection: Wrapper for fade-in on scroll animations
 * - PageLoader: Full-screen loading animation
 * - ScrollToTop: Floating button to scroll to top
 * - Dropdown: Dropdown menu for navigation
 * - SearchModal: Full-screen search modal with blur background
 * - BagDropdown: Shopping bag cart dropdown
 * - AccountDropdown: Account menu dropdown
 *
 * @example
 * import { AnimatedButton, FadeInSection, PageLoader } from '@/components/ui';
 */

export { AnimatedButton } from './AnimatedButton';
export { FadeInSection } from './FadeInSection';
export { PageLoader } from './PageLoader';
export { ScrollToTop } from './ScrollToTop';
export { ScrollToTopOnMount } from './ScrollToTopOnMount';
export { Dropdown } from './Dropdown';
export { SearchModal } from './SearchModal';
export { BagDropdown } from './BagDropdown';
export { AccountDropdown } from './AccountDropdown';
export { CustomSelect } from './CustomSelect';
export { MultiSelect } from './MultiSelect';
export { ToastProvider, useToast } from './Toast';
