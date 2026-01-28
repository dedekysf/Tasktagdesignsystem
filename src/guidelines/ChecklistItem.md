# ChecklistItem Component Guideline

## 1. Overview
The ChecklistItem component represents a single task within a checklist. It supports checking/unchecking, text editing, deletion, and drag-and-drop reordering.

**Usage**: Use in task details, sub-tasks lists, or any to-do list interface.

## 2. Variants
The ChecklistItem component has **2 primary states** that act like variants:

### View Mode
- **Content**: Checkbox + Text + Delete Action
- **Interaction**: Click checkbox to toggle, click text to edit

### Edit Mode
- **Content**: Textarea input + Save/Cancel behavior
- **Interaction**: Typing, Enter to save, Escape to cancel

## 3. Sizes
### Standard
- **Height**: Auto (min 40px)
- **Padding**: `16px 56px 16px 24px` (view mode)
- **Checkbox Size**: 20px
- **Font Size**: `var(--text-label)` (14px)

## 4. States
### Default (Unchecked)
- **Text**: `var(--text-primary)`
- **Checkbox**: Empty with grey border

### Checked
- **Text**: `var(--grey-04)` with line-through
- **Checkbox**: Green background with white checkmark

### Hover
- **Background**: `var(--grey-01)`
- **Drag Handle**: Visible (left)
- **Delete Button**: Visible (right)

### Editing
- **Background**: White
- **Input**: Textarea with auto-height
- **Actions**: Enter to save, Esc to cancel

### Dragging
- **Opacity**: 0.5
- **Appearance**: Ghost image follows cursor

## 5. Anatomy
```
┌───────────────────────────────────────┐
│ [::]  [✓]  Text Content           [X] │
└───────────────────────────────────────┘
   ↑     ↑       ↑                   ↑
 Drag  Checkbox  Text             Delete
```

**Components**:
1. **Drag Handle**: GripVertical icon (visible on hover)
2. **Checkbox**: Custom SVG checkbox with animation
3. **Text Area**: Display text or editing input
4. **Delete Action**: 'X' button (visible on hover)

## 6. Rules
1. **Truncation**: Text truncates after 50 chars in view (tooltip shows full)
2. **Multiline**: Supports multiline text in edit mode
3. **Drag & Drop**: Enabled only when unchecked
4. **Discard Changes**: Warns user if cancelling edits with changes
5. **Auto-Save**: Saves on Enter (unless Shift+Enter for newline)

## 7. Icon Placement
- **Drag Handle**: Absolute left (8px)
- **Checkbox**: Left of text (standard flow)
- **Delete**: Absolute right (16px)

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus checkbox, edit field, delete button
- **Space**: Toggle checkbox
- **Enter**: Edit text (if focused on text area equivalent)

## 9. Interaction Behaviour
### Editing
1. Click text (if unchecked)
2. Swaps to Textarea
3. Type changes
4. Press Enter -> Save & Exit edit mode
5. Press Esc -> Cancel (shows dialog if changed)

### Checking
1. Click checkbox
2. Animation plays (scale up/down)
3. State toggles
4. Line-through applied/removed

## 10. Responsive Behaviour
### Mobile
- **Hover Actions**: Always visible or require tap-to-reveal
- **Drag Handles**: Always visible for touch drag
- **Sizing**: Touch targets minimum 44px

---

## Code Example
```tsx
import { ChecklistItem } from './components/ChecklistItem';

<ChecklistItem
  id="1"
  text="Review design specs"
  checked={false}
  index={0}
  onToggle={(id) => toggleCheck(id)}
  onDelete={(id) => deleteItem(id)}
  moveItem={(drag, hover) => reorder(drag, hover)}
  onUpdate={(id, txt) => updateText(id, txt)}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
