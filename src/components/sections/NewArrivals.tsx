/**
 * NewArrivals Section Component
 *
 * Displays a grid of new arrival products with a section header.
 * Features scroll-based animations and responsive grid layout.
 *
 * @example
 * <NewArrivals />
 */

import React from 'react';
import { ProductCard } from '../products/ProductCard';
import { FadeInSection } from '../ui';
import { NEW_ARRIVALS } from '../../constants/products';

export const NewArrivals: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <FadeInSection>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
              NEW ARRIVALS, NEW JOURNEYS.
            </h2>
            <a
              href="#all-products"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
            >
              View all
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </FadeInSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEW_ARRIVALS.map((product, index) => (
            <FadeInSection key={product.id} delay={index * 150} direction="up">
              <ProductCard product={product} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
