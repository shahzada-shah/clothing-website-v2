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
import { Image } from 'lucide-react';
import { FadeInSection } from '../ui';
import { EVERYDAY_WEAR, CATEGORY_FILTERS } from '../../constants/products';
import { ProductCategory } from '../../types/product';

export const EverydayWear: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('Jacket');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return EVERYDAY_WEAR;
    }
    return EVERYDAY_WEAR.filter(product => product.category === activeCategory);
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
                  <div className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative bg-gray-100 aspect-[3/4] mb-4 overflow-hidden">
                      {/* Wireframe Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <Image
                            className="w-16 h-16 text-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:text-gray-400"
                            strokeWidth={1.5}
                          />
                          <p className="text-gray-400 text-xs mt-2 font-medium">
                            PRODUCT IMAGE
                          </p>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-normal text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {product.colors} Color{product.colors > 1 ? 's' : ''} available
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
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
