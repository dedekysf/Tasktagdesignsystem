# Tooltip Component Guidelines

## 1. Overview
The Tooltip component displays brief, contextual information when users hover over, focus on, or tap an element. It provides helpful hints, labels for icon-only buttons, or additional context without cluttering the interface. Tooltips should be concise and enhance usability without being critical to task completion.

## 2. Variants

### Standard Tooltip
- **Purpose**: Default informational tooltip
- **Visual**: Dark background with white text
- **Usage**: Icon descriptions, helper text, definitions
- **CSS Variables**:
  - Background: `var(--grey-08)` or `#1f2937`
  - Text: `white`
  - Arrow: Matches background

### Light Tooltip
- **Purpose**: Alternative style for light backgrounds
- **Visual**: White background with dark text and border
- **Usage**: High-contrast areas, specific design needs
- **CSS Variables**:
  - Background: `var(--white)`
  - Text: `var(--text-primary)`
  - Border: `var(--border)`

### Success Tooltip
- **Purpose**: Positive feedback or confirmation
- **Visual**: Green background with white text
- **Usage**: Copy success, save confirmation, positive feedback
- **CSS Variables**:
  - Background: `var(--success-green)`
  - Text: `white`

### Error Tooltip
- **Purpose**: Error information or warnings
- **Visual**: Red background with white text
- **Usage**: Validation errors, warning messages
- **CSS Variables**:
  - Background: `var(--alert-red)`
  - Text: `white`

## 3. Sizes

### Small (sm)
- **Padding**: `4px 8px`
- **Font Size**: `var(--text-caption)` (12px)
- **Max Width**: `200px`
- **Arrow Size**: `4px`
- **Use Case**: Brief labels, icon tooltips

### Medium (md) - Default
- **Padding**: `8px 12px`
- **Font Size**: `var(--text-caption)` (12px)
- **Max Width**: `250px`
- **Arrow Size**: `6px`
- **Use Case**: Standard tooltips, most scenarios

### Large (lg)
- **Padding**: `12px 16px`
- **Font Size**: `var(--text-body)` (14px)
- **Max Width**: `300px`
- **Arrow Size**: `8px`
- **Use Case**: Longer descriptions, rich tooltips

## 4. States

### Hidden (Default)
- **Display**: `none` or `opacity: 0`
- **Pointer Events**: `none`
- **Visibility**: Not rendered or invisible

### Showing (Entering)
- **Animation**: Fade in + slight translate
- **Duration**: `150ms`
- **Easing**: `ease-out`
- **Delay**: `500ms` (configurable)
- **Opacity**: `0 → 1`

### Visible (Active)
- **Opacity**: `1`
- **Position**: Calculated based on trigger and placement
- **Z-index**: High value (e.g., 9999)
- **Pointer Events**: `auto` (if interactive)

### Hiding (Exiting)
- **Animation**: Fade out
- **Duration**: `100ms`
- **Easing**: `ease-in`
- **Opacity**: `1 → 0`

## 5. Anatomy

```
        ┌──────────────────┐
        │ Tooltip content  │ ← Tooltip container
        │ goes here        │
        └────────┬─────────┘
                 │ ← Arrow/pointer
                 ▼
            [Trigger Element]

Components:
1. Trigger element (button, icon, text, etc.)
2. Tooltip container (rounded rectangle)
3. Tooltip content (text, optional icon)
4. Arrow/pointer (points to trigger)
5. Optional close button (for interactive tooltips)
```

### Positioning:
```
     [top-start]  [top]  [top-end]
            ↑       ↑       ↑
    [left]  ← [Trigger] →  [right]
            ↓       ↓       ↓
  [bottom-start] [bottom] [bottom-end]
```

### Element Spacing:
- **Padding**: `4px-16px` (based on size)
- **Border radius**: `var(--radius-md)` (6px)
- **Arrow distance**: `8px` from trigger
- **Max width**: `200px-300px` (based on size)
- **Line height**: `1.4` for readability

## 6. Rules

### Content Guidelines
1. **Keep it brief**: 1-2 sentences maximum (ideal: 3-7 words)
2. **Be descriptive**: Provide helpful context, not redundant information
3. **No critical info**: Don't hide essential information in tooltips
4. **Plain text**: Avoid complex formatting (simple text, optional icon)
5. **Sentence case**: Use sentence case, end with period if full sentence

### When to Use
- **Icon-only buttons**: Always provide tooltip labels
- **Truncated text**: Show full text on hover
- **Disabled elements**: Explain why element is disabled
- **Helper information**: Provide additional context
- **Keyboard shortcuts**: Display shortcuts for actions

### When NOT to Use
- **Critical information**: Use visible text instead
- **Long content**: Use popovers or modals instead
- **Mobile**: Avoid on touch devices (use alternative patterns)
- **Form errors**: Use inline validation messages
- **Every element**: Don't overuse, only when adding value

### Placement Priority
1. **Top**: Default placement (if space available)
2. **Bottom**: If insufficient space above
3. **Right**: For left-aligned elements
4. **Left**: For right-aligned elements
5. **Auto**: Let library calculate best position

### Delay and Duration
- **Show delay**: `500ms` (gives user time to explore)
- **Hide delay**: `0ms` (immediate on mouse leave)
- **Persistent**: For interactive tooltips (close on click outside)
- **Focus**: Show immediately on keyboard focus

## 7. Icon Placement

### Trigger Icons
- **Icon-only buttons**: Entire icon is trigger
- **Info icon**: Small (i) icon next to labels
- **Help icon**: Question mark icon
- **Size**: `16px` (small) or `20px` (medium)
- **Color**: `var(--text-secondary)`

### Tooltip Content Icons
- **Leading icon** (optional):
  - Position: Left of text
  - Size: `16px`
  - Gap: `6px` from text
  - Examples: CheckCircle (success), AlertCircle (error), Info (info)
- **No trailing icons**: Keep tooltips simple

### Arrow/Pointer
- **Size**: `4px-8px` triangle
- **Color**: Matches tooltip background
- **Position**: Centered on trigger element
- **Dynamic**: Adjusts based on tooltip placement

## 8. Accessibility

### Keyboard Navigation
- **Focus**: Tooltip appears when trigger receives focus
- **Blur**: Tooltip hides when trigger loses focus
- **Esc**: Close tooltip (for interactive tooltips)
- **Tab**: Move to next element (tooltip stays if persistent)

### ARIA Attributes
```tsx
// Simple tooltip (non-interactive)
<button
  aria-label="Settings"
  aria-describedby="settings-tooltip"
>
  <Settings />
</button>
<div id="settings-tooltip" role="tooltip">
  Settings
</div>

// Tooltip with additional context
<button
  aria-label="Delete task"
  aria-describedby="delete-tooltip"
>
  <Trash />
</button>
<div id="delete-tooltip" role="tooltip">
  Delete this task permanently
</div>

// Interactive tooltip
<div role="tooltip" aria-live="polite">
  Link copied to clipboard
</div>
```

### Required Attributes
- `role="tooltip"` - Identifies tooltip element
- `id` on tooltip - Links to `aria-describedby` on trigger
- `aria-describedby` on trigger - References tooltip ID
- `aria-label` or `aria-labelledby` - For icon-only buttons
- `aria-live="polite"` - For dynamic tooltips (success messages)

### Screen Reader Support
- Tooltip content announced when trigger focused
- Not announced on hover (only on focus for keyboard users)
- Brief, descriptive content for clarity
- Alternative: Use `aria-label` directly on trigger if tooltip is simple label

### Touch Device Considerations
- **No hover**: Tooltips don't work well on touch devices
- **Alternative**: Use press-and-hold or dedicated info buttons
- **Consideration**: Show tooltip on tap, hide on second tap or outside click
- **Best practice**: Ensure information is accessible without tooltip

## 9. Interaction Behaviour

### Mouse Hover
1. **Mouse enter**: Start show delay timer (500ms)
2. **Delay complete**: Tooltip fades in
3. **Mouse leave**: Tooltip immediately fades out
4. **Re-enter**: If tooltip still visible, no delay

### Keyboard Focus
1. **Focus**: Tooltip shows immediately (no delay)
2. **Blur**: Tooltip hides immediately
3. **Tab**: Move focus, tooltip follows if new target has tooltip

### Touch Interaction
```tsx
// Touch behavior (optional)
const handleTouch = () => {
  if (isVisible) {
    hideTooltip();
  } else {
    showTooltip();
  }
};

// Auto-hide after 3 seconds on touch
useEffect(() => {
  if (isVisible && isTouchDevice) {
    const timer = setTimeout(hideTooltip, 3000);
    return () => clearTimeout(timer);
  }
}, [isVisible, isTouchDevice]);
```

### Positioning Logic
```tsx
// Automatically adjust position to stay in viewport
const getTooltipPosition = (trigger, tooltip, placement) => {
  const triggerRect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  // Check if tooltip fits in preferred placement
  // If not, try alternative placements
  // Return calculated position
};
```

### Multiple Tooltips
- **One at a time**: Hide previous tooltip when showing new one
- **Nested triggers**: Inner tooltip takes precedence
- **Conflict resolution**: Manage z-index and visibility

### Interactive Tooltips
- **Mouse leave delay**: Allow moving mouse to tooltip content
- **Clickable content**: Links, buttons within tooltip
- **Close button**: Explicit close action
- **Click outside**: Close when clicking elsewhere

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Trigger**: Hover or keyboard focus
- **Size**: Standard sizes (sm, md, lg)
- **Placement**: All placements available
- **Delay**: 500ms show delay
- **Max width**: 200-300px

### Tablet (768px - 1023px)
- **Trigger**: May have hover (depends on device)
- **Size**: Medium default
- **Placement**: Prefer top/bottom (avoid left/right near edges)
- **Touch**: Consider press-and-hold pattern
- **Max width**: 250px

### Mobile (≤767px)
- **Avoid tooltips**: Use alternative patterns when possible
- **Alternative 1**: Inline help text or description
- **Alternative 2**: Info icon opening modal/sheet
- **Alternative 3**: Long-press gesture
- **If used**: Tap to show, tap outside or auto-hide after 3s
- **Max width**: 90vw (viewport width)

### Viewport Boundary Detection
```tsx
// Prevent tooltip from going off-screen
const adjustPosition = () => {
  const rect = tooltipRef.current.getBoundingClientRect();
  
  // Right edge
  if (rect.right > window.innerWidth) {
    // Adjust left or change to 'left' placement
  }
  
  // Bottom edge
  if (rect.bottom > window.innerHeight) {
    // Change to 'top' placement
  }
  
  // Similar for left and top edges
};
```

### Breakpoint Adaptations
```tsx
// Responsive tooltip
<Tooltip
  content="Settings"
  placement="top"
  mobilePlacement="bottom" // Different placement on mobile
  mobileStrategy="modal" // Or show as modal on mobile
  size="sm"
>
  <IconButton icon={<Settings />} />
</Tooltip>
```

### Content Wrapping
- **Short content**: Single line preferred
- **Medium content**: 2-3 lines acceptable
- **Long content**: Consider popover instead
- **Max width**: Enforced to prevent overly wide tooltips
- **Text wrap**: `white-space: normal` for multi-line

### Mobile-Specific Patterns

#### Alternative 1: Inline Helper Text
```tsx
// Instead of tooltip on mobile
<div className="flex items-center gap-2">
  <label>Password</label>
  <span className="text-sm text-secondary">Must be 8+ characters</span>
</div>
```

#### Alternative 2: Info Modal
```tsx
// Info button that opens modal on mobile
<button onClick={isMobile ? openInfoModal : undefined}>
  <Info />
</button>
```

#### Alternative 3: Long-Press
```tsx
// Show tooltip on long press (mobile)
const handleTouchStart = () => {
  timer = setTimeout(() => showTooltip(), 500);
};

const handleTouchEnd = () => {
  clearTimeout(timer);
};
```

---

## Quick Reference

| Property | Small | Medium | Large |
|----------|-------|--------|-------|
| Padding | 4px 8px | 8px 12px | 12px 16px |
| Font Size | 12px | 12px | 14px |
| Max Width | 200px | 250px | 300px |
| Arrow Size | 4px | 6px | 8px |
| Show Delay | 500ms | 500ms | 500ms |
| Hide Delay | 0ms | 0ms | 0ms |

## CSS Variables Used
- `var(--grey-08)` - Default tooltip background
- `white` - Default tooltip text
- `var(--white)` - Light variant background
- `var(--text-primary)` - Light variant text
- `var(--border)` - Light variant border
- `var(--success-green)` - Success tooltip background
- `var(--alert-red)` - Error tooltip background
- `var(--text-caption)` - Small/medium font size (12px)
- `var(--text-body)` - Large font size (14px)
- `var(--radius-md)` - Border radius (6px)

## Common Patterns

### Icon Button with Tooltip
```tsx
<Tooltip content="Delete task">
  <IconButton aria-label="Delete task">
    <Trash />
  </IconButton>
</Tooltip>
```

### Truncated Text with Full Text Tooltip
```tsx
<Tooltip content={fullText}>
  <span className="truncate max-w-xs">
    {fullText}
  </span>
</Tooltip>
```

### Disabled Element Explanation
```tsx
<Tooltip content="Complete required fields to enable">
  <span> {/* Wrapper needed for disabled elements */}
    <Button disabled>Submit</Button>
  </span>
</Tooltip>
```

### Keyboard Shortcut Display
```tsx
<Tooltip content="Save (Ctrl+S)">
  <Button>Save</Button>
</Tooltip>
```

### Success Feedback Tooltip
```tsx
<Tooltip 
  content="Link copied!"
  variant="success"
  open={showCopied}
  onOpenChange={setShowCopied}
>
  <Button onClick={handleCopy}>Copy Link</Button>
</Tooltip>
```
