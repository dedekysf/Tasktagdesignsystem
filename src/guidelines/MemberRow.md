# MemberRow Component Guideline

## 1. Overview
The MemberRow component displays user information in a list format, typically for team management or invitation lists. It includes the user's avatar, name, email, and role management controls.

**Usage**: Use in "Team Details", "Project Members", or "Share" modals.

## 2. Variants
The MemberRow component adapts based on member status:

### Active Member
- **Content**: Avatar, Name, Email, Role Dropdown
- **Actions**: Message icon, Role change

### Pending Invite
- **Content**: Empty Avatar, Email, "Pending" status
- **Actions**: Resend Invite, Cancel Invite

### Owner
- **Content**: Avatar, Name, Email, "Owner" label
- **Actions**: Read-only role (usually)

## 3. Sizes
### Standard
- **Height**: Auto (approx 72px with padding)
- **Padding**: 12px
- **Avatar**: 40px (md)

## 4. States
### Default
- **Background**: `var(--white)`
- **Border**: `var(--border)`

### Hover
- **Background**: `var(--grey-01)`
- **Actions**: Action buttons (trash, message) become visible/highlighted

### Dropdown Open
- **Background**: `var(--grey-01)`
- **Role**: Chevron rotates up

## 5. Anatomy
```
┌──────────────────────────────────────────────────┐
│ (A)  Name Name              [Message] [Role v]   │
│      email@address.com                           │
└──────────────────────────────────────────────────┘
```

**Components**:
1. **Avatar**: Left aligned
2. **Info Block**: Name (top), Email (bottom)
3. **Actions**: Message/Resend/Delete icons
4. **Role Control**: Dropdown or Text label

## 6. Rules
1. **Highlight**: Row highlights on hover or when dropdown is open
2. **Role Editing**: Owners cannot change their own role in this view (typically)
3. **Icons**: Action icons (Message, Delete) usually appear on right
4. **Pending**: Pending members show email as primary text if name missing

## 7. Icon Placement
- **Avatar**: Far left
- **Action Icons**: Right side, before Role
- **Role Chevron**: Right of Role text

## 8. Accessibility
### Keyboard Navigation
- **Focus**: Row actions are focusable
- **Dropdown**: Role dropdown accessible via Enter/Space

## 9. Interaction Behaviour
### Hovering
1. Row background turns grey
2. Utility icons (Message, Trash) appear

### Changing Role
1. Click Role button
2. Dropdown opens
3. Select new role -> Updates immediately
4. Select "Remove" -> Triggers delete

## 10. Responsive Behaviour
### Mobile
- **Layout**: Stack actions if horizontal space limited
- **Touch**: Row is tappable; Actions might need larger targets

---

## Code Example
```tsx
import { MemberRow } from './components/MemberRow';

<MemberRow
  member={{
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Viewer',
    initials: 'JS',
    color: '#4ECDC4'
  }}
  isHovered={hoveredId === '1'}
  isDropdownOpen={dropdownId === '1'}
  onMouseEnter={() => setHovered('1')}
  onMouseLeave={() => setHovered(null)}
  onToggleDropdown={() => toggleDropdown('1')}
  onUpdateRole={(role) => updateRole('1', role)}
  onDelete={() => removeMember('1')}
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
