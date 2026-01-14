# Textarea Component Guideline

## 1. Overview
The Textarea component is a multi-line text input field that automatically adjusts height based on content. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use textareas for longer form inputs like descriptions, comments, notes, and messages where users need multiple lines of text.

## 2. Variants
The Textarea component has **1 base variant** with different visual states:

### Default
- **Background**: `var(--input-background)`
- **Border**: 1px solid `var(--border)`
- **Text Color**: `var(--text-primary)`
- **Border Radius**: `var(--radius-8)`
- **Use Case**: Standard multi-line text input

## 3. Sizes
The Textarea component supports **2 sizes**:

### Small (sm)
- **Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-label)` (14px)
- **Use Case**: Compact forms, inline comments

### Medium (md)
- **Padding**: `var(--spacing-8) var(--spacing-12)` (8px 12px)
- **Font Size**: `var(--text-base)` (16px)
- **Use Case**: Standard forms, descriptions, messages

## 4. States

### Default
- Background: `var(--input-background)`
- Border: 1px solid `var(--border)`
- Text: `var(--text-primary)`
- Placeholder: `var(--grey-05)`

### Focus
- **Border**: 1px solid `var(--black)`
- **Border Transition**: 200ms
- **Background**: `var(--input-background)`
- **Outline**: None (custom border instead)

### Hover
- No specific hover state (relies on focus)

### Disabled
- **Background**: `var(--grey-03)`
- **Border**: 1px solid `var(--grey-04)`
- **Text**: `var(--grey-04)`
- **Cursor**: `not-allowed`
- **No interactions**

### Error
- **Border**: 1px solid `var(--alert-red)`
- **Label**: `var(--alert-red)`
- **Error Message**: Displayed below textarea
- **Focus Border**: Remains red

### With Content
- Auto-resizes up to 4 rows
- Shows scrollbar if content exceeds 4 rows
- Height transitions smoothly

## 5. Anatomy
```
┌─────────────────────────────┐
│ Label*                      │ ← Optional label with asterisk
├─────────────────────────────┤
│ Enter text here...          │ ← Placeholder
│                             │
│                             │
│                         250 │ ← Character counter (optional)
└─────────────────────────────┘
  Error message (if any)       ← Error text
```

**Components**:
1. **Label**: Optional field label with required indicator
2. **Textarea Container**: Rounded rectangle with border
3. **Text Content**: User-entered text
4. **Placeholder**: Hint text when empty
5. **Character Counter**: Remaining characters (bottom-right)
6. **Error Message**: Validation feedback (below textarea)

## 6. Rules
1. **Auto-Resize**: Height automatically adjusts to content (min: 1 row, max: 4 rows)
2. **Scrolling**: Vertical scroll appears when content exceeds 4 rows
3. **Border Radius**: Always use `var(--radius-8)` (8px)
4. **Font Weight**: Always use `var(--font-weight-regular)` for text
5. **Minimum Rows**: Start with 1 row (configurable via `rows` prop)
6. **Maximum Rows**: Hard limit of 4 rows before scrolling
7. **Resize Handle**: Disabled (`resize: none`)
8. **Line Breaks**: 
   - Shift+Enter: Creates new line
   - Enter alone: Prevented (no action)
9. **Character Limit**: Default 1000 characters (configurable via `maxLength`)
10. **Bottom Padding**: Increased when character counter is visible

## 7. Icon Placement
The Textarea component does not support icons by default, but includes:

### Character Counter
- **Position**: Absolute, bottom-right
- **Bottom**: `var(--spacing-12)`
- **Right**: `var(--spacing-8)`
- **Font Size**: `var(--text-caption)`
- **Color**: `var(--grey-05)`
- **Content**: Remaining characters (e.g., "250")

### Optional Icon Support
Icons can be added via wrapper components or custom implementations, typically:
- Top-right: Action buttons (e.g., formatting, emoji)
- Bottom-left: Additional metadata or hints

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate to/from textarea
- **Shift+Tab**: Navigate backward
- **Enter**: Prevented (no default action)
- **Shift+Enter**: Create new line
- **Escape**: Blur textarea (optional)
- **Arrow Keys**: Navigate text cursor

### Screen Readers
- Associate label using `htmlFor` and `id`
- Include `aria-label` if no visible label
- Use `aria-describedby` for error messages
- Include `aria-required="true"` for required fields
- Announce character count updates

### Focus Management
- Clear visible focus indicator (black border)
- Maintain focus after typing
- Focus outline should be distinct from default border

### Error Handling
```tsx
<Textarea
  id="description"
  label="Description"
  required
  errorMessage="Description is required"
  aria-describedby="description-error"
/>
<div id="description-error" role="alert">
  Description is required
</div>
```

### Color Contrast
- **Text**: Dark text on light background (WCAG AAA)
- **Placeholder**: Grey text on light background (WCAG AA)
- **Error**: Red text for clear visibility (WCAG AA)
- **Border**: Sufficient contrast with background

## 9. Interaction Behaviour

### Auto-Resize Flow
1. User types in textarea
2. Content height is calculated
3. Textarea height adjusts automatically
4. Maximum height: 4 rows
5. If content exceeds 4 rows:
   - Scrollbar appears
   - Height remains at 4 rows
   - `overflow-y: auto`

### Focus Flow
1. User clicks/tabs into textarea
2. Border changes from grey to black
3. Cursor appears in text field
4. User types content
5. Character counter updates (if enabled)
6. User clicks outside or tabs away
7. Border returns to grey
8. `onBlur` callback triggered

### Character Limit Flow
1. User types in textarea
2. Character counter decreases
3. When limit reached:
   - No more input accepted
   - Counter shows "0"
   - Visual feedback optional (not built-in)

### Enter Key Behavior
- **Enter**: Prevented (no action)
- **Shift+Enter**: Creates new line
- Custom behavior can be added via `onKeyDown` prop

### Error State Flow
1. Validation triggered (e.g., form submit)
2. Error detected
3. Border turns red
4. Label turns red
5. Error message appears below
6. User corrects input
7. Error cleared via parent component
8. Border returns to normal

## 10. Responsive Behaviour

### Desktop (≥1024px)
- Use standard sizes (sm, md)
- Fixed width or full width based on layout
- Auto-resize fully functional
- Scrollbar appears when needed

### Tablet (768px - 1023px)
- Prefer `size="md"` for better readability
- Consider full width in forms
- Maintain auto-resize behavior
- Touch-friendly scrollbar

### Mobile (<768px)
- Always use `size="md"` (16px font prevents zoom on iOS)
- Full width layout recommended
- Increase padding for better touch
- Virtual keyboard considerations:
  - Textarea scrolls into view when focused
  - Character counter remains visible
  - Submit button accessible without dismissing keyboard

### Font Size Considerations
```tsx
// iOS prevents zoom with 16px+ font size
<Textarea 
  size="md"  // 16px font size
  placeholder="Enter your message"
/>
```

### Responsive Width
```tsx
// Mobile: Full width, Desktop: Fixed width
<Textarea
  className="w-full md:w-[400px]"
  size="md"
  placeholder="Description"
/>
```

### Orientation
- Portrait: Full width recommended
- Landscape: Fixed width acceptable for shorter forms

---

## Code Example
```tsx
import { useState } from 'react';
import { Textarea } from './components/Textarea';

function CommentForm() {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (comment.length < 10) {
      setError('Comment must be at least 10 characters');
      return;
    }
    setError('');
    // Submit comment
  };

  return (
    <div>
      {/* Basic textarea */}
      <Textarea
        size="md"
        placeholder="Enter your comment..."
        value={comment}
        onChange={setComment}
        label="Comment"
        id="comment"
        required
      />

      {/* With character limit */}
      <Textarea
        size="md"
        placeholder="Describe the issue..."
        maxLength={500}
        label="Description"
        id="description"
        required
      />

      {/* With error state */}
      <Textarea
        size="md"
        placeholder="Additional notes..."
        value={comment}
        onChange={setComment}
        label="Notes"
        id="notes"
        errorMessage={error}
      />

      {/* Disabled state */}
      <Textarea
        size="md"
        value="This field is disabled"
        label="Locked Field"
        id="locked"
        disabled
      />

      {/* Custom rows and max length */}
      <Textarea
        size="md"
        rows={3}
        maxLength={1000}
        placeholder="Start typing..."
        label="Long Text"
        id="long-text"
      />
    </div>
  );
}
```

---

## Advanced Usage

### Custom Key Handling
```tsx
<Textarea
  onKeyDown={(e) => {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault();
      // Submit on Cmd+Enter
      handleSubmit();
    }
  }}
/>
```

### Forwarded Ref
```tsx
const textareaRef = useRef<HTMLTextAreaElement>(null);

<Textarea
  ref={textareaRef}
  onSubmit={() => textareaRef.current?.focus()}
/>
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
