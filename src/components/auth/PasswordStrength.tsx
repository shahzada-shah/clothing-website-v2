import React from 'react';

interface PasswordStrengthProps {
  password: string;
  requirements: Array<{ label: string; test: (pwd: string) => boolean }>;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, requirements }) => {
  const getPasswordStrength = () => {
    const passed = requirements.filter((req) => req.test(password)).length;
    return (passed / requirements.length) * 100;
  };

  const strength = getPasswordStrength();
  const strengthLabel = strength === 100 ? 'Strong' : strength >= 50 ? 'Fair' : 'Weak';
  const strengthColor = strength === 100 ? 'bg-green-500' : strength >= 50 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="space-y-2" style={{ animation: 'slideInFromLeft 0.4s ease-out 0.1s both' }}>
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-600 font-medium">Password Strength</span>
        <span className="text-gray-500">{strengthLabel}</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${strengthColor}`}
          style={{ width: `${strength}%` }}
        />
      </div>
    </div>
  );
};
