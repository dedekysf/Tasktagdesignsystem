# SearchInput Component Guideline

## 1. Overview
The SearchInput component is a specialized text field designed for user search queries. It includes a standard search icon and a clear button functionality to enhance the search experience.

**Usage**: Use in headers, filters, or data tables to allow users to filter content.

## 2. Variants
The SearchInput component currently supports **1 primary variant**:

### Standard
- **Background**: `var(--grey-01)`
- **Border**: None (flat style)
- **Appearance**: Soft container distinct from standard form inputs

## 3. Sizes
### Medium (Default)
- **Height**: 40px
- **Padding**: `var(--spacing-12) var(--spacing-16)`
- **Icon Size**: 24px
- **Font Size**: `text-web-secondary-body` (typically 14px)

## 4. States
### Empty
- **Content**: Search icon + Placeholder text
- **Action**: User can type

### Filled
- **Content**: Search icon + User text + Clear (X) button
- **Action**: User can type or clear

### Focus
- **Outline**: Browser default or custom focus ring (controlled via CSS)

## 5. Anatomy
```
┌───────────────────────────────┐
│ [🔍]  Search text...      [✖] │
└───────────────────────────────┘
```

**Components**:
1. **Container**: Rounded rectangle with `var(--grey-01)` background
2. **Leading Icon**: Search icon (24px) indicating purpose
3. **Input Field**: Transparent text input
4. **Trailing Action**: 'X' button to clear text (only appears when text exists)

## 6. Rules
1. **Placeholder**: Always provide a descriptive placeholder (e.g., "Search projects...")
2. **Clear Button**: Must only appear when input has value
3. **Icon Color**: Icons use `var(--text-primary)`
4. **Border Radius**: `var(--radius-8)`
5. **Text Color**: `var(--text-primary)`

## 7. Icon Placement
- **Leading**: Search icon, fixed position left
- **Trailing**: Clear (X) icon, fixed position right (conditional)

## 8. Accessibility
### Keyboard Navigation
- **Focus**: Standard input focus
- **Clear Button**: Tab accessible when visible
- **Enter**: Triggers search (if applicable)

### Screen Readers
- Input type is `text` (or `search`)
- Clear button should have `aria-label="Clear search"`

## 9. Interaction Behaviour
### Typing
1. User clicks input
2. Cursor appears
3. As user types, 'X' button appears

### Clearing
1. User clicks 'X' button
2. Input value resets to empty string
3. Focus remains on input (optional) or returns to container
4. 'X' button disappears

## 10. Responsive Behaviour
### Desktop/Tablet
- Fixed height (40px)
- Width: 100% of container (fluid)

### Mobile
- Maintains 40px height for touch target
- Width: 100%
- Consider hiding placeholder on very small screens if needed

---

## Code Example
```tsx
import { SearchInput } from './components/SearchInput';
import { useState } from 'react';

const [query, setQuery] = useState('');

<SearchInput 
  value={query} 
  onChange={setQuery} 
  placeholder="Search tasks..." 
  className="w-full"
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
