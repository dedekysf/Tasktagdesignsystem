# ProjectSelectModal Component Guideline

## 1. Overview
The ProjectSelectModal allows users to choose a project from a searchable list. It displays project names along with their associated icons and colors.

**Usage**: Use when assigning a task to a project or moving items between projects.

## 2. Variants
The component has **1 primary variant**:

### Standard
- **Content**: Header + Search + List
- **Visual**: Centered modal dialog

## 3. Sizes
### Fixed Width
- **Width**: 504px
- **Max Height**: Auto (list max 300px)
- **Padding**: 24px (py-6), 16px (px-4)

## 4. States
### Open
- **Overlay**: Dark backdrop
- **Focus**: Search input automatically focused (optional)

### Filtering
- **Input**: User text
- **List**: Filtered project rows

### Empty
- **Content**: "No projects found" message

## 5. Anatomy
```
┌─────────────────────────────────┐
│ Select Project              [X] │ ← Header
├─────────────────────────────────┤
│ [Search Input]                  │
├─────────────────────────────────┤
│ [Icon] Project Name             │ ← Project Row
│ [Icon] Project Name             │
│ ...                             │
└─────────────────────────────────┘
```

**Components**:
1. **Container**: White modal card
2. **Project Row**: Icon box (colored) + Name text
3. **Search**: SearchInput component
4. **Close**: 'X' button in header

## 6. Rules
1. **Search**: Filters by project name
2. **Selection**: Clicking a row selects project and closes modal immediately
3. **Icons**: Display 'Helmet' or 'Zap' based on project type
4. **Colors**: Icon background uses project color variable

## 7. Icon Placement
- **Project Icon**: Left of project name (24px box)
- **Search Icon**: Inside input
- **Close Icon**: Top right

## 8. Accessibility
### Keyboard Navigation
- **Esc**: Close modal
- **Tab**: Navigate focusable elements
- **Enter**: Select focused project (if button)

## 9. Interaction Behaviour
### Selection
1. Click Project Row
2. `onSelect` fires
3. `onClose` fires
4. Modal disappears

## 10. Responsive Behaviour
- **Desktop**: 504px width, centered
- **Mobile**: Max width 90vw or bottom sheet

---

## Code Example
```tsx
import { ProjectSelectModal } from './components/ProjectSelectModal';

<ProjectSelectModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onSelect={(project) => assignProject(project)}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
