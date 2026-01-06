/**
 * TaskTag Design System v3 - Design Tokens
 * 
 * Type-safe references to CSS custom properties.
 * These match the tokens defined in /styles/globals.css
 * 
 * Usage:
 * - import { Colors, Spacing, Radius } from './design-system/tokens';
 * - style={{ color: Colors.brandGreen, padding: Spacing.s16 }}
 */

export const Colors = {
  // Brand Colors
  brandGreen: 'var(--brand-green)',
  secondaryGreen: 'var(--secondary-green)',
  darkGreen: 'var(--dark-green)',
  
  // Text Colors
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  
  // Neutrals
  white: 'var(--white)',
  grey01: 'var(--grey-01)',
  grey02: 'var(--grey-02)',
  grey03: 'var(--grey-03)',
  grey04: 'var(--grey-04)',
  grey05: 'var(--grey-05)',
  grey06: 'var(--grey-06)',
  grey07: 'var(--grey-07)',
  grey08: 'var(--grey-08)',
  black: 'var(--black)',
  
  // Semantic Colors
  redStatus: 'var(--red-status)',
  orangeStatus: 'var(--orange-status)',
  greenStatus: 'var(--green-status)',
  blueStatus: 'var(--blue-status)',
  
  // UI Colors
  background: 'var(--background)',
  surface: 'var(--surface)',
  border: 'var(--border)',
  divider: 'var(--divider)',
  overlay: 'var(--overlay)',
} as const;

export const Spacing = {
  s4: 'var(--spacing-4)',
  s8: 'var(--spacing-8)',
  s12: 'var(--spacing-12)',
  s16: 'var(--spacing-16)',
  s20: 'var(--spacing-20)',
  s24: 'var(--spacing-24)',
  s28: 'var(--spacing-28)',
  s32: 'var(--spacing-32)',
  s36: 'var(--spacing-36)',
  s40: 'var(--spacing-40)',
  s44: 'var(--spacing-44)',
  s48: 'var(--spacing-48)',
  s52: 'var(--spacing-52)',
  s56: 'var(--spacing-56)',
  s60: 'var(--spacing-60)',
  s64: 'var(--spacing-64)',
  s68: 'var(--spacing-68)',
  s72: 'var(--spacing-72)',
  s76: 'var(--spacing-76)',
  s80: 'var(--spacing-80)',
} as const;

export const Radius = {
  r4: 'var(--radius-4)',
  r8: 'var(--radius-8)',
  r12: 'var(--radius-12)',
  r16: 'var(--radius-16)',
} as const;

export const Elevation = {
  small: 'var(--elevation-small)',
  medium: 'var(--elevation-medium)',
  large: 'var(--elevation-large)',
} as const;

export const Typography = {
  // Web Typography Classes
  web: {
    primaryHeading: 'text-web-primary-heading',
    primaryBody: 'text-web-primary-body',
    secondaryHeading: 'text-web-secondary-heading',
    secondaryBody: 'text-web-secondary-body',
    metadataPrimary: 'text-web-metadata-primary',
    metadataSecondary: 'text-web-metadata-secondary',
  },
  // Mobile Typography Classes
  mobile: {
    primaryHeading: 'text-mobile-primary-heading',
    primaryBody: 'text-mobile-primary-body',
    secondaryHeading: 'text-mobile-secondary-heading',
    secondaryBody: 'text-mobile-secondary-body',
    metadataPrimary: 'text-mobile-metadata-primary',
    metadataSecondary: 'text-mobile-metadata-secondary',
  },
} as const;

/**
 * Helper function to apply multiple design tokens
 * 
 * Usage:
 * <div style={createStyle({ 
 *   backgroundColor: Colors.brandGreen,
 *   padding: Spacing.s16,
 *   borderRadius: Radius.r8 
 * })}>
 */
export function createStyle(styles: React.CSSProperties): React.CSSProperties {
  return styles;
}

/**
 * Type-safe CSS variable getter
 * Use this in JavaScript when you need the computed value
 * 
 * Usage:
 * const green = getCSSVar('--brand-green');
 */
export function getCSSVar(varName: string): string {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
  return '';
}

/**
 * Set a CSS variable programmatically
 * Useful for dynamic theming
 * 
 * Usage:
 * setCSSVar('--brand-green', '#00FF00');
 */
export function setCSSVar(varName: string, value: string): void {
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty(varName, value);
  }
}
