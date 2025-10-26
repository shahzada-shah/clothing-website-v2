/**
 * MultiSelect Component
 *
 * A dropdown component that allows multiple selections with checkboxes.
 * Used for filtering products by multiple criteria simultaneously.
 *
 * Features:
 * - Multi-select with checkboxes
 * - "All" option to select/deselect all
 * - Visual indication of selected items
 * - Click outside to close
 *
 * @module components/ui/MultiSelect
 */

import React, { useState, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useClickOutside } from '../../hooks';

interface MultiSelectProps {
  /** Label for the select */
  label: string;
  /** Available options */
  options: string[];
  /** Currently selected values */
  values: string[];
  /** Callback when selection changes */
  onChange: (values: string[]) => void;
}

/**
 * MultiSelect Component
 *
 * @param props - Component props
 * @returns MultiSelect component
 */
export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  values,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  /**
   * Toggle selection of an option
   */
  const toggleOption = (option: string) => {
    if (option === 'All') {
      // If "All" is clicked, either select all or clear all
      if (values.includes('All') || values.length === options.length - 1) {
        onChange(['All']);
      } else {
        onChange([...options]);
      }
    } else {
      // Remove "All" if it's selected
      const newValues = values.filter(v => v !== 'All');

      if (values.includes(option)) {
        // Remove the option
        const filtered = newValues.filter(v => v !== option);
        onChange(filtered.length === 0 ? ['All'] : filtered);
      } else {
        // Add the option
        const updated = [...newValues, option];
        // If all non-"All" options are selected, add "All"
        if (updated.length === options.length - 1) {
          onChange([...options]);
        } else {
          onChange(updated);
        }
      }
    }
  };

  /**
   * Check if an option is selected
   */
  const isSelected = (option: string) => {
    if (option === 'All') {
      return values.includes('All') || values.length === options.length - 1;
    }
    return values.includes(option);
  };

  /**
   * Get display text for the button
   */
  const getDisplayText = () => {
    if (values.includes('All') || values.length === 0 || values.length === options.length) {
      return 'All';
    }
    if (values.length === 1) {
      return values[0];
    }
    return `${values.length} selected`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-medium text-gray-900 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border-b-2 border-gray-300 bg-white py-2 pr-2 text-sm text-gray-900 hover:border-gray-400 focus:outline-none focus:border-gray-900 transition-colors cursor-pointer"
      >
        <span>{getDisplayText()}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-900 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-[100] mt-2 w-full min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeInDown">
          <div className="max-h-64 overflow-y-auto">
            {options.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => toggleOption(option)}
                className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors hover:bg-gray-50"
              >
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                    isSelected(option)
                      ? 'border-gray-900 bg-gray-900 scale-100'
                      : 'border-gray-300 bg-white scale-100 hover:border-gray-400'
                  }`}
                >
                  <Check
                    className={`w-3 h-3 text-white transition-all duration-300 ${
                      isSelected(option)
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-0'
                    }`}
                    strokeWidth={3}
                  />
                </div>
                <span className={isSelected(option) ? 'font-medium text-gray-900' : 'text-gray-700'}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
