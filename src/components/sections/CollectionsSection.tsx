/**
 * CollectionsSection Component
 *
 * Displays Women and Men collection cards in a split layout.
 * Features hover effects, overlay content, and CTA buttons.
 *
 * @example
 * <CollectionsSection />
 */

import React from 'react';
import { Image } from 'lucide-react';
import { FadeInSection } from '../ui';

interface Collection {
  id: string;
  title: string;
  buttonText: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 'women',
    title: 'Women Collection',
    buttonText: 'See Variant',
    link: '#women',
  },
  {
    id: 'men',
    title: 'Men Collection',
    buttonText: 'See Variant',
    link: '#men',
  },
];

export const CollectionsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <FadeInSection
              key={collection.id}
              delay={index * 200}
              direction={index === 0 ? 'right' : 'left'}
            >
              <a
                href={collection.link}
                className="group relative block overflow-hidden bg-gray-100 aspect-[4/5] cursor-pointer"
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      className="w-20 h-20 text-gray-300"
                      strokeWidth={1.5}
                    />
                    <p className="text-gray-400 text-xs mt-3 font-medium tracking-wide">
                      {collection.id.toUpperCase()} MODEL
                    </p>
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  {/* Title */}
                  <h3 className="text-white text-3xl sm:text-4xl font-light mb-8 tracking-wide transition-transform duration-500 group-hover:translate-y-[-8px]">
                    {collection.title}
                  </h3>

                  {/* CTA Button */}
                  <button className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-wide transition-all duration-500 hover:bg-gray-900 hover:text-white group-hover:translate-y-[8px] group-hover:shadow-xl">
                    {collection.buttonText}
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
