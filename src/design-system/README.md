# TaskTag Design System v3

A comprehensive design system built with React, TypeScript, and Tailwind CSS v4.0. All components are designed to be reusable and customizable through CSS variables.

## 📦 Installation

```bash
# All components are available in /components directory
import { Button, TextInput, Checkbox, RadioButton, Avatar } from './components';
```

## 🎨 Design Tokens

All design tokens are defined in `/styles/globals.css` using CSS custom properties. Update these variables to theme the entire system.

### Colors
- **Brand Colors**: `--brand-green`, `--secondary-green`, `--dark-green`
- **Text Colors**: `--text-primary`, `--text-secondary`
- **Neutrals**: `--white`, `--grey-01` through `--grey-08`, `--black`
- **Semantic Colors**: `--red-status`, `--orange-status`, `--green-status`, `--blue-status`
- **Background**: `--background`, `--surface`
- **Borders**: `--border`, `--divider`

### Typography
- **Web**: Primary, Secondary, Metadata
- **Mobile**: Primary, Secondary, Metadata
- Font family automatically applied via CSS

### Spacing
- Scale: `--spacing-4` through `--spacing-80` (4px increments)
- Usage: `style={{ padding: 'var(--spacing-16)' }}`

### Border Radius
- `--radius-4` (4px) - Small elements
- `--radius-8` (8px) - Cards, inputs
- `--radius-12` (12px) - Buttons
- `--radius-16` (16px) - Circular elements

### Elevation (Shadows)
- `--elevation-small` - Subtle depth
- `--elevation-medium` - Cards, dropdowns
- `--elevation-large` - Modals, popovers

## 🧩 Components

### Interactive Components

#### Button
```tsx
import { Button } from './components';

<Button 
  variant="primary" // primary | secondary | tertiary | outlined | text
  size="medium"     // small | medium | large
  disabled={false}
>
  Click me
</Button>
```

#### Text Input
```tsx
import { TextInput } from './components';

<TextInput
  placeholder="Enter text"
  value={value}
  onChange={setValue}
  disabled={false}
  error={false}
  success={false}
/>
```

#### Textarea
```tsx
import { Textarea } from './components';

<Textarea
  placeholder="Enter text"
  value={value}
  onChange={setValue}
  rows={4}
  disabled={false}
  error={false}
/>
```

#### Checkbox
```tsx
import { Checkbox } from './components';

<Checkbox
  label="Checkbox label"
  variant="circular"  // circular | rectangular
  checked={checked}
  onChange={setChecked}
  disabled={false}
/>
```

#### Radio Button
```tsx
import { RadioButton } from './components';

<RadioButton
  name="radio-group"
  value="option1"
  label="Option 1"
  checked={selected === 'option1'}
  onChange={setSelected}
  disabled={false}
/>
```

#### Avatar
```tsx
import { Avatar } from './components';

<Avatar
  type="icon"          // icon | image | initials
  size="medium"        // ex-small | small | medium | large | ex-large
  imageUrl="/path"     // for type="image"
  initials="AB"        // for type="initials"
/>
```

## 🎯 Usage Guidelines

### Using CSS Variables
All components use CSS variables for styling. To maintain consistency:

```tsx
// ✅ Good - Uses design system tokens
<div style={{ 
  backgroundColor: 'var(--brand-green)',
  padding: 'var(--spacing-16)',
  borderRadius: 'var(--radius-8)'
}}>
  Content
</div>

// ❌ Bad - Hardcoded values
<div style={{ 
  backgroundColor: '#4CAF50',
  padding: '16px',
  borderRadius: '8px'
}}>
  Content
</div>
```

### Typography
Typography styles are automatically applied to HTML elements. **Do not** add Tailwind font size, weight, or line-height classes unless explicitly needed.

```tsx
// ✅ Good - Uses semantic HTML
<h1>Heading</h1>
<p className="text-web-secondary-body">Body text</p>

// ❌ Bad - Overrides design system
<h1 className="text-2xl font-bold">Heading</h1>
```

### Spacing
Use the spacing scale for consistent layouts:

```tsx
// ✅ Good
<div style={{ 
  margin: 'var(--spacing-16)',
  gap: 'var(--spacing-12)'
}}>

// Also acceptable with Tailwind utility
<div className="space-y-4">
```

## 🔧 Customization

### Theming
Update `/styles/globals.css` to customize the design system:

```css
:root {
  /* Update any token */
  --brand-green: #YOUR_COLOR;
  --spacing-16: 20px; /* Change spacing scale */
  --radius-8: 10px;   /* Adjust border radius */
}
```

All components will automatically reflect changes.

### Dark Mode (Future)
CSS variables make dark mode implementation straightforward:

```css
[data-theme="dark"] {
  --background: #1a1a1a;
  --text-primary: #ffffff;
  /* ... other tokens */
}
```

## 📁 File Structure

```
/components
  ├── index.ts              # Central export file
  ├── Button.tsx            # Button component
  ├── TextInput.tsx         # Text input component
  ├── Textarea.tsx          # Textarea component
  ├── Checkbox.tsx          # Checkbox component
  ├── RadioButton.tsx       # Radio button component
  ├── AvatarComponent.tsx   # Avatar component
  └── ...                   # Other components

/styles
  └── globals.css           # Design tokens & typography

/design-system
  └── README.md            # This file
```

## 🚀 Best Practices

1. **Always use CSS variables** for colors, spacing, and other tokens
2. **Import from `/components`** central index for better organization
3. **Keep typography semantic** - use appropriate HTML elements
4. **Test responsively** - components should work on all screen sizes
5. **Update tokens, not components** - modify CSS variables for theming

## 📝 Notes

- Built with **React 18** and **TypeScript**
- Styled with **Tailwind CSS v4.0**
- Uses **CSS Custom Properties** for theming
- Fully **responsive** and **accessible**
- **No external dependencies** for core components

## 🔗 Related Files

- Design tokens: `/styles/globals.css`
- Component exports: `/components/index.ts`
- Main app: `/App.tsx`

---

**Version:** 3.0  
**Last Updated:** 2025  
**Maintained by:** TaskTag Team
