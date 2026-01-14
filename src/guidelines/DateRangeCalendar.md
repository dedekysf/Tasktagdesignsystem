# DateRangeCalendar Component Guideline

## 1. Overview
The DateRangeCalendar component allows users to select a range of dates (start date and end date) from a calendar interface. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use date range calendars for selecting periods such as vacation dates, project timelines, report date ranges, booking periods, or any scenario requiring a start and end date.

## 2. Variants
The DateRangeCalendar component supports **1 primary variant** with different display modes:

### Standard Calendar
- **Month View**: Displays one month at a time
- **Navigation**: Previous/Next month arrows
- **Range Selection**: Click start date, then end date
- **Visual**: Highlighted range between selected dates

### Inline vs Popup Modes
While the calendar itself has one variant, it can be displayed in different modes:

#### Inline
- Calendar always visible on page
- No trigger button needed
- Takes up permanent space
- Use Case: Dedicated booking/scheduling pages

#### Popup (Datepicker)
- Calendar appears in dropdown/modal
- Triggered by input field or button
- Saves space when not in use
- Use Case: Forms, filters, most applications

## 3. Sizes
The DateRangeCalendar component supports **1 standard size**:

### Standard
- **Calendar Width**: 280px
- **Cell Size**: 40px × 40px
- **Header Height**: 48px
- **Font Size (Days)**: `var(--text-label)` (14px)
- **Font Size (Header)**: `var(--text-base)` (16px)
- **Padding**: `var(--spacing-16)` (16px)
- **Border Radius**: `var(--radius-12)` (12px)
- **Gap Between Cells**: 0px (cells touch)

**Note**: While only one size is defined, the calendar can scale for different devices using responsive design principles.

## 4. States
The calendar and its date cells respond to the following states:

### Date Cell States

#### Default (Available Date)
- **Background**: Transparent
- **Text Color**: `var(--text-primary)`
- **Border**: None
- **Cursor**: `pointer`

#### Hover (Available Date)
- **Background**: `var(--grey-02)`
- **Text Color**: `var(--text-primary)`
- **Border Radius**: `var(--radius-8)`

#### Selected Start Date
- **Background**: `var(--primary-blue)`
- **Text Color**: `var(--white)`
- **Border Radius**: Left side `var(--radius-8)`, right side square
- **Font Weight**: `var(--font-weight-semibold)`

#### Selected End Date
- **Background**: `var(--primary-blue)`
- **Text Color**: `var(--white)`
- **Border Radius**: Right side `var(--radius-8)`, left side square
- **Font Weight**: `var(--font-weight-semibold)`

#### In Range (Between Start and End)
- **Background**: `var(--blue-01)` (light blue)
- **Text Color**: `var(--text-primary)`
- **Border Radius**: None (square)

#### Today
- **Background**: Transparent or current state background
- **Text Color**: `var(--primary-blue)`
- **Border**: `1px solid var(--primary-blue)`
- **Border Radius**: `var(--radius-8)`
- **Font Weight**: `var(--font-weight-semibold)`

#### Disabled (Past/Unavailable Dates)
- **Background**: Transparent
- **Text Color**: `var(--grey-04)`
- **Cursor**: `not-allowed`
- **Opacity**: 0.4

#### Different Month (Adjacent Month Dates)
- **Background**: Transparent
- **Text Color**: `var(--grey-05)`
- **Opacity**: 0.5
- **Cursor**: `pointer` or `default`

### Calendar States

#### Default
- Calendar visible with current month
- No dates selected

#### First Date Selected
- Start date highlighted in blue
- User selecting end date
- Hover shows preview range

#### Range Selected
- Both start and end dates highlighted
- Days between are highlighted in light blue
- User can clear selection or select new range

#### Loading
- Show loading indicator when fetching availability
- Disable date selection during loading

## 5. Anatomy
```
┌────────────────────────────────────┐
│  ◄  January 2026          ►       │  ← Header (Month/Year + Navigation)
├────────────────────────────────────┤
│  Su Mo Tu We Th Fr Sa              │  ← Weekday labels
├────────────────────────────────────┤
│           1  2  3  4  5  6         │
│   7  8  9 [10 11 12 13] 14 15      │  ← Date cells
│  16 17 18 19 20 21 22 23 24        │  ← [10-13] = selected range
│  25 26 27 28 29 30 31              │
└────────────────────────────────────┘
```

**Components**:
1. **Header**: Month name, year, and navigation arrows
2. **Weekday Row**: Su, Mo, Tu, We, Th, Fr, Sa labels
3. **Date Grid**: 7 columns × 5-6 rows of date cells
4. **Date Cell**: Individual clickable day
5. **Range Highlight**: Visual connection between start and end dates
6. **Container**: Background and border wrapper

**Detailed Structure**:
```tsx
<div className="calendar-container">
  {/* Header */}
  <div className="calendar-header">
    <button className="prev-month">◄</button>
    <span className="month-year">January 2026</span>
    <button className="next-month">►</button>
  </div>
  
  {/* Weekday labels */}
  <div className="weekday-row">
    <span>Su</span>
    <span>Mo</span>
    {/* ... */}
  </div>
  
  {/* Date grid */}
  <div className="date-grid">
    {dates.map(date => (
      <button className="date-cell">
        {date.day}
      </button>
    ))}
  </div>
</div>
```

## 6. Rules
1. **Border Radius**: Container uses `var(--radius-12)` (12px)
2. **Cell Size**: All date cells must be 40px × 40px (square)
3. **Week Starts**: Sunday (can be configured to start on Monday)
4. **Range Visual**: Start date has rounded left, end date has rounded right
5. **Min Range**: Start and end can be the same day (1-day range)
6. **Max Range**: Optional max range limit (e.g., 30 days)
7. **Past Dates**: Can be disabled or enabled based on use case
8. **Month Navigation**: Arrows to move between months
9. **Year Navigation**: Optional year dropdown/picker
10. **Background**: `var(--card)` or `var(--white)`
11. **Elevation**: `var(--elevation-md)` when used as popup
12. **Border**: `1px solid var(--border)` when needed
13. **Selection Order**: First click = start, second click = end (or reverse if before start)

## 7. Icon Placement
### Navigation Arrows (Required)

**Previous Month Arrow**:
- **Position**: Left side of header
- **Icon**: ChevronLeft or simple ◄
- **Size**: 20px × 20px
- **Color**: `var(--text-primary)`
- **Hover**: Background `var(--grey-02)`
- **Button Size**: 32px × 32px

**Next Month Arrow**:
- **Position**: Right side of header
- **Icon**: ChevronRight or simple ►
- **Size**: 20px × 20px
- **Color**: `var(--text-primary)`
- **Hover**: Background `var(--grey-02)`
- **Button Size**: 32px × 32px

### Optional Icons

**Calendar Icon (Trigger)**:
- Used in popup mode as trigger button
- Size: 20px × 20px
- Color: `var(--text-primary)`
- Position: Inside or next to input field

**Clear Icon**:
- Allows clearing selected range
- Icon: X or clear icon
- Position: Header or footer of calendar
- Size: 16px × 16px

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate to calendar (focus first date cell or navigation)
- **Arrow Keys**: Navigate between date cells
  - **Left**: Previous day
  - **Right**: Next day
  - **Up**: Same day, previous week
  - **Down**: Same day, next week
- **Enter/Space**: Select focused date
- **Page Up**: Previous month
- **Page Down**: Next month
- **Home**: First day of current week
- **End**: Last day of current week
- **ESC**: Close calendar (if popup mode)

### Screen Readers
- Use semantic HTML elements (`<table>` or proper ARIA roles)
- Announce selected start and end dates
- Announce current month and year
- Use `role="grid"` for calendar structure
- Use `aria-label` for date cells with full date
- Announce when range is complete
- Include helper text for instructions

### ARIA Attributes
```tsx
<div role="application" aria-label="Date range picker">
  {/* Header */}
  <div className="header">
    <button 
      aria-label="Previous month"
      onClick={previousMonth}
    >
      ◄
    </button>
    
    <h2 id="month-year" aria-live="polite">
      January 2026
    </h2>
    
    <button 
      aria-label="Next month"
      onClick={nextMonth}
    >
      ►
    </button>
  </div>
  
  {/* Calendar grid */}
  <div role="grid" aria-labelledby="month-year">
    <div role="row">
      <button
        role="gridcell"
        aria-label="January 15, 2026"
        aria-selected={isSelected}
        aria-disabled={isDisabled}
        tabIndex={isCurrentCell ? 0 : -1}
      >
        15
      </button>
    </div>
  </div>
</div>
```

### Focus Management
- Clear focus indicator on cells (blue outline)
- Maintain focus within calendar during navigation
- Return focus to trigger element when closing (popup mode)
- Focus starts on today's date or selected start date

### Color Contrast
- **Selected dates**: White text on blue (WCAG AAA)
- **Range dates**: Dark text on light blue (WCAG AAA)
- **Default dates**: Dark text on white (WCAG AAA)
- **Disabled dates**: Reduced contrast acceptable

### Announcements
```tsx
// Announce range selection
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {startDate && !endDate && `Start date selected: ${formatDate(startDate)}`}
  {startDate && endDate && `Range selected from ${formatDate(startDate)} to ${formatDate(endDate)}`}
</div>
```

## 9. Interaction Behaviour
### Selecting a Date Range
1. Calendar opens (if popup mode) or is visible
2. User clicks/taps first date → Start date is selected
3. Start date cell turns blue with rounded left edge
4. User hovers over future dates → Preview range shows in light blue
5. User clicks/taps second date → End date is selected
6. End date cell turns blue with rounded right edge
7. All dates between are highlighted in light blue
8. `onChange` callback is triggered with `{ start, end }`
9. Calendar closes (if popup mode with auto-close enabled)

### Selecting in Reverse
1. User selects date A as start
2. User clicks date B that is before date A
3. **Option 1**: Date B becomes new start, date A becomes end
4. **Option 2**: Selection resets, date B becomes new start
5. Most common: Use Option 1 for better UX

### Hover Preview (Desktop)
1. User has selected start date
2. User hovers over a future date
3. Light blue highlight shows preview range
4. User moves mouse to different date
5. Preview range updates in real-time
6. User clicks to confirm end date

### Modifying Selection
1. User has selected a range
2. User clicks a new date
3. **Option 1**: Clear selection, new date becomes start
4. **Option 2**: Keep nearest selected date, adjust other end
5. Most common: Use Option 1 for clarity

### Month Navigation
1. User clicks previous/next arrow
2. Calendar smoothly transitions to adjacent month
3. If range spans multiple months, both dates remain visible when navigating
4. Focus maintains on same relative day position

### Keyboard Date Selection
1. Calendar has focus
2. User navigates with arrow keys
3. Focused cell has outline/highlight
4. User presses Enter/Space
5. Date is selected as start or end
6. User continues navigating to select other end of range

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Standard calendar size (280px width)
- Hover previews enabled
- Mouse-based interaction
- Calendar can be inline or popup

### Tablet (768px - 1023px)
- Maintain standard size
- Touch-friendly targets (40px cells)
- Hover preview may be disabled
- Consider fullscreen modal on portrait

### Mobile (<768px)
- **Calendar Width**: 100% of container (max 340px)
- **Cell Size**: Increase to 44px for better touch targets
- **Layout**: Fullscreen modal recommended
- **Month Navigation**: Swipe gestures optional
- **Range Preview**: Disabled (no hover on touch)
- **Selection Feedback**: Clear visual feedback on tap
- **Orientation**: Works in both portrait and landscape

### Fullscreen Modal Pattern (Mobile)
```tsx
{isMobile ? (
  <Modal isOpen={isOpen} onClose={onClose} size="fullscreen">
    <div className="flex flex-col h-full">
      <h2>Select Date Range</h2>
      <DateRangeCalendar 
        value={range}
        onChange={handleChange}
      />
      <div className="flex gap-3 p-4">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Apply
        </Button>
      </div>
    </div>
  </Modal>
) : (
  <Popover>
    <DateRangeCalendar value={range} onChange={handleChange} />
  </Popover>
)}
```

### Responsive Cell Sizing
```tsx
// Mobile: Larger cells
const cellSize = isMobile ? 44 : 40;

<button
  style={{
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    fontSize: isMobile ? 'var(--text-base)' : 'var(--text-label)'
  }}
>
  {day}
</button>
```

---

## Code Example
```tsx
import { DateRangeCalendar } from './components/DateRangeCalendar';

// Basic date range calendar
<DateRangeCalendar
  value={dateRange}
  onChange={(range) => setDateRange(range)}
/>

// With min/max dates
<DateRangeCalendar
  value={dateRange}
  onChange={(range) => setDateRange(range)}
  minDate={new Date('2026-01-01')}
  maxDate={new Date('2026-12-31')}
/>

// Disable past dates
<DateRangeCalendar
  value={dateRange}
  onChange={(range) => setDateRange(range)}
  disablePast
/>

// With max range limit (30 days)
<DateRangeCalendar
  value={dateRange}
  onChange={(range) => setDateRange(range)}
  maxRangeDays={30}
/>

// In a popup/dropdown
<Popover
  trigger={
    <TextInput
      value={formatDateRange(dateRange)}
      placeholder="Select date range"
      iconLeft={<Calendar />}
      readOnly
    />
  }
>
  <DateRangeCalendar
    value={dateRange}
    onChange={(range) => {
      setDateRange(range);
      closePopover();
    }}
  />
</Popover>

// Controlled with separate start/end
<DateRangeCalendar
  value={{ start: startDate, end: endDate }}
  onChange={({ start, end }) => {
    setStartDate(start);
    setEndDate(end);
  }}
/>
```

---

## Best Practices
1. **Clear selection state**: Make selected range visually obvious
2. **Disable invalid dates**: Grey out unavailable dates
3. **Show today indicator**: Help users orient in time
4. **Max range limit**: Prevent unreasonable ranges if applicable
5. **Auto-close on select**: Close popup after both dates selected (optional)
6. **Range preview**: Show hover preview for better UX (desktop)
7. **Accessible navigation**: Full keyboard support required
8. **Mobile modal**: Use fullscreen modal for mobile devices
9. **Clear action**: Provide way to clear selection
10. **Validation**: Validate range on submit, not during selection

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
