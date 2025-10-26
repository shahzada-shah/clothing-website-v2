/**
 * AnimatedButton Component
 *
 * Premium button with ripple effect, smooth animations,
 * and multiple visual feedback mechanisms.
 *
 * @example
 * <AnimatedButton href="#shop" variant="primary">Shop Now</AnimatedButton>
 */

import React, { useState } from 'react';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const baseClasses = 'group relative inline-block px-12 py-4 text-sm font-medium tracking-wide overflow-hidden transition-all duration-300';

  const variantClasses = variant === 'primary'
    ? 'bg-black text-white hover:bg-gray-900 hover:shadow-2xl hover:shadow-gray-900/50'
    : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:shadow-xl';

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
        {children}
      </span>

      <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </a>
  );
};
