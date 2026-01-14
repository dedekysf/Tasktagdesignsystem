# Checkbox Component Guideline

## 1. Overview
The Checkbox component is a binary selection control that allows users to select one or more options from a set. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use checkboxes for multiple selections, toggling features on/off, accepting terms, and selecting items from lists.

## 2. Variants
The Checkbox component supports **1 primary variant** with visual states:

### Standard Checkbox
- **Unchecked**: Empty box with border
- **Checked**: Box with checkmark and primary blue background
- **Indeterminate**: Box with dash/minus icon (for partial selections)

## 3. Sizes
The Checkbox component supports **2 sizes**:

### Small (sm)
- **Checkbox Size**: 16px × 16px
- **Border Width**: 1.5px
- **Border Radius**: `var(--radius-4)` (4px)
- **Checkmark Icon**: 12px
- **Font Size**: `var(--text-label)` (14px)
- **Gap**: `var(--spacing-8)` (8px) between checkbox and label

### Medium (md)
- **Checkbox Size**: 20px × 20px
- **Border Width**: 2px
- **Border Radius**: `var(--radius-4)` (4px)
- **Checkmark Icon**: 14px
- **Font Size**: `var(--text-base)` (16px)
- **Gap**: `var(--spacing-8)` (8px) between checkbox and label

## 4. States
Each checkbox responds to the following states:

### Unchecked (Default)
- **Background**: Transparent
- **Border**: `1.5px or 2px solid var(--border)`
- **Icon**: None

### Checked
- **Background**: `var(--primary-blue)`
- **Border**: `1.5px or 2px solid var(--primary-blue)`
- **Icon**: White checkmark (`var(--white)`)

### Indeterminate (Mixed)
- **Background**: `var(--primary-blue)`
- **Border**: `1.5px or 2px solid var(--primary-blue)`
- **Icon**: White minus/dash (`var(--white)`)
- **Use Case**: Parent checkbox when some children are selected

### Hover (Unchecked)
- **Background**: `var(--grey-02)`
- **Border**: `1.5px or 2px solid var(--border)`
- **Cursor**: `pointer`

### Hover (Checked)
- **Background**: `var(--primary-blue-dark)`
- **Border**: `1.5px or 2px solid var(--primary-blue-dark)`

### Focus
- **Outline**: `2px solid var(--primary-blue)`
- **Outline Offset**: 2px
- **Applies to**: Both checked and unchecked states

### Disabled (Unchecked)
- **Background**: `var(--grey-03)`
- **Border**: `1.5px or 2px solid var(--grey-04)`
- **Label Color**: `var(--grey-04)`
- **Cursor**: `not-allowed`

### Disabled (Checked)
- **Background**: `var(--grey-04)`
- **Border**: `1.5px or 2px solid var(--grey-04)`
- **Icon**: White checkmark (dimmed)
- **Label Color**: `var(--grey-04)`
- **Cursor**: `not-allowed`

## 5. Anatomy
```
┌───────────────────────┐
│ ☐ Checkbox Label      │  ← Unchecked
│ ☑ Checkbox Label      │  ← Checked
│ ☑̶ Checkbox Label      │  ← Indeterminate
└───────────────────────┘
```

**Components**:
1. **Checkbox Box**: Square container with border and optional background
2. **Checkmark Icon**: SVG icon displayed when checked
3. **Label (Optional)**: Text description of the checkbox option
4. **Hidden Input**: Native checkbox input for form handling

**Detailed Structure**:
```tsx
<label>                          ← Clickable container
  <input type="checkbox" />      ← Hidden native input
  <div className="checkbox">     ← Visual checkbox
    <svg>Checkmark</svg>         ← Conditional icon
  </div>
  <span>Label Text</span>        ← Optional label
</label>
```

## 6. Rules
1. **Border Radius**: Always `var(--radius-4)` (4px) for rounded corners
2. **Icon Color**: Always white (`var(--white)`) when checked
3. **Label Alignment**: Vertically centered with checkbox
4. **Label Text**: Use `var(--font-weight-medium)` for checkbox labels
5. **Clickable Area**: Entire label area should be clickable, not just checkbox
6. **Spacing**: Consistent `var(--spacing-8)` gap between checkbox and label
7. **Form Integration**: Checkbox value must sync with hidden native input
8. **Group Spacing**: `var(--spacing-12)` (12px) between checkbox items in a group
9. **Minimum Touch Target**: 44px × 44px for mobile (include label)
10. **Indeterminate**: Only use for parent checkboxes in hierarchical selections

## 7. Icon Placement
### Checkmark Icon (Checked State)
- **Position**: Centered within checkbox box
- **Size**: 
  - Small (sm): 12px × 12px
  - Medium (md): 14px × 14px
- **Color**: `var(--white)`
- **SVG Path**: Checkmark shape with rounded stroke caps
- **Stroke Width**: 2px

### Minus Icon (Indeterminate State)
- **Position**: Centered within checkbox box
- **Size**: Same as checkmark
- **Color**: `var(--white)`
- **SVG Path**: Horizontal line (minus/dash)
- **Stroke Width**: 2px

**Icon Implementation**:
```tsx
// Checked icon
<svg width="12" height="12" viewBox="0 0 12 12">
  <path 
    d="M2 6L5 9L10 3" 
    stroke="var(--white)" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    fill="none"
  />
</svg>

// Indeterminate icon
<svg width="12" height="12" viewBox="0 0 12 12">
  <path 
    d="M3 6H9" 
    stroke="var(--white)" 
    strokeWidth="2" 
    strokeLinecap="round"
    fill="none"
  />
</svg>
```

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate to checkbox
- **Space**: Toggle checkbox state
- **Shift + Tab**: Navigate to previous field

### Screen Readers
- Use native `<input type="checkbox">` for proper semantics
- Associate label with input using `htmlFor`/`id`
- Announce state changes (checked/unchecked)
- Use `aria-checked` for custom implementations:
  - `aria-checked="false"` → Unchecked
  - `aria-checked="true"` → Checked
  - `aria-checked="mixed"` → Indeterminate
- Include `aria-describedby` for additional context if needed
- Use `aria-label` if no visible label exists

### Focus Management
- Clear visible focus indicator (2px blue outline)
- Focus outline offset for better visibility
- Maintain logical tab order in checkbox groups
- Focus should activate checkbox when label is clicked

### Color Contrast
- **Unchecked**: Border contrast ratio ≥ 3:1
- **Checked**: Blue background with white icon (WCAG AAA)
- **Label**: Text contrast ratio ≥ 4.5:1
- **Disabled**: Reduced contrast acceptable (informational only)

### Group Labels
```tsx
<fieldset>
  <legend>Select preferences</legend>
  <Checkbox label="Email notifications" />
  <Checkbox label="SMS notifications" />
  <Checkbox label="Push notifications" />
</fieldset>
```

## 9. Interaction Behaviour
### Click/Tap Interaction
1. User hovers over checkbox or label (desktop)
2. Hover state activates (grey background on unchecked)
3. User clicks/taps checkbox or label
4. Checkbox toggles state (unchecked ↔ checked)
5. `onChange` callback is triggered with new value
6. Visual state updates immediately
7. Form value updates

### Keyboard Interaction
1. User tabs to checkbox
2. Checkbox receives focus (blue outline)
3. User presses Space
4. Checkbox toggles state
5. Focus remains on checkbox

### Indeterminate Behavior (Parent Checkbox)
1. Initial state: Indeterminate (some children checked)
2. User clicks parent checkbox
3. If indeterminate → All children become checked
4. If checked → All children become unchecked
5. If unchecked → All children become checked

### Child Checkbox Impact on Parent
1. User toggles child checkbox
2. Check if all siblings are checked → Parent becomes checked
3. Check if no siblings are checked → Parent becomes unchecked
4. Check if some siblings are checked → Parent becomes indeterminate

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Standard sizes (sm, md)
- Hover states fully functional
- Cursor changes to pointer

### Tablet (768px - 1023px)
- Maintain same visual sizes
- Increase touch target to 44px minimum
- Add padding to label for larger tap area
- Consider `size="md"` as default

### Mobile (<768px)
- **Minimum size**: Use `size="md"` (20px checkbox)
- **Touch Target**: Minimum 44px × 44px (including label)
- **Spacing**: Increase spacing between checkboxes in a list
- **Layout**: Stack checkboxes vertically
- **Label**: Full-width labels for easier tapping

### Touch Target Enhancement
```tsx
// Mobile-friendly checkbox with larger touch target
<label className="flex items-center py-3"> 
  <Checkbox size="md" />
  <span className="flex-1">Option label</span>
</label>
```

### Checkbox Lists
```tsx
// Desktop: Compact spacing
<div className="space-y-2">
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
</div>

// Mobile: Increased spacing
<div className="space-y-4">
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
</div>
```

---

## Code Example
```tsx
import { Checkbox } from './components/Checkbox';

// Basic checkbox with label
<Checkbox 
  size="md"
  label="I agree to terms and conditions"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

// Checkbox without label (use aria-label)
<Checkbox 
  size="sm"
  checked={selected}
  onChange={(e) => setSelected(e.target.checked)}
  aria-label="Select item"
/>

// Indeterminate checkbox (parent)
<Checkbox 
  size="md"
  label="Select All"
  checked={allChecked}
  indeterminate={someChecked}
  onChange={handleSelectAll}
/>

// Disabled checkbox
<Checkbox 
  size="md"
  label="Read-only option"
  checked={true}
  disabled
/>

// Checkbox group
<div className="space-y-3">
  <Checkbox 
    size="md"
    label="Email notifications"
    checked={emailEnabled}
    onChange={(e) => setEmailEnabled(e.target.checked)}
  />
  <Checkbox 
    size="md"
    label="SMS notifications"
    checked={smsEnabled}
    onChange={(e) => setSmsEnabled(e.target.checked)}
  />
  <Checkbox 
    size="md"
    label="Push notifications"
    checked={pushEnabled}
    onChange={(e) => setPushEnabled(e.target.checked)}
  />
</div>
```

---

## Best Practices
1. **Use for multiple selections** - For single selection, use Radio buttons
2. **Provide clear labels** - Make it obvious what checking the box means
3. **Group related checkboxes** - Use fieldset/legend for context
4. **Default unchecked** - Unless there's a strong reason otherwise
5. **Avoid pre-checking** - Let users make explicit choices
6. **Use indeterminate state** - Only for parent checkboxes in hierarchies
7. **Make entire row clickable** - Include label in clickable area
8. **Test keyboard navigation** - Ensure tab order is logical
9. **Provide immediate feedback** - State changes should be instant
10. **Consider toggle switches** - For on/off settings, switches may be clearer

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
