# Modal Component Guidelines

## 1. Overview
The Modal (Dialog) component displays content in a layer above the main application, requiring user interaction before returning to the main workflow. It's used for critical information, confirmations, forms, or complex interactions that need focused attention without navigating away from the current page.

## 2. Variants

### Standard Modal
- **Purpose**: General-purpose modal for content display
- **Visual**: Centered overlay with white background
- **Usage**: Forms, detailed views, content previews
- **CSS Variables**:
  - Background: `var(--white)`
  - Overlay: `rgba(0, 0, 0, 0.5)`
  - Border Radius: `var(--radius-xl)` (12px)

### Confirmation Modal
- **Purpose**: Confirm destructive or important actions
- **Visual**: Compact modal with action buttons
- **Usage**: Delete confirmations, discard changes, logout
- **Features**: 
  - Clear heading (e.g., "Delete task?")
  - Descriptive message
  - Primary and secondary action buttons

### Alert Modal
- **Purpose**: Display important information requiring acknowledgment
- **Visual**: Simple modal with single action button
- **Usage**: Success messages, warnings, errors
- **Features**:
  - Icon indicating type (success, warning, error)
  - Clear message
  - Single "OK" or "Got it" button

### Form Modal
- **Purpose**: Collect user input without page navigation
- **Visual**: Modal with form fields and submit actions
- **Usage**: Create new item, edit details, settings
- **Features**:
  - Form fields with validation
  - Cancel and Submit buttons
  - Proper error handling

### Full-Screen Modal (Mobile)
- **Purpose**: Maximize content space on small screens
- **Visual**: Takes entire viewport on mobile
- **Usage**: Complex forms, detailed content on mobile
- **Behavior**: Slides in from bottom or right

## 3. Sizes

### Small (sm)
- **Max Width**: `400px`
- **Padding**: `24px`
- **Usage**: Simple confirmations, alerts, short messages
- **Height**: Auto, max 80vh

### Medium (md) - Default
- **Max Width**: `600px`
- **Padding**: `32px`
- **Usage**: Standard forms, content displays, most scenarios
- **Height**: Auto, max 85vh

### Large (lg)
- **Max Width**: `800px`
- **Padding**: `40px`
- **Usage**: Complex forms, data tables, detailed content
- **Height**: Auto, max 90vh

### Extra Large (xl)
- **Max Width**: `1000px`
- **Padding**: `48px`
- **Usage**: Rich content, galleries, multi-step forms
- **Height**: Auto, max 90vh

### Full Screen
- **Width**: `100vw` (minus safe margins)
- **Height**: `100vh`
- **Padding**: `24px`
- **Usage**: Mobile views, maximized content, immersive experiences

## 4. States

### Closed (Hidden)
- **Display**: `none` or unmounted
- **Overlay**: Not visible
- **Body scroll**: Enabled
- **Focus**: Returns to trigger element

### Opening (Entering)
- **Animation**: Fade in + scale up (0.95 → 1.0)
- **Duration**: `200ms`
- **Easing**: `ease-out`
- **Overlay**: Fades in simultaneously

### Open (Active)
- **Display**: Centered in viewport
- **Overlay**: Semi-transparent backdrop (`rgba(0, 0, 0, 0.5)`)
- **Body scroll**: Disabled (overflow hidden)
- **Focus**: Trapped within modal
- **Z-index**: High value (e.g., 1000)

### Closing (Exiting)
- **Animation**: Fade out + scale down (1.0 → 0.95)
- **Duration**: `150ms`
- **Easing**: `ease-in`
- **Overlay**: Fades out simultaneously
- **Cleanup**: Unmount after animation

### Loading (Within Modal)
- **Visual**: Loading spinner or skeleton
- **Actions**: Disabled during loading
- **Overlay**: Optional semi-transparent overlay on modal content
- **Cursor**: `wait`

## 5. Anatomy

```
┌──────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░ OVERLAY (backdrop) ░░░░░░░░░░░░░░░░░░░ │
│ ░                                                  ░ │
│ ░   ┌──────────────────────────────────────┐     ░ │
│ ░   │ Modal Title                      [×] │     ░ │ ← Header
│ ░   ├──────────────────────────────────────┤     ░ │
│ ░   │                                      │     ░ │
│ ░   │  Modal content goes here...          │     ░ │ ← Body
│ ░   │  Forms, text, images, etc.           │     ░ │
│ ░   │                                      │     ░ │
│ ░   ├──────────────────────────────────────┤     ░ │
│ ░   │              [Cancel] [Save]         │     ░ │ ← Footer
│ ░   └──────────────────────────────────────┘     ░ │
│ ░                                                  ░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────────────────────────────────┘

Components:
1. Overlay/Backdrop (semi-transparent, clickable to close)
2. Modal Container (white background, centered)
3. Header Section
   - Title text
   - Close button (×)
4. Body/Content Section
   - Scrollable if content exceeds max height
5. Footer Section (optional)
   - Action buttons (Cancel, Submit, etc.)
```

### Element Spacing:
- **Header padding**: `24-32px` all sides
- **Body padding**: `24-32px` horizontal, `16-24px` vertical
- **Footer padding**: `24-32px` all sides
- **Title to body**: `16px` (or use border)
- **Body to footer**: `24px` (or use border)
- **Between buttons**: `12px` gap
- **Close button**: `24px` from top-right corner

## 6. Rules

### Opening Modals
1. **Trigger**: User action (button click, link, etc.)
2. **Focus trap**: Focus moves to first focusable element in modal
3. **Scroll lock**: Disable body scroll when modal opens
4. **Animation**: Smooth enter animation (200ms)
5. **Overlay**: Click overlay to close (optional, depends on use case)

### Closing Modals
1. **Close button**: Always provide × button in top-right
2. **Escape key**: Close on Esc key press
3. **Overlay click**: Close when clicking backdrop (for non-critical modals)
4. **Action buttons**: "Cancel" or "Close" button
5. **Focus return**: Return focus to trigger element on close
6. **Cleanup**: Reset form state, clear errors

### Content Guidelines
1. **Clear title**: Describe modal purpose (e.g., "Delete task?")
2. **Concise content**: Keep body content focused and scannable
3. **Action clarity**: Button labels should be specific (e.g., "Delete task" not "OK")
4. **Scrolling**: Allow body to scroll if content exceeds height
5. **Loading states**: Show loading indicators for async actions

### Stacking Modals
1. **Avoid**: Generally avoid stacking multiple modals
2. **Exception**: Confirmation modals over form modals (use sparingly)
3. **Z-index management**: Increment z-index for each layer
4. **Focus management**: Maintain focus in topmost modal
5. **Alternative**: Consider multi-step modals instead

### Responsive Behavior
1. **Desktop**: Centered with max-width constraint
2. **Tablet**: Slightly reduced padding, same behavior
3. **Mobile**: Consider full-screen or bottom sheet approach
4. **Max height**: Ensure modal fits within viewport (80-90vh)

## 7. Icon Placement

### Close Button (×)
- **Position**: Top-right corner of modal
- **Distance**: `16-24px` from top and right edges
- **Size**: `24px × 24px` icon
- **Hit area**: `40px × 40px` minimum (for touch)
- **Icon**: X or Close icon
- **Color**: `var(--text-secondary)`
- **Hover**: Background `var(--grey-01)`, icon darker

### Header Icons (Optional)
- **Position**: Left of title text
- **Size**: `24px`
- **Color**: Based on type (success, warning, error)
- **Gap**: `12px` from title text
- **Examples**:
  - Success: CheckCircle icon in green
  - Warning: AlertTriangle in yellow/orange
  - Error: AlertCircle in red
  - Info: Info icon in blue

### Content Icons
- **Purpose**: Visual reinforcement of message
- **Position**: Centered above content or left-aligned
- **Size**: `48px - 64px` for large icons
- **Color**: Semantic colors or `var(--primary)`
- **Usage**: Confirmation modals, empty states

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Cycle through focusable elements within modal
- **Shift + Tab**: Reverse cycle
- **Escape**: Close modal (return focus to trigger)
- **Enter**: Submit form or activate primary action
- **Focus trap**: Tab doesn't escape modal

### ARIA Attributes
```tsx
// Modal container
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Delete Task</h2>
  <p id="modal-description">
    Are you sure you want to delete this task? This action cannot be undone.
  </p>
  <button onClick={handleClose}>Cancel</button>
  <button onClick={handleDelete}>Delete</button>
</div>

// Alert modal
<div
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="alert-title"
  aria-describedby="alert-message"
>
  ...
</div>
```

### Required Attributes
- `role="dialog"` or `role="alertdialog"` - Defines modal type
- `aria-modal="true"` - Indicates modal behavior
- `aria-labelledby` - Points to title element ID
- `aria-describedby` - Points to description element ID
- `aria-hidden` on background - Hides content from screen readers when modal open

### Focus Management
```tsx
// On open
1. Store reference to trigger element
2. Move focus to first focusable element in modal (or close button)
3. Trap focus within modal (prevent tabbing outside)

// On close
1. Return focus to trigger element
2. Remove focus trap
3. Restore body scroll
```

### Screen Reader Support
- Modal purpose announced via title
- Content announced via description
- Close button clearly labeled ("Close modal" or "Close dialog")
- Form labels properly associated with inputs
- Error messages announced when they appear

### Visual Focus Indicators
- Visible focus rings on all interactive elements
- High contrast focus indicators (2px solid)
- Focus order follows logical reading order
- First focused element clearly visible

## 9. Interaction Behaviour

### Opening Animation
```css
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
```

### Closing Methods
1. **Close button (×)**: Click top-right X icon
2. **Cancel button**: Click "Cancel" in footer
3. **Escape key**: Press Esc on keyboard
4. **Overlay click**: Click semi-transparent backdrop (optional)
5. **Programmatic**: Close via state management after action

### Overlay Click Behavior
```tsx
// Determine if click is on overlay, not modal content
const handleOverlayClick = (e: MouseEvent) => {
  if (e.target === overlayRef.current) {
    onClose(); // Close only if clicking overlay itself
  }
};
```

### Form Submission
1. **Validation**: Validate on submit
2. **Loading state**: Show loading spinner, disable buttons
3. **Success**: Close modal, show success message
4. **Error**: Display inline errors, keep modal open
5. **Prevention**: Prevent closing if form is dirty (show confirmation)

### Scroll Behavior
- **Modal body scrolls**: If content exceeds max height
- **Body scroll locked**: Main page doesn't scroll when modal open
- **Sticky header/footer**: Optional sticky positioning
- **Scroll shadows**: Optional shadows indicating more content

### Preventing Accidental Closure
```tsx
// Unsaved changes warning
const handleClose = () => {
  if (isDirty) {
    if (confirm("You have unsaved changes. Are you sure you want to close?")) {
      resetForm();
      onClose();
    }
  } else {
    onClose();
  }
};
```

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Position**: Centered in viewport
- **Width**: Max-width based on size variant (400-1000px)
- **Height**: Auto, max 85-90vh
- **Padding**: Full padding (24-48px)
- **Animation**: Scale + fade
- **Close**: Overlay click, Esc key, close button

### Tablet (768px - 1023px)
- **Position**: Centered
- **Width**: 90% of viewport width, max 600px
- **Height**: Auto, max 85vh
- **Padding**: Reduced padding (24-32px)
- **Animation**: Same as desktop
- **Scrolling**: Vertical scroll if needed

### Mobile (≤767px)
- **Position**: Full screen or bottom sheet
- **Width**: 100% viewport width (minus safe margins)
- **Height**: Auto or full viewport
- **Padding**: Compact padding (16-24px)
- **Animation**: Slide up from bottom
- **Close**: Header close button, swipe down (bottom sheet)
- **Keyboard**: Account for virtual keyboard height

### Breakpoint Adjustments
```tsx
// Responsive modal size
<Modal
  size="md" // 600px on desktop
  className="w-full md:max-w-xl lg:max-w-2xl"
  fullScreen="mobile" // Full screen on mobile only
>
  ...
</Modal>
```

### Mobile-Specific Patterns

#### Bottom Sheet Modal
```tsx
// Slide from bottom
.modal-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 16px 16px 0 0;
  animation: slideUp 300ms ease-out;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
```

#### Full Screen Modal (Mobile)
- **Header**: Sticky with close/back button
- **Body**: Scrollable full height
- **Footer**: Sticky at bottom (if present)
- **Safe areas**: Account for notches, rounded corners

### Orientation Changes
- **Portrait**: Prefer vertical layout
- **Landscape**: May need horizontal layout or reduced height
- **Adapt**: Reflow content on orientation change

### Virtual Keyboard Handling
```tsx
// Adjust modal position when keyboard appears
useEffect(() => {
  const handleResize = () => {
    // Detect keyboard open (viewport height reduction)
    // Adjust modal position or scroll to focused input
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## Quick Reference

| Size | Max Width | Padding | Use Case |
|------|-----------|---------|----------|
| Small | 400px | 24px | Confirmations, alerts |
| Medium | 600px | 32px | Forms, standard content |
| Large | 800px | 40px | Complex forms, tables |
| XL | 1000px | 48px | Rich content, galleries |
| Full | 100vw | 24px | Mobile, immersive |

## CSS Variables Used
- `var(--white)` - Modal background
- `var(--text-primary)` - Title and content text
- `var(--text-secondary)` - Close button, secondary text
- `var(--grey-01)` - Close button hover background
- `var(--border)` - Optional dividers
- `var(--radius-xl)` - Modal border radius (12px)
- `var(--shadow-lg)` - Modal shadow
- Overlay: `rgba(0, 0, 0, 0.5)` - Semi-transparent backdrop

## Common Patterns

### Confirmation Modal
```tsx
<Modal size="sm" isOpen={isOpen} onClose={onClose}>
  <Modal.Header>Delete Task</Modal.Header>
  <Modal.Body>
    Are you sure you want to delete this task? This action cannot be undone.
  </Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={onClose}>Cancel</Button>
    <Button variant="destructive" onClick={handleDelete}>Delete</Button>
  </Modal.Footer>
</Modal>
```

### Form Modal
```tsx
<Modal size="md" isOpen={isOpen} onClose={handleClose}>
  <Modal.Header>Create New Task</Modal.Header>
  <Modal.Body>
    <form onSubmit={handleSubmit}>
      <Input label="Task name" required />
      <Textarea label="Description" />
      <DatePicker label="Due date" />
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={handleClose}>Cancel</Button>
    <Button variant="primary" type="submit">Create Task</Button>
  </Modal.Footer>
</Modal>
```

### Alert Modal
```tsx
<Modal size="sm" isOpen={isOpen} onClose={onClose}>
  <Modal.Body className="text-center">
    <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
    <h3>Success!</h3>
    <p>Your changes have been saved.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={onClose}>Got it</Button>
  </Modal.Footer>
</Modal>
```
