/**
 * Layout Component
 *
 * Main layout wrapper that includes Header and Footer.
 * This component wraps all pages to maintain consistent layout structure.
 *
 * For Junior Developers:
 * The Layout component uses React Router's Outlet to render child routes.
 * This pattern allows us to:
 * 1. Keep Header and Footer on all pages
 * 2. Only re-render the page content when routes change
 * 3. Maintain consistent layout across the app
 *
 * Structure:
 * - Header (sticky navigation)
 * - Main content (from Outlet - changes based on route)
 * - Footer
 * - ScrollToTop button
 *
 * @module components/layout/Layout
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui';

/**
 * Layout Component
 *
 * @returns Layout wrapper with header, outlet, and footer
 */
export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
