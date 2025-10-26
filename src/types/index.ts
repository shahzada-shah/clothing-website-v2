/**
 * Type Definitions
 *
 * This file contains all shared TypeScript interfaces and types
 * used across the application.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export * from './product';
