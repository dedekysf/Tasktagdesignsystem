# TaskItem Component

The TaskItem represents a single task within a list or board. It is a highly interactive component supporting drag-and-drop, inline editing, and context menus.

## Overview

TaskItems are the core unit of work in the TaskTag system. They display essential information like the task name, project, priority, due date, and assignees, and allow for quick actions.

## Variants

- **Default**: Standard task display.
- **Completed**: Checked state, usually with strikethrough or dimmed appearance (handled via CSS/opacity).
- **Selected**: Highlighted background to indicate selection (for multi-action).
- **Dragging**: Visual feedback when being dragged (placeholder or ghost).

## Sizes

- **Height**: Dynamic, but typically fits within a comfortable row height (e.g., 56px or auto with padding).

## States

- **Default**: Standard view.
- **Hover**: Shows grip handle and additional action buttons (e.g., drag handle).
- **Selected**: Light Mint background (`var(--light-mint)`).
- **Dragging**: Placeholder appearance (`var(--grey-03)`).
- **Completed**: Checkbox checked.

## Anatomy

1.  **Drag Handle**: Grip icon on the far left (visible on hover).
2.  **Checkbox**: To mark as complete/incomplete.
3.  **Content**:
    - **Task Name**: Main text. Truncated with tooltip if too long.
    - **Metadata**: Project badge, Checklist count.
4.  **Metadata Actions** (Right side):
    - **Priority**: Badge/Icon (High/Medium/Low).
    - **Due Date**: Date string or "Select date".
    - **Assignees**: Avatars of assigned users.
    - **Copy Link**: Action button.

## Rules

- **Typography**: Task name uses `text-[14px]` (Label size).
- **Colors**:
    - Background: `var(--white)` (Default), `var(--light-mint)` (Selected).
    - Border: `var(--grey-03)`.
    - Text: `var(--text-primary)`.
- **Spacing**: Consistent padding (`px-4 py-2`).

## Icon Placement

- **Drag Handle**: Far left.
- **Checkbox**: Left, after drag handle.
- **Project Icon**: Next to project name.
- **Checklist Icon**: Next to checklist count.
- **Priority/Date/Assignee**: Right aligned.

## Accessibility

- **Keyboard**: Should be focusable.
- **Drag and Drop**: Accessible via keyboard (if implemented, otherwise mouse/touch).
- **Context Menu**: Custom right-click menu.

## Interaction Behaviour

- **Click**: Selects the task (single select).
- **Cmd/Ctrl + Click**: Multi-select.
- **Right Click**: Opens context menu (Duplicate, Move, Delete, etc.).
- **Drag**: Reorders task or moves between sections (Current/Overdue/Completed).
- **Hover**: Reveals hidden actions (Drag handle).

## Responsive Behaviour

- **Flex Layout**: content adjusts to available width.
- **Truncation**: Task name truncates with ellipsis if space is limited.
