/**
 * Hero Section Component
 *
 * Main hero section with wireframe placeholder image,
 * centered text content, and call-to-action button.
 * Features smooth fade-in animations and interactive effects.
 *
 * Uses a clean wireframe/placeholder concept for demonstration.
 *
 * @example
 * <HeroSection />
 */

import React from 'react';
import { Image } from 'lucide-react';
import { HERO_CONTENT } from '../../constants/content';
import { AnimatedButton } from '../ui/AnimatedButton';

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-73px)] min-h-[600px] overflow-hidden">
      {/* Background with Wireframe Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {/* Wireframe Image Placeholder */}
        <div
          className={`w-full max-w-2xl mx-auto border-2 border-dashed border-gray-400 rounded-lg p-16 flex flex-col items-center justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            <Image
              className="w-24 h-24 text-gray-400 mb-4 animate-pulse"
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-pulse" />
          </div>
          <p className="text-gray-500 text-lg font-medium tracking-wide">WIREFRAME IMAGE</p>
          <p className="text-gray-400 text-sm mt-2 font-mono">720 × 980</p>
        </div>

        {/* Subtle animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HERO_CONTENT.title.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-700"
                style={{
                  animationDelay: `${index * 100 + 300}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {word}
                {index < HERO_CONTENT.title.split(' ').length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-800 mb-2 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HERO_CONTENT.subtitle}
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HERO_CONTENT.description}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <AnimatedButton href={HERO_CONTENT.ctaLink}>
              {HERO_CONTENT.ctaText}
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gray-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-gray-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gray-400/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
    </section>
  );
};
