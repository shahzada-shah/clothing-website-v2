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
import { HERO_CONTENT } from '../../constants/content';

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-73px)] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_img.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Edge Blur Effect - Only on far left and right edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 15%, transparent 25%, transparent 75%, black 85%, black 100%)',
          }}
        >
          <img
            src="/images/hero_img.png"
            alt=""
            className="w-full h-full object-cover blur-md"
          />
        </div>
        
        {/* Edge Darkening - Left and Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Subtle center darkening for text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight transition-all duration-1000 delay-200 drop-shadow-lg ${
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
            className={`text-base sm:text-lg md:text-xl text-white mb-2 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 drop-shadow-md ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HERO_CONTENT.subtitle}
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 drop-shadow-md ${
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
            <a
              href={HERO_CONTENT.ctaLink}
              className="inline-block bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wide transition-all duration-500 hover:bg-gray-900 hover:text-white hover:translate-y-[-2px] hover:shadow-xl"
            >
              {HERO_CONTENT.ctaText}
            </a>
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
