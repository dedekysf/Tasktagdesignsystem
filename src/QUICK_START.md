# TaskTag Design System v3 - Quick Start Guide

Get up and running with the TaskTag Design System in minutes.

## 🚀 Quick Import

```tsx
// Import all components from a single entry point
import { 
  Button, 
  TextInput, 
  Checkbox, 
  RadioButton, 
  Avatar, 
  Textarea 
} from './components';

// Import design tokens for custom styling
import { Colors, Spacing, Radius, Typography } from './design-system/tokens';
```

## 📝 5-Minute Examples

### 1. Simple Button
```tsx
import { Button } from './components';

function MyComponent() {
  return <Button variant="primary" size="medium">Click Me</Button>;
}
```

### 2. Form Input
```tsx
import { TextInput } from './components';
import { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <TextInput 
      placeholder="Enter your email"
      value={email}
      onChange={setEmail}
    />
  );
}
```

### 3. Checkbox List
```tsx
import { Checkbox } from './components';
import { useState } from 'react';

function TaskList() {
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <Checkbox label="Task 1" checked={task1} onChange={setTask1} />
      <Checkbox label="Task 2" checked={task2} onChange={setTask2} />
    </div>
  );
}
```

### 4. Radio Button Group
```tsx
import { RadioButton } from './components';
import { useState } from 'react';

function ChooseOption() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <RadioButton 
        name="options" 
        value="option1" 
        label="Option 1" 
        checked={selected === 'option1'}
        onChange={setSelected}
      />
      <RadioButton 
        name="options" 
        value="option2" 
        label="Option 2" 
        checked={selected === 'option2'}
        onChange={setSelected}
      />
    </div>
  );
}
```

### 5. User Avatar
```tsx
import { Avatar } from './components';

function UserProfile() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
      <Avatar type="initials" initials="JD" size="medium" />
      <span>John Doe</span>
    </div>
  );
}
```

## 🎨 Using Design Tokens

### With TypeScript Helpers
```tsx
import { Colors, Spacing, Radius } from './design-system/tokens';

function CustomCard() {
  return (
    <div style={{
      backgroundColor: Colors.white,
      padding: Spacing.s16,
      borderRadius: Radius.r8,
      border: `1px solid ${Colors.border}`
    }}>
      Card content
    </div>
  );
}
```

### Direct CSS Variables
```tsx
function StyledBox() {
  return (
    <div style={{
      backgroundColor: 'var(--brand-green)',
      padding: 'var(--spacing-24)',
      borderRadius: 'var(--radius-8)'
    }}>
      Box content
    </div>
  );
}
```

## 📦 What's Included

### Interactive Components
- ✅ **Button** - 5 variants, 5 sizes, multiple states
- ✅ **TextInput** - Standard, error, success, disabled states
- ✅ **Textarea** - Multi-line text input
- ✅ **Checkbox** - Circular & rectangular variants
- ✅ **RadioButton** - Single selection from lists
- ✅ **Avatar** - Icon, image, and initials types

### Design Tokens
- ✅ **26 Colors** - Brand, semantic, neutrals, UI
- ✅ **Typography** - Web & mobile styles
- ✅ **Spacing** - 20 incremental values (4px-80px)
- ✅ **Border Radius** - 4 sizes (4px-16px)
- ✅ **Elevation** - 3 shadow levels

## 🔧 Customization

### Change Colors
Edit `/styles/globals.css`:
```css
:root {
  --brand-green: #YOUR_GREEN;
  --secondary-green: #YOUR_SECONDARY;
}
```
All components update automatically! ✨

### Change Spacing
```css
:root {
  --spacing-16: 20px; /* Default is 16px */
}
```

## 📁 File Structure
```
/components/          → All reusable components
  index.ts           → Central export file (use this!)
  Button.tsx
  TextInput.tsx
  ...
  
/design-system/      → Design system documentation
  README.md          → Full documentation
  tokens.ts          → Type-safe design tokens
  examples.tsx       → Real-world examples
  
/styles/
  globals.css        → All CSS variables & typography
```

## ⚡ Pro Tips

1. **Always import from `/components`** for cleaner code
2. **Use CSS variables** for theming - update once, apply everywhere
3. **Don't override typography** - let the design system handle it
4. **Check `/design-system/examples.tsx`** for real-world patterns
5. **Browse the admin panel** at `/App.tsx` to see all components in action

## 🆘 Common Tasks

### Add a new color
1. Open `/styles/globals.css`
2. Add: `--my-color: #hexcode;`
3. Use: `style={{ color: 'var(--my-color)' }}`

### Create a form
```tsx
import { TextInput, Button } from './components';
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
      <TextInput placeholder="Name" value={name} onChange={setName} />
      <TextInput placeholder="Email" value={email} onChange={setEmail} />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

### Style with design tokens
```tsx
import { Colors, Spacing, Radius } from './design-system/tokens';

<div style={{
  backgroundColor: Colors.surface,
  padding: Spacing.s24,
  borderRadius: Radius.r8,
  border: `1px solid ${Colors.border}`
}}>
  Content
</div>
```

## 📚 Learn More

- **Full Documentation**: `/design-system/README.md`
- **Examples**: `/design-system/examples.tsx`
- **Live Preview**: Run the app and browse the admin panel

---

**Ready to build?** Start importing components and creating! 🎉
