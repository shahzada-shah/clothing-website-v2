/**
 * AboutPage Component
 *
 * Premium About page with sophisticated design and micro-interactions.
 * Features editorial-style layouts and refined typography.
 *
 * @module pages/AboutPage
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeInSection } from '../components/ui';
import { ArrowRight, Minus } from 'lucide-react';

/**
 * Core principles with refined presentation
 */
const PRINCIPLES = [
  {
    number: '01',
    title: 'Craft',
    description: 'Every piece begins with intention. We collaborate with artisans who share our commitment to excellence, ensuring each garment meets exacting standards.',
  },
  {
    number: '02',
    title: 'Sustainability',
    description: 'Responsible design is non-negotiable. We source materials thoughtfully and maintain transparent supply chains that respect both people and planet.',
  },
  {
    number: '03',
    title: 'Longevity',
    description: 'Fashion without expiration. Our designs resist the pull of trends, focusing instead on proportions, materials, and construction that endure.',
  },
  {
    number: '04',
    title: 'Versatility',
    description: 'From morning to midnight, work to weekend. Each piece is engineered for the complexity of modern life, moving seamlessly between moments.',
  },
];

/**
 * AboutPage Component
 *
 * @returns AboutPage component
 */
export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Editorial Style */}
      <FadeInSection>
        <div className="relative h-[60vh] min-h-[500px] bg-stone-100 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }} />
          </div>

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <div className="inline-block mb-6">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-medium">
                  Est. 2024
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-[1.1]">
                Designed for
                <br />
                <span className="font-normal">everyday life</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                We create essential clothing that bridges the gap between comfort and refinement,
                built to last beyond seasons.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Philosophy Section - Split Layout */}
      <FadeInSection>
        <div className="max-w-[1400px] mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Text */}
            <div className="lg:sticky lg:top-32">
              <div className="mb-8">
                <Minus className="w-12 h-0.5 text-gray-900 mb-8" strokeWidth={1} />
                <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
                  Our Philosophy
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                <p className="text-lg">
                  In an industry driven by constant change, we've chosen a different path.
                  One that values permanence over novelty, substance over spectacle.
                </p>
                <p>
                  Each collection is a careful study in balance—between structure and ease,
                  simplicity and depth, tradition and innovation. We don't chase trends;
                  we create pieces that exist outside of time.
                </p>
                <p>
                  This approach demands patience. It requires us to question every detail,
                  to refine endlessly, to say no more often than yes. But the result is
                  clothing that feels both familiar and fresh, season after season.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="space-y-8">
              <div className="aspect-[4/5] bg-stone-50 rounded-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-2/3 bg-stone-200 rounded-sm transition-all duration-700 group-hover:scale-95 opacity-40" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 aspect-square bg-stone-50 rounded-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex-1 aspect-square bg-stone-50 rounded-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-50 transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Principles Grid - Modern Layout */}
      <FadeInSection>
        <div className="bg-stone-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-medium">
                Four Principles
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-light text-gray-300 group-hover:text-gray-900 transition-colors duration-500">
                      {principle.number}
                    </span>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Process Section - Minimal */}
      <FadeInSection>
        <div className="max-w-[1400px] mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <Minus className="w-12 h-0.5 text-gray-900 mb-8" strokeWidth={1} />
            <h2 className="text-4xl font-light text-gray-900 mb-12 tracking-tight">
              How we work
            </h2>
            <div className="space-y-12">
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <h3 className="text-xl font-light text-gray-900 w-48 flex-shrink-0">
                    Material Selection
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    We source natural fibers from certified suppliers, prioritizing organic cotton,
                    European linen, and ethically produced wool. Each material is chosen for its
                    quality, durability, and minimal environmental impact.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <h3 className="text-xl font-light text-gray-900 w-48 flex-shrink-0">
                    Design Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    Our design team iterates extensively, refining patterns and proportions through
                    multiple prototypes. We test each garment in real-world conditions, ensuring
                    comfort and functionality match our aesthetic standards.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <h3 className="text-xl font-light text-gray-900 w-48 flex-shrink-0">
                    Production
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    We partner with family-owned factories that share our commitment to fair labor
                    practices. Small-batch production allows us to maintain quality control and
                    minimize waste while supporting traditional craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* CTA Section - Clean & Direct */}
      <FadeInSection>
        <div className="border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 py-32">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight leading-[1.2]">
                Explore the collection
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                Discover pieces designed to work together, creating a wardrobe
                that's both intentional and effortless.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/women')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="font-light tracking-wide">Women's Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/men')}
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-gray-900 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  <span className="font-light tracking-wide">Men's Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
