/**
 * TaskTag Design System v3 - Foundation Tokens
 * 
 * Design token constants for easy reuse in JavaScript/TypeScript.
 * These values map to the CSS custom properties defined in globals.css.
 * 
 * Usage Examples:
 * - import { colors, spacing, radius } from './foundation/tokens';
 * - const myColor = colors.primary;
 * - const mySpacing = spacing[16];
 */

/**
 * Color Tokens
 * Use CSS variables directly for runtime theme support
 */
export const colors = {
  // Brand Colors
  brandGreen: 'var(--brand-green)',
  secondaryGreen: 'var(--secondary-green)',
  darkGreen: 'var(--dark-green)',
  vividYellow: 'var(--vivid-yellow)',
  alertRed: 'var(--alert-red)',
  
  // Text Colors
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textSecondary70: 'var(--text-secondary-70)',
  
  // Pastel Colors
  pastelBlue: 'var(--pastel-blue)',
  pastelPurple: 'var(--pastel-purple)',
  pastelMagenta: 'var(--pastel-magenta)',
  pastelOrange: 'var(--pastel-orange)',
  pastelYellow: 'var(--pastel-yellow)',
  brightYellow: 'var(--bright-yellow)',
  
  // Light Background Colors
  lightPeach: 'var(--light-peach)',
  lightPurple: 'var(--light-purple)',
  lightLavender: 'var(--light-lavender)',
  lightLavenderBlue: 'var(--light-lavender-blue)',
  lightMint: 'var(--light-mint)',
  lightSky: 'var(--light-sky)',
  lightPink: 'var(--light-pink)',
  lightCream: 'var(--light-cream)',
  
  // Neutrals
  white: 'var(--white)',
  grey01: 'var(--grey-01)',
  grey02: 'var(--grey-02)',
  grey03: 'var(--grey-03)',
  grey04: 'var(--grey-04)',
  grey05: 'var(--grey-05)',
  grey06: 'var(--grey-06)',
  black: 'var(--black)',
  overlay: 'var(--overlay)',
  
  // Vivid Colors
  blue: 'var(--blue)',
  purple: 'var(--purple)',
  lightMagenta: 'var(--light-magenta)',
  darkMagenta: 'var(--dark-magenta)',
  orange: 'var(--orange)',
  
  // Semantic Colors
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  card: 'var(--card)',
  cardForeground: 'var(--card-foreground)',
  popover: 'var(--popover)',
  popoverForeground: 'var(--popover-foreground)',
  primary: 'var(--primary)',
  primaryForeground: 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  secondaryForeground: 'var(--secondary-foreground)',
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  accent: 'var(--accent)',
  accentForeground: 'var(--accent-foreground)',
  destructive: 'var(--destructive)',
  destructiveForeground: 'var(--destructive-foreground)',
  border: 'var(--border)',
  input: 'var(--input)',
  inputBackground: 'var(--input-background)',
  ring: 'var(--ring)',
  
  // Chart Colors
  chart1: 'var(--chart-1)',
  chart2: 'var(--chart-2)',
  chart3: 'var(--chart-3)',
  chart4: 'var(--chart-4)',
  chart5: 'var(--chart-5)',
} as const;

/**
 * Typography Tokens
 */
export const typography = {
  // Font Sizes
  fontSize: {
    h1: 'var(--text-h1)',
    h2: 'var(--text-h2)',
    h3: 'var(--text-h3)',
    h4: 'var(--text-h4)',
    base: 'var(--text-base)',
    label: 'var(--text-label)',
    caption: 'var(--text-caption)',
  },
  
  // Font Weights
  fontWeight: {
    regular: 'var(--font-weight-regular)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
  },
  
  // Font Family
  fontFamily: {
    inter: '"Inter", sans-serif',
  },
} as const;

/**
 * Spacing Tokens (multiples of 4)
 */
export const spacing = {
  0: 'var(--spacing-0)',
  4: 'var(--spacing-4)',
  8: 'var(--spacing-8)',
  12: 'var(--spacing-12)',
  16: 'var(--spacing-16)',
  20: 'var(--spacing-20)',
  24: 'var(--spacing-24)',
  32: 'var(--spacing-32)',
  40: 'var(--spacing-40)',
  48: 'var(--spacing-48)',
  56: 'var(--spacing-56)',
  64: 'var(--spacing-64)',
  80: 'var(--spacing-80)',
  96: 'var(--spacing-96)',
  128: 'var(--spacing-128)',
} as const;

/**
 * Border Radius Tokens
 */
export const radius = {
  none: 'var(--radius-none)',
  2: 'var(--radius-2)',
  4: 'var(--radius-4)',
  8: 'var(--radius-8)',
  12: 'var(--radius-12)',
  16: 'var(--radius-16)',
  20: 'var(--radius-20)',
  24: 'var(--radius-24)',
  full: 'var(--radius-full)',
  // Semantic tokens
  default: 'var(--radius)',
  button: 'var(--radius-button)',
  card: 'var(--radius-card)',
} as const;

/**
 * Elevation (Shadow) Tokens
 */
export const elevation = {
  sm: 'var(--elevation-sm)',
  md: 'var(--elevation-md)',
  lg: 'var(--elevation-lg)',
  xl: 'var(--elevation-xl)',
} as const;

/**
 * Border Width Tokens
 */
export const borderWidth = {
  none: '0px',
  thin: '1px',
  medium: '2px',
  thick: '4px',
} as const;
