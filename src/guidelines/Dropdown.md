# Dropdown Component Guideline

## 1. Overview
The Dropdown component is a form control that allows users to select a single option from a collapsible list. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use dropdowns for selecting from predefined options such as categories, statuses, roles, or any single-choice selection with 3+ options.

## 2. Variants
The Dropdown component supports **2 variants**:

### Default
- **Purpose**: Standard dropdown with visible border
- **Background**: `var(--input-background)` (white)
- **Border**: `1px solid var(--border)`
- **Use Case**: Forms, data entry, most selection scenarios

### Borderless
- **Purpose**: Clean dropdown without visible border
- **Background**: `var(--input-background)` (white)
- **Border**: None
- **Use Case**: Inline selections, minimal UI, integrated designs

## 3. Sizes
The Dropdown component supports **2 sizes**:

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `var(--spacing-4) var(--spacing-8)` (4px 8px)
- **Font Size**: `var(--text-label)` (14px)
- **Icon Size**: 18px
- **Border Radius**: `var(--radius-8)` (8px)
- **Option Height**: 32px

### Medium (md)
- **Height**: `var(--size-md)` (40px)
- **Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-base)` (16px)
- **Icon Size**: 20px
- **Border Radius**: `var(--radius-8)` (8px)
- **Option Height**: 40px

## 4. States
Each dropdown responds to the following states:

### Closed (Default)
- **Background**: `var(--input-background)`
- **Border**: `1px solid var(--border)` (default variant)
- **Chevron**: Pointing down
- **Menu**: Hidden

### Hover (Closed)
- **Background**: `var(--grey-02)`
- **Border**: `1px solid var(--border)` (unchanged)
- **Cursor**: `pointer`

### Open
- **Background**: `var(--grey-02)`
- **Border**: `1px solid var(--border)` (unchanged)
- **Chevron**: Rotated 180° (pointing up)
- **Menu**: Visible with elevation

### Disabled
- **Background**: `var(--grey-03)`
- **Border**: `1px solid var(--grey-04)`
- **Text**: `var(--grey-04)`
- **Cursor**: `not-allowed`
- **Menu**: Cannot be opened

### Error
- **Background**: `var(--input-background)`
- **Border**: `1px solid var(--alert-red)`
- **Label**: `var(--alert-red)`
- **Error Message**: Displayed below dropdown

### Option Hover
- **Background**: `var(--grey-02)`
- **Text**: `var(--text-primary)`

### Option Selected
- **Background**: `var(--grey-02)`
- **Text**: `var(--text-secondary)`
- **Indicator**: Checkmark or highlighted state

## 5. Anatomy
```
┌─────────────────────────────────┐
│ Label *                         │  ← Optional label with required indicator
├─────────────────────────────────┤
│ Selected Option          ▼      │  ← Trigger (closed)
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Selected Option          ▲      │  ← Trigger (open)
├─────────────────────────────────┤
│┌───────────────────────────────┐│
││ Option 1                      ││  ← Menu item
││ Option 2 (hover)              ││  ← Menu item (hovered)
││ ✓ Option 3                    ││  ← Menu item (selected)
││ Option 4                      ││  ← Menu item
│└───────────────────────────────┘│
├─────────────────────────────────┤
│ Error message text              │  ← Optional error message
└─────────────────────────────────┘
```

**Components**:
1. **Label (Optional)**: Field label with optional required asterisk
2. **Trigger Button**: Displays selected value and chevron icon
3. **Chevron Icon**: Down arrow that rotates when open
4. **Dropdown Menu**: Container for options (appears on click)
5. **Menu Items**: Individual selectable options
6. **Error Message (Optional)**: Validation error text

## 6. Rules
1. **Border Radius**: Always `var(--radius-8)` (8px) for trigger and menu
2. **Elevation**: Menu uses `var(--elevation-md)` for depth
3. **Menu Position**: Appears below trigger with `var(--spacing-4)` gap
4. **Menu Width**: Matches trigger width by default
5. **Scrolling**: Menu scrolls if more than 10 options (max-height = 10 × option height)
6. **Selected State**: Selected option has grey background in menu
7. **Placeholder**: Use grey color (`var(--grey-05)`) for unselected state
8. **Close on Select**: Menu automatically closes after option selection
9. **Close on Outside Click**: Menu closes when clicking outside
10. **Z-Index**: Menu has `z-index: 1000` to appear above other content

## 7. Icon Placement
### Chevron Icon (Required)
- **Position**: Right side of trigger button
- **Size**: 
  - Small (sm): 18px × 18px
  - Medium (md): 20px × 20px
- **Color**: `var(--text-primary)`
- **Rotation**: 
  - Closed: 0° (pointing down)
  - Open: 180° (pointing up)
- **Transition**: Smooth rotation (0.2s ease)

**Icon Implementation**:
```tsx
<ChevronDown 
  size={currentSize.iconSize} 
  style={{
    color: 'var(--text-primary)',
    transition: 'transform 0.2s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  }}
/>
```

### Optional Left Icon
Some dropdown implementations may include a left icon to indicate the type of selection:
```tsx
// Example with left icon
<div className="flex items-center gap-2">
  <User size={18} />  {/* Left icon */}
  <span>Select User</span>
</div>
```

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate to dropdown
- **Enter/Space**: Open dropdown menu
- **Arrow Down**: Navigate to next option
- **Arrow Up**: Navigate to previous option
- **Home**: Jump to first option
- **End**: Jump to last option
- **Enter**: Select focused option and close menu
- **Escape**: Close menu without selecting
- **Type**: Jump to option starting with typed character

### Screen Readers
- Use semantic button for trigger (`<button role="combobox">`)
- Associate label with dropdown using `htmlFor`/`id`
- Announce expanded/collapsed state with `aria-expanded`
- Announce selected value with `aria-selected`
- Use `aria-activedescendant` for focused option
- Include `aria-label` or `aria-labelledby` for context
- Mark required fields with `aria-required="true"`
- Invalid dropdowns should have `aria-invalid="true"`

### ARIA Attributes
```tsx
<button
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
  aria-labelledby="dropdown-label"
  aria-controls="dropdown-menu"
>
  Selected Option
</button>

<ul
  id="dropdown-menu"
  role="listbox"
  aria-labelledby="dropdown-label"
>
  <li role="option" aria-selected={isSelected}>
    Option 1
  </li>
</ul>
```

### Focus Management
- Clear visible focus indicator on trigger
- Highlight focused option in menu
- Return focus to trigger when menu closes
- Maintain logical tab order

### Color Contrast
- **Text**: Minimum 4.5:1 contrast ratio
- **Border**: Minimum 3:1 contrast ratio (default variant)
- **Selected option**: Clear visual distinction
- **Error state**: Red border and message clearly visible

## 9. Interaction Behaviour
### Opening the Dropdown
1. User clicks trigger button or presses Enter/Space
2. Trigger background changes to `var(--grey-02)`
3. Chevron icon rotates 180° (pointing up)
4. Dropdown menu appears below trigger with animation
5. First option receives focus highlight
6. Menu has elevation shadow (`var(--elevation-md)`)

### Selecting an Option
1. User hovers over option (desktop) or taps (mobile)
2. Option background changes to `var(--grey-02)`
3. User clicks/taps option
4. Option is selected
5. Menu closes with animation
6. Trigger displays selected option text
7. `onChange` callback is triggered with selected value
8. Focus returns to trigger

### Closing the Dropdown
**Method 1**: Select an option (see above)

**Method 2**: Click outside
1. User clicks anywhere outside dropdown
2. Menu closes
3. Trigger returns to default state
4. Chevron rotates back to down position

**Method 3**: Press Escape
1. User presses Escape key
2. Menu closes
3. Focus remains on trigger

### Keyboard Navigation in Menu
1. Dropdown is open
2. User presses Arrow Down
3. Focus moves to next option
4. Option background highlights
5. User continues navigating with arrows
6. User presses Enter to select focused option

### Scrolling Behavior
- If options > 10: Menu scrolls
- Focused option scrolls into view automatically
- Smooth scroll animation

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Standard sizes (sm, md)
- Hover states active
- Menu appears below trigger
- Maximum 10 visible options before scrolling

### Tablet (768px - 1023px)
- Maintain same sizes
- Touch-friendly targets (min 40px height)
- Consider `size="md"` as default
- Menu may adjust position to stay in viewport

### Mobile (<768px)
- **Minimum size**: Use `size="md"` (40px height)
- **Touch targets**: Minimum 44px for menu options
- **Full width**: Dropdowns often use full width
- **Menu position**: May appear above trigger if near bottom
- **Alternative UI**: Consider native `<select>` for better mobile UX
- **Bottom Sheet**: For many options, consider bottom sheet pattern

### Native Select Alternative
```tsx
// For mobile, consider using native select
{isMobile ? (
  <select className="native-dropdown">
    {options.map(opt => (
      <option value={opt.value}>{opt.label}</option>
    ))}
  </select>
) : (
  <Dropdown options={options} />
)}
```

### Menu Positioning
```tsx
// Intelligent positioning to stay in viewport
const menuPosition = {
  top: triggerBottom + 4,  // Below trigger
  left: triggerLeft,
  width: triggerWidth
};

// If too close to bottom, show above
if (menuHeight + triggerBottom > viewportHeight) {
  menuPosition.top = triggerTop - menuHeight - 4;
}
```

---

## Code Example
```tsx
import { Dropdown } from './components/Dropdown';

// Basic dropdown with label
<Dropdown 
  size="md"
  variant="default"
  label="Select Country"
  placeholder="Choose a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' }
  ]}
  value={selectedCountry}
  onChange={(value) => setSelectedCountry(value)}
  required
/>

// Small borderless dropdown
<Dropdown 
  size="sm"
  variant="borderless"
  placeholder="Select role"
  options={[
    { value: 'admin', label: 'Admin' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' }
  ]}
  value={role}
  onChange={(value) => setRole(value)}
/>

// Dropdown with error
<Dropdown 
  size="md"
  variant="default"
  label="Priority"
  placeholder="Select priority"
  options={priorityOptions}
  value={priority}
  onChange={(value) => setPriority(value)}
  errorMessage="Please select a priority level"
  required
/>

// Disabled dropdown
<Dropdown 
  size="md"
  variant="default"
  label="Status"
  options={statusOptions}
  value="completed"
  disabled
/>

// Large option list (will scroll)
<Dropdown 
  size="md"
  variant="default"
  label="Select City"
  placeholder="Choose a city"
  options={cities} // 50+ options
  value={selectedCity}
  onChange={(value) => setSelectedCity(value)}
/>
```

---

## Best Practices
1. **3+ options**: Use dropdown for 3 or more options (use radio buttons for 2-3)
2. **Predictable order**: Sort options alphabetically or by frequency of use
3. **Clear labels**: Make option labels descriptive and concise
4. **Default selection**: Consider having a sensible default selected
5. **Required fields**: Mark required dropdowns with asterisk
6. **Error handling**: Provide clear, actionable error messages
7. **Loading states**: Show loading indicator when fetching options
8. **Empty state**: Handle case when no options are available
9. **Search/Filter**: For 20+ options, consider adding search functionality
10. **Mobile UX**: Consider native `<select>` for better mobile experience

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
