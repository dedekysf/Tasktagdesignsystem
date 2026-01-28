# FilePreviewModal Component Guideline

## 1. Overview
The FilePreviewModal is a specialized full-screen overlay for viewing media (images) and documents attached to tasks or projects. It provides navigation between files, zoom/rotate controls for images, and download capabilities.

**Usage**: Triggered when clicking an attachment in the "Files & Media" section.

## 2. Variants
The modal adapts its content area based on file type:

### Media (Image)
- **Content**: Full-screen image
- **Controls**: Zoom In/Out, Rotate, Reset
- **Navigation**: Left/Right arrows overlay

### Document
- **Content**: Document icon placeholder (or preview if supported)
- **Controls**: Download button
- **Visual**: Centralized icon with file type badge

## 3. Sizes
### Full Screen
- **Width**: 100vw
- **Height**: 100vh
- **Z-Index**: 100 (Topmost)

## 4. States
### Open
- **Background**: Black (var(--black))
- **Content**: Visible
- **Focus**: Trapped in modal

### Zoomed (Image)
- **Image**: Scaled > 100%
- **Scroll**: Pan capability (if implemented) or centered

## 5. Anatomy
```
┌───────────────────────────────────────┐
│ < Back   [User Info]   Filename       │ ← Header
│          [Actions: Download, Zoom...] │
├───────────────────────────────────────┤
│ <                                   > │ ← Navigation
│             [ CONTENT ]               │
│                                       │
├───────────────────────────────────────┤
│ [Project] [Task]                      │ ← Context Tags
├───────────────────────────────────────┤
│ [Thumb] [Thumb] [Active] [Thumb]      │ ← Thumbnail Strip
└───────────────────────────────────────┘
```

**Components**:
1. **Header**: Navigation back, Uploader info, Filename, Toolbar
2. **Main Stage**: Central area for content
3. **Navigation**: Chevron buttons (previous/next)
4. **Thumbnail Strip**: Bottom row of all files in context
5. **Tags**: Context information (Project/Task names)

## 6. Rules
1. **Background**: Always black for immersive viewing
2. **Keyboard Support**: Arrow keys to navigate, Esc to close
3. **Zoom Limits**: Min 25%, Max 200%
4. **Thumbnails**: Highlight current file with white ring
5. **Toolbar**: Specific tools appear based on file type

## 7. Icon Placement
- **Header Left**: Back chevron
- **Header Right**: Action icons (Download, Zoom, etc.)
- **Stage**: Navigation chevrons (absolute left/right)

## 8. Accessibility
### Keyboard Navigation
- **Esc**: Close modal
- **Left/Right**: Previous/Next file
- **Tab**: Focus controls

## 9. Interaction Behaviour
### Navigation
1. Click Right Arrow or Press Right Key
2. Current index updates
3. Main content slides/fades to next file
4. Thumbnail strip updates active selection

### Zooming
1. Click Zoom In
2. Image scale increases
3. Reset Zoom returns to 100%

## 10. Responsive Behaviour
### Mobile
- **Header**: Simplified or auto-hides
- **Thumbnails**: Scrollable horizontal strip
- **Gestures**: Swipe to navigate (if implemented)
- **Zoom**: Pinch to zoom (native touch behavior)

---

## Code Example
```tsx
import { FilePreviewModal } from './components/FilePreviewModal';

<FilePreviewModal
  isOpen={true}
  files={fileList}
  currentIndex={0}
  onClose={closeModal}
  onNavigate={setIndex}
  projectName="Website Redesign"
  taskName="Hero Image Assets"
/>
```

---

**Last Updated**: January 2026
**Design System Version**: 3.0
