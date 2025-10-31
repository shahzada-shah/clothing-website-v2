/**
 * ProductCard Component
 *
 * Displays a single product with image placeholder, name, price, and color variants.
 * Features hover animations and smooth transitions.
 *
 * @example
 * <ProductCard product={product} />
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative bg-gray-100 aspect-[3/4] mb-4 overflow-hidden">
        {product.image && product.image !== 'placeholder' ? (
          <>
            {/* Product Image */}
              <img
                src={product.image}
              alt={product.name}
              className={`w-full h-full object-contain transition-transform duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        ) : (
          <>
            {/* Wireframe Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  className={`w-16 h-16 text-gray-300 transition-all duration-500 ${
                    isHovered ? 'scale-110 text-gray-400' : 'scale-100'
                  }`}
                  strokeWidth={1.5}
                />
                <p className="text-gray-400 text-xs mt-2 font-medium">PRODUCT IMAGE</p>
              </div>
            </div>
            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3
          className={`text-sm font-normal text-gray-700 transition-colors duration-300 ${
            isHovered ? 'text-gray-900' : ''
          }`}
        >
          {product.name}
        </h3>
        <p className="text-xs text-gray-500">
          {product.colors} Color{product.colors > 1 ? 's' : ''} available
        </p>
        <p className="text-sm font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};
