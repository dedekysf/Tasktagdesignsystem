# Date Range Calendar Component Guidelines

## 1. Overview
The Date Range Calendar component allows users to select a continuous range of dates (start date and end date) through an interactive calendar interface. It's commonly used for booking systems, date filters, reporting periods, and scheduling applications where users need to specify a time span.

## 2. Variants

### Standard Range Picker
- **Purpose**: Default date range selection
- **Visual**: Two-month calendar view with range highlighting
- **Usage**: Booking dates, report periods, filters
- **Features**: Start date, end date, range highlight

### Single Month Range
- **Purpose**: Compact range selection
- **Visual**: Single month view
- **Usage**: Limited space, short date ranges
- **Features**: Scrollable months, compact layout

### With Presets
- **Purpose**: Quick selection of common ranges
- **Visual**: Preset buttons alongside calendar
- **Usage**: Analytics dashboards, reports
- **Presets**: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month

### Inline Calendar
- **Purpose**: Always-visible calendar
- **Visual**: Embedded in page layout
- **Usage**: Dashboard filters, dedicated date pickers

### Dropdown Calendar
- **Purpose**: Space-saving date picker
- **Visual**: Calendar appears in dropdown/popover
- **Usage**: Forms, compact interfaces

## 3. Sizes

### Compact
- **Calendar Width**: `280px` per month
- **Cell Size**: `32px × 32px`
- **Font Size**: `12px`
- **Padding**: `8px`
- **Use Case**: Mobile, narrow containers, popovers

### Standard (Default)
- **Calendar Width**: `320px` per month
- **Cell Size**: `40px × 40px`
- **Font Size**: `14px`
- **Padding**: `12px`
- **Use Case**: Desktop forms, modals, standard views

### Large
- **Calendar Width**: `360px` per month
- **Cell Size**: `48px × 48px`
- **Font Size**: `16px`
- **Padding**: `16px`
- **Use Case**: Touch devices, accessibility-focused UIs

## 4. States

### Default (No Selection)
- **Start Date**: `null`
- **End Date**: `null`
- **Range Highlight**: None
- **State**: Awaiting user interaction

### Start Date Selected
- **Start Date**: Selected date
- **End Date**: `null`
- **Visual**: Start date highlighted
- **Hover**: Preview range from start to hovered date
- **State**: Awaiting end date selection

### Complete Range Selected
- **Start Date**: Selected
- **End Date**: Selected
- **Visual**: Full range highlighted with distinct start/end styling
- **State**: Complete selection

### Hover Preview
- **Visual**: Light highlight showing potential range
- **Opacity**: Reduced compared to actual selection
- **Purpose**: Help users visualize selection before confirming

### Disabled Dates
- **Visual**: Greyed out, reduced opacity
- **Cursor**: `not-allowed`
- **Interaction**: Non-clickable
- **Usage**: Past dates, blocked dates, unavailable dates

### Invalid Range
- **Visual**: Error indication (red border/background)
- **Message**: Error text below calendar
- **Examples**: End before start, exceeds max range length

## 5. Anatomy

```
┌────────────────────────────────────────────────────┐
│  [Preset Buttons]          Oct 2025    Nov 2025    │ ← Header with navigation
├────────────────────────────────────────────────────┤
│  Su Mo Tu We Th Fr Sa      Su Mo Tu We Th Fr Sa    │ ← Day headers
│              1  2  3  4        1  2  3  4  5  6  7 │
│   5  6  7  8  9 10 11       8  9 10 11 12 13 14    │ ← Date cells
│  12 13 14 15 16 17 18      15 16 17 18 19 20 21    │
│  19 20[21 22 23 24]25      22 23 24 25 26 27 28    │ ← Range highlighted
│  26 27 28 29 30 31         29 30                   │
└────────────────────────────────────────────────────┘
  Selected range: Oct 21, 2025 - Oct 24, 2025

Components:
1. Container (border, background, shadow)
2. Month navigation (prev/next arrows)
3. Month labels (Oct 2025, Nov 2025)
4. Day of week headers (Su, Mo, Tu, etc.)
5. Date cells (individual days)
6. Range highlight (background connecting start to end)
7. Start date indicator (distinct styling)
8. End date indicator (distinct styling)
9. Today indicator (outline or badge)
10. Preset buttons (optional, left side or top)
11. Selected range display (below calendar)
12. Action buttons (Cancel, Apply - optional)
```

### Element Spacing:
- **Calendar padding**: `12-16px`
- **Between months**: `16-24px` gap
- **Cell spacing**: `2px` gap between cells
- **Day header to cells**: `8px`
- **Month label to day headers**: `12px`
- **Preset to calendar**: `12px` gap

## 6. Rules

### Selection Behavior
1. **First click**: Sets start date
2. **Second click**: Sets end date (must be after start date)
3. **Third click**: Resets selection, starts new range
4. **Reverse selection**: If end < start, swap them automatically
5. **Same date**: Clicking same date twice = single-day range

### Range Validation
1. **Minimum range**: Optional (e.g., minimum 1 day)
2. **Maximum range**: Optional (e.g., maximum 90 days)
3. **Blocked dates**: Cannot select disabled dates in range
4. **Error feedback**: Show error message if validation fails

### Visual Hierarchy
1. **Start date**: Primary color background, white text
2. **End date**: Primary color background, white text
3. **Range**: Light primary background (10-20% opacity)
4. **Today**: Border or badge indicator
5. **Hover**: Subtle background change

### Default Behavior
- **Open state**: Show current month and next month (two-month view)
- **Initial view**: Current date visible
- **Navigation**: Arrow buttons to move months
- **Keyboard**: Support arrow key navigation

### Preset Ranges
Common presets to include:
- **Today**: Current day only
- **Yesterday**: Previous day
- **Last 7 days**: 7 days before today
- **Last 30 days**: 30 days before today
- **This month**: First to last day of current month
- **Last month**: First to last day of previous month
- **Custom**: User-defined presets

## 7. Icon Placement

### Navigation Arrows
- **Previous Month**: 
  - Position: Top-left of calendar
  - Icon: ChevronLeft
  - Size: `20px`
  - Color: `var(--text-secondary)`
- **Next Month**:
  - Position: Top-right of calendar
  - Icon: ChevronRight
  - Size: `20px`
  - Color: `var(--text-secondary)`

### Calendar Icon (Trigger)
- **Position**: Left side of input field (if dropdown variant)
- **Size**: `20px`
- **Color**: `var(--text-secondary)`
- **Purpose**: Visual indicator of date picker

### Clear Button
- **Position**: Right side of input/selection
- **Icon**: X or Close icon
- **Size**: `16px`
- **Color**: `var(--text-secondary)`
- **Action**: Clear selected dates

### Today Indicator
- **Visual**: Small dot or outline on today's date
- **Color**: `var(--primary)` or accent color
- **Position**: Corner of date cell or border

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Move focus to calendar
- **Arrow Keys**: Navigate between dates
  - **Left/Right**: Previous/next day
  - **Up/Down**: Same day previous/next week
  - **Page Up/Down**: Previous/next month
- **Home**: First day of month
- **End**: Last day of month
- **Enter/Space**: Select focused date
- **Esc**: Close calendar (if dropdown)

### ARIA Attributes
```tsx
// Calendar container
<div
  role="application"
  aria-label="Date range picker"
>
  {/* Month grid */}
  <table role="grid" aria-labelledby="month-label">
    <caption id="month-label">October 2025</caption>
    <thead>
      <tr>
        <th scope="col" aria-label="Sunday">Su</th>
        {/* ... */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          role="gridcell"
          aria-selected={isInRange}
          aria-disabled={isDisabled}
          aria-label="Sunday, October 21, 2025"
        >
          21
        </td>
        {/* ... */}
      </tr>
    </tbody>
  </table>
</div>

// Input trigger
<input
  type="text"
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="dialog"
  aria-controls="calendar-popup"
  aria-label="Select date range"
  value="Oct 21, 2025 - Oct 24, 2025"
  readOnly
/>
```

### Screen Reader Support
- **Month announced**: "October 2025"
- **Date announced**: "Sunday, October 21, 2025"
- **Selection announced**: "Selected as start date" / "Selected as end date"
- **Range announced**: "Range selected from October 21 to October 24, 2025"
- **Navigation**: "Next month November 2025" / "Previous month September 2025"

### Focus Management
- **Initial focus**: First selectable date or start date if set
- **Focus visible**: Clear focus indicator on dates
- **Focus trap**: Keep focus within calendar when open (dropdown variant)
- **Return focus**: Back to trigger on close

### Date Format
- Use locale-appropriate date formats
- Provide clear labels and instructions
- Support internationalization (i18n)

## 9. Interaction Behaviour

### Selection Flow
```tsx
1. Click first date → Start date set, end date null
2. Hover over dates → Show preview range
3. Click second date → End date set, range complete
4. Click apply (optional) → Confirm selection
```

### Range Preview on Hover
```tsx
// Show preview when hovering with start date selected
if (startDate && !endDate && hoveredDate) {
  showPreviewRange(startDate, hoveredDate);
}
```

### Month Navigation
- **Arrows**: Click to move one month forward/backward
- **Smooth transition**: Animate month change (optional)
- **Infinite scroll**: Can navigate to any past/future month
- **Constraints**: Optional min/max date limits

### Preset Selection
```tsx
const handlePresetClick = (preset) => {
  const { start, end } = calculatePresetRange(preset);
  setStartDate(start);
  setEndDate(end);
  // Optionally auto-close or allow further adjustment
};
```

### Touch Gestures (Mobile)
- **Tap**: Select date
- **Swipe**: Navigate months (left = next, right = previous)
- **Pinch**: Zoom to year/month view (advanced)

### Reset/Clear
- Clear button removes both start and end dates
- Start fresh selection process
- Return to default state (current month view)

### Auto-Apply vs Manual Apply
- **Auto-apply**: Selection confirmed immediately on second date click
- **Manual apply**: Requires clicking "Apply" button (allows adjustment)
- **Cancel**: Reverts to previous selection

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Layout**: Side-by-side two-month view
- **Width**: `680px` (2 × 320px + gaps + padding)
- **Presets**: Vertical list on left side
- **Navigation**: Arrow buttons
- **Interaction**: Mouse hover, click

### Tablet (768px - 1023px)
- **Layout**: Two-month view or single month depending on orientation
- **Portrait**: Stack months vertically
- **Landscape**: Side-by-side if space allows
- **Width**: Adapt to container
- **Touch**: Larger touch targets

### Mobile (≤767px)
- **Layout**: Single month view, swipe to navigate
- **Width**: Full width (minus padding)
- **Cell size**: Larger (40-48px) for touch
- **Presets**: Horizontal scroll or dropdown
- **Navigation**: Swipe gestures + arrow buttons
- **Full screen**: Consider full-screen modal on mobile

### Breakpoint Behavior
```tsx
// Responsive month display
const monthsToShow = useBreakpoint({
  mobile: 1,
  tablet: 2,
  desktop: 2
});

<DateRangeCalendar
  monthsDisplayed={monthsToShow}
  orientation={isMobile ? 'vertical' : 'horizontal'}
/>
```

### Dropdown vs Inline
```tsx
// Desktop: Dropdown popover
// Mobile: Full-screen modal
<DateRangePicker
  mode={isMobile ? 'modal' : 'popover'}
  position={isMobile ? 'fullscreen' : 'bottom-start'}
/>
```

### Orientation Handling
- **Portrait (Mobile)**: Vertical month stacking
- **Landscape (Mobile)**: Horizontal months or larger calendar
- **Adapt**: Reflow on orientation change

### Touch Target Sizing
```tsx
// Ensure WCAG compliance
const cellSize = {
  mobile: '48px',    // Larger for touch
  tablet: '40px',
  desktop: '40px'
};
```

---

## Quick Reference

| Property | Compact | Standard | Large |
|----------|---------|----------|-------|
| Calendar Width | 280px | 320px | 360px |
| Cell Size | 32×32px | 40×40px | 48×48px |
| Font Size | 12px | 14px | 16px |
| Padding | 8px | 12px | 16px |
| Gap (months) | 12px | 16px | 24px |

## CSS Variables Used
- `var(--primary)` - Selected date background, range highlight
- `var(--primary-light)` - Range background (10-20% opacity)
- `var(--text-primary)` - Date numbers, labels
- `var(--text-secondary)` - Day headers, navigation icons
- `var(--grey-01)` - Hover background
- `var(--grey-02)` - Disabled date background
- `var(--border)` - Cell borders, container border
- `var(--white)` - Selected date text, background
- `var(--alert-red)` - Error state, invalid range
- `var(--radius-lg)` - Container border radius
- `var(--radius-full)` - Date cell border radius

## Common Patterns

### Basic Date Range Picker
```tsx
<DateRangeCalendar
  startDate={startDate}
  endDate={endDate}
  onChange={({ start, end }) => {
    setStartDate(start);
    setEndDate(end);
  }}
  monthsDisplayed={2}
/>
```

### With Presets
```tsx
<DateRangeCalendar
  startDate={startDate}
  endDate={endDate}
  onChange={handleChange}
  presets={[
    { label: 'Today', value: 'today' },
    { label: 'Last 7 days', value: 'last7days' },
    { label: 'Last 30 days', value: 'last30days' },
    { label: 'This month', value: 'thisMonth' }
  ]}
  onPresetSelect={handlePresetSelect}
/>
```

### With Validation
```tsx
<DateRangeCalendar
  startDate={startDate}
  endDate={endDate}
  onChange={handleChange}
  minDate={new Date()} // Can't select past dates
  maxDate={addMonths(new Date(), 6)} // Max 6 months ahead
  minRangeDays={1} // At least 1 day
  maxRangeDays={90} // Maximum 90 days
  disabledDates={blockedDates} // Specific blocked dates
  onError={handleError}
/>
```

### Dropdown Variant
```tsx
<Popover>
  <PopoverTrigger>
    <input
      value={formatDateRange(startDate, endDate)}
      readOnly
      placeholder="Select date range"
    />
  </PopoverTrigger>
  <PopoverContent>
    <DateRangeCalendar
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
    />
  </PopoverContent>
</Popover>
```
