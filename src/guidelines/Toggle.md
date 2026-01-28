# Toggle Component

A toggle switch allows the user to switch between two states: on and off.

## Overview

Toggles are used for settings, modes, or binary choices where the action takes effect immediately. They are preferred over checkboxes when the setting is standalone or requires instant application.

## Variants

- **Default**: The standard toggle.

## Sizes

- **Small (sm)**: 28px width, 16px height. Thumb: 12px.
- **Medium (md)**: 36px width, 20px height. Thumb: 16px. (Default)
- **Large (lg)**: 44px width, 24px height. Thumb: 20px.

## States

- **Unchecked (Off)**: Background is Grey-03 (`var(--grey-03)`). Thumb is on the left.
- **Checked (On)**: Background is Primary (`var(--primary)`). Thumb is on the right.
- **Disabled**: Reduced opacity, not interactive.

## Anatomy

1.  **Track**: The background pill shape.
2.  **Thumb**: The circular indicator that moves.

## Rules

- **Colors**:
    - Track Off: `var(--grey-03)`
    - Track On: `var(--primary)` (Secondary Green)
    - Thumb: `var(--white)`
- **Animation**: Smooth transition of the thumb position and track color.
- **Shadow**: Thumb has a small shadow for depth.

## Icon Placement

- Toggles typically do not contain icons inside them in this design system.

## Accessibility

- **Role**: `switch`.
- **Labeling**: Should be accompanied by a label (via `Label` component or `aria-label`).
- **Keyboard**:
    - `Space` or `Enter` toggles the state.
    - Focus ring uses `var(--primary)`.

## Interaction Behaviour

- **Click/Tap**: Toggles the state between Checked and Unchecked.
- **Immediate Effect**: The change should happen immediately without a "Save" button.

## Responsive Behaviour

- **Fixed Size**: Toggles have fixed dimensions based on their size prop and do not stretch.
