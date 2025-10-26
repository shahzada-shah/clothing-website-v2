/**
 * DropdownContext
 *
 * Manages dropdown state across the application to ensure only one dropdown
 * is open at a time. When a dropdown opens, it automatically closes any
 * previously open dropdown.
 *
 * @module contexts/DropdownContext
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

interface DropdownContextType {
  /** Currently active dropdown ID */
  activeDropdown: string | null;
  /** Register a dropdown as active */
  setActiveDropdown: (id: string | null) => void;
  /** Check if a specific dropdown is active */
  isDropdownActive: (id: string) => boolean;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

/**
 * DropdownProvider Component
 *
 * Wraps the application to provide dropdown state management
 */
export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isDropdownActive = useCallback(
    (id: string) => activeDropdown === id,
    [activeDropdown]
  );

  return (
    <DropdownContext.Provider
      value={{
        activeDropdown,
        setActiveDropdown,
        isDropdownActive,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

/**
 * useDropdown Hook
 *
 * Provides access to dropdown state management
 *
 * @returns Dropdown context methods
 */
export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
