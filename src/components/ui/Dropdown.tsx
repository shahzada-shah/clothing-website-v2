/**
 * Dropdown Component
 *
 * A reusable dropdown menu with smooth animations.
 * Used in the header for navigation menus.
 *
 * Key Features:
 * - Hover-triggered to open
 * - Click outside to close (doesn't close on mouse leave)
 * - Smooth fade and slide animations
 * - Keyboard accessible
 * - Mobile-friendly
 *
 * Props:
 * - trigger: The element that triggers the dropdown (e.g., "Shop")
 * - items: Array of menu items with labels and hrefs
 * - className: Optional additional styling
 *
 * Technical Notes:
 * - Uses React state for open/close
 * - useEffect for click outside detection
 * - CSS transitions for smooth animations
 *
 * @example
 * <Dropdown
 *   trigger="Shop"
 *   items={[
 *     { label: 'Men', href: '/men' },
 *     { label: 'Women', href: '/women' }
 *   ]}
 * />
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  trigger: string;
  items: DropdownItem[];
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[220px] w-max bg-white border border-gray-200 rounded-lg shadow-xl overflow-auto max-h-[70vh] animate-fadeInDown z-[200]">
          <div className="py-1">
            {items.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
