/**
 * MenPage Component
 *
 * Shopping page for men's clothing and accessories.
 * Features functional filters that dynamically update the product display.
 *
 * For Junior Developers:
 * This page uses React state to manage filter values. When a filter changes,
 * we calculate which products match ALL the active filters using the useMemo hook.
 * This prevents unnecessary recalculations and keeps the app fast.
 *
 * @module pages/MenPage
 */

import React, { useState, useMemo } from 'react';
import { FadeInSection, MultiSelect } from '../components/ui';
import { AnimatedProductGrid } from '../components/products/AnimatedProductGrid';
import { MEN_PRODUCTS } from '../constants/products';
import { Product } from '../types/product';

/**
 * MenPage Component
 *
 * @returns MenPage component
 */
export const MenPage: React.FC = () => {
  const [typeFilters, setTypeFilters] = useState<string[]>(['All']);
  const [collectionFilters, setCollectionFilters] = useState<string[]>(['All']);
  const [materialFilters, setMaterialFilters] = useState<string[]>(['All']);
  const [sizeFilters, setSizeFilters] = useState<string[]>(['All']);
  const [colorFilters, setColorFilters] = useState<string[]>(['All']);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return MEN_PRODUCTS.filter((product: Product) => {
      // Type filter (multi-select)
      if (!typeFilters.includes('All') && typeFilters.length > 0) {
        if (!typeFilters.includes(product.type)) {
          return false;
        }
      }

      // Collection filter (multi-select)
      if (!collectionFilters.includes('All') && collectionFilters.length > 0) {
        if (!product.collection || !collectionFilters.includes(product.collection)) {
          return false;
        }
      }

      // Material filter (multi-select)
      if (!materialFilters.includes('All') && materialFilters.length > 0) {
        if (!product.material || !materialFilters.includes(product.material)) {
          return false;
        }
      }

      // Size filter (multi-select)
      if (!sizeFilters.includes('All') && sizeFilters.length > 0) {
        if (!product.availableSizes || !product.availableSizes.some(size => sizeFilters.includes(size))) {
          return false;
        }
      }

      // Color filter (multi-select)
      if (!colorFilters.includes('All') && colorFilters.length > 0) {
        if (!product.availableColors || !product.availableColors.some(color => colorFilters.includes(color))) {
          return false;
        }
      }

      return true;
    });
  }, [typeFilters, collectionFilters, materialFilters, sizeFilters, colorFilters]);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <FadeInSection>
        <div className="bg-white py-16 px-6 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Men's Collection</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our curated selection of men's essentials. From everyday basics to statement
              pieces, find your perfect style.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-50">
        <FadeInSection>
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <MultiSelect
                label="Type"
                options={['All', 'T-Shirts', 'Shirts', 'Pants', 'Jackets', 'Accessories']}
                values={typeFilters}
                onChange={setTypeFilters}
              />

              <MultiSelect
                label="Collection"
                options={['All', 'Essential', 'Premium', 'Heritage', 'Limited Edition']}
                values={collectionFilters}
                onChange={setCollectionFilters}
              />

              <MultiSelect
                label="Material"
                options={['All', 'Cotton', 'Linen', 'Wool', 'Denim', 'Synthetic']}
                values={materialFilters}
                onChange={setMaterialFilters}
              />

              <MultiSelect
                label="Size"
                options={['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL']}
                values={sizeFilters}
                onChange={setSizeFilters}
              />

              <MultiSelect
                label="Color"
                options={['All', 'Black', 'White', 'Navy', 'Gray', 'Beige', 'Brown']}
                values={colorFilters}
                onChange={setColorFilters}
              />
            </div>

            {/* Results Count */}
            <div className="mt-8 text-sm text-gray-600 transition-all duration-300">
              {filteredProducts.length} RESULT{filteredProducts.length !== 1 ? 'S' : ''}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Products Grid */}
      <FadeInSection>
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          {filteredProducts.length > 0 ? (
            <AnimatedProductGrid products={filteredProducts} />
          ) : (
            /* No Results Message */
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-600 mb-8">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => {
                  setTypeFilters(['All']);
                  setCollectionFilters(['All']);
                  setMaterialFilters(['All']);
                  setSizeFilters(['All']);
                  setColorFilters(['All']);
                }}
                className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </FadeInSection>
    </div>
  );
};
