# AssignedMembersButton Component Guideline

## 1. Overview
The AssignedMembersButton displays the primary assignee of a task or project. It combines an avatar with the assignee's name in a compact button format.

**Usage**: Use in task rows, cards, or headers to show ownership.

## 2. Variants
The component has **1 primary variant**:

### Standard
- **Content**: Avatar (xs) + Name
- **Background**: Transparent (default), Grey-01 (hover)
- **Border**: 1px solid `var(--border)` (optional/situational)

## 3. Sizes
### Fixed Dimensions
- **Width**: 124px
- **Height**: 32px
- **Avatar**: 24px (xs)
- **Padding**: 0 8px

## 4. States
### Default
- **Background**: Transparent
- **Border**: `var(--border)`

### Hover
- **Background**: `var(--grey-01)`
- **Tooltip**: Shows full name if truncated

### Truncated
- **Text**: Ends with ellipsis (...)
- **Behavior**: Enables tooltip on hover

## 5. Anatomy
```
┌──────────────────────┐
│ (A) Assignee Name    │
└──────────────────────┘
```

**Components**:
1. **Container**: Pill-shaped button
2. **Avatar**: User avatar or initials
3. **Text**: Assignee name or email
4. **Border**: Thin border outline

## 6. Rules
1. **Single Member**: Currently displays only the first member in the list
2. **Truncation**: Text truncates if it exceeds available width (approx 124px)
3. **Tooltip**: Only appears if text is truncated
4. **Clickable**: Triggers `onClick` (e.g., to open assignment modal)

## 7. Icon Placement
- **Avatar**: Left aligned, 24px size
- **Gap**: 2px between avatar and text

## 8. Accessibility
### Keyboard Navigation
- **Focus**: Standard button focus
- **Enter/Space**: Trigger click handler

## 9. Interaction Behaviour
### Hover
1. Background darkens slightly
2. If text truncated -> Tooltip appears bottom-right

### Click
1. Triggers assignment selection modal

## 10. Responsive Behaviour
- **Fixed Size**: 124px width maintained
- **Mobile**: Touch target might need expansion if used in touch context (consider wrapping in larger hit area)

---

## Code Example
```tsx
import { AssignedMembersButton } from './components/AssignedMembersButton';

<AssignedMembersButton
  members={[{
    id: '1',
    name: 'Jane Doe',
    initials: 'JD',
    color: '#FF6B6B',
    email: 'jane@example.com',
    role: 'Assignee'
  }]}
  onClick={openAssignModal}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
