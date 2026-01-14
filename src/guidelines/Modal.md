# Modal Component Guideline

## 1. Overview
The Modal component is an overlay dialog that appears on top of the main content to display important information or request user input. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use modals for critical actions that require user attention, confirmations, forms, or displaying detailed information without navigating away from the current page.

## 2. Variants
The Modal component supports **3 variants** based on purpose:

### Default Modal
- **Purpose**: Standard modal for general content
- **Header**: Title with close button
- **Content**: Flexible content area
- **Footer**: Optional action buttons
- **Use Case**: Forms, detailed views, information display

### Confirmation Modal
- **Purpose**: Confirm critical actions
- **Header**: Warning or confirmation title
- **Content**: Descriptive message about action
- **Footer**: Cancel + Confirm buttons
- **Use Case**: Delete confirmations, irreversible actions

### Alert Modal
- **Purpose**: Display important information
- **Header**: Alert title
- **Content**: Alert message
- **Footer**: Acknowledge button
- **Use Case**: Warnings, errors, success messages

## 3. Sizes
The Modal component supports **3 sizes**:

### Small (sm)
- **Width**: 400px
- **Max Width**: 90vw
- **Padding**: `var(--spacing-20)` (20px)
- **Use Case**: Simple confirmations, alerts

### Medium (md)
- **Width**: 500px
- **Max Width**: 90vw
- **Padding**: `var(--spacing-24)` (24px)
- **Use Case**: Forms, standard content

### Large (lg)
- **Width**: 800px
- **Max Width**: 95vw
- **Padding**: `var(--spacing-32)` (32px)
- **Use Case**: Complex forms, detailed content, multi-step wizards

## 4. States
The modal and its elements respond to the following states:

### Closed (Default)
- **Modal**: Hidden (display: none or opacity: 0)
- **Backdrop**: Not visible
- **Body Scroll**: Enabled

### Opening
- **Modal**: Fades in with scale animation
- **Backdrop**: Fades in
- **Body Scroll**: Disabled
- **Animation**: 200ms ease-out

### Open
- **Modal**: Fully visible (opacity: 1, scale: 1)
- **Backdrop**: Visible with semi-transparent black
- **Body Scroll**: Disabled
- **Focus**: Trapped within modal

### Closing
- **Modal**: Fades out with scale animation
- **Backdrop**: Fades out
- **Animation**: 200ms ease-in
- **Focus**: Returns to trigger element

### Closed (After)
- **Modal**: Hidden and unmounted
- **Backdrop**: Not visible
- **Body Scroll**: Re-enabled

## 5. Anatomy
```
┌─────────────────────────────────────────┐
│ ◄────────── Backdrop ──────────►        │
│                                          │
│   ┌──────────────────────────────┐     │
│   │ Modal Title            [×]    │     │ ← Header
│   ├──────────────────────────────┤     │
│   │                              │     │
│   │  Modal content area          │     │ ← Content
│   │  with scrollable overflow    │     │
│   │                              │     │
│   ├──────────────────────────────┤     │
│   │         [Cancel] [Confirm]   │     │ ← Footer
│   └──────────────────────────────┘     │
│                                          │
└─────────────────────────────────────────┘
```

**Components**:
1. **Backdrop**: Semi-transparent overlay (`rgba(0, 0, 0, 0.5)`)
2. **Modal Container**: White card with elevation and border radius
3. **Header**: Title + Close button (optional)
4. **Content**: Main content area (scrollable if needed)
5. **Footer**: Action buttons area (optional)
6. **Close Button**: X icon button in top-right corner

## 6. Rules
1. **Backdrop**: Always use semi-transparent black (`rgba(0, 0, 0, 0.5)`)
2. **Border Radius**: `var(--radius-12)` (12px) for modal container
3. **Elevation**: `var(--elevation-lg)` for depth
4. **Max Height**: 90vh to ensure visibility on all screens
5. **Scrolling**: Content area scrolls, header and footer remain fixed
6. **Focus Trap**: Focus must remain within modal when open
7. **ESC Key**: Always close modal on ESC key press (unless critical)
8. **Backdrop Click**: Close modal on backdrop click (unless critical action)
9. **Body Scroll Lock**: Prevent background scrolling when modal is open
10. **Centered**: Modal is horizontally and vertically centered
11. **Z-Index**: Use high z-index (1000+) to appear above all content
12. **Animation**: Use fade + scale animation for smooth appearance

## 7. Icon Placement
### Close Button (Required for most modals)
- **Position**: Top-right corner of modal
- **Size**: 24px × 24px icon in 32px × 32px button
- **Color**: `var(--text-primary)`
- **Hover**: Background `var(--grey-02)`
- **Icon**: X (close) icon
- **Padding**: `var(--spacing-4)`

**Close Button Implementation**:
```tsx
<button
  onClick={onClose}
  className="absolute top-4 right-4 p-2 rounded hover:bg-grey-02"
  style={{
    width: '32px',
    height: '32px',
    color: 'var(--text-primary)'
  }}
>
  <X size={24} />
</button>
```

### Optional Icons in Header
- Alert icon for warning modals
- Success icon for confirmation modals
- Info icon for informational modals
- Position: Left of title text

### Optional Icons in Content
- Icons can be used within content for visual enhancement
- Should be meaningful and relevant to content

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Navigate through focusable elements inside modal
- **Shift + Tab**: Navigate backwards
- **ESC**: Close modal (unless critical confirmation)
- **Enter**: Trigger focused button

### Screen Readers
- Use `role="dialog"` or `role="alertdialog"` for critical modals
- Include `aria-modal="true"` to indicate modal context
- Use `aria-labelledby` pointing to modal title
- Use `aria-describedby` pointing to modal description
- Announce modal opening to screen reader users
- Return focus to trigger element on close

### Focus Management
- **On Open**: 
  - Focus moves to first focusable element (usually close button or first input)
  - Or focus moves to modal container itself if no focusable elements
- **Focus Trap**: 
  - Tab cycles through modal elements only
  - Background content is inert (`aria-hidden="true"`)
- **On Close**: 
  - Focus returns to element that triggered modal
  - If trigger element is removed, focus moves to logical element

### ARIA Attributes
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Modal Title</h2>
  <div id="modal-description">
    Modal content description
  </div>
</div>

{/* Background content */}
<div aria-hidden="true">
  {/* Main app content */}
</div>
```

### Color Contrast
- Title text: Minimum 4.5:1 contrast
- Body text: Minimum 4.5:1 contrast
- Buttons: Follow button component accessibility guidelines
- Close button: Clear visual indicator

## 9. Interaction Behaviour
### Opening Modal
1. User triggers modal (button click, link, etc.)
2. Background content becomes inert
3. Body scroll is disabled
4. Backdrop fades in (200ms)
5. Modal fades in and scales from 0.95 to 1 (200ms)
6. Focus moves to first focusable element in modal
7. ESC key and backdrop click listeners activate

### Closing Modal - Method 1: Close Button
1. User clicks close button (X)
2. `onClose` callback is triggered
3. Modal fades out and scales to 0.95 (200ms)
4. Backdrop fades out
5. After animation, modal is removed from DOM
6. Body scroll is re-enabled
7. Focus returns to trigger element

### Closing Modal - Method 2: ESC Key
1. User presses ESC key
2. Same closing process as Method 1

### Closing Modal - Method 3: Backdrop Click
1. User clicks on backdrop (outside modal)
2. Same closing process as Method 1
3. **Exception**: Critical confirmations may disable this

### Closing Modal - Method 4: Action Button
1. User clicks Cancel or Confirm button
2. Button's onClick handler executes
3. Handler calls `onClose()` function
4. Modal closes using standard closing process

### Scrolling Behavior
- **Short Content**: Modal height adapts to content
- **Long Content**: 
  - Header remains fixed at top
  - Content area scrolls
  - Footer remains fixed at bottom
  - Scroll indicator/shadow shows more content available

### Button Interactions
- Cancel button: Secondary variant, closes modal
- Confirm button: Primary or Danger variant, executes action then closes
- Buttons in footer are right-aligned with gap between them

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Fixed widths (400px, 500px, 800px)
- Centered in viewport
- Full animation effects
- Hover states active

### Tablet (768px - 1023px)
- Same widths but max-width: 90vw
- Maintain centering
- Touch-friendly button sizes
- Consider increasing padding slightly

### Mobile (<768px)
- **Width**: 95vw (almost full width)
- **Max Height**: 90vh
- **Padding**: Reduced to `var(--spacing-16)` (16px)
- **Font Sizes**: Maintain readability
- **Buttons**: Full-width or stacked vertically
- **Bottom Sheet Alternative**: Consider bottom sheet pattern for mobile

### Mobile-Specific Adjustments
```tsx
// Stack buttons vertically on mobile
<div className="flex flex-col md:flex-row gap-3">
  <Button variant="secondary" fullWidth>Cancel</Button>
  <Button variant="primary" fullWidth>Confirm</Button>
</div>
```

### Viewport Height Handling
```tsx
// Ensure modal fits in viewport
<div style={{
  maxHeight: '90vh',
  overflow: 'auto'
}}>
  {/* Modal content */}
</div>
```

### Bottom Sheet Pattern (Mobile Alternative)
For mobile devices, consider using a bottom sheet that slides up from the bottom instead of a centered modal:
```tsx
{isMobile ? (
  <BottomSheet isOpen={isOpen} onClose={onClose}>
    {content}
  </BottomSheet>
) : (
  <Modal isOpen={isOpen} onClose={onClose}>
    {content}
  </Modal>
)}
```

---

## Code Example
```tsx
import { Modal } from './components/Modal';
import { Button } from './components/Button';

// Basic modal
<Modal
  size="md"
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Edit Profile"
>
  <div className="space-y-4">
    <TextInput label="Name" value={name} onChange={setName} />
    <TextInput label="Email" value={email} onChange={setEmail} />
  </div>
  
  <div className="flex gap-3 justify-end mt-6">
    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleSave}>
      Save Changes
    </Button>
  </div>
</Modal>

// Confirmation modal (Delete action)
<Modal
  size="sm"
  isOpen={isDeleteModalOpen}
  onClose={() => setIsDeleteModalOpen(false)}
  title="Delete Task"
>
  <p style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>
    Are you sure you want to delete this task? This action cannot be undone.
  </p>
  
  <div className="flex gap-3 justify-end">
    <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
      Cancel
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  </div>
</Modal>

// Large modal with scrollable content
<Modal
  size="lg"
  isOpen={isDetailsModalOpen}
  onClose={() => setIsDetailsModalOpen(false)}
  title="Project Details"
>
  <div className="space-y-6 max-h-[60vh] overflow-y-auto">
    {/* Long content that scrolls */}
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
  
  <div className="flex gap-3 justify-end mt-6 pt-6 border-t">
    <Button variant="secondary" onClick={() => setIsDetailsModalOpen(false)}>
      Close
    </Button>
  </div>
</Modal>

// Modal without close button (critical action)
<Modal
  size="sm"
  isOpen={isCriticalModalOpen}
  onClose={() => {}} // Empty function prevents closing
  title="Critical Action"
  showCloseButton={false}
  closeOnBackdropClick={false}
  closeOnEsc={false}
>
  <p>You must complete this action to continue.</p>
  
  <div className="flex gap-3 justify-end mt-6">
    <Button variant="primary" onClick={handleCriticalAction}>
      Continue
    </Button>
  </div>
</Modal>
```

---

## Best Practices
1. **Use sparingly**: Modals interrupt user flow; use only when necessary
2. **Clear purpose**: Make modal purpose obvious with descriptive title
3. **Escape route**: Always provide a way to close (unless critical)
4. **Focus management**: Ensure proper focus handling for accessibility
5. **Prevent body scroll**: Lock background scrolling when modal is open
6. **Action clarity**: Make action buttons clear (Cancel vs. Save, Delete, etc.)
7. **Avoid nesting**: Never open a modal from within another modal
8. **Loading states**: Show loading indicators for async actions
9. **Error handling**: Display errors within modal, don't close on error
10. **Mobile consideration**: Test on mobile; consider bottom sheet alternative

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
