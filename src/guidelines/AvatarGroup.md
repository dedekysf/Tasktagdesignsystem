# AvatarGroup Component Guideline

## 1. Overview
The AvatarGroup component displays multiple avatars in a horizontal, overlapping layout. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use avatar groups to show team members, collaborators, assignees, or participants in a compact, space-efficient manner.

## 2. Variants
The AvatarGroup component uses Avatar variants internally:

### Image Group
- **Content**: Multiple image avatars
- **Use Case**: Teams with profile photos

### Initials Group
- **Content**: Multiple initials avatars
- **Use Case**: Teams without photos, color-coded members

### Mixed Group
- **Content**: Combination of images, initials, and icons
- **Use Case**: Real-world scenarios with varied avatar types

### Overflow Indicator
- **Content**: "+N" avatar showing remaining count
- **Background**: `var(--grey-02)`
- **Border**: 2px solid `var(--grey-03)`
- **Text Color**: `var(--text-secondary)`
- **Use Case**: When total avatars exceed max display limit

## 3. Sizes
The AvatarGroup inherits sizes from Avatar component (**5 sizes**):

### Extra Small (xs)
- **Avatar Size**: 24px
- **Overlap**: -8px (negative margin-left)
- **Use Case**: Compact lists, tags

### Small (sm)
- **Avatar Size**: 32px
- **Overlap**: -10px
- **Use Case**: Compact UI, dense layouts

### Medium (md)
- **Avatar Size**: 40px
- **Overlap**: -12px
- **Use Case**: Standard avatar groups, member lists

### Large (lg)
- **Avatar Size**: 48px
- **Overlap**: -14px
- **Use Case**: Featured teams, hero sections

### Extra Large (xl)
- **Avatar Size**: 56px
- **Overlap**: -16px
- **Use Case**: Profile pages, large team displays

## 4. States

### Default
- Avatars overlap horizontally
- First avatar: full visibility (z-index highest)
- Subsequent avatars: partially hidden behind previous
- Each avatar has subtle shadow (`var(--elevation-sm)`)

### Hover (Individual Avatar)
- Hovered avatar: opacity 0.8
- Other avatars: unchanged
- Cursor: pointer

### Disabled
- All avatars in group: disabled state
- Background: grey
- Border: grey
- No hover effects
- Cursor: not-allowed

### With Overflow
- "+N" indicator appears at end
- Shows remaining count (e.g., "+5")
- Grey background, distinct from user avatars
- Lower z-index (appears at back)

## 5. Anatomy
```
┌──────────────────────────────┐
│ ◯ ◯ ◯ +5                     │
│ └─┴─┴────────────────────────┘
│   ↑ Overlapping avatars + overflow
└──────────────────────────────┘
```

**Components**:
1. **Container**: Horizontal flex layout
2. **Avatar Items**: Individual Avatar components
3. **Overlap**: Negative margin creates overlap
4. **Z-Index Stack**: First avatar on top, last at bottom
5. **Overflow Indicator**: "+N" avatar (optional)
6. **Shadow**: Each avatar has elevation shadow

**Spacing**:
- **Overlap**: Size-dependent negative margin
- **Shadow**: `var(--elevation-sm)` on each avatar
- **Z-Index**: Decreasing from first to last (maintains stack order)

## 6. Rules
1. **Overlap Direction**: Always left-to-right
2. **Z-Index Order**: First avatar highest, decreases with each subsequent avatar
3. **Max Display**: Use `max` prop to limit displayed avatars
4. **Overflow Format**: "+N" where N is remaining count
5. **Border Visibility**: White borders remain visible despite overlap
6. **Shadow**: Each avatar has shadow to create depth
7. **Disabled State**: Applies to all avatars in group
8. **Minimum Avatars**: At least 2 avatars for meaningful group
9. **Maximum Recommended**: Show 3-5 avatars, use "+N" for more
10. **Alignment**: Vertically centered in container

## 7. Icon Placement
N/A - AvatarGroup uses Avatar component's icon placement rules.

Refer to Avatar component guidelines for icon details.

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate to avatar group
- **Arrow Keys**: Navigate between individual avatars (if interactive)
- **Enter/Space**: Activate focused avatar action

### Screen Readers
- Use `role="list"` for avatar group container
- Each avatar: `role="listitem"`
- Provide meaningful `aria-label` for group
- Include total count in label
- Example: `aria-label="5 team members: John, Jane, Bob, and 2 others"`

### Focus Management
- Group should be single tab stop
- Arrow keys navigate within group
- Clear focus indicator on active avatar

### ARIA Example
```tsx
<div 
  role="list" 
  aria-label="Team members: John Doe, Jane Smith, and 3 others"
>
  <AvatarGroup 
    avatars={teamMembers}
    max={3}
    size="md"
  />
</div>
```

### Overflow Announcement
- "+5" should be announced as "and 5 more members"
- Use `aria-label="+5 more members"` on overflow avatar

### Color Contrast
- Ensure avatar content (initials, icons) has sufficient contrast
- Borders must be visible against overlapping avatars
- Shadow helps distinguish overlapping layers

## 9. Interaction Behaviour

### Display Flow
1. Avatars render left-to-right
2. Each avatar overlaps the previous one
3. First avatar appears fully (highest z-index)
4. Last avatar partially hidden (lowest z-index)
5. If count exceeds `max`, "+N" indicator appears

### Hover Behavior
1. User hovers over specific avatar
2. That avatar's opacity reduces to 0.8
3. Other avatars remain unchanged
4. Cursor changes to pointer
5. User moves mouse away
6. Avatar returns to opacity 1

### Click Behavior (If Interactive)
1. User clicks specific avatar
2. Associated action triggers (e.g., show profile)
3. Group remains visible
4. Optional: highlight selected avatar

### Overflow Click
1. User clicks "+N" avatar
2. Show modal/dropdown with all members
3. Or expand group to show all avatars
4. Or navigate to team page

### Disabled Group
- No hover effects
- No click actions
- All avatars greyed out
- Cursor: not-allowed

## 10. Responsive Behaviour

### Desktop (≥1024px)
- Use standard sizes (xs, sm, md, lg, xl)
- Overlap fully functional
- Hover effects active
- Show 3-5 avatars typically

### Tablet (768px - 1023px)
- Use md or lg sizes for better visibility
- Maintain overlap
- Touch-friendly spacing
- Show 3-4 avatars

### Mobile (<768px)
- Use md, lg, or xl sizes for touch
- Reduce overlap slightly for better touch targets
- Show 2-3 avatars + overflow
- Ensure "+N" avatar is tappable (min 44px)

### Responsive Sizing
```tsx
// Desktop: sm (32px), Mobile: md (40px)
<AvatarGroup
  avatars={members}
  size="md"              // md for mobile
  max={3}
  className="md:size-sm" // Override to sm on desktop
/>
```

### Responsive Max Display
```tsx
// Mobile: Show 2, Desktop: Show 5
const maxAvatars = isMobile ? 2 : 5;

<AvatarGroup
  avatars={members}
  size="md"
  max={maxAvatars}
/>
```

### Orientation
- Portrait: Horizontal layout
- Landscape: Horizontal layout
- Never stack vertically

---

## Code Example
```tsx
import { AvatarGroup } from './components/AvatarGroup';

// Basic avatar group
<AvatarGroup
  avatars={[
    { variant: 'image', imageUrl: 'https://example.com/user1.jpg' },
    { variant: 'initials', initials: 'JD', backgroundColor: '#FF6B6B' },
    { variant: 'initials', initials: 'AB', backgroundColor: '#4A9EFF' }
  ]}
  size="md"
/>

// With max display limit
<AvatarGroup
  avatars={teamMembers} // 10 members
  size="md"
  max={3}  // Show 3 avatars + "+7"
/>

// Small size for compact UI
<AvatarGroup
  avatars={collaborators}
  size="sm"
  max={5}
/>

// Disabled group
<AvatarGroup
  avatars={pastMembers}
  size="md"
  disabled
/>

// Large size for featured team
<AvatarGroup
  avatars={leadership}
  size="lg"
  max={4}
  className="my-4"
/>
```

---

## Advanced Usage

### Dynamic Data
```tsx
const teamMembers = users.map(user => ({
  variant: user.avatarUrl ? 'image' : 'initials',
  imageUrl: user.avatarUrl,
  initials: getInitials(user.name),
  backgroundColor: getAvatarColor(user.name)
}));

<AvatarGroup avatars={teamMembers} size="md" max={5} />
```

### Interactive Group with Tooltips
```tsx
import { AvatarGroupWithTooltip } from './components/AvatarGroupWithTooltip';

<AvatarGroupWithTooltip
  avatars={teamMembers.map(member => ({
    ...member,
    name: member.name,
    email: member.email
  }))}
  size="md"
  max={4}
/>
```

### Overflow Modal
```tsx
const [showAllMembers, setShowAllMembers] = useState(false);

<div onClick={() => setShowAllMembers(true)}>
  <AvatarGroup avatars={members} size="md" max={3} />
</div>

{showAllMembers && (
  <Modal>
    <h2>All Team Members ({members.length})</h2>
    {members.map(member => (
      <MemberCard key={member.id} {...member} />
    ))}
  </Modal>
)}
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
