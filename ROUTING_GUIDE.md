# Routing Implementation Guide

Quick reference for the routing system in ANYWEAR.

## 🛣️ Available Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | HomePage | Landing page with hero, products, and newsletter |
| `/men` | MenPage | Men's product catalog with filters |
| `/women` | WomenPage | Women's product catalog with filters |
| `/about` | AboutPage | Company story, values, and mission |
| `/auth` | AuthPage | Login and signup interface |

## 🔗 Navigation Examples

### Using Link for Internal Routes

```tsx
import { Link } from 'react-router-dom';

<Link to="/men">Shop Men</Link>
<Link to="/women">Shop Women</Link>
<Link to="/about">About Us</Link>
<Link to="/auth">Sign In</Link>
```

### Using Anchor for External/Hash Links

```tsx
<a href="#section">Jump to Section</a>
<a href="https://example.com">External Link</a>
```

## 📂 Key Files

### `App.tsx`
Main routing configuration with BrowserRouter and Routes.

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="men" element={<MenPage />} />
      {/* ... more routes */}
    </Route>
  </Routes>
</BrowserRouter>
```

### `components/layout/Layout.tsx`
Wrapper component with Header, Outlet (page content), and Footer.

```tsx
<div>
  <Header />
  <main>
    <Outlet />  {/* Page content renders here */}
  </main>
  <Footer />
  <ScrollToTop />
</div>
```

### `components/layout/Header.tsx`
Navigation header with Links to all routes.

### `pages/`
Individual page components for each route.

## 🎯 How It Works

1. **User clicks a link** → React Router intercepts
2. **URL changes** → Browser URL updates
3. **Route matches** → Corresponding page component renders
4. **Layout persists** → Header/Footer stay visible
5. **Only Outlet updates** → Smooth transition

## ✨ Benefits

- **No page reloads** - Fast, seamless navigation
- **Persistent UI** - Header/Footer don't re-render
- **Browser history** - Back/forward buttons work
- **Deep linking** - Share URLs to specific pages
- **SEO friendly** - Each route has unique URL

## 🚀 Adding a New Route

1. **Create page component** in `src/pages/`:
```tsx
// src/pages/NewPage.tsx
export const NewPage: React.FC = () => {
  return <div>New Page Content</div>;
};
```

2. **Export from pages/index.ts**:
```tsx
export { NewPage } from './NewPage';
```

3. **Add route in App.tsx**:
```tsx
<Route path="new-page" element={<NewPage />} />
```

4. **Add navigation link** in Header.tsx or elsewhere:
```tsx
<Link to="/new-page">New Page</Link>
```

5. **Update navigation constants** if needed:
```tsx
// src/constants/navigation.ts
{ label: 'New Page', href: '/new-page' }
```

## 🔧 Troubleshooting

### Links refresh the page
- ✅ Use `<Link to="/path">` from React Router
- ❌ Don't use `<a href="/path">`

### Page not found (404)
- Check route path in App.tsx
- Verify component is imported
- Check for typos in path

### Header re-renders on navigation
- Ensure routes are nested under Layout
- Check that Layout uses Outlet correctly

### Dropdown not closing after navigation
- Add `onClick={() => setIsOpen(false)}` to Links
- Already implemented in Dropdown component

## 📚 React Router v6 Cheat Sheet

### Basic Link
```tsx
<Link to="/path">Text</Link>
```

### Link with State
```tsx
<Link to="/path" state={{ from: 'home' }}>Text</Link>
```

### Programmatic Navigation
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/path');
```

### Get Current Location
```tsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
console.log(location.pathname); // "/men"
```

### Get URL Parameters
```tsx
import { useParams } from 'react-router-dom';

// Route: <Route path="product/:id" />
const { id } = useParams(); // "123" from "/product/123"
```

## 🎨 Active Link Styling (Future)

Use NavLink for active state styling:

```tsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/men"
  className={({ isActive }) =>
    isActive ? 'text-gray-900 font-bold' : 'text-gray-600'
  }
>
  Men
</NavLink>
```

---

*For more details, see PROJECT_STRUCTURE.md and ARCHITECTURE.md*
