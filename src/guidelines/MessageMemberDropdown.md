# MessageMemberDropdown Component Guideline

## 1. Overview
The MessageMemberDropdown allows users to select one or multiple team members to start a new chat or conversation. It includes search functionality and bulk selection.

**Usage**: Use in "New Message" flow or adding members to a channel.

## 2. Variants
The component has **1 primary variant**:

### Standard
- **Content**: Search bar + Member list + Action button
- **Features**: Multi-select support

## 3. Sizes
### Fixed Width
- **Width**: 380px
- **Height**: Auto (max 300px list height)
- **Padding**: Internal padding varies

## 4. States
### Default
- **Search**: Empty
- **Selection**: None or pre-selected
- **Button**: Disabled if no selection

### Searching
- **List**: Filtered based on query
- **Empty State**: "No members found"

### Selection Active
- **Button**: Enabled "Create Chat"
- **Checkbox**: Checked state visual

## 5. Anatomy
```
┌─────────────────────────────────┐
│ [Search members...]             │ ← Search Input
├─────────────────────────────────┤
│ [ ] All                         │ ← Select All
│ [x] Member Name                 │ ← Member Row
│ [ ] Member Name                 │
│ ...                             │
├─────────────────────────────────┤
│ [Create Chat]                   │ ← Action Footer
└─────────────────────────────────┘
```

**Components**:
1. **Container**: White card with shadow
2. **Search Input**: Standard search field
3. **List**: Scrollable area with Checkbox items
4. **Footer**: Bordered area with primary action button

## 6. Rules
1. **Search**: Filters by name (case-insensitive)
2. **Select All**: Toggles all currently visible/available members
3. **Button State**: Disabled when 0 members selected
4. **Scroll**: List scrolls independently of container

## 7. Icon Placement
- **Search Icon**: Inside search input
- **Checkbox**: Left of member name

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus search -> list items -> button
- **Space**: Toggle selection

## 9. Interaction Behaviour
### Filtering
1. User types in search
2. List updates immediately
3. "All" checkbox applies to filtered results (if implemented) or all members

### Creating
1. Select members
2. Click "Create Chat"
3. `onCreateChat` callback fires with IDs

## 10. Responsive Behaviour
- **Fixed Width**: 380px (Desktop/Tablet)
- **Mobile**: Full width or modal presentation recommended

---

## Code Example
```tsx
import { MessageMemberDropdown } from './components/MessageMemberDropdown';

<MessageMemberDropdown
  members={teamMembers}
  onCreateChat={(ids) => startChat(ids)}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
