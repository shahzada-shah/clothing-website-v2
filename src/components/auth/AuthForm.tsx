import React from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import { PasswordStrength } from './PasswordStrength';
import { PasswordRequirements } from './PasswordRequirements';

type AuthMode = 'login' | 'signup';

interface AuthFormProps {
  mode: AuthMode;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  agreedToTerms: boolean;
  passwordRequirements: Array<{ label: string; test: (pwd: string) => boolean }>;
  passwordsMatch: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onShowPasswordToggle: () => void;
  onShowConfirmPasswordToggle: () => void;
  onTermsChange: (checked: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  email,
  password,
  confirmPassword,
  name,
  showPassword,
  showConfirmPassword,
  agreedToTerms,
  passwordRequirements,
  passwordsMatch,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onNameChange,
  onShowPasswordToggle,
  onShowConfirmPasswordToggle,
  onTermsChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {mode === 'signup' && (
        <div style={{ animation: 'slideInFromLeft 0.4s ease-out' }}>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/30 to-gray-200/30 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
            <div className="relative flex items-center">
              <User className="absolute left-4 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-gray-700 z-10 pointer-events-none" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="John Doe"
                autoComplete="off"
                className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 bg-white relative text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
          Email Address
        </label>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/30 to-gray-200/30 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
          <div className="relative flex items-center">
            <Mail className="absolute left-4 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-gray-700 z-10 pointer-events-none" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="you@example.com"
              autoComplete="off"
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 bg-white relative text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
            Password
          </label>
          {mode === 'login' && (
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Forgot?
            </a>
          )}
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/30 to-gray-200/30 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
          <div className="relative flex items-center">
            <Lock className="absolute left-4 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-gray-700 z-10 pointer-events-none" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full pl-12 pr-14 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 bg-white relative text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={onShowPasswordToggle}
              className="absolute right-4 text-gray-400 hover:text-gray-700 transition-all duration-200 z-10"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mode === 'signup' && password.length > 0 && (
        <>
          <PasswordStrength password={password} requirements={passwordRequirements} />
          <PasswordRequirements password={password} requirements={passwordRequirements} />
        </>
      )}

      {mode === 'signup' && (
        <div style={{ animation: 'slideInFromLeft 0.4s ease-out 0.15s both' }}>
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-3">
            Confirm Password
          </label>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/30 to-gray-200/30 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-gray-700 z-10 pointer-events-none" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => onConfirmPasswordChange(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full pl-12 pr-14 py-3 sm:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200/50 transition-all duration-300 bg-white relative text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={onShowConfirmPasswordToggle}
                className="absolute right-4 text-gray-400 hover:text-gray-700 transition-all duration-200 z-10"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          {confirmPassword.length > 0 && (
            <div className="mt-2 flex items-center gap-2 text-xs">
              {passwordsMatch ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-medium">Passwords match</span>
                </>
              ) : (
                <>
                  <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-[10px]">
                    !
                  </div>
                  <span className="text-red-600 font-medium">Passwords do not match</span>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {mode === 'signup' && (
        <div
          className="flex items-start gap-3 pt-2"
          style={{ animation: 'slideInFromLeft 0.4s ease-out 0.1s both' }}
        >
          <div className="relative flex items-center justify-center w-6 h-6 mt-0.5">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => onTermsChange(e.target.checked)}
              className="peer w-6 h-6 appearance-none border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300 checked:border-gray-900 checked:bg-gray-900"
            />
            <Check className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-300" />
          </div>
          <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 leading-relaxed cursor-pointer">
            I agree to the{' '}
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
      )}

      <button
        type="submit"
        className="group relative w-full bg-gray-900 text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden mt-8 text-sm sm:text-base"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center gap-2">
          <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </button>
    </form>
  );
};
