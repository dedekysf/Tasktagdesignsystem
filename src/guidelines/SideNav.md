# SideNav Component Guideline

## 1. Overview
The SideNav component is the primary vertical navigation structure for the application. It provides access to key sections like Projects, My Tasks, and Global Activity, while supporting collapsible states to maximize content area visibility.

**Usage**: Use as the main navigation drawer on the left side of the application layout.

## 2. Variants
The SideNav component supports **2 visual states/variants**:

### Expanded
- **Width**: 256px
- **Content**: Full text labels, icons, Explore card, logo
- **Use Case**: Default state for desktop, allows full visibility of navigation options

### Collapsed
- **Width**: 86px
- **Content**: Icons only, simplified logo
- **Use Case**: User toggled state to maximize workspace area

## 3. Sizes
### Default
- **Height**: 100% of container (100vh)
- **Padding**: `var(--spacing-24) var(--spacing-16)`
- **Gap**: `var(--spacing-24)` between sections

## 4. States
### Active Item
- **Background**: `var(--light-mint)`
- **Text Color**: `var(--secondary-green)`
- **Icon Color**: `var(--secondary-green)`
- **Border Radius**: `var(--radius-8)`

### Hover Item (Inactive)
- **Background**: `var(--grey-03)`
- **Text Color**: `var(--text-primary)`
- **Cursor**: `pointer`

### Default (Inactive)
- **Background**: `transparent`
- **Text Color**: `var(--text-primary)`

## 5. Anatomy
```
┌──────────────────────┐
│  [Logo]      [<|>]   │  ← Header with Toggle
├──────────────────────┤
│  [Icon] Label        │  ← Menu Item
│  [Icon] Label        │
│                      │
│      ...             │
│                      │
├──────────────────────┤
│  [Explore Card]      │  ← (Expanded Only)
├──────────────────────┤
│  [?] Help            │  ← Bottom Section
│  [ Avatar ] Account  │
└──────────────────────┘
```

**Components**:
1. **Container**: Fixed width column with `var(--grey-02)` background
2. **Header**: Contains Logo and Collapse/Expand toggle button
3. **Navigation List**: Vertical stack of menu items
4. **Explore Card**: Promotional or informational card (hidden when collapsed)
5. **Footer**: Help and User Account links

## 6. Rules
1. **Background**: Always `var(--grey-02)` to differentiate from main content
2. **Transitions**: Width changes should animate smoothly (`0.3s ease`)
3. **Icons**: Use consistent 24px icons from Lucide React
4. **Typography**: Label text uses `var(--text-label)` with `var(--font-weight-medium)`
5. **Collapse Behavior**: When collapsed, text labels hide, only icons remain centered
6. **Spacing**: Consistent `var(--spacing-24)` vertical gap between main sections

## 7. Icon Placement
- **Menu Icons**: Leading (left) placement, 24px size
- **Toggle Icon**: `ChevronsLeft` (when expanded) / `ChevronsRight` (when collapsed)
- **Status Icons**: Optional status indicators (not currently implemented but reserved)

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus moves through menu items
- **Enter/Space**: Activates navigation
- **Aria Labels**: Toggle button requires `aria-label="Expand sidebar"` or `aria-label="Collapse sidebar"`

### Screen Readers
- Navigation should be wrapped in `<nav>` or have `role="navigation"`
- Active item should ideally have `aria-current="page"`

## 9. Interaction Behaviour
### Clicking Items
1. User clicks menu item
2. Item becomes Active (Light Mint background)
3. `onNavigate` callback triggers navigation

### Toggling Sidebar
1. User clicks chevron button
2. Sidebar animates width change (256px ↔ 86px)
3. Text labels fade in/out or hide instantly
4. Logo switches between Full and Simple versions

## 10. Responsive Behaviour
### Desktop (≥1024px)
- Sidebar visible by default
- User can toggle collapse/expand

### Mobile/Tablet (<1024px)
- Typically hidden or transforms into a slide-out drawer (Hamburger menu interaction)
- (Note: Current implementation detail focuses on desktop behavior; mobile would require an overlay wrapper)

---

## Code Example
```tsx
import { SideNav } from './components/SideNav';

// Basic Usage
<SideNav 
  activeItem="projects"
  onNavigate={(id) => console.log('Navigate to:', id)}
/>

// Controlled Variant (if needed)
<SideNav 
  variant="collapsed"
  activeItem="my-tasks"
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
