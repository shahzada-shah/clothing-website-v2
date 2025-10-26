/**
 * ExpandableSection Component
 *
 * A collapsible section with smooth expand/collapse animations.
 * Used for product details, shipping info, materials, etc.
 *
 * Features:
 * - Smooth height transition animation
 * - Rotating icon indicator
 * - Accessible with proper ARIA attributes
 * - Clean border styling
 *
 * For Junior Developers:
 * This component creates an accordion-style section that can be expanded
 * or collapsed by clicking on it. We use CSS transitions to smoothly animate
 * the height change. The isExpanded prop controls whether the content is visible.
 *
 * @module components/product-detail/ExpandableSection
 */

import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface ExpandableSectionProps {
  /** Section title */
  title: string;
  /** Whether this section is currently expanded */
  isExpanded: boolean;
  /** Callback when section is clicked */
  onToggle: () => void;
  /** Section content (shown when expanded) */
  children: React.ReactNode;
}

/**
 * ExpandableSection Component
 *
 * @param props - Component props
 * @returns Rendered expandable section
 */
export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  isExpanded,
  onToggle,
  children
}) => {
  return (
    <div className="border-t border-gray-200">
      {/* Section header - clickable */}
      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-between py-4 text-left
          group hover:bg-gray-50
          transition-colors duration-200
        "
        aria-expanded={isExpanded}
        aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-sm font-medium text-gray-900 transition-colors duration-200">
          {title}
        </span>

        {/* Icon with rotation animation */}
        <div className="transition-transform duration-300 ease-out">
          {isExpanded ? (
            <Minus className="w-4 h-4 text-gray-600 transition-transform duration-300 rotate-0" />
          ) : (
            <Plus className="w-4 h-4 text-gray-600 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
          )}
        </div>
      </button>

      {/* Section content - with smooth height transition */}
      <div
        id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="pb-4 text-sm text-gray-600 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};
