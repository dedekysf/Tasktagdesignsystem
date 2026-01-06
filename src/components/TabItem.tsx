import { LucideIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export type TabItemVariant = 'default' | 'icon-left' | 'icon-right';
export type TabItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TabItemProps {
  /** Tab variant: default, icon-left, icon-right */
  variant?: TabItemVariant;
  /** Tab size: xs, sm, md, lg, xl */
  size?: TabItemSize;
  /** Custom className for additional styling */
  className?: string;
  /** Tab label text */
  label: string;
  /** Optional icon component from lucide-react */
  icon?: LucideIcon;
  /** Optional badge number or text */
  badge?: string | number;
  /** Whether the tab is active */
  isActive?: boolean;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export function TabItem({ 
  variant = 'default', 
  size = 'md', 
  className = '', 
  label, 
  icon: Icon,
  badge,
  isActive = false,
  disabled = false,
  onClick 
}: TabItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState(false);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const sizeMap = {
    'xs': { heightVar: '--size-xs', padding: '6px 12px', fontSize: '10px', iconSize: 12, gap: 6 },
    'sm': { heightVar: '--size-sm', padding: '8px 14px', fontSize: '12px', iconSize: 14, gap: 6 },
    'md': { heightVar: '--size-md', padding: '10px 16px', fontSize: '14px', iconSize: 16, gap: 8 },
    'lg': { heightVar: '--size-lg', padding: '12px 20px', fontSize: '16px', iconSize: 18, gap: 8 },
    'xl': { heightVar: '--size-xl', padding: '14px 24px', fontSize: '18px', iconSize: 20, gap: 10 }
  };

  const config = sizeMap[size];

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
      }
    };
  }, []);

  // Determine styles based on state
  let textColor = 'var(--text-secondary)';
  let borderBottomColor = 'transparent';
  let cursor = 'pointer';
  let opacity = 1;

  if (disabled) {
    textColor = 'var(--grey-04)';
    borderBottomColor = 'transparent';
    cursor = 'not-allowed';
    opacity = 1;
  } else if (isLongPressed) {
    // Long press state - secondary primary color with lower opacity
    textColor = 'var(--primary)';
    borderBottomColor = 'var(--primary)';
    opacity = 0.5;
  } else if (isPressed) {
    // Press state - secondary primary color with reduced opacity
    textColor = 'var(--primary)';
    borderBottomColor = 'var(--primary)';
    opacity = 0.7;
  } else if (isActive) {
    // Active state - secondary primary color
    textColor = 'var(--primary)';
    borderBottomColor = 'var(--primary)';
    opacity = 1;
  } else if (isHovered) {
    // Hover state - secondary primary color
    textColor = 'var(--primary)';
    borderBottomColor = 'transparent';
    opacity = 1;
  }

  const handleMouseDown = () => {
    if (disabled) return;
    setIsPressed(true);
    
    // Start long press timer (500ms)
    longPressTimerRef.current = setTimeout(() => {
      setIsLongPressed(true);
    }, 500);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    setIsPressed(false);
    setIsLongPressed(false);
    
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    setIsLongPressed(false);
    
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-all ${className}`}
      style={{
        height: `var(${config.heightVar})`,
        padding: config.padding,
        backgroundColor: 'transparent',
        color: textColor,
        fontSize: config.fontSize,
        fontWeight: 'var(--font-weight-medium)',
        gap: config.gap,
        cursor,
        border: 'none',
        borderBottom: `2px solid ${borderBottomColor}`,
        outline: 'none',
        userSelect: 'none',
        opacity,
        transitionProperty: 'color, border-color, opacity',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out'
      }}
    >
      {variant === 'icon-left' && Icon && (
        <Icon size={config.iconSize} />
      )}
      
      <span>{label}</span>
      
      {variant === 'icon-right' && Icon && (
        <Icon size={config.iconSize} />
      )}
      
      {badge !== undefined && (
        <span 
          className="text-web-metadata-secondary"
          style={{
            backgroundColor: disabled ? 'var(--grey-04)' : 'var(--secondary-green)',
            color: 'var(--white)',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            marginLeft: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '18px',
            width: '18px',
            height: '18px'
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}