# Architecture Documentation

## Overview

ANYWEAR is a modern e-commerce website built with React, TypeScript, and Tailwind CSS. This document explains the architectural decisions, folder structure, and how the pieces fit together.

## Core Architecture Principles

### 1. Component-Based Architecture
Every UI element is a reusable React component with a single responsibility.

### 2. Type Safety
TypeScript provides compile-time type checking to catch errors early.

### 3. Separation of Concerns
- **Components**: UI presentation
- **Hooks**: Reusable logic
- **Constants**: Configuration data
- **Types**: Type definitions

### 4. Performance First
- Intersection Observer for scroll animations
- CSS transitions over JavaScript
- Lazy loading where applicable
- Optimized re-renders

## Folder Structure Explained

```
src/
├── components/          # All React components
│   ├── hero/           # Landing hero section
│   ├── layout/         # Page structure (Header, Footer, Layout)
│   ├── products/       # Product display components
│   ├── sections/       # Major page sections
│   └── ui/            # Reusable UI primitives
│       └── cart/      # Cart sub-components
├── constants/          # Static configuration
├── hooks/             # Custom React hooks
├── pages/             # Page components (routes)
├── types/             # TypeScript definitions
├── utils/             # Utility functions
├── App.tsx            # Root component with routing
├── main.tsx           # Application entry
└── index.css          # Global styles
```

## Component Architecture

### Component Hierarchy

```
App (Root with Routing)
├── PageLoader (Full-screen overlay)
└── BrowserRouter
    └── Routes
        └── Layout (Header + Outlet + Footer)
            ├── Header (Sticky navigation)
            │   ├── Dropdown (Shop menu)
            │   ├── SearchModal
            │   ├── AccountDropdown
            │   └── BagDropdown
            │       ├── CartItem
            │       ├── CartSummary
            │       └── EmptyCart
            ├── Outlet (Route content)
            │   ├── HomePage
            │   │   ├── HeroSection
            │   │   ├── NewArrivals → ProductCard[]
            │   │   ├── DetailsSection
            │   │   ├── EverydayWear → ProductCard[]
            │   │   ├── CollectionsSection
            │   │   └── NewsletterSection
            │   ├── MenPage (Product catalog)
            │   ├── WomenPage (Product catalog)
            │   ├── AboutPage (Company info)
            │   └── AuthPage (Login/Signup)
            ├── Footer
            │   ├── Link Columns
            │   └── Branding Section
            └── ScrollToTop (Floating button)
```

### Component Categories

#### 1. Layout Components (`components/layout/`)
Define the page structure that remains consistent.

**Header.tsx**
- Purpose: Top navigation bar with React Router Links
- State: Mobile menu open/closed, scroll position
- Features: Dropdown menus, sticky positioning, search modal
- Dependencies: React Router, Dropdown, SearchModal, dropdowns

**Footer.tsx**
- Purpose: Bottom site information
- State: None (static content)
- Features: Multi-column links, social media
- Dependencies: Navigation constants

**Layout.tsx**
- Purpose: Wrapper for all pages with consistent Header/Footer
- Features: Uses React Router Outlet for page content
- Benefits: Header/Footer don't re-render on route changes

#### 2. Section Components (`components/sections/`)
Major content areas of the page.

**NewArrivals.tsx**
- Purpose: Showcase new products
- Features: Grid layout, fade-in animations
- Dependencies: ProductCard, products data

**NewsletterSection.tsx**
- Purpose: Email signup form
- Features: Input validation, animations
- Dependencies: AnimatedButton

#### 3. UI Components (`components/ui/`)
Reusable primitives used throughout the app.

**PageLoader.tsx**
- Purpose: Loading screen on initial load
- Lifecycle: Mounts → Animates → Unmounts
- Props: `isLoading`, `minDisplayTime`

**ScrollToTop.tsx**
- Purpose: Scroll-to-top button
- Lifecycle: Hidden → (scroll down) → Visible
- Events: window.scroll, button.click

**Dropdown.tsx**
- Purpose: Hover/click dropdown menu
- State: Open/closed
- Features: Click outside detection, keyboard support

**FadeInSection.tsx**
- Purpose: Wrapper for scroll animations
- Tech: Intersection Observer API
- Props: `children`, `delay`, `threshold`

**AnimatedButton.tsx**
- Purpose: Enhanced button with animations
- Features: Hover scale, active press, ripple

#### 4. Page Components (`pages/`)
Full-page components that correspond to routes.

**HomePage.tsx**
- Route: `/`
- Purpose: Landing page with hero and product sections
- Composition: Hero, NewArrivals, Details, EverydayWear, Collections, Newsletter

**MenPage.tsx**
- Route: `/men`
- Purpose: Men's product catalog with filtering
- Features: Filter bar, product grid, sort dropdown

**WomenPage.tsx**
- Route: `/women`
- Purpose: Women's product catalog with filtering
- Features: Filter bar, product grid, sort dropdown

**AboutPage.tsx**
- Route: `/about`
- Purpose: Company story, values, and mission
- Features: Value cards with icons, story section

**AuthPage.tsx**
- Route: `/auth`
- Purpose: Combined login and signup interface
- Features: Tab switcher, form validation, social login options

## Routing Architecture

### React Router v6 Implementation

**Route Structure:**
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

**Navigation Pattern:**
- Internal routes use `<Link to="/path">`
- External links use `<a href="...">`
- Dropdown intelligently uses Link or anchor based on href

## Custom Hooks Architecture

### usePageLoader
**Purpose**: Manage initial page load state

**Logic Flow**:
1. Component mounts → isLoading = true
2. Wait for document.readyState === 'complete'
3. Enforce minimum display time
4. Set isLoading = false
5. Cleanup on unmount

**Usage**:
```tsx
const isLoading = usePageLoader(1000);
return <PageLoader isLoading={isLoading} />;
```

### useScrollEffect
**Purpose**: Detect scroll position changes

**Logic Flow**:
1. Add scroll event listener
2. Check if scrollY > threshold
3. Update isScrolled state
4. Cleanup listener on unmount

**Usage**:
```tsx
const { isScrolled } = useScrollEffect(20);
// Apply shadow to header when scrolled
```

### useIntersectionObserver
**Purpose**: Trigger animations on element visibility

**Logic Flow**:
1. Create IntersectionObserver instance
2. Observe target element (via ref)
3. Callback when element intersects viewport
4. Update isIntersecting state
5. Cleanup observer on unmount

**Usage**:
```tsx
const { isIntersecting, ref } = useIntersectionObserver();
<div ref={ref} className={isIntersecting ? 'fade-in' : ''}>
```

## Animation System

### CSS-Based Animations
All animations use CSS for performance (GPU-accelerated).

**Animation Categories**:
1. **Entry Animations**: fade-in, slide-in-up, scale-in
2. **Interactive**: hover effects, button press
3. **Loading**: shimmer, pulse, spinner
4. **Utility**: float, ripple

**Animation Timing**:
- Fast interactions: 150-200ms
- Standard transitions: 300ms
- Page transitions: 500-800ms
- Ambient animations: 2-3s

### Animation Delays
Staggered animations use delay utilities:
```tsx
style={{ animationDelay: `${index * 50}ms` }}
```

## State Management

### Local Component State
Most components use React's `useState` for simple local state.

```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### Shared State
Currently no global state management (Redux, Context).
If needed later, consider:
- React Context for theme, auth
- Zustand for shopping cart
- React Query for server state

## Data Flow

### Static Data
Constants are defined in `src/constants/`:
- `content.ts`: Text content, brand info
- `navigation.ts`: Menu items, links
- `products.ts`: Product data (will move to API)

### Props Flow (Top-Down)
```
App → Section → Component
Data flows down through props
Events bubble up through callbacks
```

### Future: API Integration
When integrating backend:
1. Create `src/services/api.ts`
2. Use React Query for caching
3. Add loading and error states
4. Implement optimistic updates

## Styling Architecture

### Tailwind CSS
Utility-first approach for rapid development.

**Pattern**: Component → Tailwind classes → Custom classes (rare)

**Custom Classes Only When**:
- Complex animations
- Repeated patterns (3+ times)
- Browser-specific fixes

### Responsive Design
Mobile-first approach:
```tsx
// Base styles are mobile
<div className="text-sm lg:text-base xl:text-lg">
```

### Dark Mode (Future)
Prepared for dark mode:
```tsx
<div className="bg-white dark:bg-gray-900">
```

## Performance Optimization

### 1. Code Splitting
Vite automatically splits vendor and app code.

### 2. Image Optimization
- Use modern formats (WebP, AVIF)
- Lazy load below-fold images
- Responsive image sizes

### 3. Animation Performance
- Use `transform` and `opacity` (GPU)
- Avoid `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### 4. Event Listeners
- Remove on unmount (cleanup)
- Throttle/debounce scroll events
- Passive event listeners where possible

## Accessibility

### Semantic HTML
Use proper HTML5 elements:
- `<header>`, `<nav>`, `<main>`, `<footer>`
- `<button>` for interactions, not `<div>`
- `<a>` for navigation

### Keyboard Navigation
- Tab through interactive elements
- Enter/Space to activate buttons
- Escape to close dropdowns

### ARIA Labels
```tsx
<button aria-label="Scroll to top">
  <ArrowUp />
</button>
```

### Focus Management
- Visible focus states (outline)
- Focus trap in modals
- Skip to content link

## Testing Strategy (Future)

### Unit Tests
- Custom hooks (pure logic)
- Utility functions
- Type utilities

### Component Tests
- UI component rendering
- User interactions
- Props and state changes

### Integration Tests
- User flows (browse → cart → checkout)
- Form submissions
- Navigation

### E2E Tests
- Critical user paths
- Cross-browser testing
- Mobile responsiveness

## Deployment

### Build Process
1. `npm run typecheck` - Validate types
2. `npm run lint` - Check code quality
3. `npm run build` - Create production bundle
4. Output: `dist/` folder

### Environment Variables
Stored in `.env`:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

### Hosting
- Static hosting (Vercel, Netlify)
- CDN for global distribution
- Automatic HTTPS

## Future Enhancements

### Phase 2
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product filtering and search
- [ ] Wishlist feature

### Phase 3
- [ ] Checkout process
- [ ] Payment integration
- [ ] Order tracking
- [ ] User dashboard

### Phase 4
- [ ] Product reviews
- [ ] Related products
- [ ] Email notifications
- [ ] Analytics dashboard

## Maintenance

### Code Style
- Follow existing patterns
- Document complex logic
- Keep components under 300 lines
- Extract reusable logic to hooks

### Git Workflow
- Feature branches
- PR reviews required
- Conventional commits
- Semantic versioning

### Documentation
- Update README for new features
- Document breaking changes
- Keep ARCHITECTURE.md current
- Add JSDoc comments

## Troubleshooting

### Common Issues

**Build Errors**
- Run `npm run typecheck` to find type errors
- Clear node_modules and reinstall
- Check for missing dependencies

**Animation Not Working**
- Verify CSS class is applied
- Check animation is defined in index.css
- Ensure element is visible (not display: none)

**Hook Not Updating**
- Check dependency array
- Verify state is being set
- Look for stale closures

**Performance Issues**
- Use React DevTools Profiler
- Check for unnecessary re-renders
- Optimize heavy computations
- Lazy load components

## Resources

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- React DevTools (browser extension)
- TypeScript in VS Code
- Tailwind IntelliSense
- ESLint + Prettier

---

Last Updated: 2025-10-26 (with routing implementation)
