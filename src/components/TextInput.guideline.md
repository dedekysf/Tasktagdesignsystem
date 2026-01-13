# Text Input Component Guidelines

## 1. Overview
The Text Input component allows users to enter and edit text data. It's one of the most commonly used form elements, supporting various input types, validation states, and interactive features to ensure proper data collection and user feedback.

## 2. Variants

### Standard
- **Purpose**: Default text input for general use
- **Visual**: Single-line input with border
- **CSS Variables**:
  - Background: `var(--white)`
  - Border: `var(--border)`
  - Text: `var(--text-primary)`

### With Icon (Leading)
- **Purpose**: Input with contextual icon on the left
- **Visual**: Icon positioned at the left inside input
- **Usage**: Search fields, email inputs, phone numbers
- **Icon Size**: `20px`
- **Icon Color**: `var(--text-secondary)`

### With Icon (Trailing)
- **Purpose**: Input with action icon on the right
- **Visual**: Icon positioned at the right inside input
- **Usage**: Password visibility toggle, clear button, search submit
- **Icon Size**: `20px`
- **Icon Color**: `var(--text-secondary)`

### With Prefix/Suffix
- **Purpose**: Input with text prefix or suffix
- **Visual**: Text label before or after input value
- **Usage**: Currency ($), units (kg, m), domains (.com)
- **Text Color**: `var(--text-secondary)`

## 3. Sizes

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `8px 12px`
- **Font Size**: `var(--text-caption)` (12px)
- **Border Radius**: `var(--radius-lg)` (8px)
- **Use Case**: Compact forms, tables, inline editing

### Medium (md) - Default
- **Height**: `var(--size-md)` (40px)
- **Padding**: `12px 16px`
- **Font Size**: `var(--text-body)` (14px)
- **Border Radius**: `var(--radius-lg)` (8px)
- **Use Case**: Standard forms, modals, most input scenarios

### Large (lg)
- **Height**: `var(--size-lg)` (48px)
- **Padding**: `16px 20px`
- **Font Size**: `var(--text-body)` (14px)
- **Border Radius**: `var(--radius-lg)` (8px)
- **Use Case**: Hero forms, signup pages, prominent inputs

## 4. States

### Default (Idle)
- **Border**: `1px solid var(--border)`
- **Background**: `var(--white)`
- **Text**: `var(--text-primary)`
- **Placeholder**: `var(--text-tertiary)` or `var(--grey-05)`

### Hover
- **Border**: `1px solid var(--grey-04)`
- **Background**: `var(--white)`
- **Cursor**: `text`
- **Transition**: `all 0.2s ease`

### Focus
- **Border**: `2px solid var(--primary)`
- **Background**: `var(--white)`
- **Outline**: `none` (border provides focus indicator)
- **Transition**: `all 0.2s ease`

### Filled
- **Visual**: Input contains user-entered value
- **Text**: `var(--text-primary)`
- **Placeholder**: Hidden

### Disabled
- **Background**: `var(--grey-01)`
- **Border**: `1px solid var(--border)`
- **Text**: `var(--text-secondary)`
- **Cursor**: `not-allowed`
- **Opacity**: `0.6`

### Error
- **Border**: `2px solid var(--alert-red)`
- **Background**: `var(--white)` or light red tint
- **Icon**: Error icon (alert circle) in red
- **Helper Text**: Error message in `var(--alert-red)`

### Success
- **Border**: `2px solid var(--success-green)`
- **Background**: `var(--white)` or light green tint
- **Icon**: Success icon (check circle) in green
- **Helper Text**: Success message in `var(--success-green)`

### Read-Only
- **Background**: `var(--grey-01)`
- **Border**: `1px solid var(--border)`
- **Text**: `var(--text-primary)`
- **Cursor**: `default`
- **Interactive**: Non-editable but selectable

## 5. Anatomy

```
┌─────────────────────────────────────────────────┐
│ Label (optional)                          Required*│
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ [Icon] Placeholder or Input Value      [Icon/×] │ ← Input Container
└─────────────────────────────────────────────────┘
  Helper text or error message

Components:
1. Label (optional, positioned above)
2. Required indicator (*) (optional)
3. Input container (border, background)
4. Leading icon (optional)
5. Input field (text entry area)
6. Placeholder text
7. Trailing icon/button (optional)
8. Helper text (optional, positioned below)
9. Character counter (optional, positioned below)
```

### Element Spacing:
- **Label to input**: `8px`
- **Input to helper text**: `6px`
- **Icon to text**: `8px` horizontal padding
- **Border width**: `1px` default, `2px` focus/error/success
- **Icon size**: `20px`

## 6. Rules

### Label Guidelines
1. **Always provide labels** for accessibility (can be visually hidden)
2. Use **sentence case** (e.g., "Email address" not "Email Address")
3. Keep labels **concise** (1-3 words ideal)
4. Position labels **above** input, left-aligned
5. Mark required fields with **asterisk (*) or "Required"**

### Placeholder Text
1. **Not a replacement** for labels
2. Provide **examples** or format hints (e.g., "john@example.com")
3. Keep it **short** and helpful
4. Use **light color** for clear distinction from input value
5. Disappears when user starts typing

### Helper Text
1. Provide **guidance** before user interacts (e.g., "Must be 8+ characters")
2. Show **error messages** on validation failure
3. Keep messages **concise** and actionable
4. Position **below** the input
5. Use appropriate **color** (grey for help, red for error, green for success)

### Validation Rules
1. Validate **on blur** (when user leaves field) for better UX
2. Validate **on submit** for complete form validation
3. Show **real-time validation** for password strength, username availability
4. Clear error when user **starts correcting**
5. Provide **specific error messages** (e.g., "Email must include @")

### Input Types
- `text` - General text input
- `email` - Email with browser validation
- `password` - Hidden text with toggle visibility
- `number` - Numeric input (use with caution, prefer text with validation)
- `tel` - Telephone number
- `url` - Web address
- `search` - Search field

## 7. Icon Placement

### Leading Icons (Left)
- **Purpose**: Indicate input type or category
- **Examples**:
  - Search icon for search fields
  - Mail icon for email inputs
  - Lock icon for password fields
  - User icon for username/name fields
- **Position**: `12-16px` from left edge
- **Size**: `20px`
- **Color**: `var(--text-secondary)`
- **Padding adjustment**: Add left padding to input text (~40px total)

### Trailing Icons (Right)
- **Purpose**: Actions or status indicators
- **Examples**:
  - Eye icon to toggle password visibility
  - X icon to clear input
  - Check icon for validation success
  - Alert icon for validation error
  - Info icon for additional context
- **Position**: `12-16px` from right edge
- **Size**: `20px`
- **Color**: `var(--text-secondary)` or state color
- **Interactive**: Can be clickable buttons
- **Padding adjustment**: Add right padding to input text (~40px total)

### Multiple Icons
- **Leading + Trailing**: Both icons can coexist
- **Spacing**: Ensure sufficient padding for both
- **Example**: Search icon (left) + Clear button (right)

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Focus moves to input
- **Shift + Tab**: Focus moves to previous element
- **Enter**: Submit form (if in form context)
- **Escape**: Clear input or exit (custom behavior)

### ARIA Attributes
```tsx
// Basic accessible input
<label htmlFor="email">Email address</label>
<input 
  id="email"
  type="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="email-helper"
/>
<span id="email-helper">We'll never share your email</span>

// Error state
<input 
  id="password"
  type="password"
  aria-required="true"
  aria-invalid="true"
  aria-describedby="password-error"
/>
<span id="password-error" role="alert">
  Password must be at least 8 characters
</span>
```

### Required Attributes
- `id` - Unique identifier linking label and input
- `name` - Form field name for submission
- `type` - Input type for proper keyboard and validation
- `aria-label` or `<label>` - Accessible name
- `aria-required` - Indicates required fields
- `aria-invalid` - Indicates validation state
- `aria-describedby` - Links to helper/error text

### Screen Reader Support
- Label announced before input
- Required state announced
- Error messages announced when they appear (use `role="alert"`)
- Placeholder not relied upon for critical information
- Helper text associated via `aria-describedby`

### Focus Management
- Visible focus indicator (border color change)
- Logical tab order in forms
- Auto-focus on first input in modals (with caution)
- Focus returns to trigger element when closing modal

## 9. Interaction Behaviour

### Click/Tap
1. **Focus**: Clicking anywhere in input container focuses the field
2. **Cursor**: Text cursor appears at click position
3. **Selection**: Double-click selects word, triple-click selects all

### Typing
1. **Input**: Characters appear immediately
2. **Placeholder**: Disappears on first character
3. **Validation**: Triggered on blur or submit (not on every keystroke)
4. **Character counter**: Updates in real-time (if present)
5. **Max length**: Input stops accepting characters (if maxlength set)

### Clear Button
1. **Appearance**: Shows when input has value (trailing icon)
2. **Click**: Clears all input value
3. **Focus**: Keeps focus in input after clearing
4. **Icon**: X or close icon

### Password Visibility Toggle
1. **Default**: Password hidden (type="password")
2. **Click**: Toggles between visible and hidden
3. **Icon**: Eye (show) / Eye-off (hide)
4. **Security**: Consider auto-hide after delay

### Copy/Paste
1. **Paste**: Accepts clipboard content (may trigger validation)
2. **Copy**: User can select and copy input value
3. **Cut**: User can cut selected text
4. **Format preservation**: Consider stripping formatting on paste

### Auto-complete
1. **Browser autofill**: Support with appropriate `autocomplete` attributes
2. **Custom suggestions**: Dropdown list below input
3. **Keyboard navigation**: Arrow keys to navigate suggestions
4. **Selection**: Enter or click to select suggestion

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Width**: Flexible based on container (typically 300-600px)
- **Layout**: Single column or multi-column forms
- **Size**: `md` (medium) default
- **Hover states**: Show hover effects
- **Focus**: Visible focus indicator

### Tablet (768px - 1023px)
- **Width**: Full-width or constrained in containers
- **Layout**: Typically single column
- **Size**: `md` (medium) size
- **Touch**: Larger touch targets
- **Keyboard**: iOS/Android keyboard optimizations

### Mobile (≤767px)
- **Width**: Full-width (100% of container)
- **Layout**: Single column, stacked vertically
- **Size**: `md` or `lg` for better touch input
- **Font size**: Minimum 16px to prevent zoom on iOS
- **Keyboard**: Input type determines keyboard (email, number, tel)
- **Padding**: Sufficient spacing for thumb typing

### Input Width Guidelines
```tsx
// Email, short text
<input className="w-full md:w-80" /> // 320px on desktop

// Medium text (names, titles)
<input className="w-full md:w-96" /> // 384px on desktop

// Long text (descriptions, addresses)
<input className="w-full" /> // Full width

// Short inputs (zip code, CVV)
<input className="w-24 md:w-32" /> // Fixed small width
```

### Breakpoint Considerations
- **Mobile first**: Start with full-width, constrain on larger screens
- **Grid layout**: Use CSS Grid for multi-column forms on desktop
- **Stacking**: Stack related inputs vertically on mobile
- **Grouping**: Keep related inputs visually grouped

### Keyboard Type (Mobile)
```tsx
// Email keyboard
<input type="email" inputMode="email" />

// Numeric keyboard
<input type="text" inputMode="numeric" pattern="[0-9]*" />

// Telephone keyboard
<input type="tel" inputMode="tel" />

// URL keyboard
<input type="url" inputMode="url" />
```

---

## Quick Reference

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Height | 32px | 40px | 48px |
| Padding | 8px 12px | 12px 16px | 16px 20px |
| Font Size | 12px | 14px | 14px |
| Icon Size | 16px | 20px | 20px |
| Border Radius | 8px | 8px | 8px |
| Border Width | 1px | 1px | 1px |

## CSS Variables Used
- `var(--white)` - Input background
- `var(--border)` - Default border color
- `var(--text-primary)` - Input text color
- `var(--text-secondary)` - Icon color
- `var(--text-tertiary)` - Placeholder color
- `var(--grey-01)` - Disabled background
- `var(--grey-04)` - Hover border color
- `var(--grey-05)` - Placeholder alternative
- `var(--primary)` - Focus border color
- `var(--alert-red)` - Error state color
- `var(--success-green)` - Success state color
- `var(--size-sm/md/lg)` - Input heights
- `var(--text-caption/body)` - Font sizes
- `var(--radius-lg)` - Border radius

## Common Patterns

### Search Input
```tsx
<TextInput
  type="search"
  placeholder="Search tasks..."
  leadingIcon={<Search />}
  trailingIcon={value ? <X onClick={handleClear} /> : null}
/>
```

### Password Input
```tsx
<TextInput
  type={showPassword ? "text" : "password"}
  placeholder="Enter password"
  leadingIcon={<Lock />}
  trailingIcon={
    <button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <EyeOff /> : <Eye />}
    </button>
  }
  required
/>
```

### Email Input with Validation
```tsx
<TextInput
  type="email"
  placeholder="john@example.com"
  leadingIcon={<Mail />}
  error={errors.email}
  helperText={errors.email || "We'll never share your email"}
  required
/>
```
