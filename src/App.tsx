/**
 * Main App Component
 *
 * Root component that sets up routing for the application.
 * Uses React Router for client-side navigation between pages.
 *
 * Key Features:
 * - Page loader on initial load with blur-in animation
 * - Scroll restoration on route changes
 * - Layout wrapper for consistent Header/Footer
 * - Route-based code splitting (optional future enhancement)
 *
 * Routes:
 * - / - HomePage (landing page)
 * - /men - Men's products catalog
 * - /women - Women's products catalog
 * - /about - About us page
 * - /auth - Login/signup page
 * - /product/:id - Product detail page
 *
 * For Junior Developers:
 * React Router allows us to create a single-page application (SPA)
 * that feels like multiple pages. When users click links, the URL
 * changes but the page doesn't reload - only the content updates.
 *
 * @module App
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage, MenPage, WomenPage, AboutPage, AuthPage, ProductDetailPage } from './pages';
import { PageLoader, ScrollToTopOnMount } from './components/ui';
import { usePageLoader } from './hooks';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { DropdownProvider } from './contexts/DropdownContext';

/**
 * App Component
 *
 * @returns App component with routing configured
 */
const App: React.FC = () => {
  const isLoading = usePageLoader(1000);

  return (
    <DropdownProvider>
      <CartProvider>
        <FavoritesProvider>
          <PageLoader isLoading={isLoading} />
          <div
            className="transition-all"
            style={{
              filter: isLoading ? 'blur(20px)' : 'blur(0px)',
              transitionDuration: '1800ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionProperty: 'filter',
            }}
          >
            <BrowserRouter>
              <ScrollToTopOnMount />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="men" element={<MenPage />} />
                  <Route path="women" element={<WomenPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="auth" element={<AuthPage />} />
                  <Route path="product/:id" element={<ProductDetailPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </FavoritesProvider>
      </CartProvider>
    </DropdownProvider>
  );
};

export default App;
