/**
 * AccountDropdown Component
 *
 * User account menu dropdown that appears when hovering over the account icon.
 * Provides quick access to sign in, sign up, and account-related links.
 *
 * Key Features:
 * - Hover to open (stays open until click outside)
 * - Sign in and create account CTAs
 * - Quick links to order history, wishlist, and support
 * - Clean, organized layout
 *
 * Future Enhancements:
 * - Show user profile when logged in
 * - Add logout button for authenticated users
 * - Display user name and email
 * - Show recent orders
 *
 * For Junior Developers:
 * This component uses the useClickOutside hook to detect when
 * the user clicks outside the dropdown. This is a common pattern
 * for closing modals, dropdowns, and popovers.
 *
 * @module components/ui/AccountDropdown
 */

import React, { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../hooks';
import { useDropdown } from '../../contexts/DropdownContext';

/**
 * Props for the AccountDropdown component
 */
interface AccountDropdownProps {
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Quick access links for account-related pages
 */
const ACCOUNT_LINKS = [
  { label: 'Order History', href: '#orders' },
  { label: 'Wishlist', href: '#wishlist' },
  { label: 'Help & Support', href: '#support' },
];

/**
 * AccountDropdown Component
 *
 * @param props - Component props
 * @returns AccountDropdown component
 */
export const AccountDropdown: React.FC<AccountDropdownProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setActiveDropdown, isDropdownActive } = useDropdown();
  const dropdownId = 'account-dropdown';
  const navigate = useNavigate();

  // Sync with global dropdown state
  useEffect(() => {
    if (!isDropdownActive(dropdownId)) {
      setIsOpen(false);
    }
  }, [isDropdownActive, dropdownId]);

  // Handle opening dropdown
  const handleOpen = () => {
    setIsOpen(true);
    setActiveDropdown(dropdownId);
  };

  // Handle closing dropdown
  const handleClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, handleClose, isOpen);

  /**
   * Handler for sign in button
   */
  const handleSignIn = () => {
    handleClose();
    navigate('/auth');
  };

  /**
   * Handler for create account button
   */
  const handleCreateAccount = () => {
    handleClose();
    navigate('/auth');
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleOpen}
    >
      {/* Account Icon Button */}
      <button
        className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 hover:scale-105"
        aria-label="Account"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <User className="w-5 h-5" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-fadeInDown z-50">
          {/* Welcome Section */}
          <div className="p-6 text-center border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to KAZWEAR</h3>
            <p className="text-sm text-gray-500">Sign in to access your account</p>
          </div>

          {/* Action Buttons */}
          <div className="p-4 space-y-3">
            {/* Sign In - Primary Action */}
            <button
              onClick={handleSignIn}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Sign In
            </button>

            {/* Create Account - Secondary Action */}
            <button
              onClick={handleCreateAccount}
              className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              Create Account
            </button>
          </div>

          {/* Quick Links */}
          <div className="p-4 border-t border-gray-100">
            <div className="space-y-1">
              {ACCOUNT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
