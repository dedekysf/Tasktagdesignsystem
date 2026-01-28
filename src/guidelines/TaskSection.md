# TaskSection Component Guideline

## 1. Overview
The TaskSection component is a collapsible container that groups tasks by category (e.g., Current, Overdue, Completed). It supports drag-and-drop reordering, inline task creation, and infinite scrolling.

**Usage**: Use as the main building block for task lists or Kanban columns.

## 2. Variants
The TaskSection component adapts based on its `sectionType` prop:

### Current
- **Purpose**: Active tasks
- **Features**: Inline creation enabled, expand/collapse, infinite scroll

### Overdue
- **Purpose**: Tasks past due date
- **Features**: distinct header styling (often red/warning context)

### Completed
- **Purpose**: Finished tasks
- **Features**: Usually collapsed by default or at bottom

## 3. Sizes
### Full Width
- **Width**: 100% of container
- **Height**: Flexible (min-height depends on content)
- **Margins**: Typically has bottom margin between sections

## 4. States
### Expanded
- **Header**: Chevron points down
- **Content**: Visible task list
- **Scroll**: Internal scroll if fixed height, or natural height

### Collapsed
- **Header**: Chevron points right
- **Content**: Hidden
- **Height**: Header height only

### Drop Target
- **Visual**: Blue border/ring when dragging compatible item over
- **Interaction**: Accepts drops from allowed sections

## 5. Anatomy
```
┌───────────────────────────────────────┐
│ [v] Title (Count)               [+]   │ ← Header
├───────────────────────────────────────┤
│ [Task Item 1]                         │
│ [Task Item 2]                         │ ← Task List
│ [Task Item 3]                         │
│                                       │
│ + Add new task                        │ ← Inline Creation
└───────────────────────────────────────┘
```

**Components**:
1. **Header**: SectionHeader component with title, count, toggle
2. **List Container**: Scrollable area for tasks
3. **Task Items**: Rendered TaskItem components
4. **Inline Creator**: Input to add new tasks quickly (Current section only)

## 6. Rules
1. **Drag & Drop**: Allows reordering within section, moving between allowed sections
2. **Infinite Scroll**: Loads more tasks when scrolled to bottom (80%)
3. **Empty States**: Shows specific message based on section type
4. **Selection**: Supports multi-select drag
5. **Inline Creation**: Only available in 'Current' section typically

## 7. Interaction Behaviour
### Reordering
1. Drag task handle
2. Drop in new position
3. `onReorder` fires with new array

### Cross-Section Drop
1. Drag task from 'Current'
2. Drop on 'Completed' section header or list
3. `onCrossSectionDrop` fires

### Loading More
1. Scroll to bottom of expanded list
2. `isLoadingMore` becomes true
3. `visibleCount` increases by 10

## 8. Accessibility
### Keyboard Navigation
- **Focus**: Header toggle is focusable
- **Expand/Collapse**: Enter/Space on header
- **Task List**: Tab through tasks

## 9. Responsive Behaviour
### Desktop
- **Scroll**: Internal scrolling if constrained
- **Drag**: Mouse drag enabled

### Mobile
- **Scroll**: Natural page scroll often preferred
- **Drag**: Long-press to drag (if supported) or disable drag

---

## Code Example
```tsx
import { TaskSection } from './components/TaskSection';

<TaskSection
  title="Today"
  count={5}
  tasks={todayTasks}
  sectionType="current"
  isExpanded={true}
  onToggle={toggleSection}
  onAddTask={handleAddTask}
  onReorder={updateOrder}
  TaskItemComponent={TaskItem}
  SectionHeaderComponent={SectionHeader}
  showInlineCreation={true}
  selectedTaskIds={selectedIds}
  onTaskSelect={selectTask}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
