# Datepicker Component Guideline

## 1. Overview
The Datepicker component allows users to select a single date through an interactive calendar interface. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use datepickers for date selection in forms, scheduling, filtering, and any interface requiring precise date input.

## 2. Variants
The Datepicker component supports **2 variants**:

### Basic
- **Content**: Input field only
- **Layout**: Single input element
- **Use Case**: Inline date inputs, forms without labels

### With Label
- **Content**: Label + Input field
- **Layout**: Stacked (Label above input)
- **Use Case**: Standard forms, accessible inputs

## 3. Sizes
The Datepicker component supports **2 sizes**:

### Small (sm)
- **Input Height**: `var(--size-sm)` (32px)
- **Input Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-label)` (14px)
- **Label Font Size**: `var(--text-label)` (14px)
- **Label Margin**: `var(--spacing-4)` (4px)
- **Use Case**: Compact forms, dense layouts

### Medium (md)
- **Input Height**: `var(--size-md)` (40px)
- **Input Padding**: `var(--spacing-12) var(--spacing-16)` (12px 16px)
- **Font Size**: `var(--text-base)` (16px)
- **Label Font Size**: `var(--text-base)` (16px)
- **Label Margin**: `var(--spacing-8)` (8px)
- **Use Case**: Standard forms, better readability

## 4. States

### Default (Closed)
- Input: Empty with placeholder
- Border: `1px solid var(--border)`
- Background: `var(--input-background)`
- Cursor: `pointer`

### Filled
- Input: Shows selected date (M/D/YYYY format)
- Text Color: `var(--text-primary)`
- Border: `1px solid var(--border)`

### Focus (Calendar Open)
- Modal overlay appears
- Calendar displays at bottom of screen
- Input remains visible but non-interactive

### Disabled
- Background: `var(--grey-03)`
- Border: `1px solid var(--grey-04)`
- Text: `var(--grey-04)`
- Cursor: `not-allowed`
- No calendar interaction

### Error
- Border: `1px solid var(--alert-red)`
- Label: `var(--alert-red)` (if with-label variant)
- Calendar still functional

## 5. Anatomy

### Input Element
```
┌─────────────────────────────┐
│ Label (optional)            │
├─────────────────────────────┤
│ MM/DD/YYYY or placeholder   │
└─────────────────────────────┘
```

### Calendar Modal
```
┌─────────────────────────────┐
│ Cancel    Select Date       │ ← Header
├─────────────────────────────┤
│   ←  January 2026  →        │ ← Month Nav
├─────────────────────────────┤
│ S  M  T  W  T  F  S         │ ← Day Headers
│ 1  2  3  4  5  6  7         │
│ 8  9  10 11 12 13 14        │ ← Calendar Grid
│ ...                         │
├─────────────────────────────┤
│ [Confirm]  [Clear]          │ ← Actions
└─────────────────────────────┘
```

**Components**:
1. **Input Field**: Clickable button-styled input
2. **Label**: Optional field label (with-label variant)
3. **Modal Overlay**: Dark semi-transparent background
4. **Calendar Container**: White card with rounded top corners
5. **Header**: Title and cancel button
6. **Month Navigation**: Previous/Next buttons with month/year display
7. **Day Headers**: S M T W T F S
8. **Calendar Grid**: 7x6 grid of date buttons
9. **Action Buttons**: Confirm and Clear buttons

## 6. Rules
1. **Date Format**: Display as M/D/YYYY (e.g., 1/15/2026)
2. **Modal Position**: Bottom sheet on mobile, anchored to bottom
3. **Grid Layout**: Always 7 columns (days of week) × 6 rows
4. **Previous/Next Month Days**: Shown in grey, clickable
5. **Today Indicator**: Circle border around current date
6. **Selected State**: Dark background (`var(--grey-06)`), white text
7. **Hover State**: Light grey background on unselected dates
8. **Month Navigation**: Arrows decrement/increment month
9. **Year Rollover**: December → January increments year, vice versa
10. **Confirm Required**: User must click "Confirm" to apply selection
11. **Clear Action**: Resets selection to null
12. **Cancel Action**: Closes modal without applying changes

## 7. Icon Placement

### Navigation Icons
- **Left Arrow** (`ChevronLeft`): Previous month button
- **Right Arrow** (`ChevronRight`): Next month button
- **Size**: 20px
- **Color**: `var(--text-primary)`
- **Position**: Top of calendar, flanking month/year display

### Calendar Icon (Optional)
- Not currently implemented in base component
- Can be added to input field as trailing icon
- Typically 16-20px, right-aligned in input

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate to datepicker input
- **Enter/Space**: Open calendar modal
- **Arrow Keys**: Navigate between dates in calendar
  - **Left**: Previous day
  - **Right**: Next day
  - **Up**: Previous week (same day)
  - **Down**: Next week (same day)
- **Page Up**: Previous month
- **Page Down**: Next month
- **Home**: First day of month
- **End**: Last day of month
- **Escape**: Close calendar without applying

### Screen Readers
- Use `role="button"` for input field
- Label association via `htmlFor` and `id`
- Calendar grid: `role="grid"`
- Date cells: `role="gridcell"`
- Month navigation: `aria-label="Previous month"`, `aria-label="Next month"`
- Selected date: `aria-selected="true"`
- Current date: `aria-current="date"`

### Focus Management
- Opening calendar: Focus moves to selected date or current date
- Closing calendar: Focus returns to input field
- Confirming: Focus returns to input
- Clearing: Focus returns to input

### ARIA Example
```tsx
<div>
  <label htmlFor="start-date">Start Date</label>
  <button
    id="start-date"
    role="button"
    aria-haspopup="dialog"
    aria-expanded={isOpen}
    aria-label="Choose start date"
  >
    {selectedDate ? formatDate(selectedDate) : 'Select date'}
  </button>
</div>

{isOpen && (
  <div role="dialog" aria-label="Choose date">
    <div role="grid" aria-label="January 2026">
      {/* Calendar grid */}
    </div>
  </div>
)}
```

### Color Contrast
- **Input Text**: Dark on light (WCAG AAA)
- **Selected Date**: White on dark grey (WCAG AAA)
- **Calendar Text**: Dark on white (WCAG AAA)
- **Today Border**: Grey border visible (WCAG AA)

## 9. Interaction Behaviour

### Opening Calendar
1. User clicks input field
2. Modal overlay fades in
3. Calendar slides up from bottom
4. Calendar shows current month (or month of selected date)
5. If date selected: Highlight that date
6. If no date: No highlight, today has border

### Selecting Date
1. User clicks a date in calendar grid
2. Previous selection clears
3. New date receives dark background + white text
4. Selection stored in component state (not applied yet)

### Month Navigation
1. User clicks left/right arrow
2. Calendar grid fades/slides to previous/next month
3. Year updates if crossing year boundary
4. Selection persists during navigation

### Confirming Selection
1. User clicks "Confirm" button
2. `onChange` callback fired with selected date
3. Modal closes (slide down + fade out)
4. Input field updates with formatted date
5. Focus returns to input

### Clearing Selection
1. User clicks "Clear" button
2. `onChange` callback fired with null
3. Modal closes
4. Input field shows placeholder
5. Focus returns to input

### Canceling
1. User clicks "Cancel" or overlay or presses Escape
2. Modal closes
3. No `onChange` callback
4. Previous value retained
5. Focus returns to input

### Hover Effects
- **Input**: Subtle background change (optional)
- **Calendar Dates**: Light grey background (`var(--grey-02)`)
- **Navigation Arrows**: Light background on hover
- **Action Buttons**: Button component hover states

## 10. Responsive Behaviour

### Desktop (≥1024px)
- Modal can be positioned relative to input (dropdown style)
- Or maintain bottom sheet for consistency
- Prefer `size="md"` for better visibility
- Calendar max-width: 375px

### Tablet (768px - 1023px)
- Bottom sheet modal
- Full width up to 375px
- Size: md recommended
- Touch-friendly date cells (minimum 44px)

### Mobile (<768px)
- Bottom sheet modal (slides from bottom)
- Full width (with padding)
- Size: md (16px font prevents iOS zoom)
- Large touch targets on calendar dates
- Rounded top corners only (`var(--radius-24)`)
- Action buttons full width, stacked or side-by-side

### Touch Target Enhancement
```css
/* Ensure calendar date cells are touch-friendly */
.calendar-date {
  min-width: 44px;
  min-height: 44px;
}
```

### Modal Positioning
```css
/* Desktop: Dropdown from input */
@media (min-width: 1024px) {
  .datepicker-modal {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    border-radius: var(--radius-12);
  }
}

/* Mobile: Bottom sheet */
@media (max-width: 767px) {
  .datepicker-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: var(--radius-24) var(--radius-24) 0 0;
  }
}
```

---

## Code Example
```tsx
import { useState } from 'react';
import { Datepicker } from './components/Datepicker';

function EventForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div>
      {/* Basic variant */}
      <Datepicker
        variant="basic"
        size="md"
        placeholder="Select start date"
        value={startDate}
        onChange={setStartDate}
      />

      {/* With label */}
      <Datepicker
        variant="with-label"
        size="md"
        label="End Date"
        placeholder="Select end date"
        value={endDate}
        onChange={setEndDate}
      />

      {/* Small size */}
      <Datepicker
        variant="with-label"
        size="sm"
        label="Birthday"
        placeholder="MM/DD/YYYY"
        value={null}
        onChange={(date) => console.log(date)}
      />

      {/* Disabled */}
      <Datepicker
        variant="with-label"
        size="md"
        label="Locked Date"
        value={new Date()}
        disabled
      />

      {/* Error state */}
      <Datepicker
        variant="with-label"
        size="md"
        label="Due Date"
        placeholder="Select date"
        error
      />
    </div>
  );
}
```

---

## Advanced Usage

### Date Validation
```tsx
const [date, setDate] = useState<Date | null>(null);
const [error, setError] = useState(false);

const handleDateChange = (newDate: Date | null) => {
  setDate(newDate);
  
  // Validate: Must be future date
  if (newDate && newDate < new Date()) {
    setError(true);
  } else {
    setError(false);
  }
};

<Datepicker
  value={date}
  onChange={handleDateChange}
  error={error}
  label="Future Date Only"
/>
```

### Date Range (Using Two Datepickers)
```tsx
const [start, setStart] = useState<Date | null>(null);
const [end, setEnd] = useState<Date | null>(null);

const handleStartChange = (date: Date | null) => {
  setStart(date);
  if (end && date && date > end) {
    setEnd(null); // Clear end if before start
  }
};

<Datepicker value={start} onChange={handleStartChange} label="Start" />
<Datepicker value={end} onChange={setEnd} label="End" />
```

### Custom Date Format
```tsx
const formatCustom = (date: Date | null) => {
  if (!date) return '';
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  // e.g., "January 15, 2026"
};
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
