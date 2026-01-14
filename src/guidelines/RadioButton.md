# RadioButton Component Guideline

## 1. Overview
The RadioButton component allows users to select a single option from a set of mutually exclusive choices. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use radio buttons when users need to select exactly one option from a group of 2-5 choices. For larger sets, consider using a Dropdown component.

## 2. Variants
The RadioButton component has **1 primary variant** with different visual states:

### Checked
- **Background**: `var(--secondary-green)` (active) or `var(--grey-04)` (disabled)
- **Border**: None
- **Icon**: White checkmark
- **Border Radius**: `var(--radius-16)` (circular)
- **Use Case**: Selected option in a radio group

### Unchecked
- **Background**: `var(--white)` (active) or `var(--grey-03)` (disabled)
- **Border**: 2px solid `var(--grey-04)`
- **Icon**: None (shows grey checkmark on hover)
- **Border Radius**: 9px (circular)
- **Use Case**: Available but not selected options

## 3. Sizes
The RadioButton component has **1 fixed size**:

### Default Size
- **Dimension**: 20px × 20px
- **Border**: 2px solid
- **Icon Size**: Proportional to container
- **Label Gap**: 8px (0.5rem)
- **Label Font Size**: `var(--text-base)`
- **Use Case**: All radio button implementations

## 4. States

### Default (Unchecked)
- Background: `var(--white)`
- Border: 2px solid `var(--grey-04)`
- Cursor: `pointer`

### Hover (Unchecked)
- Background: `var(--white)`
- Border: 2px solid `var(--grey-04)`
- **Icon Preview**: Grey checkmark appears
- Cursor: `pointer`

### Checked
- Background: `var(--secondary-green)`
- Border: None
- **Icon**: White checkmark
- Cursor: `pointer`

### Active (Clicking)
- **Scale**: 0.9 (90%)
- **Transition**: 200ms
- Returns to normal scale after click

### Disabled (Unchecked)
- Background: `var(--grey-03)`
- Border: 2px solid `var(--grey-04)`
- Label Color: `var(--grey-04)`
- Cursor: `not-allowed`
- No hover effects

### Disabled (Checked)
- Background: `var(--grey-04)`
- Border: None
- Icon: White checkmark
- Label Color: `var(--grey-04)`
- Cursor: `not-allowed`
- No hover effects

### Focus
- Outline: 2px solid `var(--primary-blue)`
- Outline Offset: 2px

## 5. Anatomy
```
┌────────────────────────────┐
│  ◯  Label Text             │
│  ↑                         │
│  Radio Circle              │
└────────────────────────────┘
```

**Components**:
1. **Container**: Inline-flex wrapper with gap
2. **Radio Circle**: 20px circular button
3. **Checkmark Icon**: SVG icon (visible when checked/hovered)
4. **Label Text**: Optional text label
5. **Border**: 2px stroke (unchecked only)

**Layout**:
- Radio circle and label are horizontally aligned
- Gap between circle and label: 8px
- Circle is vertically centered with label text

## 6. Rules
1. **Shape**: Always circular (border-radius: 50%)
2. **Size**: Fixed 20px × 20px dimension
3. **Mutual Exclusion**: Only one radio button can be selected in a group
4. **Label Association**: Always associate label with radio using `htmlFor` and `id`
5. **Group Name**: All radio buttons in a group must share the same `name` prop
6. **Checkmark**: Only visible when checked or on hover (unchecked)
7. **Animation**: Scale animation (200ms) on click
8. **Border**: Only for unchecked state, removed when checked
9. **Minimum Options**: Use radio buttons for 2+ options
10. **Maximum Options**: Consider dropdown for 6+ options

## 7. Icon Placement
The RadioButton uses a centered checkmark icon:

### Checkmark Icon
- **Position**: Centered in 20px circle
- **SVG Path**: Custom checkmark path from design system
- **Color**: White (checked), Grey (hover preview)
- **Visibility**:
  - Checked state: Always visible (white)
  - Unchecked + Hover: Visible (grey)
  - Unchecked + Default: Hidden
  - Disabled: Visible (white) if checked

### Icon Positioning
- **Top**: 30% from top
- **Bottom**: 27.57% from bottom
- **Left**: 25% from left
- **Right**: 18.43% from right

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate between radio buttons in group
- **Arrow Keys**: Navigate within radio group
  - **Up/Left Arrow**: Select previous option
  - **Down/Right Arrow**: Select next option
- **Space**: Select focused radio button

### Screen Readers
- Use `role="radio"` for proper announcement
- Include `aria-checked` attribute (true/false)
- Associate labels using `htmlFor` and `id`
- Group radio buttons with `role="radiogroup"`
- Provide group label using `aria-labelledby` or `<fieldset>` + `<legend>`

### Focus Management
- Clear visible focus indicator (2px blue outline)
- Focus outline offset for better visibility
- Maintain focus order in tab sequence
- Arrow keys should move focus within group

### Radio Group Example
```tsx
<fieldset>
  <legend>Choose your plan</legend>
  <RadioButton name="plan" value="free" label="Free" />
  <RadioButton name="plan" value="pro" label="Pro" />
  <RadioButton name="plan" value="enterprise" label="Enterprise" />
</fieldset>
```

### Color Contrast
- **Checked**: White checkmark on green background (WCAG AAA)
- **Unchecked**: Grey border on white background (WCAG AA)
- **Disabled**: Reduced contrast acceptable for disabled state

## 9. Interaction Behaviour

### Selection Flow
1. User hovers over radio button
2. Grey checkmark preview appears (if unchecked)
3. User clicks radio button
4. Button scales down to 90% (200ms animation)
5. Radio button becomes checked
6. Background changes to green
7. White checkmark appears
8. Other radio buttons in group become unchecked
9. `onChange` callback triggered with new value
10. Button scales back to 100%

### Hover Preview
- Shows grey checkmark on unchecked radio buttons
- Helps users understand what will happen when clicked
- Only active when not disabled

### Click Animation
- Scale animation (90%) provides tactile feedback
- Duration: 200ms
- Applies to both checking and unchecking

### Label Click
- Clicking label also toggles the radio button
- Label has pointer cursor when not disabled
- Label is disabled when radio is disabled

### Group Behavior
- Only one radio button can be selected at a time
- Selecting a radio button deselects others in the group
- All radio buttons must share the same `name` prop

## 10. Responsive Behaviour

### Desktop (≥1024px)
- Fixed 20px size
- Hover effects fully functional
- Keyboard navigation optimized

### Tablet (768px - 1023px)
- Maintain 20px size
- Ensure touch targets are minimum 44px
- Add padding around radio button if needed
- Maintain label spacing

### Mobile (<768px)
- Increase touch target to minimum 44px
- Radio button remains 20px visual size
- Add transparent padding for larger touch area
- Stack radio options vertically
- Increase spacing between options (16px minimum)

### Orientation
- Portrait: Vertical stacking recommended
- Landscape: Horizontal alignment acceptable for 2-3 options

### Touch Target Enhancement
```tsx
// Enhance touch target on mobile
<div className="p-3"> {/* Adds padding for 44px+ touch target */}
  <RadioButton name="option" value="1" label="Option 1" />
</div>
```

### Responsive Spacing
```css
/* Mobile: Stack vertically with spacing */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Desktop: Horizontal layout for short labels */
@media (min-width: 768px) {
  .radio-group {
    flex-direction: row;
    gap: 24px;
  }
}
```

---

## Code Example
```tsx
import { useState } from 'react';
import { RadioButton } from './components/RadioButton';

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <fieldset>
      <legend style={{ 
        fontSize: 'var(--text-body)',
        fontWeight: 'var(--font-weight-semibold)',
        marginBottom: '16px'
      }}>
        Payment Method
      </legend>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButton
          name="payment"
          value="credit-card"
          checked={paymentMethod === 'credit-card'}
          onChange={setPaymentMethod}
          label="Credit Card"
          id="payment-cc"
        />
        
        <RadioButton
          name="payment"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={setPaymentMethod}
          label="PayPal"
          id="payment-paypal"
        />
        
        <RadioButton
          name="payment"
          value="bank-transfer"
          checked={paymentMethod === 'bank-transfer'}
          onChange={setPaymentMethod}
          label="Bank Transfer"
          id="payment-bank"
        />
        
        {/* Disabled option */}
        <RadioButton
          name="payment"
          value="crypto"
          checked={false}
          onChange={setPaymentMethod}
          label="Cryptocurrency (Coming Soon)"
          id="payment-crypto"
          disabled
        />
      </div>
    </fieldset>
  );
}
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
