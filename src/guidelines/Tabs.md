# Tabs Component Guideline

## 1. Overview
The Tabs component organizes content into separate views where only one view can be visible at a time. It allows users to navigate between related groups of content without leaving the page.

**Usage**: Use tabs to alternate between views within the same context, such as different categories of settings or different data visualizations.

## 2. Variants
The Tabs component supports **3 variants**:

### Default
- **Content**: Text label only
- **Use Case**: Standard tab navigation

### Icon Left
- **Content**: Icon preceding text label
- **Use Case**: When icons help identify tab content quickly

### Icon Right
- **Content**: Icon succeeding text label
- **Use Case**: Specific UI patterns requiring trailing icons

## 3. Sizes
The Tabs component supports **5 sizes**:

### Extra Small (xs)
- **Height**: `var(--size-xs)`
- **Font Size**: 10px
- **Padding**: 6px 12px

### Small (sm)
- **Height**: `var(--size-sm)`
- **Font Size**: 12px
- **Padding**: 8px 14px

### Medium (md) - Default
- **Height**: `var(--size-md)`
- **Font Size**: 14px
- **Padding**: 10px 16px

### Large (lg)
- **Height**: `var(--size-lg)`
- **Font Size**: 16px
- **Padding**: 12px 20px

### Extra Large (xl)
- **Height**: `var(--size-xl)`
- **Font Size**: 18px
- **Padding**: 14px 24px

## 4. States
### Default (Inactive)
- **Text Color**: `var(--text-secondary)`
- **Border Bottom**: Transparent

### Active
- **Text Color**: `var(--primary)`
- **Border Bottom**: 2px solid `var(--primary)`
- **Opacity**: 1

### Hover
- **Text Color**: `var(--primary)`
- **Transition**: Color change only

### Pressed
- **Text Color**: `var(--primary)`
- **Border Bottom**: 2px solid `var(--primary)`
- **Opacity**: 0.7

### Disabled
- **Text Color**: `var(--grey-04)`
- **Cursor**: `not-allowed`

## 5. Anatomy
```
┌─────────────────────────┐
│ [Icon]  Label  [Badge]  │
└─────────────────────────┘
            ↑
      Bottom Border (Active)
```

**Components**:
1. **Container**: Inline-flex button element
2. **Label**: Text description
3. **Icon** (Optional): Leading or trailing visual
4. **Badge** (Optional): Notification count or status indicator
5. **Indicator**: Bottom border appearing in active state

## 6. Rules
1. **Grouping**: Tabs must be grouped in a `TabsContainer` or equivalent flex container
2. **Selection**: Exactly one tab must be active at a time
3. **Alignment**: Tabs are typically left-aligned (horizontal)
4. **Typography**: Use `var(--font-weight-medium)`
5. **Border**: Active tab indicator is `2px` solid
6. **Spacing**: Consistent gap between tabs (controlled by container)

## 7. Icon Placement
- **Left**: `gap` varies by size (6px - 10px)
- **Right**: `gap` varies by size (6px - 10px)
- **Alignment**: Vertically centered with text

## 8. Accessibility
### Keyboard Navigation
- **Tab**: Focus moves to tab group/active tab
- **Arrow Keys**: Navigate between tabs (if implemented in container)
- **Enter/Space**: Activate selected tab

### ARIA Attributes
- `role="tablist"` for the container
- `role="tab"` for individual items
- `aria-selected="true/false"`
- `aria-controls="panel-id"`

## 9. Interaction Behaviour
### Clicking
1. User clicks inactive tab
2. Active state transfers to clicked tab
3. Content panel below updates immediately
4. `onTabChange` callback fires

### Hovering
1. Text color changes to Primary
2. Cursor becomes pointer
3. No bottom border appears (unless active)

## 10. Responsive Behaviour
### Desktop
- Horizontal layout
- Full labels visible

### Mobile
- Horizontal scroll if tabs exceed screen width
- OR Stack vertically (accordion style) if horizontal space is insufficient
- Touch targets should meet minimum 44px height (use larger sizes or padding)

---

## Code Example
```tsx
import { TabsContainer, TabPanel } from './components/TabsContainer';

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'activity', label: 'Activity' },
  { value: 'settings', label: 'Settings' }
];

<TabsContainer 
  activeTab={currentTab} 
  onTabChange={setCurrentTab} 
  tabs={tabs}
>
  <TabPanel value="overview" activeTab={currentTab}>
    Overview Content
  </TabPanel>
  <TabPanel value="activity" activeTab={currentTab}>
    Activity Content
  </TabPanel>
</TabsContainer>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
