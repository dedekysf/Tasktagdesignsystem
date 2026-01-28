# PriorityDropdown Component Guideline

## 1. Overview
The PriorityDropdown component allows users to assign a priority level (High, Medium, Low) to a task. It uses specific visual indicators (icons and colors) for each level.

**Usage**: Use in task creation or task details to set urgency.

## 2. Variants
The component has **1 primary variant**:

### Standard
- **Content**: List of 3 priority options with icons
- **Styling**: White card with shadow

## 3. Sizes
### Fixed Width
- **Width**: 180px
- **Padding**: 8px (py-2)
- **Item Height**: Auto (approx 36px)

## 4. States
### Default
- **Background**: `var(--white)`
- **Border**: `var(--border)`

### Hover (Option)
- **Background**: `var(--grey-01)`
- **Cursor**: `pointer`

## 5. Anatomy
```
┌──────────────────────┐
│ [^^] High            │
│ [=]  Medium          │
│ [vv] Low             │
└──────────────────────┘
```

**Components**:
1. **Container**: White rounded card
2. **Option Row**: Icon + Label
3. **Icons**: Colored lucide-react icons

## 6. Rules
1. **Levels**: High, Medium, Low (fixed set)
2. **Colors**:
   - High: `var(--alert-red)`
   - Medium: `var(--vivid-yellow)`
   - Low: `var(--pastel-blue)`
3. **Selection**: Clicking an option triggers `onSelect`

## 7. Icon Placement
- **Icon**: Left aligned (20px)
- **Label**: Right of icon

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus buttons
- **Enter**: Select priority

## 9. Interaction Behaviour
### Selection
1. User clicks option
2. Priority is updated
3. Dropdown closes

## 10. Responsive Behaviour
- **Fixed Width**: 180px
- **Mobile**: Touch targets should be verified for size

---

## Code Example
```tsx
import { PriorityDropdown } from './components/PriorityDropdown';

<PriorityDropdown
  onSelect={(p) => setPriority(p)}
  onClose={() => setIsOpen(false)}
/>
```
