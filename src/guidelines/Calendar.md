# Calendar Component Guideline

## 1. Overview
The Calendar component allows users to select a single date from a month view grid. It provides navigation between months and highlights the current date and selected date.

**Usage**: Use in date pickers, scheduling interfaces, or as a standalone date selector.

## 2. Variants
The Calendar component has **1 primary variant**:

### Standard
- **View**: Monthly grid
- **Navigation**: Previous/Next month arrows
- **Selection**: Single date click
- **Styling**: White background with shadow

## 3. Sizes
### Fixed Width
- **Width**: 360px
- **Cell Size**: 32px (size-8)
- **Padding**: 16px (px-4)
- **Use Case**: Standard dropdown or inline calendar

## 4. States
### Date Cell States
#### Default (Available)
- **Background**: Transparent
- **Text**: `var(--text-secondary)` (current month) or `#828282` (adjacent months)
- **Cursor**: `pointer`

#### Hover
- **Background**: `var(--secondary)` (light grey)
- **Transition**: Smooth color change

#### Selected
- **Background**: `var(--black)`
- **Text**: `var(--white)`
- **Font Weight**: `var(--font-weight-semibold)`

#### Today
- **Border**: 1px solid `var(--text-primary)` (if not selected)
- **Font Weight**: `var(--font-weight-semibold)`

## 5. Anatomy
```
┌─────────────────────────────────┐
│ Select Dates                    │ ← Title
├─────────────────────────────────┤
│ <  January 2026               > │ ← Navigation
├─────────────────────────────────┤
│ S   M   T   W   T   F   S       │ ← Weekday Headers
├─────────────────────────────────┤
│         1   2   3   4   5       │
│ 6   7   8   [9] 10  11  12      │ ← Date Grid
│ ...                             │
└─────────────────────────────────┘
```

**Components**:
1. **Container**: White card with `var(--radius-lg)` and shadow
2. **Header**: Title "Select Dates"
3. **Navigation**: Month/Year display with Chevron buttons
4. **Grid**: 7-column layout for days

## 6. Rules
1. **Week Start**: Sunday
2. **Adjacent Days**: Show days from previous/next month to fill grid
3. **Current Date**: Highlighted with border if not selected
4. **Selection**: Clicking a date selects it and triggers `onSelect` + `onClose`
5. **Dimensions**: Fixed width (360px) to ensure consistency

## 7. Icon Placement
- **Prev/Next**: Left/Right arrows in navigation row
- **Icons**: ChevronLeft / ChevronRight from lucide-react (24px)

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus on navigation buttons and dates
- **Enter**: Select focused date
- **Arrows**: (If implemented) Move focus between dates

### Screen Readers
- Use semantic button elements for dates
- Announce month/year changes

## 9. Interaction Behaviour
### Selecting Date
1. User clicks date cell
2. `onSelect(date)` fires
3. `onClose()` fires immediately
4. Visual feedback on click

### Navigation
1. User clicks < or >
2. Month view updates
3. Selected date remains active if visible

## 10. Responsive Behaviour
### Mobile/Tablet
- Component has fixed width (360px)
- Ensure container has horizontal space or center it
- Touch targets (32px) are adequate but could be larger on mobile specific implementations

---

## Code Example
```tsx
import { Calendar } from './components/Calendar';
import { useState } from 'react';

const [date, setDate] = useState<Date | null>(new Date());

<Calendar
  selectedDate={date}
  onSelect={setDate}
  onClose={() => console.log('Closed')}
  className="shadow-lg"
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
