# Avatar Component Guideline

## 1. Overview
The Avatar component represents a user or entity with visual identity through initials, images, or icons. It follows the TaskTag design system specifications and uses CSS variables for consistent styling across the application.

**Usage**: Use avatars to represent users, team members, assignees, or entities throughout the application.

## 2. Variants
The Avatar component supports **3 variants**:

### Icon
- **Purpose**: Default placeholder for users without profile images
- **Icon**: User icon from lucide-react
- **Background**: `var(--grey-02)` (disabled) or custom color
- **Icon Color**: `var(--text-secondary)` (default) or custom
- **Use Case**: Empty state, pending invites, system users

### Image
- **Purpose**: Display user profile photo
- **Content**: Image from URL
- **Background**: Image fills container
- **Use Case**: Active users with uploaded profile pictures

### Initials
- **Purpose**: Display user initials as text
- **Content**: 1-2 characters (typically first + last name)
- **Background**: Custom color (usually generated from name hash)
- **Text Color**: `var(--text-primary)` (default)
- **Font Weight**: `var(--font-weight-semibold)`
- **Use Case**: Users without profile images but with names

## 3. Sizes
The Avatar component supports **5 sizes**:

### Extra Small (xs)
- **Dimension**: `var(--size-xs)` (24px)
- **Font Size**: 10px
- **Icon Scale**: 50% of container (12px)
- **Border**: 2px solid `var(--white)`
- **Use Case**: Compact lists, inline mentions

### Small (sm)
- **Dimension**: `var(--size-sm)` (32px)
- **Font Size**: 12px
- **Icon Scale**: 50% of container (16px)
- **Border**: 2px solid `var(--white)`
- **Use Case**: Compact UI, badges, chips

### Medium (md)
- **Dimension**: `var(--size-md)` (40px)
- **Font Size**: 14px
- **Icon Scale**: 50% of container (20px)
- **Border**: 2px solid `var(--white)`
- **Use Case**: Standard avatar size, member lists

### Large (lg)
- **Dimension**: `var(--size-lg)` (48px)
- **Font Size**: 18px
- **Icon Scale**: 50% of container (24px)
- **Border**: 2px solid `var(--white)`
- **Use Case**: Profile headers, featured users

### Extra Large (xl)
- **Dimension**: `var(--size-xl)` (56px)
- **Font Size**: 22px
- **Icon Scale**: 50% of container (28px)
- **Border**: 2px solid `var(--white)`
- **Use Case**: Profile pages, hero sections

## 4. States

### Default
- Base styling as per variant
- Border: 2px solid `var(--white)`
- Cursor: `pointer`
- Opacity: 1

### Hover
- **Opacity**: 0.8
- **Transition**: 200ms ease
- **Cursor**: `pointer`

### Disabled
- **Background**: `var(--grey-02)`
- **Border**: 2px solid `var(--grey-05)`
- **Icon Color**: `var(--grey-05)`
- **Text Color**: `var(--grey-05)`
- **Image Filter**: `grayscale(100%)`
- **Cursor**: `not-allowed`
- **No hover effects**

### Active/Selected
- Optional visual indicator (not built-in)
- Can be styled via className or style props

## 5. Anatomy
```
┌─────────────┐
│             │
│  ┌───────┐  │
│  │ Icon/ │  │ ← Border (2px white)
│  │ Image/│  │
│  │ Text  │  │
│  └───────┘  │
│             │
└─────────────┘
```

**Components**:
1. **Container**: Circular (border-radius: full)
2. **Border**: 2px solid, color varies by state
3. **Content**: Icon, Image, or Initials
4. **Background**: Variant-specific color

## 6. Rules
1. **Shape**: Always circular (`border-radius: var(--radius-full)`)
2. **Border**: Always 2px solid (white for normal, grey-05 for disabled)
3. **Aspect Ratio**: Always 1:1 (perfect circle)
4. **Content Centering**: Icon/initials always centered
5. **Image Fit**: Images use `object-cover` to fill circle
6. **Initials**: Maximum 2 characters, uppercase recommended
7. **Background Colors**: Should have sufficient contrast with text/icons
8. **Overflow**: Hidden to maintain circular shape
9. **Consistency**: Use same size avatars in groups/lists

## 7. Icon Placement
The Avatar component uses a centered icon (User icon from lucide-react):

### Icon Variant
- Icon is always centered in the container
- Icon size is 50% of container dimension
- Icon color can be customized via `iconColor` prop
- Default icon color: `var(--text-secondary)`
- Disabled icon color: `var(--grey-05)`

**Icon Sizing by Container**:
- xs (24px) → 12px icon
- sm (32px) → 16px icon
- md (40px) → 20px icon
- lg (48px) → 24px icon
- xl (56px) → 28px icon

## 8. Accessibility

### Keyboard Navigation
- **Tab**: Navigate to avatar (if interactive)
- **Enter/Space**: Activate avatar action (if clickable)

### Screen Readers
- Include `alt` text for image variant
- Use `aria-label` to describe the user/entity
- Example: `aria-label="John Doe, Software Engineer"`
- For initials variant: Include full name in aria-label

### Focus Management
- Provide visible focus indicator if avatar is interactive
- Maintain logical focus order in lists

### Color Contrast
- **Initials**: Ensure text has sufficient contrast with background (WCAG AA: 4.5:1)
- **Icon**: Ensure icon color contrasts with background
- **Disabled**: Reduced contrast acceptable for disabled state

### Alternative Text
```tsx
// Image variant
<Avatar variant="image" imageUrl="..." aria-label="Jane Smith" />

// Initials variant
<Avatar variant="initials" initials="JS" aria-label="Jane Smith" />

// Icon variant
<Avatar variant="icon" aria-label="Unassigned user" />
```

## 9. Interaction Behaviour

### Click/Tap
1. User hovers over avatar (desktop)
2. Opacity reduces to 0.8
3. User clicks/taps avatar
4. Trigger associated action (open profile, show menu, etc.)
5. Avatar returns to default or hover state

### Hover State
- Opacity transitions to 0.8 over 200ms
- Cursor changes to pointer
- Disabled avatars don't respond to hover

### Tooltip Integration
- Avatars often paired with tooltips to show full names
- Use `AvatarWithTooltip` wrapper component
- Tooltip shows on hover
- Example: `<AvatarWithTooltip name="John Doe" email="john@example.com" />`

### Avatar Groups
- Multiple avatars can be stacked/overlapped
- Use `AvatarGroup` component for consistent spacing
- Show "+N" indicator for overflow
- Example: Show first 3, "+5 more"

## 10. Responsive Behaviour

### Desktop (≥1024px)
- Use standard sizes (xs, sm, md, lg, xl)
- Hover effects fully functional
- Maintain consistent sizing in lists

### Tablet (768px - 1023px)
- Use md or lg sizes for better visibility
- Ensure touch targets are minimum 44px (use lg minimum)
- Maintain circular shape

### Mobile (<768px)
- Use md, lg, or xl sizes for touch friendliness
- Minimum touch target: 44px (prefer lg/xl)
- Avoid xs/sm sizes on mobile for interactive avatars
- Stack avatars vertically in lists if needed

### Orientation
- Portrait: Vertical stacking in lists
- Landscape: Horizontal alignment acceptable

### Responsive Sizing Example
```tsx
// Desktop: md (40px), Mobile: lg (48px)
<Avatar 
  size="lg"              // Large for mobile touch
  variant="initials"
  initials="JD"
  className="md:w-[40px] md:h-[40px]" // Override to md on desktop
/>
```

### Avatar in Groups
- Maintain consistent size across all avatars in a group
- Use overlap technique to save space (negative margin)
- Ensure borders remain visible when overlapped

---

## Code Example
```tsx
import { Avatar } from './components/AvatarComponent';

// Icon variant (default placeholder)
<Avatar 
  size="md" 
  variant="icon"
  iconColor="var(--grey-05)"
  backgroundColor="var(--grey-02)"
/>

// Image variant
<Avatar 
  size="lg" 
  variant="image"
  imageUrl="https://example.com/avatar.jpg"
/>

// Initials variant with custom color
<Avatar 
  size="md" 
  variant="initials"
  initials="JD"
  backgroundColor="var(--light-mint)"
  style={{ color: 'var(--text-primary)' }}
/>

// Disabled state
<Avatar 
  size="md" 
  variant="initials"
  initials="DU"
  disabled
/>

// Custom background and border
<Avatar 
  size="xl" 
  variant="initials"
  initials="AB"
  backgroundColor="#FF6B6B"
  style={{ 
    border: '3px solid var(--primary-blue)',
    color: 'var(--white)'
  }}
/>
```

---

**Last Updated**: January 2026  
**Design System Version**: 3.0
