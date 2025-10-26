/**
 * Footer Component
 *
 * Multi-column footer with categorized navigation links.
 * Features responsive design with collapsible sections on mobile.
 *
 * @example
 * <Footer />
 */

import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerData: FooterColumn[] = [
  {
    title: 'CATEGORIES',
    links: [
      { label: 'MAN', href: '#man' },
      { label: 'WOMAN', href: '#woman' },
      { label: 'T-SHIRTS', href: '#tshirts' },
      { label: 'PANTS', href: '#pants' },
      { label: 'LONG SLEEVES', href: '#long-sleeves' },
    ],
  },
  {
    title: 'ABOUT',
    links: [
      { label: 'ACCOUNT', href: '#account' },
      { label: 'HELP', href: '#help' },
      { label: 'CONTACT', href: '#contact' },
      { label: 'GIFT CARD', href: '#gift-card' },
      { label: 'REWARD CLUB', href: '#reward-club' },
      { label: 'TRACK YOUR ORDER', href: '#track-order' },
    ],
  },
  {
    title: 'SHIPPING',
    links: [
      { label: 'MY RETURNS', href: '#returns' },
      { label: 'SIZE GUIDE', href: '#size-guide' },
      { label: 'STOCKISTS', href: '#stockists' },
      { label: 'ACCESSIBILITY STATEMENT', href: '#accessibility' },
      { label: 'COOKIE POLICY', href: '#cookie-policy' },
      { label: 'PRIVACY POLICY', href: '#privacy-policy' },
      { label: 'SITEMAP', href: '#sitemap' },
    ],
  },
  {
    title: 'COMMUNITY EVENT',
    links: [
      { label: 'TERMS AND CONDITIONS', href: '#terms' },
      { label: 'WEBSITE TERMS OF USE', href: '#website-terms' },
      { label: 'REWARDS CLUB T AND CS', href: '#rewards-terms' },
      { label: "REWARDS CLUB FAQ'S", href: '#rewards-faq' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
];

const socialLinks = [
  { label: 'FACEBOOK', href: '#facebook' },
  { label: 'TIKTOK', href: '#tiktok' },
  { label: 'INSTAGRAM', href: '#instagram' },
  { label: 'X', href: '#x' },
];

const legalLinks = [
  { label: 'PRIVACY AND POLICY', href: '#privacy-policy' },
  { label: 'TERM AND CONDITION', href: '#terms-condition' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {footerData.map((column, index) => (
            <div key={index} className="space-y-5">
              {/* Column Title */}
              <h3 className="text-gray-900 text-sm font-semibold tracking-wider uppercase">
                {column.title}
              </h3>

              {/* Column Links */}
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} KAZWEAR. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed with care for everyday style
            </p>
          </div>
        </div>
      </div>

      {/* Social & Legal Section */}
      <div className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          {/* Top Row - Social & Legal Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 text-xs font-medium hover:text-gray-900 transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 text-xs font-medium hover:text-gray-900 transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Large Brand Name */}
          <div className="text-center">
            <h2 className="text-[80px] sm:text-[120px] lg:text-[160px] xl:text-[200px] font-black text-gray-900 tracking-tighter leading-none">
              KAZWEAR
            </h2>
          </div>

          {/* Developer Credits Section */}
          <div className="text-center mt-8 group cursor-default">
            {/* Main Text - Always Visible */}
            <p className="text-gray-500 text-xs tracking-widest uppercase transition-colors duration-300">
              DEVELOPED BY{' '}
              <span className="text-gray-900 font-medium">KAZI DIGITAL STUDIO</span>
            </p>

            {/* Developer Names - Fade in on hover */}
            <div className="overflow-hidden transition-all duration-500 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 mt-0 group-hover:mt-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-gray-600 text-xs">
                <p className="transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-gray-700 font-medium">Shahzada Shah</span> - Lead Senior Developer
                </p>
                <span className="hidden sm:inline text-gray-400">|</span>
                <p className="transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75">
                  <span className="text-gray-700 font-medium">Jimmy Carrera</span> - Lead Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
