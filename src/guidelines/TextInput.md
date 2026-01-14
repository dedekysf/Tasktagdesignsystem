# TextInput Component Guideline

## 1. Overview
The TextInput component is a form input element that allows users to enter single-line text data. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use text inputs for collecting user data such as names, emails, search queries, URLs, and other single-line text information.

## 2. Variants
The TextInput component supports **2 variants**:

### Default
- **Purpose**: Standard text input with border
- **Background**: `var(--input-background)` (white)
- **Border**: `1px solid var(--border)`
- **Use Case**: Forms, data entry, most input scenarios

### Borderless
- **Purpose**: Clean input without visible border
- **Background**: `var(--input-background)` (white)
- **Border**: None
- **Use Case**: Inline editing, search bars, minimal UI designs

## 3. Sizes
The TextInput component supports **2 sizes**:

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `var(--spacing-4) var(--spacing-8)` (4px 8px)
- **Font Size**: `var(--text-label)` (14px)
- **Icon Size**: 18px
- **Gap**: `var(--spacing-8)` (8px)
- **Border Radius**: `var(--radius-8)` (8px)

### Medium (md)
- **Height**: `var(--size-md)` (40px)
- **Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-base)` (16px)
- **Icon Size**: 20px
- **Gap**: `var(--spacing-8)` (8px)
- **Border Radius**: `var(--radius-8)` (8px)

## 4. States
Each text input responds to the following states:

### Default
- **Background**: `var(--input-background)`
- **Border**: `1px solid var(--border)` (default variant only)
- **Text**: `var(--text-primary)`
- **Placeholder**: `var(--grey-05)`

### Hover
- **Background**: `var(--grey-02)` (light grey)
- **Border**: `1px solid var(--border)` (unchanged)
- **Cursor**: `text`

### Focus
- **Background**: `var(--grey-02)`
- **Border**: `1px solid var(--border)` (unchanged)
- **Outline**: None (browser default removed)

### Disabled
- **Background**: `var(--grey-03)`
- **Border**: `1px solid var(--grey-04)`
- **Text**: `var(--grey-04)`
- **Cursor**: `not-allowed`

### Error
- **Background**: `var(--input-background)`
- **Border**: `1px solid var(--alert-red)`
- **Label**: `var(--alert-red)`
- **Error Message**: Displayed below input in `var(--alert-red)`

## 5. Anatomy
```
┌─────────────────────────────────┐
│ Label *                         │  ← Optional label with required indicator
├─────────────────────────────────┤
│ [Icon] Text input value    [X]  │  ← Input field with optional icons
├─────────────────────────────────┤
│ Error message text              │  ← Optional error message
└─────────────────────────────────┘
```

**Components**:
1. **Label (Optional)**: Field label with optional required asterisk
2. **Left Icon (Optional)**: Icon positioned at the start of input
3. **Input Field**: Main text input area
4. **Right Icon (Optional)**: Icon positioned at the end of input
5. **Error Message (Optional)**: Validation error text below input

## 6. Rules
1. **Font Weight**: Input text always uses `var(--font-weight-regular)`
2. **Label Font Weight**: Label uses `var(--font-weight-semibold)`
3. **Border Radius**: Always `var(--radius-8)` (8px)
4. **Required Indicator**: Red asterisk (*) in `var(--alert-red)`
5. **Label Spacing**: `var(--spacing-4)` (4px) between label and input
6. **Error Spacing**: `var(--spacing-4)` (4px) between input and error message
7. **Single Line**: Input should be single line (use Textarea for multi-line)
8. **Icon Padding**: Icons add appropriate padding to prevent text overlap
9. **Placeholder**: Use placeholder for hints, not essential information
10. **Full Width**: Input width adapts to container by default

## 7. Icon Placement
Icons enhance the input by providing visual context:

### Left Icon
```tsx
<TextInput 
  iconLeft={<Search />}
  placeholder="Search tasks..."
/>
```
- **Purpose**: Indicate input type (search, email, etc.)
- **Padding**: Adds left padding to prevent text overlap
- **Alignment**: Vertically centered

### Right Icon
```tsx
<TextInput 
  iconRight={<X />}
  placeholder="Enter value..."
/>
```
- **Purpose**: Actions (clear, visibility toggle, etc.)
- **Padding**: Adds right padding to prevent text overlap
- **Interactive**: Can be clickable for actions

### Both Icons
```tsx
<TextInput 
  iconLeft={<Mail />}
  iconRight={<Check />}
  placeholder="Email address"
/>
```
- Left icon for context, right icon for status/action
- Proper padding on both sides

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate to input field
- **Shift + Tab**: Navigate to previous field
- **Arrow Keys**: Move cursor within text
- **Home/End**: Jump to start/end of text
- **Ctrl/Cmd + A**: Select all text

### Screen Readers
- Always associate label with input using `htmlFor`/`id`
- Use `aria-label` if no visible label
- Include `aria-describedby` for error messages
- Announce required fields with `aria-required="true"`
- Invalid inputs should have `aria-invalid="true"`

### Focus Management
- Clear visible focus state (grey background)
- Maintain logical tab order
- Focus should move to input when label is clicked

### Error Handling
- Error message linked via `aria-describedby`
- Error state announced to screen readers
- Clear, actionable error messages
- Error message in `var(--alert-red)`

### Labels
- **Always provide labels** for accessibility
- Labels should be descriptive and concise
- Required fields marked with red asterisk
- Label color changes to red when error exists

## 9. Interaction Behaviour
### Input Focus
1. User tabs to or clicks input
2. Input receives focus (grey background)
3. Cursor appears in input field
4. User types text
5. Text appears in `var(--text-primary)`

### Hover Behavior
1. User hovers over input
2. Background changes to `var(--grey-02)`
3. Cursor changes to text cursor
4. User clicks to focus

### Clear Action (with right icon)
1. User enters text
2. Clear icon (X) appears on right
3. User clicks clear icon
4. Input value resets to empty
5. Focus remains on input

### Error Display
1. User enters invalid data
2. On blur or submit, validation runs
3. Border turns red (`var(--alert-red)`)
4. Error message appears below input
5. Label turns red
6. User corrects input
7. Error state clears

### Type-Specific Behavior
- **Email**: May show @ symbol suggestions
- **URL**: May auto-complete protocol (http://)
- **Number**: May show increment/decrement controls
- **Password**: Toggle visibility icon recommended

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Standard sizes (sm, md)
- Full keyboard support
- Hover states active

### Tablet (768px - 1023px)
- Maintain same sizes
- Touch-friendly targets (min 40px height)
- Virtual keyboard support
- Consider `size="md"` as default

### Mobile (<768px)
- **Minimum size**: Use `size="md"` (40px height)
- Full width inputs recommended
- Proper input types for virtual keyboards:
  - `type="email"` → Email keyboard
  - `type="tel"` → Number pad
  - `type="url"` → URL keyboard
  - `type="number"` → Numeric keyboard
- **Font size**: Minimum 16px to prevent zoom on iOS
- Labels above inputs (vertical layout)

### Input Type Optimization
```tsx
// Email input - shows email keyboard on mobile
<TextInput 
  type="email"
  size="md"
  placeholder="your@email.com"
/>

// Phone input - shows number pad
<TextInput 
  type="tel"
  size="md"
  placeholder="(555) 123-4567"
/>

// Search input
<TextInput 
  type="search"
  size="md"
  placeholder="Search..."
/>
```

### Orientation
- Portrait: Full width inputs stacked vertically
- Landscape: Consider multi-column layouts for related fields

---

## Code Example
```tsx
import { TextInput } from './components/TextInput';
import { Mail, Search, Lock, Eye } from 'lucide-react';

// Basic text input with label
<TextInput 
  size="md"
  variant="default"
  label="Full Name"
  placeholder="Enter your name"
  required
/>

// Email input with icon
<TextInput 
  size="md"
  variant="default"
  type="email"
  label="Email Address"
  placeholder="your@email.com"
  iconLeft={<Mail />}
  required
/>

// Search input (borderless)
<TextInput 
  size="sm"
  variant="borderless"
  type="search"
  placeholder="Search..."
  iconLeft={<Search />}
/>

// Password input with toggle
<TextInput 
  size="md"
  variant="default"
  type="password"
  label="Password"
  placeholder="Enter password"
  iconLeft={<Lock />}
  iconRight={<Eye />}
  required
/>

// Input with error
<TextInput 
  size="md"
  variant="default"
  label="Username"
  placeholder="Choose username"
  errorMessage="Username is already taken"
  required
/>

// Disabled input
<TextInput 
  size="md"
  variant="default"
  label="Account ID"
  value="ACC-12345"
  disabled
/>
```

---

## Best Practices
1. **Use appropriate input types** for better mobile experience
2. **Always include labels** for accessibility
3. **Provide clear error messages** that explain how to fix issues
4. **Use placeholders for examples**, not critical instructions
5. **Mark required fields** with asterisk
6. **Group related inputs** with proper spacing
7. **Validate on blur** rather than on every keystroke
8. **Maintain consistent sizing** across forms
9. **Use icons sparingly** to enhance understanding
10. **Test with keyboard navigation** to ensure accessibility

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
