/**
 * HomePage Component
 *
 * The main landing page with hero, product sections, and newsletter.
 * This is the default route (/) of the application.
 *
 * Sections:
 * - Hero banner with main CTA
 * - New arrivals showcase
 * - Product details
 * - Everyday wear collection
 * - Collections overview
 * - Newsletter signup
 *
 * @module pages/HomePage
 */

import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { NewArrivals } from '../components/sections/NewArrivals';
import { DetailsSection } from '../components/sections/DetailsSection';
import { EverydayWear } from '../components/sections/EverydayWear';
import { CollectionsSection } from '../components/sections/CollectionsSection';
import { NewsletterSection } from '../components/sections/NewsletterSection';

/**
 * HomePage Component
 *
 * @returns HomePage component with all landing page sections
 */
export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <DetailsSection />
      <EverydayWear />
      <CollectionsSection />
      <NewsletterSection />
    </>
  );
};
