/**
 * Custom Hooks Barrel Export
 *
 * Centralized export for all custom React hooks.
 * Makes importing cleaner throughout the application.
 *
 * Hooks:
 * - useScrollEffect: Detects scroll position and direction
 * - useIntersectionObserver: Triggers animations when elements enter viewport
 * - usePageLoader: Manages initial page load state
 * - useClickOutside: Detects clicks outside of an element
 * - useKeyPress: Detects specific keyboard key presses
 *
 * @example
 * import { useScrollEffect, useIntersectionObserver, useClickOutside } from '@/hooks';
 */

export { useScrollEffect } from './useScrollEffect';
export { useIntersectionObserver } from './useIntersectionObserver';
export { usePageLoader } from './usePageLoader';
export { useClickOutside } from './useClickOutside';
export { useKeyPress } from './useKeyPress';
