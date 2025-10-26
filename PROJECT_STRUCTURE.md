# Project Structure Guide

This document explains the organization of the ANYWEAR e-commerce application codebase.

## 📁 Directory Structure

```
src/
├── components/           # React components
│   ├── hero/            # Hero section components
│   ├── layout/          # Layout components (Header, Footer, Layout)
│   ├── products/        # Product-related components
│   ├── sections/        # Page section components
│   └── ui/              # Reusable UI components
│       └── cart/        # Cart-specific sub-components
├── constants/           # Application constants
├── hooks/               # Custom React hooks
├── pages/               # Page components (route views)
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 📦 Components Organization

### `/components/ui/`
Reusable UI components used throughout the application.

**Files:**
- `AnimatedButton.tsx` - Button with hover/click animations
- `FadeInSection.tsx` - Wrapper for scroll-triggered fade-in animations
- `PageLoader.tsx` - Full-screen loading spinner
- `ScrollToTop.tsx` - Floating button to scroll to top
- `Dropdown.tsx` - Generic dropdown menu (used for Shop nav)
- `SearchModal.tsx` - Full-screen search overlay
- `BagDropdown.tsx` - Shopping cart dropdown
- `AccountDropdown.tsx` - User account menu dropdown

### `/components/ui/cart/`
Sub-components used by BagDropdown. Breaking these out keeps the code organized.

**Files:**
- `CartItem.tsx` - Individual cart item display
- `CartSummary.tsx` - Cart total and action buttons
- `EmptyCart.tsx` - Empty cart state

### `/components/layout/`
Layout components that wrap page content.

**Files:**
- `Header.tsx` - Main navigation header with routing
- `Footer.tsx` - Site footer
- `Layout.tsx` - Wrapper component with Header, Outlet, and Footer

### `/components/sections/`
Large page sections (hero, collections, etc.)

**Files:**
- `NewArrivals.tsx`
- `EverydayWear.tsx`
- `CollectionsSection.tsx`
- `NewsletterSection.tsx`
- `DetailsSection.tsx`

## 📄 Pages

Located in `/pages/`, these are full page components for different routes.

**Available Pages:**
- `HomePage.tsx` - Landing page (route: `/`)
- `MenPage.tsx` - Men's product catalog (route: `/men`)
- `WomenPage.tsx` - Women's product catalog (route: `/women`)
- `AboutPage.tsx` - About us page (route: `/about`)
- `AuthPage.tsx` - Login/signup page (route: `/auth`)

**Usage Example:**
```tsx
// Pages are rendered by React Router in App.tsx
import { HomePage, MenPage, AboutPage } from '@/pages';
```

## 🎣 Custom Hooks

Located in `/hooks/`, these are reusable React hooks.

**Available Hooks:**
- `useScrollEffect` - Detects scroll position and direction
- `useIntersectionObserver` - Triggers when elements enter viewport
- `usePageLoader` - Manages page loading states
- `useClickOutside` - Detects clicks outside an element
- `useKeyPress` - Detects specific keyboard key presses

**Usage Example:**
```tsx
import { useClickOutside, useKeyPress } from '@/hooks';

const MyComponent = () => {
  const ref = useRef(null);

  useClickOutside(ref, () => console.log('Clicked outside'));
  useKeyPress('Escape', () => console.log('ESC pressed'));

  return <div ref={ref}>...</div>;
};
```

## 🛠️ Utilities

Located in `/utils/`, these are pure helper functions.

### `formatting.ts`
- `formatPrice(amount)` - Format number as USD currency
- `formatCompactPrice(amount)` - Format as compact currency (1.2K, 1.5M)
- `calculateTotal(price, quantity)` - Calculate total price

### `dom.ts`
- `disableBodyScroll()` - Prevent body scrolling (for modals)
- `enableBodyScroll()` - Re-enable body scrolling
- `isClickedOutside(ref, event)` - Check if click is outside element

**Usage Example:**
```tsx
import { formatPrice, disableBodyScroll } from '@/utils';

const price = formatPrice(29.99); // "$29.99"
disableBodyScroll(); // Locks body scroll
```

## 📘 Type Definitions

Located in `/types/`, these define TypeScript interfaces.

### `product.ts`
- `Product` - Product item interface

### `cart.ts`
- `CartItem` - Shopping cart item interface
- `MOCK_CART_ITEMS` - Mock data for development

### `index.ts`
- General type exports

## 🎨 Constants

Located in `/constants/`, these store application-wide constants.

### `navigation.ts`
- `PRIMARY_NAV_ITEMS` - Main navigation links
- `SECONDARY_NAV_ITEMS` - Secondary navigation links

### `content.ts`
- `BRAND_NAME` - Application brand name
- Other content strings

### `products.ts`
- `PRODUCTS` - Product data

## 🧱 Component Patterns

### Barrel Exports
Each folder has an `index.ts` that exports all its contents:

```tsx
// Instead of:
import { Button } from './components/ui/Button';
import { Modal } from './components/ui/Modal';

// You can do:
import { Button, Modal } from './components/ui';
```

### Component Composition
Large components are broken into smaller sub-components:

```
BagDropdown (parent)
├── CartItem (child)
├── CartSummary (child)
└── EmptyCart (child)
```

This makes code:
- ✅ Easier to test
- ✅ Easier to maintain
- ✅ More reusable
- ✅ Simpler to understand

### Documentation Standards
Every file includes:
- JSDoc comments explaining the purpose
- Props documentation with descriptions
- Usage examples
- Notes for junior developers

## 🛣️ Routing

The application uses **React Router v6** for client-side routing.

### Route Configuration

Routes are defined in `App.tsx`:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="men" element={<MenPage />} />
      <Route path="women" element={<WomenPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with hero and sections |
| `/men` | MenPage | Men's product catalog |
| `/women` | WomenPage | Women's product catalog |
| `/about` | AboutPage | Company information and values |
| `/auth` | AuthPage | Login and signup interface |

### Navigation

Use React Router's `Link` component for internal navigation:

```tsx
import { Link } from 'react-router-dom';

<Link to="/men">Shop Men</Link>
```

For external links or hash links, use regular `<a>` tags:

```tsx
<a href="#section">Jump to Section</a>
```

### Layout Component

The `Layout` component wraps all pages and includes:
- Header (navigation)
- Outlet (page content - changes based on route)
- Footer
- ScrollToTop button

This ensures consistent layout across all pages without re-rendering the header/footer on route changes.

## 🚀 Getting Started

### Running the Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run typecheck
```

### Adding a New Component

1. Create the component file in the appropriate directory
2. Add comprehensive JSDoc comments
3. Export it from the folder's `index.ts`
4. Import and use in your application

**Example:**
```tsx
/**
 * MyButton Component
 *
 * A custom button with special styling.
 *
 * @module components/ui/MyButton
 */

interface MyButtonProps {
  /** Button text */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

## 💡 Best Practices

1. **Keep components small** - If a file exceeds 200-300 lines, consider breaking it into smaller pieces
2. **Use TypeScript** - Define interfaces for all props and data structures
3. **Document everything** - Write clear comments for junior developers
4. **Reuse utilities** - Use existing hooks and utils instead of duplicating code
5. **Follow naming conventions** - Use PascalCase for components, camelCase for functions
6. **Test as you go** - Verify changes work before moving to the next task

## 📚 Learning Resources

- **React Hooks**: https://react.dev/reference/react
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/

## 🤝 Contributing

When adding new features:
1. Follow the existing folder structure
2. Add proper TypeScript types
3. Include comprehensive documentation
4. Break large components into smaller pieces
5. Create reusable utilities when appropriate
6. Update this document if you add new patterns

---

*For questions or clarifications, reach out to your team lead.*
