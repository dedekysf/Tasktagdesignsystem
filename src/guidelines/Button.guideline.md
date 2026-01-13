# Button Component Guidelines

## 1. Overview
The Button component is a fundamental interactive element used to trigger actions, submit forms, or navigate through the application. It supports multiple variants, sizes, and states to accommodate different use cases while maintaining consistency with the TaskTag design system.

## 2. Variants

### Primary
- **Purpose**: Main call-to-action buttons for primary actions
- **Visual**: Solid background with `var(--primary)` color
- **Usage**: Submit forms, confirm actions, primary navigation
- **CSS Variables**: 
  - Background: `var(--primary)`
  - Text: `white`
  - Border: None

### Secondary
- **Purpose**: Alternative actions that are less prominent than primary
- **Visual**: Solid background with `var(--grey-05)` color
- **Usage**: Cancel actions, secondary navigation, alternative options
- **CSS Variables**:
  - Background: `var(--grey-05)`
  - Text: `white`
  - Border: None

### Outline
- **Purpose**: Tertiary actions or to reduce visual weight
- **Visual**: Transparent background with border
- **Usage**: Less important actions, paired with primary buttons
- **CSS Variables**:
  - Background: `transparent`
  - Text: `var(--text-primary)`
  - Border: `var(--border)`

### Ghost
- **Purpose**: Minimal visual weight while maintaining clickability
- **Visual**: No border, transparent background
- **Usage**: Icon buttons, inline actions, navigation items
- **CSS Variables**:
  - Background: `transparent`
  - Text: `var(--text-primary)`
  - Border: None

### Destructive
- **Purpose**: Actions with potentially negative consequences
- **Visual**: Red/alert color scheme
- **Usage**: Delete, remove, discard actions
- **CSS Variables**:
  - Background: `var(--alert-red)`
  - Text: `white`
  - Border: None

## 3. Sizes

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `8px 16px`
- **Font Size**: `var(--text-label)` (12px)
- **Font Weight**: `var(--font-weight-medium)` (500)
- **Border Radius**: `var(--radius-full)`
- **Use Case**: Compact interfaces, inline actions, tables

### Medium (md) - Default
- **Height**: `var(--size-md)` (40px)
- **Padding**: `12px 24px`
- **Font Size**: `var(--text-body)` (14px)
- **Font Weight**: `var(--font-weight-medium)` (500)
- **Border Radius**: `var(--radius-full)`
- **Use Case**: Standard buttons, forms, modals

### Large (lg)
- **Height**: `var(--size-lg)` (48px)
- **Padding**: `16px 32px`
- **Font Size**: `var(--text-body)` (14px)
- **Font Weight**: `var(--font-weight-semibold)` (600)
- **Border Radius**: `var(--radius-full)`
- **Use Case**: Hero sections, important CTAs, empty states

## 4. States

### Default (Idle)
- **Visual**: Base variant styling
- **Cursor**: `pointer`
- **Interaction**: Clickable, hoverable

### Hover
- **Primary**: Slightly darker background (opacity or darker shade)
- **Secondary**: Slightly darker background
- **Outline**: Background: `var(--grey-01)`
- **Ghost**: Background: `var(--grey-01)`
- **Transition**: `all 0.2s ease`

### Active/Pressed
- **Visual**: Further darkened or scaled down slightly
- **Transform**: Optional `scale(0.98)` for tactile feedback

### Disabled
- **Opacity**: `0.4`
- **Cursor**: `not-allowed`
- **Pointer Events**: `none`
- **Background**: Same as variant but with reduced opacity
- **Text**: Same as variant but with reduced opacity

### Focus
- **Outline**: `2px solid var(--primary)` with `2px` offset
- **Purpose**: Keyboard navigation accessibility
- **When**: User tabs to button using keyboard

### Loading
- **Visual**: Disabled appearance with loading spinner
- **Cursor**: `wait` or `not-allowed`
- **Content**: Loading spinner replaces or accompanies text

## 5. Anatomy

```
┌─────────────────────────────────┐
│  [Icon] Button Text [Icon]      │  ← Horizontal padding (8-32px based on size)
└─────────────────────────────────┘
 ↑                               ↑
 Border radius (full)            Height (32-48px based on size)

Components:
1. Container (button element)
2. Leading Icon (optional)
3. Text Label
4. Trailing Icon (optional)
5. Background
6. Border (for outline variant)
```

### Element Spacing:
- **Icon-to-text gap**: `8px`
- **Minimum width**: Content-based, no strict minimum
- **Icon size**: `16px` (sm), `20px` (md/lg)

## 6. Rules

### Text Guidelines
1. Use **sentence case** for button labels (e.g., "Save changes" not "Save Changes")
2. Keep labels **concise** (1-3 words ideal, max 5 words)
3. Use **action verbs** (Save, Delete, Create, Cancel)
4. Be **specific** (e.g., "Delete task" instead of "Delete")

### Visual Hierarchy
1. **One primary button** per section/screen maximum
2. Place primary button on the **right** in button groups (e.g., Cancel | Save)
3. Use **outline/ghost** variants for less important actions
4. Destructive actions should use **destructive variant**

### Layout Rules
1. **Full width** buttons only in mobile/narrow containers
2. Maintain **consistent spacing** between button groups: `12px` gap
3. **Align** button groups to the right in forms/modals
4. Stack buttons **vertically** on mobile with `8px` gap

### Icon Usage
1. Use icons to **reinforce** the action, not replace text
2. Place icons on the **left** for primary actions
3. Place icons on the **right** for forward actions (Next →)
4. **Icon-only buttons** must have aria-label for accessibility

## 7. Icon Placement

### Leading Icons (Left)
- **Purpose**: Reinforce action meaning
- **Examples**: 
  - Save icon + "Save"
  - Plus icon + "Add task"
  - Trash icon + "Delete"
- **Spacing**: `8px` gap from text

### Trailing Icons (Right)
- **Purpose**: Indicate direction or dropdown
- **Examples**:
  - "Next" + Arrow right icon
  - "More options" + Chevron down
  - "External link" + External link icon
- **Spacing**: `8px` gap from text

### Icon-Only Buttons
- **Size**: Icons should be `16px` (sm), `20px` (md/lg)
- **Padding**: Equal padding to maintain square shape
- **Variant**: Typically `ghost` or `outline`
- **Required**: `aria-label` attribute for screen readers
- **Use Case**: Toolbars, compact interfaces, mobile headers

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Focus moves to button
- **Enter/Space**: Activates button
- **Focus indicator**: Visible outline (2px solid)

### ARIA Attributes
```tsx
// Icon-only button
<Button aria-label="Delete task" variant="ghost">
  <Trash2 />
</Button>

// Loading state
<Button aria-busy="true" aria-live="polite">
  Saving...
</Button>

// Disabled state
<Button disabled aria-disabled="true">
  Submit
</Button>
```

### Screen Reader Support
- Meaningful button text (avoid "Click here")
- Loading states announced via `aria-live`
- Disabled state communicated via `aria-disabled`
- Icon-only buttons have `aria-label`

### Color Contrast
- **Primary**: Minimum 4.5:1 contrast ratio (text on background)
- **Outline**: Border and text meet 3:1 contrast minimum
- **Destructive**: Ensure red meets accessibility standards
- Test with color blindness simulators

### Focus Management
- Visible focus indicator (not removed via CSS)
- Logical tab order in forms
- Focus trapped in modals with buttons

## 9. Interaction Behaviour

### Click/Tap
1. **Immediate feedback**: Visual state change (active state)
2. **Action execution**: Trigger associated function
3. **Disabled handling**: No action if disabled
4. **Loading state**: Show spinner, prevent multiple clicks

### Hover (Desktop)
1. **Visual change**: Background color transition
2. **Cursor change**: Pointer cursor
3. **Tooltip** (optional): Show on icon-only buttons
4. **Transition**: Smooth 200ms transition

### Touch (Mobile)
1. **Touch target**: Minimum 44x44px (WCAG guideline)
2. **Active state**: Visual feedback on touch
3. **No hover**: Skip hover states on touch devices
4. **Ripple effect** (optional): Material-style feedback

### Double-Click Prevention
```tsx
const [isLoading, setIsLoading] = useState(false);

const handleClick = async () => {
  if (isLoading) return; // Prevent double-click
  setIsLoading(true);
  await performAction();
  setIsLoading(false);
};
```

### Form Submission
- Primary button triggers form submit
- Prevent submission if form validation fails
- Show loading state during async submission
- Disable button during submission

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Width**: Auto (content-based) or explicit width
- **Layout**: Horizontal button groups with 12px gap
- **Size**: Prefer `md` (medium) size
- **Hover**: Show hover states

### Tablet (768px - 1023px)
- **Width**: Auto or full-width in narrow containers
- **Layout**: Horizontal groups or vertical if space-constrained
- **Size**: `md` (medium) size
- **Touch target**: Ensure 44x44px minimum

### Mobile (≤767px)
- **Width**: Full-width in most cases
- **Layout**: Vertical stacking with 8px gap
- **Size**: `md` or `lg` for better touch targets
- **Touch target**: 48px minimum height recommended
- **Button groups**: Stack vertically, primary button on top

### Breakpoint Behavior
```tsx
// Example responsive button layout
<div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-3">
  <Button variant="outline" size="md" className="w-full md:w-auto">
    Cancel
  </Button>
  <Button variant="primary" size="md" className="w-full md:w-auto">
    Save changes
  </Button>
</div>
```

### Content Overflow
- **Text truncation**: Use ellipsis for long labels
- **Icon scaling**: Icons remain same size across breakpoints
- **Minimum width**: Ensure buttons don't become too narrow
- **Max width**: Prevent buttons from becoming too wide (typically 300px max)

---

## Quick Reference

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Height | 32px | 40px | 48px |
| Padding | 8px 16px | 12px 24px | 16px 32px |
| Font Size | 12px | 14px | 14px |
| Font Weight | 500 | 500 | 600 |
| Icon Size | 16px | 20px | 20px |
| Min Touch Target | 44px | 44px | 48px |

## CSS Variables Used
- `var(--primary)` - Primary button background
- `var(--grey-05)` - Secondary button background
- `var(--text-primary)` - Text color
- `var(--border)` - Outline button border
- `var(--alert-red)` - Destructive button background
- `var(--grey-01)` - Hover background for ghost/outline
- `var(--size-sm/md/lg)` - Button heights
- `var(--text-label/body)` - Font sizes
- `var(--font-weight-medium/semibold)` - Font weights
- `var(--radius-full)` - Border radius
