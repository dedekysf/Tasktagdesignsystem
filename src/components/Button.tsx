import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariant = 'fill' | 'outline' | 'ghost';
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Button variant: fill, outline, ghost */
  variant?: ButtonVariant;
  /** Button size: xl, lg, md, sm, xs */
  size?: ButtonSize;
  /** Custom className for color theming (btn-primary, btn-secondary, btn-destructive) */
  className?: string;
  /** Button content */
  children?: ReactNode;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'fill',
  size = 'md',
  className = '',
  children,
  disabled = false,
  style: customStyle,
  ...props
}, ref) => {
  // Size configurations using CSS variables
  const sizeStyles = {
    xl: {
      padding: 'var(--spacing-16) var(--spacing-24)',
      gap: 'var(--spacing-12)',
      minHeight: 'var(--size-xl)',
      fontSize: 'var(--text-h3)'
    },
    lg: {
      padding: 'var(--spacing-12) var(--spacing-20)',
      gap: 'var(--spacing-8)',
      minHeight: 'var(--size-lg)',
      fontSize: 'var(--text-base)'
    },
    md: {
      padding: 'var(--spacing-8) var(--spacing-16)',
      gap: 'var(--spacing-8)',
      minHeight: 'var(--size-md)',
      fontSize: 'var(--text-base)'
    },
    sm: {
      padding: 'var(--spacing-8) var(--spacing-12)',
      gap: 'var(--spacing-8)',
      minHeight: 'var(--size-sm)',
      fontSize: 'var(--text-label)'
    },
    xs: {
      padding: 'var(--spacing-4) var(--spacing-8)',
      gap: 'var(--spacing-4)',
      minHeight: 'var(--size-xs)',
      fontSize: 'var(--text-caption)'
    }
  };

  const currentSize = sizeStyles[size];

  // Build class string
  // Base class is "btn", then add variant modifier if needed
  let classes = 'btn';
  
  // Add variant modifier for outline and ghost
  if (variant === 'outline') {
    classes += ' btn-outline';
  } else if (variant === 'ghost') {
    classes += ' btn-ghost';
  }
  
  // Add color class from className prop (e.g., btn-primary, btn-secondary, btn-destructive)
  if (className) {
    classes += ' ' + className;
  }

  return (
    <button
      className={classes.trim()}
      disabled={disabled}
      style={{
        fontWeight: 'var(--font-weight-medium)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        ...currentSize,
        ...customStyle // Custom styles override everything
      }}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';