# Alert Component

The Alert component communicates a state that affects the system, feature, or page. It can also offer a call to action.

## Overview

Alerts are used to display important messages to the user. They can be informational, success messages, warnings, or error notifications. They typically appear at the top of a page or section.

## Variants

- **Warning**: Used for warnings or cautionary messages. Background: Light Cream. Border: Vivid Yellow.
- **Info**: Used for informational messages. Background: Light Sky. Border: Blue.
- **Success**: Used for success messages. Background: Light Mint. Border: Secondary Green.
- **Error**: Used for error messages. Background: Light Pink. Border: Alert Red.

## Sizes

- **Default**: Standard size with 16px padding.

## States

- **Default**: Shows icon, title, description, and optional action button.

## Anatomy

1.  **Container**: Background color and border based on variant.
2.  **Icon**: Leading icon (24px) indicative of the alert type (e.g., AlertTriangle for warning/error).
3.  **Content Area**:
    - **Title**: Heading 18px (Semibold).
    - **Description**: Label 14px (Regular).
4.  **Action Button** (Optional): Trailing button for user action (e.g., "Upgrade Now").

## Rules

- **Typography**:
    - Title: `text-web-heading-18`
    - Description: `text-web-label`
- **Colors**:
    - Text: `var(--text-primary)` for title, `var(--text-secondary)` for description.
    - Icons: `var(--text-primary)`.
- **Layout**: Flexbox row with centered alignment. Gap of 24px between content and button.

## Icon Placement

- **Leading Icon**: Left-aligned, vertical center relative to content.

## Accessibility

- **Role**: `alert` (implicit if used for immediate feedback) or `status`.
- **Contrast**: Ensure background and text colors meet contrast ratios (handled by design system tokens).

## Interaction Behaviour

- **Action Button**: Standard button interaction.
- **Static**: The alert itself is usually static unless dismissed (if dismissal is implemented externally).

## Responsive Behaviour

- **Full Width**: Typically takes the full width of its container.
- **Text Wrap**: Title and description text should wrap if space is limited.
