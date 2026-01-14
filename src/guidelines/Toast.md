# Toast Component Guideline

## 1. Overview
The Toast component provides temporary, non-intrusive notifications to users about actions, events, or system status. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use toasts for brief feedback messages like successful saves, error alerts, warnings, and informational updates that don't require user action.

## 2. Variants
The Toast component supports **4 layout variants**:

### Title Only
- **Content**: Title text + Icon
- **Layout**: Horizontal (Icon | Title)
- **Use Case**: Simple notifications, quick feedback

### Title + Caption
- **Content**: Title text + Caption text + Icon
- **Layout**: Horizontal with stacked text (Icon | Title/Caption)
- **Use Case**: Detailed notifications with secondary information

### Title + Arrow
- **Content**: Title text + Icon + Arrow
- **Layout**: Horizontal (Icon | Title | Arrow)
- **Use Case**: Actionable notifications, clickable toasts

### Title + Caption + Arrow
- **Content**: Title + Caption + Icon + Arrow
- **Layout**: Horizontal with stacked text (Icon | Title/Caption | Arrow)
- **Use Case**: Detailed actionable notifications

## 3. Types (State Colors)
The Toast component supports **4 semantic types**:

### Success
- **Icon**: Check (✓)
- **Icon Color**: `#00d9a5` (Secondary Green)
- **Use Case**: Successful operations (saved, created, updated)

### Error
- **Icon**: X (✕)
- **Icon Color**: `#FF6B6B` (Alert Red)
- **Use Case**: Failed operations, validation errors

### Warning
- **Icon**: Alert Circle (!)
- **Icon Color**: `#FFB020` (Warning Yellow)
- **Use Case**: Warnings, potential issues, cautionary messages

### Info
- **Icon**: Info (i)
- **Icon Color**: `#4A9EFF` (Info Blue)
- **Use Case**: Informational messages, tips, general notifications

## 4. States

### Visible (Active)
- **Background**: `var(--text-primary)` (dark)
- **Shadow**: `var(--elevation-lg)`
- **Opacity**: 1
- **Animation**: Slide in from top/bottom

### Progress
- **Progress Bar**: Animated from 100% to 0%
- **Duration**: Configurable (default 3000ms)
- **Color**: `var(--secondary-green)`
- **Background**: `var(--light-mint)`

### Exiting
- **Opacity**: Fades to 0
- **Animation**: Slide out
- **Duration**: 200ms

### Hover (Optional)
- Can pause auto-dismiss timer
- Slight scale or shadow increase

## 5. Anatomy
```
┌─────────────────────────────────────┐
│ [Icon]  Title Text         [Arrow] │ ← Content area
│         Caption text (optional)     │
├─────────────────────────────────────┤
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← Progress bar
└─────────────────────────────────────┘
```

**Components**:
1. **Container**: Dark rounded rectangle with shadow
2. **Icon**: Left-aligned semantic icon (20px)
3. **Title**: Primary message text (white, semibold)
4. **Caption**: Secondary text (grey, regular, optional)
5. **Arrow**: Right-aligned arrow icon (optional)
6. **Progress Bar**: Bottom bar showing remaining time

**Spacing**:
- **Padding**: 10px 16px (top/bottom, left/right)
- **Gap**: 12px between elements
- **Border Radius**: `var(--radius-lg)`
- **Progress Height**: 4px

## 6. Rules
1. **Duration**: Default 3000ms (3 seconds), configurable
2. **Auto-Dismiss**: Toast dismisses automatically after duration
3. **Progress Bar**: Always visible, shows remaining time
4. **Position**: Typically top-right or bottom-right of viewport
5. **Stacking**: Multiple toasts stack vertically with gap
6. **Icon Color**: Matches semantic type (success, error, warning, info)
7. **Text Color**: Always white for title, grey for caption
8. **Background**: Always dark (`var(--text-primary)`)
9. **Max Width**: Constrained to prevent overly wide toasts
10. **Single Line**: Title and caption should not wrap (use `white-space: nowrap`)

## 7. Icon Placement

### Left Icon (Status)
- **Position**: Left side, vertically centered
- **Size**: 20px (lucide-react size-5)
- **Color**: White
- **Stroke Width**: 2
- **Icons**:
  - Success: Check
  - Error: X
  - Warning: AlertCircle
  - Info: Info

### Right Arrow (Action Indicator)
- **Position**: Right side, vertically centered
- **Size**: 20px (lucide-react size-5)
- **Color**: White
- **Stroke Width**: 2
- **Icon**: ArrowRight
- **Purpose**: Indicates toast is clickable/actionable

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate to toast (if actionable)
- **Enter/Space**: Activate toast action (if clickable)
- **Escape**: Dismiss toast immediately

### Screen Readers
- Use `role="alert"` for important messages (errors)
- Use `role="status"` for non-critical updates
- Use `aria-live="polite"` for most toasts
- Use `aria-live="assertive"` for critical errors
- Include descriptive text in aria-label

### Focus Management
- Don't steal focus from current element
- Allow keyboard users to dismiss toasts
- Provide visible focus indicator if interactive

### ARIA Example
```tsx
<div 
  role="alert" 
  aria-live="polite"
  aria-label="Success: Changes saved"
>
  <Toast type="success" title="Saved!" caption="All changes saved" />
</div>
```

### Color Contrast
- **Title (White on Dark)**: WCAG AAA compliance
- **Caption (Grey on Dark)**: WCAG AA compliance
- **Icons**: High contrast, easily distinguishable

### Screen Reader Announcements
- Success: "Success: [Title]. [Caption]"
- Error: "Error: [Title]. [Caption]"
- Warning: "Warning: [Title]. [Caption]"
- Info: "Info: [Title]. [Caption]"

## 9. Interaction Behaviour

### Display Flow
1. Toast enters viewport (slide-in animation)
2. Progress bar starts at 100%
3. Progress decreases over duration (e.g., 3 seconds)
4. When progress reaches 0%:
   - Toast begins exit animation
   - Opacity fades to 0
   - Toast slides out
   - Toast is removed from DOM

### Hover Behavior (Optional)
1. User hovers over toast
2. Auto-dismiss timer pauses
3. Progress bar animation pauses
4. User moves mouse away
5. Timer resumes
6. Progress bar continues

### Click Behavior (With Arrow)
1. User sees arrow icon
2. User clicks toast
3. Associated action is triggered
4. Toast dismisses immediately (optional)

### Multiple Toasts
- New toasts stack above/below existing toasts
- Each toast has independent timer
- Toasts dismiss in order (oldest first)
- Gap between toasts: 12px

### Manual Dismissal
- Click close button (if implemented)
- Press Escape key
- Toast dismisses immediately
- Skip exit animation (instant removal)

## 10. Responsive Behaviour

### Desktop (≥1024px)
- **Position**: Fixed top-right or bottom-right
- **Max Width**: 400px
- **Offset**: 20px from edges
- **Stacking**: Vertical with 12px gap

### Tablet (768px - 1023px)
- **Position**: Fixed top-center or bottom-center
- **Max Width**: 90% of viewport
- **Offset**: 16px from edges
- **Stacking**: Vertical with 12px gap

### Mobile (<768px)
- **Position**: Fixed bottom-center
- **Max Width**: calc(100% - 32px)
- **Offset**: 16px from bottom
- **Stacking**: Vertical with 8px gap
- **Font Size**: Maintain readability
- **Touch Target**: Minimum 44px height (if clickable)

### Orientation
- Portrait: Bottom-center recommended
- Landscape: Top-right or bottom-right acceptable

### Responsive Positioning
```css
/* Desktop: Top-right */
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

/* Mobile: Bottom-center */
@media (max-width: 768px) {
  .toast-container {
    top: auto;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }
}
```

---

## Code Example
```tsx
import { Toast } from './components/Toast';

// Title only
<Toast
  variant="title-only"
  type="success"
  title="Saved!"
  duration={3000}
/>

// Title + Caption
<Toast
  variant="title-caption"
  type="error"
  title="Upload failed"
  caption="File size exceeds 10MB"
  duration={5000}
/>

// Title + Arrow (Actionable)
<Toast
  variant="title-arrow"
  type="info"
  title="New update available"
  duration={4000}
/>

// Title + Caption + Arrow
<Toast
  variant="title-caption-arrow"
  type="warning"
  title="Connection unstable"
  caption="Changes may not be saved"
  duration={6000}
/>
```

---

## Implementation Example with Toast Manager
```tsx
import { useState } from 'react';

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  caption?: string;
}

function ToastManager() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-[9999]">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          variant="title-caption"
          type={toast.type}
          title={toast.title}
          caption={toast.caption}
          onComplete={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

// Usage
addToast({
  type: 'success',
  title: 'Task created',
  caption: 'Your task has been saved'
});
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
