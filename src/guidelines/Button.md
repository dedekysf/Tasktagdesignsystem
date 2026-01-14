# Button Component Guideline

## 1. Overview
The Button component is a fundamental interactive element that triggers actions when clicked. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use buttons for primary actions, form submissions, modal confirmations, and navigation triggers.

## 2. Variants
The Button component supports **4 variants**:

### Primary
- **Purpose**: Main call-to-action buttons
- **Background**: `var(--primary-blue)`
- **Text Color**: `var(--white)`
- **Use Case**: Submit forms, confirm actions, primary navigation

### Secondary
- **Purpose**: Alternative actions of equal importance
- **Background**: `var(--white)`
- **Text Color**: `var(--primary-blue)`
- **Border**: `1px solid var(--primary-blue)`
- **Use Case**: Cancel actions, secondary options

### Tertiary
- **Purpose**: Less prominent actions
- **Background**: `var(--grey-02)`
- **Text Color**: `var(--text-primary)`
- **Use Case**: Auxiliary actions, less critical interactions

### Danger
- **Purpose**: Destructive or critical actions
- **Background**: `var(--alert-red)`
- **Text Color**: `var(--white)`
- **Use Case**: Delete, remove, destructive confirmations

## 3. Sizes
The Button component supports **3 sizes**:

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `var(--spacing-4) var(--spacing-12)` (4px 12px)
- **Font Size**: `var(--text-label)` (14px)
- **Icon Size**: 16px
- **Gap**: `var(--spacing-4)` (4px)

### Medium (md)
- **Height**: `var(--size-md)` (40px)
- **Padding**: `var(--spacing-8) var(--spacing-16)` (8px 16px)
- **Font Size**: `var(--text-base)` (16px)
- **Icon Size**: 20px
- **Gap**: `var(--spacing-8)` (8px)

### Large (lg)
- **Height**: `var(--size-lg)` (48px)
- **Padding**: `var(--spacing-12) var(--spacing-20)` (12px 20px)
- **Font Size**: `var(--text-h4)` (18px)
- **Icon Size**: 24px
- **Gap**: `var(--spacing-8)` (8px)

## 4. States
Each button variant responds to the following states:

### Default
- Base styling as per variant

### Hover
- **Primary**: `var(--primary-blue-dark)` background
- **Secondary**: `var(--blue-01)` background
- **Tertiary**: `var(--grey-03)` background
- **Danger**: `var(--alert-red-dark)` background

### Active (Pressed)
- **Primary**: `var(--primary-blue-darker)` background
- **Secondary**: `var(--blue-02)` background
- **Tertiary**: `var(--grey-04)` background
- **Danger**: `var(--alert-red-darker)` background

### Disabled
- **Opacity**: 0.5
- **Cursor**: `not-allowed`
- **No hover effects**
- **Background**: Dimmed version of variant color

### Focus
- **Outline**: `2px solid var(--primary-blue)`
- **Outline Offset**: 2px

## 5. Anatomy
```
┌─────────────────────────────────┐
│ [Icon] Button Text [Icon]       │
└─────────────────────────────────┘
```

**Components**:
1. **Container**: Rounded rectangle with padding
2. **Icon (Optional)**: Left or right positioned icon
3. **Text Label**: Button text content
4. **Border (Variant-specific)**: Secondary variant only

## 6. Rules
1. **Text**: Always use `var(--font-weight-semibold)` for button text
2. **Border Radius**: Always use `var(--radius-8)` (8px)
3. **Minimum Width**: Buttons should have sufficient width to accommodate text and icons
4. **Icon Alignment**: Icons must be vertically centered with text
5. **Single Line**: Button text should always be single line (no wrapping)
6. **Contrast**: Ensure text color has sufficient contrast with background
7. **Spacing**: Use consistent gap between icon and text based on size
8. **Full Width**: Optional `fullWidth` prop makes button width 100%

## 7. Icon Placement
Icons can be positioned on either side of the button text:

### Left Icon
```tsx
<Button size="md" variant="primary" iconLeft={<Plus />}>
  Add Item
</Button>
```
- Icon appears before text
- Gap between icon and text: Size-dependent

### Right Icon
```tsx
<Button size="md" variant="primary" iconRight={<ChevronRight />}>
  Next
</Button>
```
- Icon appears after text
- Gap between icon and text: Size-dependent

### Icon Only
- Not recommended for primary actions
- Always include accessible label or tooltip

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate to button
- **Enter/Space**: Activate button
- **Escape**: Cancel (if in modal/dialog)

### Screen Readers
- Use descriptive button text
- Avoid generic labels like "Click here"
- Include `aria-label` for icon-only buttons
- Use `aria-disabled="true"` instead of `disabled` attribute when needed for focus management

### Focus Management
- Clear visible focus indicator (2px blue outline)
- Focus outline offset for better visibility
- Maintain focus order in tab sequence

### Color Contrast
- **Primary**: White text on blue background (WCAG AAA)
- **Secondary**: Blue text on white background (WCAG AAA)
- **Tertiary**: Dark text on grey background (WCAG AAA)
- **Danger**: White text on red background (WCAG AAA)

## 9. Interaction Behaviour
### Click/Tap
1. User hovers over button (desktop)
2. Background color changes to hover state
3. User clicks/taps button
4. Button enters active state
5. `onClick` callback is triggered
6. Button returns to default or hover state

### Loading State (Optional)
- Replace icon with spinner/loading indicator
- Disable button during loading
- Maintain button width to prevent layout shift

### Ripple Effect
- Optional ripple/splash effect on click
- Emanates from click point
- Duration: 400ms

### Double-Click Prevention
- Prevent multiple rapid clicks
- Disable button temporarily after first click (if applicable)
- Re-enable after action completes

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Use standard sizes (sm, md, lg)
- Hover states fully functional
- Fixed width or content-based width

### Tablet (768px - 1023px)
- Maintain same sizes
- Touch targets minimum 44px height
- Consider fullWidth for primary actions

### Mobile (<768px)
- Minimum touch target: 44px height
- Use `size="md"` or `size="lg"` for better touch
- Consider fullWidth layout for stacked forms
- Increase padding for better touch accuracy

### Orientation
- Portrait: Stack buttons vertically for multi-button layouts
- Landscape: Horizontal button groups acceptable

### Breakpoint Recommendations
```tsx
// Mobile-first approach
<Button 
  size="lg"           // Large for mobile
  fullWidth           // Full width on mobile
  className="md:w-auto md:size-md" // Auto width + medium on tablet+
>
  Submit
</Button>
```

---

## Code Example
```tsx
import { Button } from './components/Button';
import { Plus, ArrowRight } from 'lucide-react';

// Primary button with left icon
<Button 
  size="md" 
  variant="primary" 
  iconLeft={<Plus />}
  onClick={() => console.log('Add clicked')}
>
  Add Task
</Button>

// Secondary button
<Button 
  size="md" 
  variant="secondary"
  onClick={() => console.log('Cancel clicked')}
>
  Cancel
</Button>

// Danger button with right icon
<Button 
  size="sm" 
  variant="danger" 
  iconRight={<ArrowRight />}
  onClick={() => console.log('Delete clicked')}
>
  Delete Project
</Button>

// Disabled button
<Button 
  size="md" 
  variant="primary"
  disabled
>
  Submit
</Button>

// Full width button
<Button 
  size="lg" 
  variant="primary"
  fullWidth
>
  Continue
</Button>
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
