/**
 * DetailsSection Component
 *
 * Showcases product quality and craftsmanship with a three-image grid
 * and descriptive text emphasizing attention to detail.
 *
 * @example
 * <DetailsSection />
 */

import React from 'react';
import { publicUrl } from '../../utils/paths';
import { Image } from 'lucide-react';
import { FadeInSection } from '../ui';
import { BRAND_NAME } from '../../constants/content';

export const DetailsSection: React.FC = () => {
          const images = [
            { id: 1, label: 'CRAFTSMANSHIP', aspectRatio: '4/3', image: publicUrl('images/hand_craft_01.png') },
            { id: 2, label: 'PRECISION DETAIL', aspectRatio: '4/3', image: publicUrl('images/hand_craft_02.png') },
            { id: 3, label: 'ARTISAN WORK', aspectRatio: '4/3', image: publicUrl('images/hand_craft_03.png') },
          ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <FadeInSection key={image.id} delay={index * 200} direction="up">
              <div
                className="relative bg-gray-100 overflow-hidden group cursor-pointer"
                style={{ aspectRatio: image.aspectRatio }}
              >
                {image.image ? (
                  <>
                    {/* Detail Image */}
                    <img
                      src={image.image}
                      alt={image.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark Hover Overlay with Label */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                      <p className="text-white text-xs font-medium tracking-widest uppercase">
                        {image.label}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Wireframe Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <Image
                          className="w-12 h-12 text-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:text-gray-400"
                          strokeWidth={1.5}
                        />
                        <p className="text-gray-400 text-xs mt-3 font-medium tracking-wide">
                          {image.label}
                        </p>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <FadeInSection delay={600} direction="right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-400 tracking-wide">
              Details That Speak.
            </h2>
          </FadeInSection>

          {/* Right: Description */}
          <FadeInSection delay={800} direction="left">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              From frame to lens, every piece of {BRAND_NAME} eyewear is handcrafted with precision.
              Quality you can see, design that endures—made to be worn every day, everywhere.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
