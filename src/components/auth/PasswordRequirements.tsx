import React from 'react';
import { Check } from 'lucide-react';

interface PasswordRequirementsProps {
  password: string;
  requirements: Array<{ label: string; test: (pwd: string) => boolean }>;
}

export const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password, requirements }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" style={{ animation: 'slideInFromLeft 0.4s ease-out 0.15s both' }}>
      {requirements.map((req, index) => {
        const isValid = req.test(password);
        return (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
                isValid ? 'bg-green-500' : 'bg-gray-200'
              }`}
            >
              {isValid && <Check className="w-3 h-3 text-white" />}
            </div>
            <span
              className={`transition-colors duration-200 ${
                isValid ? 'text-green-600 font-medium' : 'text-gray-500'
              }`}
            >
              {req.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
