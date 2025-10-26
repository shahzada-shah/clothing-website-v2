/**
 * PageLoader Component
 *
 * Full-screen loading animation that appears on initial page load.
 * Features a smooth blur exit transition revealing the homepage.
 *
 * Key Features:
 * - Fades out after content loads
 * - Smooth blur-out effect on exit
 * - Logo animation with scale and opacity
 * - Removes from DOM after animation completes
 * - Eases into blur to reveal page content
 *
 * @example
 * <PageLoader isLoading={loading} />
 */

import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
  minDisplayTime?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading,
  minDisplayTime = 1000
}) => {
  const [show, setShow] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoading) {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setTimeout(() => {
          setShow(false);
        }, 2000);
      }, remainingTime);
    }
  }, [isLoading, minDisplayTime, startTime]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all ${
        !isLoading
          ? 'opacity-0'
          : 'opacity-100'
      }`}
      style={{
        transitionProperty: 'opacity',
        transitionDuration: '1800ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="text-center space-y-6">
        {/* Logo Animation */}
        <div
          className={`transform transition-all ${
            !isLoading
              ? 'scale-90 opacity-0'
              : 'scale-100 opacity-100'
          }`}
          style={{
            filter: !isLoading ? 'blur(10px)' : 'blur(0px)',
            transitionDuration: '1500ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
            KAZWEAR
          </h1>
        </div>

        {/* Loading Dots */}
        <div
          className={`flex justify-center space-x-2 transition-opacity ${
            !isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDuration: '800ms',
            transitionTimingFunction: 'ease-out'
          }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-900 rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationDuration: '0.6s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
