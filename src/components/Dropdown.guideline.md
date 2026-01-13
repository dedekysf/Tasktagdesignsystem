# Dropdown (Select) Component Guidelines

## 1. Overview
The Dropdown component allows users to select one option from a list of choices. It saves space by hiding options until activated and provides a clear, organized way to present multiple options without cluttering the interface. Also known as Select, this component is essential for forms and filters.

## 2. Variants

### Standard Dropdown
- **Purpose**: Default single-selection dropdown
- **Visual**: Button-like trigger with chevron, dropdown menu
- **Usage**: Forms, settings, filters
- **CSS Variables**:
  - Background: `var(--white)`
  - Border: `var(--border)`
  - Text: `var(--text-primary)`

### Multi-Select Dropdown
- **Purpose**: Select multiple options
- **Visual**: Checkboxes next to options, chips showing selected
- **Usage**: Tags, categories, multiple filters
- **Features**: Select all, clear all, search

### Searchable Dropdown
- **Purpose**: Filter long lists of options
- **Visual**: Search input at top of dropdown
- **Usage**: Country selector, large datasets
- **Features**: Real-time filtering, keyboard navigation

### Grouped Dropdown
- **Purpose**: Organize related options
- **Visual**: Section headers with grouped options
- **Usage**: Categorized selections (e.g., US States by region)
- **Features**: Collapsible groups (optional)

### With Icons
- **Purpose**: Visual reinforcement of options
- **Visual**: Icon next to each option label
- **Usage**: Priority levels, status, file types
- **Features**: Color-coded icons, better scannability

## 3. Sizes

### Small (sm)
- **Height**: `var(--size-sm)` (32px)
- **Padding**: `8px 12px`
- **Font Size**: `var(--text-caption)` (12px)
- **Icon Size**: `16px`
- **Use Case**: Compact forms, tables, inline selectors

### Medium (md) - Default
- **Height**: `var(--size-md)` (40px)
- **Padding**: `12px 16px`
- **Font Size**: `var(--text-body)` (14px)
- **Icon Size**: `20px`
- **Use Case**: Standard forms, most scenarios

### Large (lg)
- **Height**: `var(--size-lg)` (48px)
- **Padding**: `16px 20px`
- **Font Size**: `var(--text-body)` (14px)
- **Icon Size**: `20px`
- **Use Case**: Prominent selectors, mobile interfaces

## 4. States

### Default (Closed)
- **Visual**: Trigger button showing selected value or placeholder
- **Border**: `1px solid var(--border)`
- **Background**: `var(--white)`
- **Icon**: Chevron down
- **Cursor**: `pointer`

### Hover (Closed)
- **Border**: `1px solid var(--grey-04)`
- **Background**: `var(--white)` or slight tint
- **Cursor**: `pointer`
- **Transition**: `all 0.2s ease`

### Open (Active)
- **Visual**: Dropdown menu visible below trigger
- **Border**: `2px solid var(--primary)`
- **Icon**: Chevron up (rotated)
- **Menu**: Shadow, border, positioned below or above
- **Overlay**: Optional transparent backdrop

### Focus
- **Border**: `2px solid var(--primary)`
- **Outline**: `none` (border provides indicator)
- **Keyboard**: Visible focus state
- **Behavior**: Can open with Enter/Space

### Disabled
- **Opacity**: `0.4`
- **Cursor**: `not-allowed`
- **Background**: `var(--grey-01)`
- **Interactive**: Non-clickable
- **Color**: `var(--text-secondary)`

### Error
- **Border**: `2px solid var(--alert-red)`
- **Helper Text**: Error message below in red
- **Icon**: Error icon (optional)
- **Usage**: Form validation failures

### Option Hover
- **Background**: `var(--grey-01)`
- **Cursor**: `pointer`
- **Transition**: `background 0.15s ease`

### Option Selected
- **Background**: `var(--primary-light)` (10-20% opacity)
- **Icon**: Checkmark (optional)
- **Font Weight**: `var(--font-weight-medium)`
- **Color**: `var(--primary)` (optional)

### Option Disabled
- **Opacity**: `0.4`
- **Cursor**: `not-allowed`
- **Background**: None
- **Interaction**: Non-clickable, skipped in keyboard nav

## 5. Anatomy

```
┌─────────────────────────────────────┐
│ Label (optional)               Req* │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ [Icon] Selected Option         [v]  │ ← Trigger
└─────────────────────────────────────┘
        ↓ (when open)
┌─────────────────────────────────────┐
│ [Search input] (optional)       [x] │ ← Dropdown menu
├─────────────────────────────────────┤
│ □ Option 1                          │
│ ☑ Option 2 (selected)               │
│ □ Option 3                          │
│ ─────── Group Header ─────          │
│ □ Option 4                          │
│ □ Option 5 (disabled)               │
└─────────────────────────────────────┘
  Helper text or error message

Components:
1. Label (optional, above trigger)
2. Trigger button (selected value display)
3. Leading icon (optional, in trigger)
4. Selected value text
5. Chevron icon (trailing)
6. Dropdown menu (positioned below/above)
7. Search input (optional, in menu)
8. Option items
9. Option icons (optional)
10. Checkmarks (multi-select)
11. Group headers (grouped variant)
12. Helper text (below trigger)
```

### Element Spacing:
- **Label to trigger**: `8px`
- **Trigger padding**: `8px-20px` (based on size)
- **Icon to text**: `8px` gap
- **Menu padding**: `4px` vertical
- **Option padding**: `8px 12px`
- **Between options**: `2px` gap (optional)
- **Group header padding**: `12px 16px`

## 6. Rules

### Label Guidelines
1. **Always provide labels** for accessibility
2. Use **sentence case** (e.g., "Select country")
3. Position **above** trigger, left-aligned
4. Mark required fields with **asterisk (*)**

### Placeholder Text
1. Use descriptive placeholders (e.g., "Select an option")
2. Different color from selected value (`var(--text-tertiary)`)
3. Not a replacement for labels
4. Disappears when option selected

### Option Order
1. **Alphabetical**: Default for most lists
2. **Frequency**: Most commonly used first
3. **Logical grouping**: Related items together
4. **Disabled last**: Move disabled options to end (optional)

### Selected Value Display
- Show full text of selected option
- Truncate with ellipsis if too long
- Clear indication of selection
- Different styling from placeholder

### Menu Positioning
1. **Default**: Below trigger (dropdown)
2. **Auto**: Flip to above if insufficient space below
3. **Alignment**: Left-aligned with trigger (default)
4. **Width**: Match trigger width or auto (based on content)
5. **Max height**: 300px with scroll

### Validation
- Validate on blur or form submit
- Show error state with message
- Clear error when user selects valid option
- Required fields clearly marked

## 7. Icon Placement

### Chevron Icon (Trigger)
- **Position**: Trailing edge (right side)
- **Size**: `16px` (sm), `20px` (md/lg)
- **Color**: `var(--text-secondary)`
- **Rotation**: 180° when menu open
- **Transition**: Smooth rotation (200ms)

### Leading Icons (Trigger)
- **Position**: Left side, before selected text
- **Size**: `20px`
- **Color**: `var(--text-secondary)` or custom
- **Usage**: Flag icons, status icons, category icons
- **Gap**: `8px` from text

### Option Icons
- **Position**: Left of option text
- **Size**: `16px` (sm), `20px` (md/lg)
- **Color**: Context-dependent (priority colors, status colors)
- **Gap**: `8px` from text
- **Examples**:
  - Flag icons for countries
  - Color dots for priorities
  - Status icons for states

### Selected Checkmark
- **Position**: Right edge of selected option
- **Size**: `16px`
- **Color**: `var(--primary)`
- **Icon**: Check or checkmark icon
- **Visibility**: Only on selected option(s)

### Multi-Select Checkboxes
- **Position**: Left of option text
- **Size**: `16px` (sm), `20px` (md)
- **Style**: Standard checkbox
- **State**: Checked/unchecked based on selection

### Search Icon (Searchable)
- **Position**: Left inside search input
- **Size**: `16px`
- **Color**: `var(--text-secondary)`

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Focus moves to dropdown trigger
- **Enter/Space**: Open dropdown menu
- **Arrow Down**: Open menu and move to first option (or next if open)
- **Arrow Up**: Move to previous option (or last if at first)
- **Home**: Jump to first option
- **End**: Jump to last option
- **Type to search**: Jump to option starting with typed character
- **Esc**: Close menu, return focus to trigger
- **Enter**: Select focused option and close menu

### ARIA Attributes
```tsx
// Trigger button
<button
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
  aria-controls="dropdown-menu"
  aria-labelledby="dropdown-label"
  aria-activedescendant={focusedOptionId}
>
  {selectedValue || placeholder}
  <ChevronDown />
</button>

// Dropdown menu
<ul
  id="dropdown-menu"
  role="listbox"
  aria-labelledby="dropdown-label"
  tabIndex={-1}
>
  <li
    role="option"
    aria-selected={isSelected}
    aria-disabled={isDisabled}
    id="option-1"
  >
    Option 1
  </li>
</ul>

// Label
<label id="dropdown-label" htmlFor="dropdown">
  Select Country
</label>
```

### Screen Reader Support
- Label announced first
- Selected value or placeholder announced
- State announced (collapsed/expanded)
- Option count announced (e.g., "5 options")
- Selected option announced when navigating
- Group headers announced
- Disabled state announced

### Focus Management
- Clear visible focus indicator
- Focus trapped in menu when open
- Focus returns to trigger on close
- Logical focus order

### Touch Targets
- Minimum 44×44px hit area (WCAG)
- Entire trigger button clickable
- Options have sufficient height
- Clear spacing between options

## 9. Interaction Behaviour

### Opening Menu
1. **Click trigger**: Menu appears below
2. **Keyboard (Enter/Space)**: Opens menu
3. **Arrow down**: Opens menu and focuses first option
4. **Animation**: Fade in + slide down (150ms)

### Closing Menu
1. **Select option**: Menu closes, value updated
2. **Click outside**: Menu closes (clickaway)
3. **Escape key**: Menu closes
4. **Tab**: Closes menu, focus moves to next element
5. **Animation**: Fade out (100ms)

### Option Selection
```tsx
const handleSelect = (option) => {
  setSelectedValue(option);
  setIsOpen(false); // Close menu
  // Trigger onChange callback
  onChange?.(option);
};
```

### Search/Filter (Searchable Variant)
```tsx
const filteredOptions = options.filter(option =>
  option.label.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### Multi-Select Behavior
```tsx
const handleMultiSelect = (option) => {
  if (selectedValues.includes(option)) {
    // Deselect
    setSelectedValues(prev => prev.filter(v => v !== option));
  } else {
    // Select
    setSelectedValues(prev => [...prev, option]);
  }
  // Keep menu open for more selections
};
```

### Type-to-Search
```tsx
// Jump to option starting with typed character
let searchString = '';
let searchTimeout;

const handleKeyPress = (key) => {
  clearTimeout(searchTimeout);
  searchString += key;
  
  const matchingOption = options.find(opt =>
    opt.label.toLowerCase().startsWith(searchString.toLowerCase())
  );
  
  if (matchingOption) {
    focusOption(matchingOption);
  }
  
  searchTimeout = setTimeout(() => {
    searchString = '';
  }, 1000);
};
```

### Clear Selection
```tsx
// Optional clear button (×)
const handleClear = (e) => {
  e.stopPropagation(); // Prevent menu opening
  setSelectedValue(null);
  onChange?.(null);
};
```

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Width**: Fixed or flexible (typically 200-400px)
- **Menu**: Dropdown below trigger
- **Positioning**: Absolute positioning
- **Scroll**: Menu scrolls if exceeds max height
- **Hover**: Show hover states

### Tablet (768px - 1023px)
- **Width**: Flexible, adapt to container
- **Menu**: Standard dropdown
- **Touch targets**: Minimum 44px height
- **Behavior**: Similar to desktop

### Mobile (≤767px)
- **Width**: Full width of container
- **Menu**: Full-width or native selector
- **Alternative**: Bottom sheet or full-screen modal
- **Touch targets**: 48px minimum height
- **Native**: Consider using native `<select>` for better UX

### Breakpoint Adaptations
```tsx
// Responsive dropdown
<Dropdown
  width="full" // Full width on mobile
  className="w-full md:w-80"
  mobileMode="bottomSheet" // Use bottom sheet on mobile
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Mobile-Specific Patterns

#### Native Select (Mobile)
```tsx
// Use native select on mobile for better UX
{isMobile ? (
  <select
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="w-full h-12 px-4 border rounded"
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
) : (
  <Dropdown
    options={options}
    value={value}
    onChange={setValue}
  />
)}
```

#### Bottom Sheet Modal
```tsx
// Custom dropdown as bottom sheet on mobile
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger>
    <Button>{selectedValue || 'Select option'}</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <div className="p-4">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => handleSelect(opt)}
          className="w-full py-3 text-left hover:bg-grey-01"
        >
          {opt.label}
        </button>
      ))}
    </div>
  </SheetContent>
</Sheet>
```

### Menu Positioning (Responsive)
```tsx
// Auto-adjust position based on viewport
const calculatePosition = () => {
  const spaceBelow = window.innerHeight - triggerRect.bottom;
  const spaceAbove = triggerRect.top;
  
  if (spaceBelow < menuHeight && spaceAbove > spaceBelow) {
    return 'top'; // Show above trigger
  }
  return 'bottom'; // Show below trigger
};
```

### Virtual Scrolling (Long Lists)
```tsx
// For very long lists (1000+ items), use virtual scrolling
import { useVirtualizer } from '@tanstack/react-virtual';

const virtualizer = useVirtualizer({
  count: options.length,
  getScrollElement: () => menuRef.current,
  estimateSize: () => 40, // Option height
});
```

---

## Quick Reference

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Height | 32px | 40px | 48px |
| Padding | 8px 12px | 12px 16px | 16px 20px |
| Font Size | 12px | 14px | 14px |
| Icon Size | 16px | 20px | 20px |
| Option Height | 32px | 40px | 44px |
| Menu Max Height | 256px | 300px | 320px |

## CSS Variables Used
- `var(--white)` - Trigger and menu background
- `var(--border)` - Border color
- `var(--text-primary)` - Selected text, option text
- `var(--text-secondary)` - Icons, helper text
- `var(--text-tertiary)` - Placeholder text
- `var(--grey-01)` - Hover background, disabled background
- `var(--grey-04)` - Hover border
- `var(--primary)` - Focus border, selected highlight
- `var(--primary-light)` - Selected option background
- `var(--alert-red)` - Error state
- `var(--size-sm/md/lg)` - Trigger heights
- `var(--radius-lg)` - Border radius
- `var(--shadow-md)` - Menu shadow

## Common Patterns

### Basic Dropdown
```tsx
<Dropdown
  label="Country"
  placeholder="Select a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  required
/>
```

### With Search
```tsx
<Dropdown
  label="Select user"
  searchable
  searchPlaceholder="Search users..."
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
/>
```

### Multi-Select
```tsx
<Dropdown
  label="Select tags"
  multiple
  options={tags}
  value={selectedTags}
  onChange={setSelectedTags}
  placeholder="Select one or more tags"
/>
```

### Grouped Options
```tsx
<Dropdown
  label="State"
  options={[
    {
      group: 'West Coast',
      options: [
        { value: 'ca', label: 'California' },
        { value: 'or', label: 'Oregon' }
      ]
    },
    {
      group: 'East Coast',
      options: [
        { value: 'ny', label: 'New York' },
        { value: 'ma', label: 'Massachusetts' }
      ]
    }
  ]}
  value={selectedState}
  onChange={setSelectedState}
/>
```

### With Icons
```tsx
<Dropdown
  label="Priority"
  options={[
    { value: 'high', label: 'High', icon: <AlertCircle className="text-red" /> },
    { value: 'medium', label: 'Medium', icon: <Circle className="text-yellow" /> },
    { value: 'low', label: 'Low', icon: <Circle className="text-green" /> }
  ]}
  value={priority}
  onChange={setPriority}
/>
```
