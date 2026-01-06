/**
 * TaskTag Design System v3 - Main Export
 * 
 * Single entry point for the entire design system.
 * Import everything you need from here.
 * 
 * Usage:
 * import { Button, Colors, Spacing } from './design-system';
 */

// Export all components
export * from '../components';

// Export design tokens
export * from './tokens';

// Export type definitions
export type { ButtonVariant, ButtonSize } from '../components/Button';
export type { AvatarType, AvatarSize } from '../components/AvatarComponent';
export type { CheckboxVariant } from '../components/Checkbox';

/**
 * Design System Metadata
 */
export const DesignSystem = {
  name: 'TaskTag Design System',
  version: '3.0.0',
  description: 'Comprehensive design system for TaskTag applications',
  
  components: [
    'Button',
    'TextInput', 
    'Textarea',
    'Checkbox',
    'RadioButton',
    'Avatar',
  ] as const,
  
  foundations: [
    'Colors',
    'Typography',
    'Spacing',
    'Border Radius',
    'Elevation',
  ] as const,
} as const;
