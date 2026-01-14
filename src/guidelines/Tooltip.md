# Tooltip Component Guideline

## 1. Overview
The Tooltip component is a small popup that appears on hover or focus to provide additional context or information about an element. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use tooltips to explain icons, provide additional context for UI elements, show keyboard shortcuts, or display truncated text. Tooltips should enhance understanding without being critical to task completion.

## 2. Variants
The Tooltip component supports **8 positional variants**:

### Top
- **Position**: Above the trigger element
- **Arrow**: Points down to trigger
- **Use Case**: Default position when space permits

### Top-Left
- **Position**: Above and aligned to left edge
- **Arrow**: Points down-right to trigger
- **Use Case**: Triggers near right edge of screen

### Top-Right
- **Position**: Above and aligned to right edge
- **Arrow**: Points down-left to trigger
- **Use Case**: Triggers near left edge of screen

### Bottom
- **Position**: Below the trigger element
- **Arrow**: Points up to trigger
- **Use Case**: When element is near top of screen

### Bottom-Left
- **Position**: Below and aligned to left edge
- **Arrow**: Points up-right to trigger
- **Use Case**: Triggers near right edge of screen

### Bottom-Right
- **Position**: Below and aligned to right edge
- **Arrow**: Points up-left to trigger
- **Use Case**: Triggers near left edge of screen

### Left
- **Position**: Left of the trigger element
- **Arrow**: Points right to trigger
- **Use Case**: When horizontal space is limited on right

### Right
- **Position**: Right of the trigger element
- **Arrow**: Points left to trigger
- **Use Case**: When horizontal space is limited on left

## 3. Sizes
The Tooltip component supports **2 sizes**:

### Small (sm)
- **Padding**: `var(--spacing-4) var(--spacing-8)` (4px 8px)
- **Font Size**: `var(--text-caption)` (12px)
- **Max Width**: 200px
- **Border Radius**: `var(--radius-6)` (6px)
- **Arrow Size**: 6px
- **Use Case**: Short labels, icon explanations

### Medium (md)
- **Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-label)` (14px)
- **Max Width**: 300px
- **Border Radius**: `var(--radius-8)` (8px)
- **Arrow Size**: 8px
- **Use Case**: Longer descriptions, detailed information

## 4. States
The tooltip responds to the following states:

### Hidden (Default)
- **Opacity**: 0
- **Pointer Events**: None
- **Display**: Hidden or unmounted

### Appearing
- **Animation**: Fade in + slight scale/translate
- **Duration**: 150ms
- **Delay**: 300ms after hover starts
- **Easing**: ease-out

### Visible
- **Opacity**: 1
- **Pointer Events**: None (click-through)
- **Z-Index**: 9999 (appears above all content)

### Disappearing
- **Animation**: Fade out
- **Duration**: 100ms
- **Delay**: None (immediate on mouse leave)
- **Easing**: ease-in

## 5. Anatomy
```
┌─────────────────────┐
│  Tooltip content    │  ← Tooltip container
│  with white text    │
└──────────┬──────────┘
           ▼              ← Arrow pointing to trigger
     [Trigger Element]    ← Element that shows tooltip
```

**Components**:
1. **Tooltip Container**: Dark background with white text
2. **Arrow**: Small triangle pointing to trigger element
3. **Content**: Text or simple elements (no interactive content)
4. **Trigger**: Element that activates tooltip (wrapper or parent)

**Detailed Structure**:
```tsx
<div className="tooltip-trigger">
  {children}  {/* Trigger element */}
  
  <div className="tooltip-container">
    <div className="tooltip-arrow" />
    <div className="tooltip-content">
      {content}
    </div>
  </div>
</div>
```

## 6. Rules
1. **Background Color**: Always `var(--text-primary)` (dark)
2. **Text Color**: Always `var(--white)` for maximum contrast
3. **Border Radius**: Use `var(--radius-6)` (sm) or `var(--radius-8)` (md)
4. **Elevation**: `var(--elevation-sm)` for subtle depth
5. **Arrow**: Must point to center of trigger element
6. **Max Width**: Enforce to prevent overly wide tooltips
7. **Text Wrapping**: Allow wrapping for longer content
8. **No Interaction**: Tooltips should not contain clickable elements
9. **Hover Delay**: 300ms delay before showing (prevents accidental triggers)
10. **Instant Hide**: Hide immediately when hover ends
11. **Z-Index**: High z-index (9999) to appear above modals
12. **Pointer Events**: None (tooltip should not block mouse events)
13. **Single Line Preference**: Keep content concise, single line when possible

## 7. Icon Placement
### Arrow Positioning
The arrow is a critical visual element that connects the tooltip to its trigger:

**Top Variant**:
```tsx
// Arrow at bottom of tooltip, pointing down
<div className="arrow" style={{
  position: 'absolute',
  bottom: '-6px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0,
  height: 0,
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
  borderTop: '6px solid var(--text-primary)'
}} />
```

**Bottom Variant**:
```tsx
// Arrow at top of tooltip, pointing up
<div className="arrow" style={{
  position: 'absolute',
  top: '-6px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0,
  height: 0,
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
  borderBottom: '6px solid var(--text-primary)'
}} />
```

**Left Variant**:
```tsx
// Arrow at right of tooltip, pointing right
<div className="arrow" style={{
  position: 'absolute',
  right: '-6px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 0,
  height: 0,
  borderTop: '6px solid transparent',
  borderBottom: '6px solid transparent',
  borderLeft: '6px solid var(--text-primary)'
}} />
```

**Right Variant**:
```tsx
// Arrow at left of tooltip, pointing left
<div className="arrow" style={{
  position: 'absolute',
  left: '-6px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 0,
  height: 0,
  borderTop: '6px solid transparent',
  borderBottom: '6px solid transparent',
  borderRight: '6px solid var(--text-primary)'
}} />
```

## 8. Accessibility
### Keyboard Navigation
- **Focus**: Tooltip appears when trigger receives keyboard focus
- **Blur**: Tooltip disappears when focus leaves trigger
- **ESC**: Tooltip should close (if implemented)
- **Tab**: Navigating away closes tooltip

### Screen Readers
- Use `aria-label` or `aria-labelledby` on trigger element
- Consider using `aria-describedby` for tooltip content ID
- For decorative tooltips, use `role="tooltip"`
- For critical information, don't use tooltips (include in visible UI)
- Ensure tooltip content is announced when element receives focus

### ARIA Attributes
```tsx
<button
  aria-describedby="tooltip-1"
  onMouseEnter={showTooltip}
  onFocus={showTooltip}
>
  Save
</button>

<div
  id="tooltip-1"
  role="tooltip"
  aria-hidden={!isVisible}
>
  Save changes to project
</div>
```

### Focus Management
- Tooltip appears on focus (keyboard navigation)
- Tooltip disappears on blur
- Never trap focus in tooltip
- Tooltip doesn't interfere with tab order

### Color Contrast
- **WCAG AAA**: White text on dark background
- **Contrast Ratio**: > 7:1 for excellent readability
- **Text**: `var(--white)` (#FFFFFF)
- **Background**: `var(--text-primary)` (dark grey/black)

### Critical Information
- **Never use tooltips for critical information**
- Information required for task completion must be visible by default
- Tooltips are supplementary only
- Consider visible helper text for essential instructions

## 9. Interaction Behaviour
### Mouse Hover (Desktop)
1. User hovers over trigger element
2. 300ms delay starts
3. After delay, tooltip fades in (150ms animation)
4. Tooltip appears with arrow pointing to trigger
5. User can continue interacting with page
6. User moves mouse away from trigger
7. Tooltip immediately fades out (100ms animation)

### Keyboard Focus
1. User tabs to focusable trigger element
2. Element receives focus (no delay)
3. Tooltip immediately fades in (150ms animation)
4. User reads tooltip content
5. User tabs to next element or presses ESC
6. Tooltip fades out (100ms)

### Touch Devices (Mobile/Tablet)
**Option 1**: First tap shows tooltip, second tap activates
```tsx
1. User taps trigger element
2. Tooltip appears
3. User taps trigger again
4. Action is performed and tooltip closes
```

**Option 2**: Long press shows tooltip
```tsx
1. User long-presses trigger element
2. Tooltip appears
3. User lifts finger
4. Tooltip disappears after 2 seconds
```

**Option 3**: Disable tooltips on touch devices
- This is often the best approach
- Touch devices can use other methods for contextual help

### Tooltip Positioning Logic
```tsx
1. Calculate trigger element position
2. Check available space in viewport
3. Choose best variant (top, bottom, left, right)
4. Position tooltip with appropriate offset (8px gap)
5. Ensure tooltip stays within viewport bounds
6. Adjust arrow position to point to trigger center
```

### Multiple Tooltips
- Only one tooltip visible at a time
- New tooltip replaces previous one
- No tooltip stacking or overlapping

## 10. Responsive Behaviour
### Desktop (≥1024px)
- All variants supported
- Hover-based interaction
- 300ms delay before showing
- Standard sizes (sm, md)

### Tablet (768px - 1023px)
- Touch-based interaction (tap or long-press)
- Consider disabling or using alternative UI
- If used, increase size to `md` for readability
- Ensure tooltip doesn't block important content

### Mobile (<768px)
- **Recommendation**: Disable tooltips on mobile
- **Alternative 1**: Use visible helper text instead
- **Alternative 2**: Show info in expanded accordion
- **Alternative 3**: Use info icon that opens modal
- **If tooltip used**: 
  - Size `md` only
  - Long-press to trigger
  - Auto-hide after 3 seconds
  - Max-width: 90vw

### Viewport Edge Handling
```tsx
// Automatic position adjustment
const tooltipPosition = calculatePosition(trigger, variant);

if (tooltipPosition.right > viewportWidth) {
  // Switch from right to left variant
  variant = 'left';
}

if (tooltipPosition.bottom > viewportHeight) {
  // Switch from bottom to top variant
  variant = 'top';
}
```

### Mobile-Specific Pattern
```tsx
// Disable tooltips on touch devices
const isTouchDevice = 'ontouchstart' in window;

{!isTouchDevice && (
  <Tooltip content="Save changes">
    <Button>Save</Button>
  </Tooltip>
)}

{isTouchDevice && (
  <Button aria-label="Save changes">Save</Button>
)}
```

---

## Code Example
```tsx
import { Tooltip } from './components/Tooltip';
import { Info, Save, Trash2 } from 'lucide-react';

// Basic tooltip
<Tooltip variant="top" size="sm" content="Save changes">
  <button>
    <Save size={20} />
  </button>
</Tooltip>

// Tooltip with longer content
<Tooltip 
  variant="bottom-right" 
  size="md" 
  content="This action cannot be undone. All data will be permanently deleted."
>
  <button className="text-red-600">
    <Trash2 size={20} />
    Delete Project
  </button>
</Tooltip>

// Tooltip on disabled element (wrap in span)
<Tooltip variant="top" size="sm" content="Complete required fields first">
  <span>
    <button disabled>Submit</button>
  </span>
</Tooltip>

// Info icon with tooltip
<Tooltip 
  variant="right" 
  size="md" 
  content="Premium feature available on Pro plan"
>
  <Info size={16} className="text-blue-600" />
</Tooltip>

// Tooltip with keyboard focus support
<Tooltip variant="top" size="sm" content="Keyboard shortcut: Ctrl+S">
  <button 
    onMouseEnter={handleMouseEnter}
    onFocus={handleFocus}
    onMouseLeave={handleMouseLeave}
    onBlur={handleBlur}
  >
    Save
  </button>
</Tooltip>
```

---

## Best Practices
1. **Keep it short**: Tooltips should be concise, ideally one line
2. **Don't hide critical info**: Never use tooltips for essential instructions
3. **Hover delay**: Use 300ms delay to prevent accidental triggers
4. **Instant hide**: Remove immediately when hover ends
5. **Positioning**: Choose variant based on available space
6. **Mobile alternative**: Consider disabling or using alternative UI on touch
7. **Accessible focus**: Ensure keyboard users can access tooltip content
8. **No interactivity**: Never put buttons or links in tooltips
9. **Consistent wording**: Use clear, consistent language
10. **Test visibility**: Ensure tooltip doesn't get cut off by viewport edges

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
