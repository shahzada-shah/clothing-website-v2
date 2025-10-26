# Authentication Components

This directory contains all authentication-related UI components for the KAZWEAR application.

## Components

### AuthForm
Main authentication form component that handles both login and signup modes.

**Features:**
- Email/password input with validation
- Password visibility toggle
- Real-time password strength indicator (signup only)
- Password confirmation with match validation (signup only)
- Terms and conditions acceptance (signup only)
- Fully responsive design with mobile optimization
- Autocomplete disabled for enhanced security

**Props:**
- `mode`: 'login' | 'signup' - Current authentication mode
- `email`, `password`, `confirmPassword`, `name`: Form field values
- `showPassword`, `showConfirmPassword`: Password visibility states
- `agreedToTerms`: Terms acceptance state
- `passwordRequirements`: Array of password validation rules
- `passwordsMatch`: Boolean indicating if passwords match
- Event handlers for all form interactions

### PasswordStrength
Visual indicator showing password strength based on requirements met.

**Features:**
- Color-coded progress bar (red/yellow/green)
- Percentage-based strength calculation
- Label showing strength level (Weak/Fair/Strong)
- Smooth animations

### PasswordRequirements
Grid display of password requirements with real-time validation.

**Features:**
- Check icons for met requirements
- Color-coded feedback (gray/green)
- Responsive 1-2 column layout
- Clear requirement labels

### SocialLogin
Social authentication buttons with provider branding.

**Features:**
- Google and Facebook login options
- SVG icons with proper branding colors
- Hover effects and animations
- Responsive button sizing
- Divider with "Or continue with" text

## Usage Example

```tsx
import { AuthForm, SocialLogin } from '../components/auth';

function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  // ... state management

  return (
    <div>
      <AuthForm
        mode={mode}
        email={email}
        password={password}
        // ... other props
      />
      <SocialLogin />
    </div>
  );
}
```

## Security Features

1. **Autocomplete Disabled**: All inputs have `autoComplete="off"` or `autoComplete="new-password"` to prevent browser credential storage
2. **Password Requirements**: Enforces strong passwords with:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one number
3. **Password Confirmation**: Requires users to confirm passwords during signup
4. **Real-time Validation**: Immediate visual feedback for all validations

## Responsive Design

All components are fully responsive with breakpoints:
- **Mobile (< 640px)**: Single column, reduced spacing, smaller text
- **Tablet (640px - 1024px)**: Optimized spacing and sizing
- **Desktop (> 1024px)**: Full layout with side panel

## Styling

Components use Tailwind CSS with:
- Consistent gray color palette
- Smooth transitions and animations
- Focus states with subtle rings
- Hover effects on interactive elements
