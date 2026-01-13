# TaskTag Design System - Component Guidelines

## Overview
This directory contains comprehensive component guidelines for the TaskTag design system v3. Each guideline document provides detailed specifications for developers to implement components consistently across the application.

**Note**: All component guideline files have been moved from `/components` to `/guidelines` directory.

## Available Component Guidelines

### ✅ Completed Guidelines

1. **[Button.guideline.md](./Button.guideline.md)**
   - Primary, Secondary, Outline, Ghost, Destructive variants
   - Small, Medium, Large sizes
   - All interaction states and accessibility requirements
   - Responsive behavior patterns

2. **[TextInput.guideline.md](./TextInput.guideline.md)**
   - Standard, With Icon (Leading/Trailing), Prefix/Suffix variants
   - Small, Medium, Large sizes
   - Focus, Error, Success, Disabled states
   - Form integration and validation patterns

3. **[Checkbox.guideline.md](./Checkbox.guideline.md)**
   - Standard, Indeterminate, With Label variants
   - Small, Medium, Large sizes
   - All states including error and disabled
   - Group selection and validation

4. **[Modal.guideline.md](./Modal.guideline.md)**
   - Standard, Confirmation, Alert, Form, Full-Screen variants
   - Small, Medium, Large, Extra Large sizes
   - Opening/closing animations and states
   - Focus management and keyboard navigation

5. **[Tooltip.guideline.md](./Tooltip.guideline.md)**
   - Standard, Light, Success, Error variants
   - Small, Medium, Large sizes
   - Positioning and delay behaviors
   - Mobile alternatives and accessibility

6. **[DateRangeCalendar.guideline.md](./DateRangeCalendar.guideline.md)**
   - Standard, Single Month, With Presets, Inline, Dropdown variants
   - Compact, Standard, Large sizes
   - Range selection states and validation
   - Responsive calendar layouts

7. **[Dropdown.guideline.md](./Dropdown.guideline.md)**
   - Standard, Multi-Select, Searchable, Grouped, With Icons variants
   - Small, Medium, Large sizes
   - All interaction states
   - Native select fallback for mobile

## Guideline Document Structure

Each component guideline follows a consistent 10-section structure:

### 1. Overview
- Component purpose and description
- Primary use cases
- When to use vs alternatives

### 2. Variants
- Different visual and functional variations
- Use cases for each variant
- CSS variables used

### 3. Sizes
- Small, Medium, Large (and other size options)
- Exact dimensions and spacing
- Use case recommendations

### 4. States
- Default, Hover, Focus, Active, Disabled
- Loading, Error, Success states
- Visual specifications for each state

### 5. Anatomy
- Component structure breakdown
- Element hierarchy
- Spacing and padding specifications
- Visual diagrams

### 6. Rules
- Content guidelines
- Visual hierarchy principles
- Layout and spacing rules
- Validation patterns

### 7. Icon Placement
- Icon positioning and sizing
- Leading and trailing icons
- Icon color specifications
- Usage examples

### 8. Accessibility
- Keyboard navigation patterns
- ARIA attributes and roles
- Screen reader support
- Focus management
- Touch target sizes

### 9. Interaction Behaviour
- User interaction flows
- Animation specifications
- State transitions
- Event handling patterns

### 10. Responsive Behaviour
- Desktop, Tablet, Mobile adaptations
- Breakpoint specifications
- Layout adjustments
- Mobile-specific patterns

## Design System Integration

### CSS Variables
All components use TaskTag design system CSS variables from `/styles/globals.css`:

#### Colors
```css
--primary
--secondary
--text-primary
--text-secondary
--text-tertiary
--border
--grey-01 through --grey-08
--alert-red
--success-green
--white
```

#### Typography
```css
--font-family-base: 'Inter', sans-serif
--text-caption: 12px
--text-label: 12px
--text-body: 14px
--text-h6: 16px
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

#### Spacing
```css
--size-sm: 32px
--size-md: 40px
--size-lg: 48px
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-2xl: 32px
```

#### Border Radius
```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-full: 9999px
```

#### Shadows
```css
--shadow-sm
--shadow-md
--shadow-lg
--shadow-xl
```

## Usage Examples

### Importing Guidelines
```tsx
// Developers should reference guidelines when implementing components
// Example: Creating a new button
// 1. Read /guidelines/Button.guideline.md
// 2. Follow size, variant, and state specifications
// 3. Use CSS variables for all styling
// 4. Implement accessibility requirements
// 5. Add responsive behavior

import { Button } from './components/Button';

<Button 
  variant="primary" 
  size="md" 
  disabled={false}
  aria-label="Save changes"
>
  Save
</Button>
```

### Consistent Styling
```tsx
// All components should use CSS variables
<button
  style={{
    height: 'var(--size-md)',
    padding: '12px 24px',
    fontSize: 'var(--text-body)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'var(--primary)',
    color: 'white',
    fontFamily: 'var(--font-family-base)'
  }}
>
  Button Text
</button>
```

## Responsive Design Principles

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) {
  /* Full-width layouts, larger touch targets */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Adaptive layouts */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Multi-column layouts, hover states */
}
```

### Touch Targets (WCAG 2.1)
- Minimum: **44×44px** for all interactive elements
- Recommended: **48×48px** on mobile
- Applies to: Buttons, checkboxes, radio buttons, links, inputs

## Accessibility Standards

All components follow **WCAG 2.1 Level AA** guidelines:

### Color Contrast
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Keyboard Navigation
- All interactive elements accessible via keyboard
- Visible focus indicators (never remove outlines)
- Logical tab order
- Standard keyboard shortcuts (Enter, Space, Esc, Arrows)

### Screen Reader Support
- Semantic HTML elements
- Proper ARIA attributes
- Meaningful labels
- State announcements

## Component Naming Conventions

### File Naming
- Component file: `ComponentName.tsx`
- Guideline file: `ComponentName.guideline.md`
- README: `ComponentName.README.md` (if needed)

### CSS Classes
- Use Tailwind utilities when possible
- Custom classes in kebab-case: `button-primary`, `input-error`
- State modifiers: `button-primary:hover`, `input-error:focus`

### Props Naming
```tsx
// Consistent prop names across components
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  // ...other props
}
```

## Testing Guidelines

### Visual Regression Testing
- Test all variants
- Test all sizes
- Test all states
- Test responsive breakpoints

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation
- Focus management

### Interaction Testing
- Click/tap interactions
- Hover states (desktop)
- Touch gestures (mobile)
- Form validation
- Error states

## Contributing

When creating new component guidelines:

1. **Follow the 10-section structure** outlined above
2. **Use CSS variables** for all styling specifications
3. **Include code examples** for common patterns
4. **Specify exact dimensions** (no vague descriptions)
5. **Document accessibility** requirements thoroughly
6. **Provide responsive** behavior for all breakpoints
7. **Include visual diagrams** for anatomy sections
8. **Reference existing guidelines** for consistency

## Future Guidelines (Planned)

Components that need guideline documentation:

- [ ] Textarea
- [ ] Radio Button
- [ ] Toggle/Switch
- [ ] Badge
- [ ] Avatar
- [ ] Toast/Notification
- [ ] Tabs
- [ ] Card
- [ ] Table
- [ ] Pagination
- [ ] Breadcrumb
- [ ] Progress Bar
- [ ] Skeleton Loader
- [ ] File Upload
- [ ] Slider/Range

## Resources

### Internal References
- `/styles/globals.css` - Design system CSS variables
- `/components/` - Component implementations
- `/pages/FoundationPage.tsx` - Design tokens showcase
- `/guidelines/` - Component guidelines (this directory)

### External Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Material Design](https://material.io/design) - Reference for patterns
- [Inclusive Components](https://inclusive-components.design/)

## Quick Reference Table

| Component | Variants | Sizes | States | Responsive | Accessibility |
|-----------|----------|-------|--------|------------|---------------|
| Button | 5 | 3 | 6 | ✅ | ✅ WCAG AA |
| TextInput | 3 | 3 | 7 | ✅ | ✅ WCAG AA |
| Checkbox | 3 | 3 | 5 | ✅ | ✅ WCAG AA |
| Modal | 5 | 5 | 5 | ✅ | ✅ WCAG AA |
| Tooltip | 4 | 3 | 4 | ✅ | ✅ WCAG AA |
| DateRangeCalendar | 5 | 3 | 4 | ✅ | ✅ WCAG AA |
| Dropdown | 5 | 3 | 9 | ✅ | ✅ WCAG AA |

---

## Contact & Support

For questions about component guidelines:
- Create an issue in the repository
- Contact the design system team
- Reference existing implementations in `/components/`

**Last Updated**: January 13, 2026
**Version**: 3.0
**Maintained by**: TaskTag Design System Team
**Location**: `/guidelines/`
