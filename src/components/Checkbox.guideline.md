# Checkbox Component Guidelines

## 1. Overview
The Checkbox component allows users to select one or multiple options from a set. It represents a binary choice (checked/unchecked) and can also support an indeterminate state for partial selections. Checkboxes are essential for forms, settings, and multi-select interfaces.

## 2. Variants

### Standard
- **Purpose**: Default checkbox for general use
- **Visual**: Square box with checkmark when selected
- **CSS Variables**:
  - Border: `var(--border)` (unchecked)
  - Background: `var(--primary)` (checked)
  - Checkmark: `white`

### With Label
- **Purpose**: Checkbox with associated text label
- **Visual**: Checkbox followed by clickable label text
- **Usage**: Forms, settings, lists
- **Label Position**: Right of checkbox (default)

### Indeterminate
- **Purpose**: Represents partial selection (e.g., "select all" when some items selected)
- **Visual**: Dash/minus icon instead of checkmark
- **CSS**: `indeterminate` property set via JavaScript
- **Usage**: Parent checkbox controlling child checkboxes

### Disabled
- **Purpose**: Non-interactive checkbox showing unavailable option
- **Visual**: Reduced opacity with `not-allowed` cursor
- **CSS Variables**:
  - Opacity: `0.4`
  - Cursor: `not-allowed`

## 3. Sizes

### Small (sm)
- **Box Size**: `16px × 16px`
- **Border Radius**: `var(--radius-sm)` (4px)
- **Checkmark Size**: `10px`
- **Label Font Size**: `var(--text-caption)` (12px)
- **Use Case**: Dense lists, tables, compact forms

### Medium (md) - Default
- **Box Size**: `20px × 20px`
- **Border Radius**: `var(--radius-sm)` (4px)
- **Checkmark Size**: `12px`
- **Label Font Size**: `var(--text-body)` (14px)
- **Use Case**: Standard forms, settings, most scenarios

### Large (lg)
- **Box Size**: `24px × 24px`
- **Border Radius**: `var(--radius-md)` (6px)
- **Checkmark Size**: `14px`
- **Label Font Size**: `var(--text-body)` (14px)
- **Use Case**: Touch interfaces, accessibility-focused UIs

## 4. States

### Unchecked (Default)
- **Visual**: Empty square box with border
- **Border**: `2px solid var(--border)`
- **Background**: `transparent` or `var(--white)`
- **Value**: `false`

### Checked
- **Visual**: Filled box with white checkmark
- **Border**: `2px solid var(--primary)`
- **Background**: `var(--primary)`
- **Checkmark**: White check icon (✓)
- **Value**: `true`

### Indeterminate
- **Visual**: Filled box with white dash/minus
- **Border**: `2px solid var(--primary)`
- **Background**: `var(--primary)`
- **Icon**: White minus/dash (−)
- **Usage**: Parent checkbox with mixed child states

### Hover (Unchecked)
- **Border**: `2px solid var(--grey-04)`
- **Background**: `var(--grey-01)` (light grey)
- **Cursor**: `pointer`
- **Transition**: `all 0.2s ease`

### Hover (Checked)
- **Background**: Slightly darker primary color
- **Border**: `2px solid var(--primary)`
- **Cursor**: `pointer`

### Focus
- **Outline**: `2px solid var(--primary)` with `2px` offset
- **Purpose**: Keyboard navigation visibility
- **When**: User tabs to checkbox

### Disabled (Unchecked)
- **Opacity**: `0.4`
- **Cursor**: `not-allowed`
- **Border**: `2px solid var(--border)`
- **Background**: `var(--grey-01)`
- **Interactive**: Non-clickable

### Disabled (Checked)
- **Opacity**: `0.4`
- **Cursor**: `not-allowed`
- **Background**: `var(--primary)` with reduced opacity
- **Checkmark**: White but dimmed

### Error
- **Border**: `2px solid var(--alert-red)` (unchecked)
- **Background**: `var(--alert-red)` (checked)
- **Helper Text**: Error message in red below checkbox
- **Usage**: Form validation failures

## 5. Anatomy

```
┌────────────────────────────────────┐
│ ☑ Checkbox Label Text              │
│   └─ Helper text or description    │
└────────────────────────────────────┘

Components:
1. Checkbox container
2. Checkbox box (square)
3. Checkmark icon (when checked)
4. Label text (optional but recommended)
5. Helper text (optional)
6. Focus ring (when focused)
```

### Detailed Structure:
```
[☐] ← Checkbox box (16-24px)
 │
 ├─ Border (2px)
 ├─ Background (transparent or primary)
 ├─ Checkmark icon (SVG or CSS)
 └─ Focus outline (2px offset)

Label text (8px gap from checkbox)
Helper text (below label, 4px gap)
```

### Element Spacing:
- **Checkbox to label**: `8px` horizontal gap
- **Label to helper text**: `4px` vertical gap
- **Between checkboxes (vertical list)**: `12px`
- **Between checkboxes (horizontal)**: `16px`
- **Padding around clickable area**: `4px` (for larger touch target)

## 6. Rules

### Label Guidelines
1. **Always provide labels** for accessibility
2. Labels should be **clickable** (toggles checkbox)
3. Use **sentence case** (e.g., "Remember me" not "Remember Me")
4. Keep labels **concise** but descriptive
5. Position label to the **right** of checkbox (LTR languages)

### Selection Behavior
1. **Independent**: Each checkbox operates independently (unlike radio buttons)
2. **Multiple selections**: Users can select multiple options
3. **Toggle**: Click toggles between checked/unchecked
4. **Visual feedback**: Immediate visual state change

### Grouping Rules
1. Group related checkboxes under a **section heading**
2. Use consistent **vertical spacing** (12px)
3. Align checkboxes **vertically** in a list
4. **Indeterminate state**: Use for "select all" functionality
5. Provide **clear labels** for groups (not just individual items)

### Validation
1. Validate **on submit** or on blur (for required checkboxes)
2. Show **error state** with message if validation fails
3. Required checkboxes should be **clearly marked**
4. Provide **specific error messages** (e.g., "You must accept terms")

### Indeterminate Usage
```tsx
// Parent checkbox with children
const [checkedItems, setCheckedItems] = useState([false, false, false]);
const allChecked = checkedItems.every(Boolean);
const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

<Checkbox
  checked={allChecked}
  indeterminate={isIndeterminate}
  onChange={handleParentChange}
/>
```

## 7. Icon Placement

### Checkmark Icon (Checked State)
- **Position**: Centered within checkbox box
- **Size**: 10-14px (based on checkbox size)
- **Color**: `white`
- **Icon**: Check/tick mark (✓)
- **SVG Path**: Smooth, rounded strokes
- **Stroke Width**: `2px` for clarity

### Indeterminate Icon
- **Position**: Centered within checkbox box
- **Size**: 8-12px horizontal line
- **Color**: `white`
- **Icon**: Minus/dash (−)
- **Width**: 60-70% of box width
- **Height**: `2px` stroke

### Icon Animations
- **Transition**: Smooth fade-in and scale (200ms)
- **Transform**: Optional scale from 0.8 to 1.0 on check
- **Easing**: `ease-out` for natural feel

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Focus moves to checkbox
- **Space**: Toggles checked/unchecked state
- **Shift + Tab**: Focus moves to previous element
- **Enter**: May submit form (if in form context)

### ARIA Attributes
```tsx
// Basic checkbox
<input
  type="checkbox"
  id="terms"
  name="terms"
  aria-checked="false"
  aria-required="true"
  aria-describedby="terms-description"
/>
<label htmlFor="terms">I accept the terms and conditions</label>
<span id="terms-description">You must accept to continue</span>

// Indeterminate checkbox
<input
  type="checkbox"
  id="select-all"
  aria-checked="mixed"
  aria-controls="item1 item2 item3"
/>

// Error state
<input
  type="checkbox"
  id="consent"
  aria-checked="false"
  aria-invalid="true"
  aria-describedby="consent-error"
/>
<span id="consent-error" role="alert">
  You must provide consent to proceed
</span>
```

### Required Attributes
- `id` - Links checkbox to label
- `name` - Form field name
- `aria-checked` - State (true/false/mixed)
- `aria-required` - Indicates required field
- `aria-invalid` - Validation state
- `aria-describedby` - Links to helper/error text
- `aria-controls` - IDs of controlled elements (indeterminate)

### Screen Reader Support
- Label announced with checkbox
- State announced (checked/unchecked/partially checked)
- Required status announced
- Error messages announced when appearing
- Group labels announced (fieldset/legend)

### Focus Indicators
- **Visible outline**: 2px solid ring around checkbox
- **Color contrast**: Meets WCAG AA standards
- **Never remove**: Focus indicator critical for keyboard users
- **Offset**: 2px gap between checkbox and focus ring

### Touch Targets
- **Minimum size**: 44×44px clickable area (WCAG guideline)
- **Label clickable**: Entire label text toggles checkbox
- **Padding**: Additional invisible padding around small checkboxes

## 9. Interaction Behaviour

### Click/Tap Interaction
1. **Click checkbox**: Toggles state (unchecked ↔ checked)
2. **Click label**: Also toggles checkbox state
3. **Visual feedback**: Immediate state change
4. **Sound** (optional): System click sound on mobile
5. **Haptic** (optional): Light haptic feedback on mobile

### Keyboard Interaction
1. **Focus**: Tab navigates to checkbox
2. **Space**: Toggles checked state
3. **Visual feedback**: Focus ring visible
4. **Form submission**: Checked value included in form data

### Mouse Hover
1. **Hover effect**: Border color change, background tint
2. **Cursor**: Pointer cursor on hover
3. **Transition**: Smooth 200ms transition
4. **Label hover**: Same hover effect as checkbox hover

### Touch Interaction (Mobile)
1. **Touch area**: Minimum 44×44px
2. **Touch feedback**: Visual state change
3. **No hover**: Skip hover states on touch devices
4. **Gesture**: Single tap to toggle

### Indeterminate Parent Behavior
```tsx
// Clicking indeterminate checkbox
- First click: Checks all children
- Second click: Unchecks all children
- Alternatively: Cycles through all → none → indeterminate
```

### Group Selection
1. **Select all**: Parent checkbox checks all children
2. **Deselect all**: Parent checkbox unchecks all children
3. **Partial selection**: Parent shows indeterminate state
4. **Child change**: Updates parent state accordingly

### Form Integration
- Checked checkboxes submit their `value` attribute
- Unchecked checkboxes don't submit (or submit as empty)
- Name attribute must be unique (or use array notation like `options[]`)
- Validation triggers on form submit or blur

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Size**: `sm` or `md` (16-20px)
- **Layout**: Vertical lists or horizontal groups
- **Spacing**: 12px vertical, 16px horizontal
- **Hover**: Show hover states
- **Click target**: Standard size

### Tablet (768px - 1023px)
- **Size**: `md` (20px recommended)
- **Layout**: Vertical lists preferred
- **Spacing**: 16px vertical gaps
- **Touch target**: Minimum 44×44px
- **Hover**: May or may not show (depends on device)

### Mobile (≤767px)
- **Size**: `md` or `lg` (20-24px for easier tapping)
- **Layout**: Vertical stacking, full-width labels
- **Spacing**: 16-20px vertical gaps
- **Touch target**: Minimum 44×44px (add padding if needed)
- **No hover**: Skip hover states
- **Label wrapping**: Allow labels to wrap to multiple lines

### Breakpoint Adjustments
```tsx
// Responsive checkbox size
<Checkbox 
  size="md" // 20px default
  className="md:size-5 lg:size-6" // Adjust on larger screens
/>

// Responsive layout
<div className="flex flex-col md:flex-row md:gap-4">
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
  <Checkbox label="Option 3" />
</div>
```

### Vertical Spacing (Mobile)
- **Between items**: `16-20px`
- **Group heading margin**: `16px` bottom
- **Helper text**: `4px` top margin

### Horizontal Layout (Desktop)
- Use only when space-constrained
- Ensure sufficient gap (16-24px)
- Consider wrapping on smaller screens

### Label Wrapping
```tsx
// Allow label text to wrap on small screens
<label className="flex items-start gap-2">
  <Checkbox />
  <span className="flex-1 break-words">
    Long label text that will wrap nicely on mobile devices
  </span>
</label>
```

---

## Quick Reference

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Box Size | 16×16px | 20×20px | 24×24px |
| Border Radius | 4px | 4px | 6px |
| Border Width | 2px | 2px | 2px |
| Checkmark Size | 10px | 12px | 14px |
| Label Font Size | 12px | 14px | 14px |
| Min Touch Target | 44×44px | 44×44px | 44×44px |
| Checkbox-Label Gap | 8px | 8px | 8px |

## CSS Variables Used
- `var(--primary)` - Checked background
- `var(--border)` - Unchecked border
- `var(--grey-01)` - Hover background, disabled background
- `var(--grey-04)` - Hover border color
- `var(--alert-red)` - Error state color
- `var(--white)` - Checkmark color
- `var(--text-primary)` - Label text color
- `var(--text-secondary)` - Helper text color
- `var(--radius-sm)` - Small border radius (4px)
- `var(--radius-md)` - Medium border radius (6px)
- `var(--text-caption)` - Small label font (12px)
- `var(--text-body)` - Default label font (14px)

## Common Patterns

### Single Checkbox (Terms Acceptance)
```tsx
<Checkbox
  id="terms"
  label="I accept the terms and conditions"
  required
  error={errors.terms}
/>
```

### Checkbox Group
```tsx
<fieldset>
  <legend>Select your interests</legend>
  <Checkbox label="Design" value="design" />
  <Checkbox label="Development" value="dev" />
  <Checkbox label="Marketing" value="marketing" />
</fieldset>
```

### Select All with Indeterminate
```tsx
<Checkbox
  label="Select all"
  checked={allChecked}
  indeterminate={isIndeterminate}
  onChange={handleSelectAll}
/>
{children.map(child => (
  <Checkbox
    key={child.id}
    label={child.label}
    checked={child.checked}
    onChange={() => handleChildChange(child.id)}
  />
))}
```
