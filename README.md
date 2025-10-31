# KAZWEAR — Handcrafted Eyewear Store

A premium eyewear storefront built with React, TypeScript, and Tailwind CSS. The experience centers on handcrafted frames, refined typography, and polished interactions.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Page Loader**: Blur-in animation effect on initial page load
- **Smooth Scrolling**: Native smooth scroll with scroll-to-top button
- **Dropdown Navigation**: Hover-triggered dropdown menus in header (stable z-index / overflow)
- **Responsive Design**: Mobile-first design that works on all devices
- **Intersection Observers**: Animations triggered when elements enter viewport
- **Custom Scrollbar**: Styled scrollbar for better visual consistency
- **Accessibility**: Proper focus states and keyboard navigation
- **Elegant Toasts**: Bottom‑right toasts for Add to Bag, Remove from Bag, Buy Now
- **Edge‑Aware Hero**: Blur and darken applied only to far left/right edges; face stays sharp

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── hero/           # Hero section components
│   │   └── HeroSection.tsx
│   ├── layout/         # Layout components (Header, Footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── products/       # Product-related components
│   │   └── ProductCard.tsx
│   ├── sections/       # Page sections
│   │   ├── CollectionsSection.tsx
│   │   ├── DetailsSection.tsx
│   │   ├── EverydayWear.tsx
│   │   ├── NewArrivals.tsx
│   │   └── NewsletterSection.tsx
│   └── ui/            # Reusable UI components
│       ├── AnimatedButton.tsx
│       ├── Dropdown.tsx
│       ├── FadeInSection.tsx
│       ├── PageLoader.tsx
│       ├── ScrollToTop.tsx
│       └── index.ts
├── constants/         # Application constants
│   ├── content.ts
│   ├── navigation.ts
│   └── products.ts
├── hooks/            # Custom React hooks
│   ├── useIntersectionObserver.ts
│   ├── usePageLoader.ts
│   ├── useScrollEffect.ts
│   └── index.ts
├── types/            # TypeScript type definitions
│   ├── index.ts
│   └── product.ts
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and animations
```

## 🧩 Key Components

### Layout Components

#### Header (`components/layout/Header.tsx`)
- Sticky navigation with scroll effects
- Eyewear categories (Handcrafted Glasses, Sunglasses, Accessories)
- Mobile hamburger menu
- Smooth animations and transitions

#### Footer (`components/layout/Footer.tsx`)
- Multi-column link organization
- Social media and legal links
- Large brand name display
- Responsive grid layout

### UI Components

#### PageLoader (`components/ui/PageLoader.tsx`)
- Full-screen loading animation
- Blur-in effect on page load
- Configurable minimum display time
- Auto-removes from DOM after animation

#### ScrollToTop (`components/ui/ScrollToTop.tsx`)
- Floating button (appears after 300px scroll)
- Smooth scroll to top
- Fade-in/fade-out animation
- Bottom-right positioning

#### Dropdown (`components/ui/Dropdown.tsx`)
- Hover-triggered dropdown menu
- Click outside to close
- Smooth fade and slide animations
- Keyboard accessible

#### Toasts (`components/ui/Toast.tsx`)
- Headless provider + hook (`useToast`)
- Bottom‑right stack, auto dismiss, elegant fade
- Example:

```tsx
const { showToast } = useToast();
showToast({ type: 'success', message: 'Added to bag', description: 'Classic Round · 52mm · Charcoal' });
```

#### FadeInSection (`components/ui/FadeInSection.tsx`)
- Wrapper for fade-in on scroll
- Uses Intersection Observer API
- Configurable animation delay
- Automatic cleanup

#### AnimatedButton (`components/ui/AnimatedButton.tsx`)
- Button with hover effects
- Scale and shadow animations
- Customizable styles
- Accessible focus states

### Custom Hooks

#### usePageLoader (`hooks/usePageLoader.ts`)
Manages initial page loading state with minimum display time.

```tsx
const isLoading = usePageLoader(1000); // 1 second minimum
```

#### useScrollEffect (`hooks/useScrollEffect.ts`)
Detects scroll position and provides scroll state.

```tsx
const { isScrolled } = useScrollEffect(20); // Threshold in pixels
```

#### useIntersectionObserver (`hooks/useIntersectionObserver.ts`)
Triggers animations when elements enter viewport.

```tsx
const { isIntersecting, ref } = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: '0px',
});
```

## 🎨 Styling & Animations

### Global Styles (`src/index.css`)

Custom animations defined:
- `fadeInDown`: Dropdown animation (200ms)
- `fade-in`: General fade-in (600ms)
- `slide-in-up`: Slide from bottom (800ms)
- `scale-in`: Scale with fade (500ms)
- `shimmer`: Loading shimmer effect (2s loop)
- `float`: Floating animation (3s loop)
- `ripple`: Click ripple effect (600ms)

### Animation Utilities

Delay classes available: `.delay-100` through `.delay-900`

Custom utilities:
- `.perspective-1000`: 3D perspective
- `.transform-style-3d`: Preserve 3D transforms
- `.backface-hidden`: Hide element back face
- `.text-shadow-sm/md/lg`: Text shadow utilities

### Custom Scrollbar

Styled scrollbar with:
- 10px width
- Gray track (#f1f1f1)
- Darker thumb (#888)
- Hover effect (#555)

## 🖼️ Image Guidelines (Ideogram‑friendly)

All images live under `public/images`. Recommended sizes:

- Product Cards (grid): 3:4 portrait — 900×1200 (or 750×1000)
- Product Detail – Main: 4:5 portrait — 960×1200 (or 800×1000)
- Detail Section (3‑up): 4:3 landscape — 1400×1050 (or 1200×900)
- Collections (2 cards): 4:5 portrait — 1200×1500
- Hero: 16:9 landscape — 1920×1080 with center‑safe subject (edge blur/darken applied)
- Newsletter: 1:1 square — 1000×1000

Use PNG or WebP; aim for ~200–400 KB per asset.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

## 📦 Dependencies

### Production
- `react` & `react-dom`: UI framework
- `lucide-react`: Icon library
- `@supabase/supabase-js`: Backend services

### Development
- `vite`: Build tool
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS
- `eslint`: Code linting

## 🎯 Best Practices

### Component Organization
- One component per file
- Related components in same directory
- Barrel exports (index.ts) for cleaner imports

### TypeScript
- Strict type checking enabled
- Interface definitions in separate files
- Proper prop typing for all components

### Performance
- Lazy loading where appropriate
- Intersection Observer for scroll animations
- Debounced scroll events
- CSS transitions over JavaScript animations

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Screen reader friendly

## 📱 Responsive Breakpoints

```css
sm:  640px  /* Small devices */
md:  768px  /* Medium devices */
lg:  1024px /* Large devices */
xl:  1280px /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## 🔧 Configuration Files

- `vite.config.ts`: Vite build configuration
- `tailwind.config.js`: Tailwind CSS customization
- `tsconfig.json`: TypeScript compiler options
- `eslint.config.js`: ESLint rules

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For internal contributions, please follow the established code style and create pull requests for review.
