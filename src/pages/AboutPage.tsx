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
    title: 'Craftsmanship',
    description: 'Every frame is handcrafted by master artisans in Japan, where decades of experience meet precision engineering. Each pair undergoes meticulous quality control to ensure flawless construction.',
  },
  {
    number: '02',
    title: 'Materials',
    description: 'We source only the finest cellulose acetate, titanium, and stainless steel. Our materials are chosen for their durability, comfort, and ability to showcase intricate hand-polished finishes.',
  },
  {
    number: '03',
    title: 'Timeless Design',
    description: 'Our frames transcend fleeting trends. Each design is a study in balance and proportion, created to remain elegant and relevant for generations.',
  },
  {
    number: '04',
    title: 'Vision',
    description: 'We believe eyewear is more than function—it\'s an extension of identity. Every frame is designed to enhance how you see the world and how the world sees you.',
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
                Crafted for
                <br />
                <span className="font-normal">timeless vision</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                We create handcrafted eyewear that bridges artistry and precision engineering,
                designed to elevate how you see and are seen.
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
                  In a world of mass production, we've chosen the path of the artisan.
                  One that values precision over speed, heritage over convenience.
                </p>
                <p>
                  Each frame is a careful study in geometry—balancing structure and comfort,
                  classic silhouettes and contemporary refinement. Drawing from Japanese
                  craftsmanship traditions, we create eyewear that transcends time.
                </p>
                <p>
                  This approach demands dedication. Every angle, every curve, every finish is
                  considered and reconsidered. Frames are hand-polished, individually inspected,
                  and crafted with patience. The result is eyewear that feels essential from
                  the moment you wear it.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="space-y-8">
              <div className="aspect-[4/5] bg-stone-50 rounded-sm relative overflow-hidden group">
                <img
                  src="/images/showcase_01.png"
                  alt="Eyewear Craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 aspect-square bg-stone-50 rounded-sm relative overflow-hidden group">
                  <img
                    src="/images/showcase_02.png"
                    alt="Design details"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 aspect-square bg-stone-50 rounded-sm relative overflow-hidden group">
                  <img
                    src="/images/showcase_03.png"
                    alt="Material finishing"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                    Frame Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    Our designers begin with hand-drawn sketches, translating vision into precise technical
                    specifications. Each design undergoes multiple iterations, refining proportions and angles
                    until achieving perfect harmony between form and function.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <h3 className="text-xl font-light text-gray-900 w-48 flex-shrink-0">
                    Handcrafting
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    Master craftsmen shape premium acetate and metal through traditional techniques passed down
                    through generations. Each frame is hand-polished, ensuring smooth edges and flawless finishes.
                    Hinges are individually adjusted for perfect temple movement.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-start justify-between gap-8">
                  <h3 className="text-xl font-light text-gray-900 w-48 flex-shrink-0">
                    Quality Control
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light flex-1">
                    Every frame undergoes rigorous inspection at multiple stages. We test for structural integrity,
                    comfort, and aesthetic perfection. Only frames that meet our exacting standards bear the
                    KAZWEAR name—a commitment to excellence in every detail.
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
                Discover our collections
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                Explore frames crafted to enhance your vision and express your style,
                from classic heritage designs to bold contemporary statements.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/women')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-all duration-300"
                >
                  <span className="font-light tracking-wide">Premium Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/men')}
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-gray-900 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  <span className="font-light tracking-wide">Heritage Collection</span>
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
