# Tag Component

Tags are used to label, categorize, or organize items using keywords that describe them.

## Overview

Tags provide a quick way for users to identify status, category, or other metadata associated with an item. They are compact and often use color coding.

## Variants

- **Basic**: Text only.
- **With Icon**: Includes a leading icon.

## Colors

- **Primary**:
    - **Fill**: Light Mint background, Secondary Green text.
    - **Outline**: Transparent background, Primary (Green) border and text.
- **Destructive**:
    - **Fill**: Light Pink background, Alert Red text.
    - **Outline**: Transparent background, Alert Red border and text.

## Appearance

- **Fill**: Solid background color.
- **Outline**: Transparent background with border.

## Sizes

- **Default**: Compact size with 4px padding. Text is caption size (12px).

## Anatomy

1.  **Container**: Rounded corners (Radius 4).
2.  **Icon** (Optional): Small leading icon.
3.  **Label**: Text describing the tag.

## Rules

- **Typography**: `var(--text-caption)` (12px), Regular weight.
- **Spacing**: 4px gap between icon and text. 4px padding around content.
- **Radius**: `var(--radius-4)`.

## Icon Placement

- **Leading**: Icon is placed before the text.

## Accessibility

- **Contrast**: Text colors are chosen to contrast with their respective background colors.

## Interaction Behaviour

- **Static**: Tags are generally non-interactive (display only).

## Responsive Behaviour

- **Inline**: Tags flow inline and should wrap if container width is exceeded.
- **Fit Content**: Width is determined by content.
