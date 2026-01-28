# AssigneeModal

The AssigneeModal component allows users to assign team members or invite new users to a task or project via email. It supports searching, filtering, and role selection.

## Overview

The AssigneeModal is a critical component for collaboration, enabling users to manage task ownership and visibility. It provides a comprehensive interface for selecting users from a list, searching by name or email, and inviting external users.

## Variants

The modal primarily functions as a single component but can be customized via props:
- **Default**: Standard assignment flow.
- **With Initial Selection**: Opens with users already selected.
- **Custom Roles**: Can support different roles (e.g., Admin, Editor) via `roles` prop.

## Sizes

- **Web**: Fixed width of 800px, height of 480px. Centered on screen.
- **Mobile**: Responsive width (usually full width with padding), adapts to viewport.

## States

### Empty State
- Shows "Recommended" users and "Design Team" groups.
- Search input is empty.

### Search State
- Users matching the search query are displayed.
- Matches in names are highlighted.
- "Invite [email]" option appears if the query looks like an email.

### Selected State
- Selected users are displayed at the top (unless `hideInitialSelection` is true).
- "Already added" badge appears next to users in the list who are already selected.

### Loading State
- (Implied) Transitions between search and results should be instant.

## Anatomy

1.  **Header**: Title ("Invite or Add Assignee"), Copy Link button, Close button.
2.  **Search Bar**: Text input with "Add assignee by email, name or group" placeholder. Clear button appears when text is entered.
3.  **Selected List** (Optional): Horizontal or vertical list of currently selected users.
4.  **User List**: Scrollable list of users/groups.
    - **Group Header**: Collapsible (e.g., "Design Team").
    - **User Item**: Avatar, Name, Email.
5.  **Footer** (Implicit in action): Clicking a user adds them. "Assign" button (if multi-select logic requires confirmation, though current implementation seems to add immediately to local state and confirm on "Assign").

## Rules

- **Typography**: Uses `Inter` font family. Headings use `semibold`, body text uses `regular`.
- **Colors**:
    - Background: `var(--white)`
    - Text: `var(--text-primary)`, `var(--text-secondary)`
    - Hover: `var(--grey-01)`
    - Highlight: `var(--bright-yellow)`
- **Spacing**: Consistent 8px (`var(--spacing-8)`) and 16px (`var(--spacing-16)`) padding.

## Icon Placement

- **Close Icon**: Top right corner.
- **Copy Link Icon**: Inside the "Copy link" button.
- **Avatars**: Left side of each user item.
- **Group Chevron**: Right side of group headers.
- **Search Clear Icon**: Right side of search input.

## Accessibility

- **Keyboard Navigation**:
    - `Escape` key closes the modal.
    - Tab navigation should cycle through interactive elements.
- **ARIA**:
    - Role `dialog`.
    - `aria-modal="true"`.
    - Focus management (initial focus on input).
- **Contrast**: Text colors ensure sufficient contrast against background.

## Interaction Behaviour

- **Clicking User**: Toggles selection (adds/removes from local selected list).
- **Clicking Group**: Adds/removes all members of the group.
- **Searching**: Real-time filtering.
- **Copy Link**: Copies current URL to clipboard and shows "Link copied!" tooltip.
- **Outside Click**: Closes the modal (triggers `onClose`).

## Responsive Behaviour

- **Desktop**: Centered modal with backdrop. Fixed dimensions.
- **Mobile**: Should adapt to smaller screens, potentially becoming full-screen or a bottom sheet (though current implementation uses fixed width `w-[800px]`, which might need media query adjustment for mobile `max-width: 100%`).
