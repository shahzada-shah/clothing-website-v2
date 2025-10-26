import React, { useState, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useClickOutside } from '../../hooks';

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
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
        <span>{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-900 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-[100] mt-2 w-full min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fadeInDown">
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                  value === option
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{option}</span>
                {value === option && (
                  <Check className="w-4 h-4 text-gray-900" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
