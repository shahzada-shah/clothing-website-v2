/**
 * NewsletterSection Component
 *
 * Newsletter signup section with split layout.
 * Features email input, validation, and subscription form.
 *
 * @example
 * <NewsletterSection />
 */

import React, { useState, FormEvent } from 'react';
import { publicUrl } from '../../utils/paths';
import { FadeInSection } from '../ui';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setEmail('');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image */}
        <FadeInSection direction="right">
          <div className="relative bg-gray-100 overflow-hidden group">
            {/* Lifestyle Image */}
                    <img
                      src={publicUrl('images/ad_03.png')}
              alt="Lifestyle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Top and Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
          </div>
        </FadeInSection>

        {/* Right Side - Content */}
        <FadeInSection direction="left" delay={200}>
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-lg w-full">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                A NEW VISION AWAITS
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Be among the first to discover our latest handcrafted collections, receive exclusive offers, and explore the artistry behind each meticulously crafted frame. At KAZWEAR, every piece is designed to see the world differently.
              </p>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 active:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-sm text-green-600 animate-fade-in">
                  Thank you for subscribing! Check your inbox.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-sm text-red-600 animate-fade-in">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
