# TaskTag Design System v3

A comprehensive, reusable design system built with React, TypeScript, and Tailwind CSS v4.0.

## 📁 Project Structure

```
/
├── components/           # All reusable UI components
│   ├── index.ts         # Central component exports
│   ├── types.ts         # TypeScript type definitions
│   ├── Button.tsx       # Button component
│   ├── TextInput.tsx    # Text input component
│   ├── Textarea.tsx     # Textarea component
│   ├── Checkbox.tsx     # Checkbox component
│   ├── RadioButton.tsx  # Radio button component
│   ├── AvatarComponent.tsx # Avatar component
│   └── ...
├── foundation/          # Design tokens and utilities
│   ├── index.ts        # Central foundation exports
│   └── tokens.ts       # Design token constants
├── styles/
│   └── globals.css     # CSS custom properties & global styles
└── App.tsx             # Design system documentation panel
```

## 🎨 Foundation Tokens

### Import Foundation Tokens

```typescript
// Import all tokens
import { colors, spacing, radius, typography, elevation } from './foundation';

// Use in your components
const MyComponent = () => (
  <div style={{
    backgroundColor: colors.primary,
    padding: spacing[16],
    borderRadius: radius.button,
  }}>
    Content
  </div>
);
```

### Available Token Categories

- **Colors**: Brand colors, neutrals, semantic colors, pastels, and more
- **Typography**: Font sizes, weights, and families
- **Spacing**: 4px-based spacing scale (0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128)
- **Radius**: Border radius values (none, 2, 4, 8, 12, 16, 20, 24, full, button, card)
- **Elevation**: Shadow tokens (sm, md, lg, xl)
- **Border Width**: Border width values (none, thin, medium, thick)

## 🧩 Components

### Import Components

```typescript
// Import individual components
import { Button, TextInput, Checkbox } from './components';

// Import with types
import { Button } from './components';
import type { ButtonVariant, ButtonSize } from './components';
```

### Available Components

#### Interactive Components
- **Button** - Flexible button with variants, sizes, shapes, and states
- **TextInput** - Text input with label, placeholder, helper text, and states
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox with circular and rectangular variants
- **RadioButton** - Radio button input
- **Avatar** - User avatar with icon, image, and initials support
- **Dropdown** - Dropdown select with scroll support, check icon indicator, and hover states

#### Layout & Navigation
- **Sidebar** - Navigation sidebar
- **SidebarDropdown** - Collapsible navigation dropdown
- **SidebarMenuItem** - Individual navigation menu item
- **SectionHeader** - Section header with icon

#### Foundation Display
- **ColorItem** - Color token display
- **ColorSwatch** - Individual color swatch
- **TypographyItem** - Typography token display
- **RadiusItem** - Border radius token display
- **ElevationItem** - Elevation/shadow token display
- **SpacingItem** - Spacing token display
- **LogoItem** - Logo/brand asset display
- **CodeExample** - Code snippet display with copy button

## 📘 Component Usage Examples

### Button Component

```typescript
import { Button } from './components';
import type { ButtonSize, ButtonVariant } from './components';
import { ChevronLeft, User } from 'lucide-react';

// Basic usage (variant is required, size and className are optional)
<Button variant="primary">Click me</Button>

// With different sizes
<Button variant="primary" size="xl">Extra Large</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="xs">Extra Small</Button>

// Fill variants (solid background)
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="black">Black</Button>
<Button variant="gray">Gray</Button>
<Button variant="light">Light</Button>

// Ghost variants (transparent background)
<Button variant="ghost-primary">Ghost Primary</Button>
<Button variant="ghost-secondary">Ghost Secondary</Button>
<Button variant="ghost-destructive">Ghost Destructive</Button>
<Button variant="ghost-black">Ghost Black</Button>
<Button variant="ghost-gray">Ghost Gray</Button>
<Button variant="ghost-light">Ghost Light</Button>

// Outline variants (border with transparent background)
<Button variant="outline-primary">Outline Primary</Button>
<Button variant="outline-secondary">Outline Secondary</Button>
<Button variant="outline-destructive">Outline Destructive</Button>
<Button variant="outline-black">Outline Black</Button>
<Button variant="outline-gray">Outline Gray</Button>
<Button variant="outline-light">Outline Light</Button>

// With icons (pass icons as children)
<Button variant="primary">
  <ChevronLeft size={18} />
  Left Icon
</Button>

<Button variant="black">
  Right Icon
  <User size={18} />
</Button>

// Icon only (just pass icon without text)
<Button variant="ghost-primary">
  <User size={18} />
</Button>

// Disabled state
<Button variant="primary" disabled>Disabled</Button>

// Custom styling with className or style prop
<Button variant="primary" className="w-full">Full Width</Button>
<Button variant="black" style={{ borderRadius: 'var(--radius-full)' }}>
  Rounded
</Button>
```

### TextInput Component

```typescript
import { TextInput } from './components';

// Basic usage
<TextInput label="Email" placeholder="Enter your email" />

// With helper text
<TextInput 
  label="Username" 
  placeholder="Choose a username"
  helperText="Must be 3-20 characters"
/>

// Different states
<TextInput state="default" label="Default" />
<TextInput state="focused" label="Focused" />
<TextInput state="error" label="Error" helperText="This field is required" />
<TextInput state="disabled" label="Disabled" />
```

### Checkbox Component

```typescript
import { Checkbox } from './components';

// Basic checkbox
<Checkbox />

// With label
<Checkbox label="Accept terms and conditions" />

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox 
  checked={checked} 
  onChange={setChecked}
  label="Subscribe to newsletter"
/>

// Rectangular variant
<Checkbox variant="rectangular" label="Rectangular checkbox" />

// Disabled state
<Checkbox disabled={true} label="Disabled checkbox" />

// Features:
// - Circular (default) or rectangular variants
// - Click animation with scale effect
// - Smooth transitions using design system colors
// - Hover states: Border changes to text-primary, background to grey-02 (unchecked)
// - Hover states: Background changes to primary-green (checked)
```

### RadioButton Component

```typescript
import { RadioButton } from './components';

// Basic radio button group
const [selected, setSelected] = useState('option1');

<RadioButton 
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={setSelected}
  label="Option 1"
/>

<RadioButton 
  name="options"
  value="option2"
  checked={selected === 'option2'}
  onChange={setSelected}
  label="Option 2"
/>

// Without label
<RadioButton 
  name="visual-only"
  value="compact"
  checked={true}
/>

// Disabled state
<RadioButton 
  name="options"
  value="disabled"
  disabled={true}
  label="Disabled option"
/>

// Features:
// - Always circular design
// - Click animation with scale effect
// - Smooth transitions using design system colors
// - Hover states: Border changes to text-primary, background to grey-02 (unchecked)
// - Hover states: Background changes to primary-green (checked)
```

### Avatar Component

```typescript
import { Avatar } from './components';

// Icon avatar (default)
<Avatar type="icon" size="medium" />

// Image avatar
<Avatar 
  type="image" 
  size="large" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Initials avatar
<Avatar 
  type="initials" 
  size="small" 
  initials="JD" 
/>

// Available sizes: 'ex-small', 'small', 'medium', 'large', 'extra-large'
```

### Dropdown Component

```typescript
import { Dropdown, type DropdownOption } from './components';

// Define your options
const options: DropdownOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // ... up to 15+ options
];

// Basic usage
<Dropdown
  options={options}
  placeholder="Select an option"
/>

// With controlled value
const [selected, setSelected] = useState('');
<Dropdown
  options={options}
  value={selected}
  onChange={setSelected}
  placeholder="Choose one"
/>

// Pre-selected value
<Dropdown
  options={options}
  value="option2"
  placeholder="Select an option"
/>

// Disabled state
<Dropdown
  options={options}
  value="option1"
  disabled={true}
/>

// Key Features:
// - Automatically scrolls when more than 10 options
// - Active background (grey-03) when dropdown is open
// - Check icon indicator for selected item
// - Hover states on trigger and menu items
// - Smooth chevron rotation animation
// - Custom scrollbar styling
```

### CodeExample Component

```typescript
import { CodeExample } from './components';

// Display code with a copy button
<CodeExample
  title="Usage Example"
  code={`import { Button } from './components';

<Button 
  size="lg" 
  variant="primary" 
  text="Click Me" 
/>`}
/>

// Features:
// - One-click copy to clipboard
// - Visual feedback when code is copied (check icon)
// - Optional title for context
// - Syntax-aware display with monospace font
// - Uses design system colors (grey-01 background, grey-03 border)
// - Hover state on copy button
```

## 🎯 TypeScript Support

All components are fully typed with exported TypeScript types:

```typescript
import type {
  ButtonVariant,
  ButtonSize,
  ButtonShape,
  ButtonStyle,
  ButtonIconPosition,
  ButtonState,
  AvatarSize,
  AvatarType,
  CheckboxVariant
} from './components';

// Use types for type-safe component props
const variant: ButtonVariant = 'primary';
const size: ButtonSize = 'lg';
```

## 🎨 CSS Custom Properties

All styling uses CSS custom properties from `/styles/globals.css` for:
- Easy theming
- Runtime style updates
- Consistency across components

### Example: Updating the design system

To change the primary color across the entire design system:

```css
/* In globals.css */
:root {
  --primary: #00d9a5; /* Change this value */
}
```

All components using `colors.primary` or `var(--primary)` will automatically update.

## 📱 Responsive Design

Components are built to be responsive by default. Use the provided spacing and layout tokens to maintain consistency across breakpoints.

## 🎭 Hover States & Interactions

All interactive components include hover states for better user experience:

### Button Hover States
- **Fill buttons**: Opacity reduces to 0.7 on hover
- **Ghost buttons**: Background color appears on hover (contextual to variant)
- **Outline buttons**: Background color appears on hover (contextual to variant)

### Input Hover States
- **Text Inputs**: Border color changes to `--text-primary` on hover
- **Textareas**: Border color changes to `--text-primary` on hover
- **Focus states**: Border changes to black with subtle box shadow

### Other Component Hover States
- **Checkboxes & Radio Buttons**: Opacity reduces to 0.8 on hover
- **Color Swatches**: Lifts up with shadow effect
- **Sidebar Menu Items**: Color changes to primary on hover
- **Hamburger Menu**: Background color appears on hover

All hover transitions use CSS custom properties from the design system, ensuring consistent timing and behavior across all components.

## ✨ Best Practices

1. **Always import from central exports**
   ```typescript
   // ✅ Good
   import { Button, TextInput } from './components';
   
   // ❌ Avoid
   import { Button } from './components/Button';
   ```

2. **Use design tokens instead of hardcoded values**
   ```typescript
   // ✅ Good
   import { colors, spacing } from './foundation';
   style={{ backgroundColor: colors.primary, padding: spacing[16] }}
   
   // ❌ Avoid
   style={{ backgroundColor: '#00d9a5', padding: '16px' }}
   ```

3. **Use TypeScript types for better type safety**
   ```typescript
   // ✅ Good
   import type { ButtonVariant } from './components';
   const variant: ButtonVariant = 'primary';
   
   // ❌ Avoid
   const variant = 'primary'; // No type checking
   ```

4. **Follow the component prop patterns**
   - Use `variant` for color variations
   - Use `size` for sizing options
   - Use `state` for interactive states
   - Use `style` for fill/outline/ghost variations

## 🔧 Customization

### Adding New Components

1. Create component in `/components/YourComponent.tsx`
2. Export types at the top of the file
3. Add export to `/components/index.ts`
4. Add types to `/components/types.ts`
5. Document in this README

### Adding New Design Tokens

1. Add CSS custom property to `/styles/globals.css`
2. Add TypeScript constant to `/foundation/tokens.ts`
3. Document the token in this README

## 📄 License

Internal use only - TaskTag Design System v3