/**
 * ProductDetailPage Component
 *
 * Displays detailed information about a single product including:
 * - Product images with color variations
 * - Product information (name, price, description)
 * - Color, size, and quantity selectors
 * - Purchase actions (Add to Bag, Buy Now)
 * - Expandable details sections
 *
 * Architecture:
 * This page is composed of multiple smaller, reusable components.
 * Each component handles one specific piece of functionality and
 * includes its own animations and styling.
 *
 * For Junior Developers:
 * This is a "container component" - it manages the overall state
 * and layout, but delegates the actual UI rendering to smaller
 * "presentational components". This makes the code easier to:
 * 1. Understand (each component has one clear purpose)
 * 2. Test (smaller components are easier to test)
 * 3. Reuse (components can be used on other pages)
 * 4. Maintain (changes to one component don't affect others)
 *
 * @module pages/ProductDetailPage
 */

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants/products';
import {
  ProductImage,
  ProductInfo,
  ColorSelector,
  ColorOption,
  SizeSelector,
  QuantitySelector,
  ProductActions,
  ProductFeatures,
  ExpandableSection
} from '../components/product-detail';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

/**
 * ProductDetailPage Component
 *
 * @returns Rendered product detail page
 */
export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  // State management
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Find the product by ID
  const product = products.find(p => p.id === Number(id));

  // Handle product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-sm underline hover:no-underline transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Available color options
  const colorOptions: ColorOption[] = [
    { name: 'Charcoal', hex: '#2D2D2D' },
    { name: 'Navy', hex: '#1A365D' },
    { name: 'Forest', hex: '#2F4F4F' },
    { name: 'Burgundy', hex: '#800020' },
  ];

  // Available sizes
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // Product image IDs for thumbnails
  const thumbnailIds = [1, 2, 3, 4];

  // Check if product is favorited
  const productIsFavorited = product ? isFavorite(product.id) : false;

  // Toggle expandable section
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Action handlers
  const handleAddToBag = () => {
    if (!product) return;

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: colorOptions[selectedColorIndex].name,
      size: selectedSize,
      quantity: quantity,
    });
  };

  const handleBuyNow = () => {
    // In a real app, this would go directly to checkout
    alert('Proceeding to checkout...');
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description || 'Check out this product!',
        url: window.location.href
      }).catch(() => {
        // Fallback if share fails
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <ProductImage
              color={colorOptions[selectedColorIndex].hex}
              isMain={true}
            />

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {thumbnailIds.map((thumbId) => (
                <button
                  key={thumbId}
                  className="transition-all duration-300 hover:ring-2 hover:ring-black hover:ring-offset-2 rounded-lg"
                >
                  <ProductImage
                    color={colorOptions[selectedColorIndex].hex}
                    isMain={false}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <button
                onClick={() => navigate(-1)}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </button>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>

            {/* Product Info */}
            <ProductInfo
              name={product.name}
              category={product.category}
              collection={product.collection}
              price={product.price}
              description={product.description}
              badge={product.badge}
              isFavorited={productIsFavorited}
              onToggleFavorite={() => toggleFavorite(product.id, {
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              })}
            />

            {/* Color Selector */}
            <ColorSelector
              colors={colorOptions}
              selectedIndex={selectedColorIndex}
              onColorChange={setSelectedColorIndex}
              totalColors={product.colors}
            />

            {/* Size Selector */}
            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
            />

            {/* Quantity Selector */}
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              stockCount={12}
              minQuantity={1}
              maxQuantity={12}
            />

            {/* Action Buttons */}
            <ProductActions
              onAddToBag={handleAddToBag}
              onBuyNow={handleBuyNow}
              onShare={handleShare}
            />

            {/* Product Features */}
            <ProductFeatures />

            {/* Expandable Details Sections */}
            <div className="space-y-px">
              <ExpandableSection
                title="Materials & Care"
                isExpanded={expandedSection === 'materials'}
                onToggle={() => toggleSection('materials')}
              >
                <p>• 100% Premium Cotton</p>
                <p>• Machine wash cold</p>
                <p>• Tumble dry low</p>
                <p>• Do not bleach</p>
                <p>• Iron on low heat if needed</p>
              </ExpandableSection>

              <ExpandableSection
                title="Shipping & Returns"
                isExpanded={expandedSection === 'shipping'}
                onToggle={() => toggleSection('shipping')}
              >
                <p>Free standard shipping on orders over $50</p>
                <p>Express shipping available at checkout</p>
                <p>30-day return policy for unworn items with tags</p>
                <p>Free returns on all orders</p>
              </ExpandableSection>

              <ExpandableSection
                title="Product Details"
                isExpanded={expandedSection === 'details'}
                onToggle={() => toggleSection('details')}
              >
                <p>SKU: {product.id.toString().padStart(6, '0')}</p>
                <p>Category: {product.category}</p>
                <p>Collection: {product.collection}</p>
                <p>Available Colors: {product.colors}</p>
                <p>Designed for everyday wear</p>
                <p>Made with sustainable materials</p>
              </ExpandableSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
