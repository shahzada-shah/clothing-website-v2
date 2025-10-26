import React, { useState } from 'react';
import { AuthForm, SocialLogin } from '../components/auth';

type AuthMode = 'login' | 'signup';

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const passwordRequirements = [
    { label: 'At least 8 characters', test: (pwd: string) => pwd.length >= 8 },
    { label: 'One uppercase letter', test: (pwd: string) => /[A-Z]/.test(pwd) },
    { label: 'One lowercase letter', test: (pwd: string) => /[a-z]/.test(pwd) },
    { label: 'One number', test: (pwd: string) => /[0-9]/.test(pwd) },
  ];

  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode} form submitted`, { email, password, name });
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-16 bg-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"
            style={{ animation: 'float 10s ease-in-out infinite reverse' }}
          />
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight">KAZWEAR</h1>
            <div className="w-16 h-1 bg-gray-900 rounded-full" />
          </div>

          <div className="relative mb-8 sm:mb-10">
            <div className="flex gap-6 sm:gap-8 border-b border-gray-200">
              <button
                onClick={() => setMode('login')}
                className={`pb-4 font-semibold transition-all duration-300 relative text-sm sm:text-base ${
                  mode === 'login' ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Sign In
                {mode === 'login' && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                    style={{ animation: 'slideIn 0.3s ease-out' }}
                  />
                )}
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`pb-4 font-semibold transition-all duration-300 relative text-sm sm:text-base ${
                  mode === 'signup' ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Create Account
                {mode === 'signup' && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                    style={{ animation: 'slideIn 0.3s ease-out' }}
                  />
                )}
              </button>
            </div>
          </div>

          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {mode === 'login' ? 'Welcome back' : 'Get started'}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              {mode === 'login'
                ? 'Enter your credentials to access your account'
                : 'Create your account to start your shopping journey'}
            </p>
          </div>

          <AuthForm
            mode={mode}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            name={name}
            showPassword={showPassword}
            showConfirmPassword={showConfirmPassword}
            agreedToTerms={agreedToTerms}
            passwordRequirements={passwordRequirements}
            passwordsMatch={passwordsMatch}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onNameChange={setName}
            onShowPasswordToggle={() => setShowPassword(!showPassword)}
            onShowConfirmPasswordToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            onTermsChange={setAgreedToTerms}
            onSubmit={handleSubmit}
          />

          <SocialLogin />

          <p className="text-center text-xs sm:text-sm text-gray-600 mt-8 sm:mt-10">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-gray-900 font-semibold hover:underline transition-all"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-20 w-96 h-96 bg-gray-300/40 rounded-full blur-3xl"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gray-400/30 rounded-full blur-3xl"
            style={{ animation: 'float 8s ease-in-out infinite reverse' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-200/20 rounded-full blur-3xl"
            style={{ animation: 'float 10s ease-in-out infinite' }}
          />
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-20">
          <div className="mb-12" style={{ animation: 'slideInFromRight 0.8s ease-out' }}>
            <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              Premium Fashion
            </div>
            <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
              Elevate Your
              <br />
              Everyday Style
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-md">
              Join thousands of fashion enthusiasts who trust KAZWEAR for quality, comfort, and timeless designs.
            </p>
          </div>

          <div className="space-y-6 mb-12" style={{ animation: 'slideInFromRight 0.8s ease-out 0.2s both' }}>
            {[
              'Free shipping on orders over $50',
              'Exclusive member discounts',
              'Early access to new collections',
              '30-day hassle-free returns',
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group"
                style={{ animation: `fadeInUp 0.5s ease-out ${0.3 + index * 0.1}s both` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300" style={{ animation: 'slideInFromRight 0.8s ease-out 0.6s both' }}>
            <div className="group cursor-default">
              <div className="text-3xl font-bold mb-1 text-gray-900 group-hover:scale-110 transition-transform duration-300 inline-block">
                50K+
              </div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold mb-1 text-gray-900 group-hover:scale-110 transition-transform duration-300 inline-block">
                500+
              </div>
              <div className="text-sm text-gray-600 font-medium">Products</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold mb-1 text-gray-900 group-hover:scale-110 transition-transform duration-300 inline-block">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
