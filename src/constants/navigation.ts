/**
 * Navigation Constants
 *
 * Centralized navigation configuration for the application.
 * Update these arrays to modify navigation items.
 */

import { NavItem } from '../types';

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'SHOP', href: '/' },
  { label: 'MEN', href: '/men' },
  { label: 'WOMEN', href: '/women' },
  { label: 'ABOUT US', href: '/about' },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { label: 'USD($)', href: '#currency' },
  { label: 'SEARCH', href: '#search' },
  { label: 'ACCOUNT', href: '/auth' },
  { label: 'BAG(0)', href: '#bag' },
];
