/**
 * Header Component
 *
 * Main navigation header with logo and navigation items.
 * Features scroll-based shadow effect, dropdown menus, and smooth animations.
 * Responsive design with mobile menu support.
 *
 * Key Features:
 * - Sticky header with scroll effects
 * - Dropdown menus for Shop and More categories
 * - Mobile-responsive hamburger menu
 * - Smooth animations and transitions
 * - Underline hover effects
 *
 * Structure:
 * - Primary navigation (left): Shop, New Arrivals, Collections
 * - Center: Brand logo
 * - Secondary navigation (right): Search, Account, Cart
 *
 * @example
 * <Header />
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '../../constants/navigation';
import { BRAND_NAME } from '../../constants/content';
import { useScrollEffect } from '../../hooks';
import { Dropdown, SearchModal, BagDropdown, AccountDropdown } from '../ui';

const shopDropdownItems = [
  { label: 'Handcrafted Glasses', href: '/' },
  { label: 'Sunglasses', href: '/' },
  { label: 'Accessories', href: '/' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { isScrolled } = useScrollEffect(20);

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <header
        className={`bg-white border-b border-gray-200 sticky top-0 z-[200] transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
      <div className="max-w-[1400px] mx-auto px-6 py-4 relative">
        <div className="grid grid-cols-3 items-center">
          {/* Primary Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 justify-start">
            <Dropdown trigger="Shop" items={shopDropdownItems} />
            {PRIMARY_NAV_ITEMS.slice(1).map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-all duration-300 hover:scale-110 active:scale-95 justify-self-start"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <X
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                }`}
              />
              <Menu
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
            </div>
          </button>

          {/* Logo - Always Centered */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight transition-all duration-300 hover:scale-105 inline-block"
            >
              {BRAND_NAME}
            </Link>
          </div>

          {/* Secondary Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 justify-end">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:scale-105"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <AccountDropdown />
            <BagDropdown />
          </nav>

          {/* Mobile Icons - Right Side */}
          <div className="lg:hidden flex items-center gap-4 justify-end">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:scale-105"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <AccountDropdown />
            <BagDropdown />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-4">
              {PRIMARY_NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:translate-x-2 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 flex flex-col gap-4">
                {SECONDARY_NAV_ITEMS.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:translate-x-2 opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${(index + PRIMARY_NAV_ITEMS.length) * 50}ms`,
                      animationFillMode: 'forwards',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};
