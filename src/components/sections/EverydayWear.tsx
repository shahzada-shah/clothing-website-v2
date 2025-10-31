/**
 * EverydayWear Section Component
 *
 * Displays a filterable grid of products with category tabs.
 * Features dynamic filtering, smooth animations, and a side tagline.
 *
 * @example
 * <EverydayWear />
 */

import React, { useState, useMemo } from 'react';
import { FadeInSection } from '../ui';
import { ProductCard } from '../products/ProductCard';
import { EVERYDAY_WEAR, CATEGORY_FILTERS, NEW_ARRIVALS } from '../../constants/products';
import { ProductCategory } from '../../types/product';

export const EverydayWear: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('Eyewear');

  const filteredProducts = useMemo(() => {
    // Combine EVERYDAY_WEAR and NEW_ARRIVALS for filtering
    const allProducts = [...EVERYDAY_WEAR, ...NEW_ARRIVALS];
    
    if (activeCategory === 'all') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <FadeInSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
              FOR YOUR EVERYDAY WEAR.
            </h2>
            <a
              href="#all-products"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group hidden sm:block"
            >
              View all
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </FadeInSection>

        {/* Category Filters */}
        <FadeInSection delay={200}>
          <div className="flex gap-6 mb-12 border-b border-gray-200">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.value)}
                className={`pb-3 text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === filter.value
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {filter.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                    activeCategory === filter.value ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Products Grid with Side Tagline */}
        <div className="grid grid-cols-12 gap-8">
          {/* Side Tagline */}
          <div className="col-span-12 lg:col-span-2">
            <FadeInSection delay={300} direction="right">
              <div className="sticky top-32">
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight tracking-wide">
                  CHOOSE IT
                  <br />
                  PAIR IT
                  <br />
                  WEAR IT
                </h3>
              </div>
            </FadeInSection>
          </div>

          {/* Products Grid */}
          <div className="col-span-12 lg:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <FadeInSection
                  key={product.id}
                  delay={400 + index * 100}
                  direction="up"
                >
                  <ProductCard product={product} />
                </FadeInSection>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <FadeInSection delay={400}>
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-400 text-lg">
                    No products available in this category yet.
                  </p>
                </div>
              </FadeInSection>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
