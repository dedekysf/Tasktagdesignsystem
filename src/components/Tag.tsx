import React, { ReactNode } from 'react';

interface TagProps {
  variant?: 'basic' | 'with-icon';
  color?: 'primary' | 'destructive';
  appearance?: 'fill' | 'outline';
  className?: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function Tag({
  variant = 'basic',
  color = 'primary',
  appearance = 'fill',
  className = '',
  icon,
  children
}: TagProps) {
  const colorStyles = {
    primary: {
      fill: {
        backgroundColor: 'var(--light-mint)',
        color: 'var(--secondary-green)',
        border: 'none'
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        border: '1px solid var(--primary)'
      }
    },
    destructive: {
      fill: {
        backgroundColor: 'var(--light-pink)',
        color: 'var(--alert-red)',
        border: 'none'
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--alert-red)',
        border: '1px solid var(--alert-red)'
      }
    }
  };

  const colorStyle = colorStyles[color][appearance];

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        padding: 'var(--spacing-4)',
        backgroundColor: colorStyle.backgroundColor,
        borderRadius: 'var(--radius-4)',
        fontSize: 'var(--text-caption)',
        color: colorStyle.color,
        lineHeight: '16px',
        fontWeight: 'var(--font-weight-regular)',
        border: colorStyle.border,
        width: 'fit-content'
      }}
    >
      {variant === 'with-icon' && icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}