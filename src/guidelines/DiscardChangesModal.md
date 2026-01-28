# DiscardChangesModal Component Guideline

## 1. Overview
The DiscardChangesModal is a specialized confirmation dialog used when a user attempts to leave an editing state without saving. It prevents accidental data loss.

**Usage**: Trigger when user cancels an edit form or navigates away with unsaved changes.

## 2. Variants
The component has **1 primary variant**:

### Standard
- **Type**: Destructive confirmation
- **Visual**: Simple modal with clear warning

## 3. Sizes
### Fixed Width
- **Width**: 400px
- **Padding**: 24px
- **Border Radius**: 16px

## 4. States
### Open
- **Overlay**: Dark backdrop
- **Focus**: Trap enabled

## 5. Anatomy
```
┌─────────────────────────────────┐
│ Discard Changes?            [X] │ ← Header
├─────────────────────────────────┤
│ Are you sure you want to...     │ ← Description
├─────────────────────────────────┤
│                       [Discard] │ ← Action
└─────────────────────────────────┘
```

**Components**:
1. **Container**: White modal card
2. **Title**: Semibold heading
3. **Description**: Explanatory text
4. **Action Button**: Primary/Destructive button (Black background in implementation)

## 6. Rules
1. **Destructive Action**: The primary button discards changes (irreversible)
2. **Safe Action**: 'X' or outside click cancels the discard (keeps changes, stays in edit mode)
3. **Outside Click**: Closes modal (equivalent to Cancel)

## 7. Icon Placement
- **Close Icon**: Top right 'X'

## 8. Accessibility
### Keyboard Navigation
- **Esc**: Close modal (Cancel)
- **Tab**: Focus buttons

## 9. Interaction Behaviour
### Confirm Discard
1. Click "Discard"
2. `onDiscard` fires
3. Modal closes
4. Parent component reverts changes

### Cancel
1. Click 'X' or outside
2. `onCancel` fires
3. Modal closes
4. User remains in edit mode

## 10. Responsive Behaviour
- **Width**: 400px fixed (Desktop)
- **Mobile**: Max width 90vw

---

## Code Example
```tsx
import { DiscardChangesModal } from './components/DiscardChangesModal';

<DiscardChangesModal
  isOpen={showWarning}
  onDiscard={handleRevert}
  onCancel={() => setShowWarning(false)}
  title="Unsaved Changes"
  description="You have unsaved edits. Are you sure you want to leave?"
  actionButtonText="Leave"
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
