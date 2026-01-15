import { User } from 'lucide-react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'icon' | 'image' | 'initials';

interface AvatarProps {
  /** Avatar size: xs, sm, md, lg, xl */
  size?: AvatarSize;
  /** Avatar variant: icon, image, initials */
  variant?: AvatarVariant;
  /** Custom className for additional styling */
  className?: string;
  /** Initials text (for initials variant) */
  initials?: string;
  /** Image URL (for image variant) */
  imageUrl?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
  /** Disabled state */
  disabled?: boolean;
  /** Icon color (for icon variant) */
  iconColor?: string;
  /** Background color override */
  backgroundColor?: string;
}

export function Avatar({ size = 'md', variant = 'icon', className = '', initials = "AZ", imageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0MDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", style = {}, disabled = false, iconColor = 'var(--text-secondary)', backgroundColor }: AvatarProps) {
  // Map size to CSS variables and proportional font/icon sizes
  const sizeMap = {
    'xs': { containerVar: '--size-xs', text: '10px', iconScale: 0.5 },
    'sm': { containerVar: '--size-sm', text: '12px', iconScale: 0.5 },
    'md': { containerVar: '--size-md', text: '14px', iconScale: 0.5 },
    'lg': { containerVar: '--size-lg', text: '18px', iconScale: 0.5 },
    'xl': { containerVar: '--size-xl', text: '22px', iconScale: 0.5 }
  };

  const config = sizeMap[size];
  
  // Get the actual size value from CSS variable for icon sizing
  const containerSize = getComputedStyle(document.documentElement)
    .getPropertyValue(config.containerVar)
    .trim();
  const iconSize = parseInt(containerSize) * config.iconScale;

  // Extract color from style for text, and remove it from container style
  const { color: textColor, border: customBorder, ...containerStyle } = style;

  // Auto-detect variant: if imageUrl exists and is not the default, use 'image'
  const defaultImageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0MDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const hasValidImage = imageUrl && imageUrl !== defaultImageUrl;
  const effectiveVariant = hasValidImage ? 'image' : variant;

  // Check if background is gray-02 for special styling
  const bgColor = disabled ? 'var(--grey-02)' : (backgroundColor || 'var(--light-mint)');
  
  // Apply border: grey-05 for disabled, white for normal, or custom from style prop
  const borderColor = customBorder || (disabled ? '2px solid var(--grey-05)' : '2px solid var(--white)');
  const effectiveIconColor = disabled ? 'var(--grey-05)' : iconColor;

  return (
    <div 
      className={`relative shrink-0 flex items-center justify-center overflow-hidden ${className}`}
      style={{ 
        width: `var(${config.containerVar})`, 
        height: `var(${config.containerVar})`,
        borderRadius: 'var(--radius-full)',
        backgroundColor: bgColor,
        border: borderColor,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'opacity 0.2s ease',
        ...containerStyle
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '0.8';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {effectiveVariant === 'image' && (
        <img 
          alt="Avatar" 
          className="size-full object-cover" 
          src={imageUrl}
          style={{
            filter: disabled ? 'grayscale(100%)' : 'none'
          }}
        />
      )}
      
      {effectiveVariant === 'initials' && (
        <p 
          style={{ 
            fontSize: config.text,
            fontWeight: 'var(--font-weight-semibold)',
            color: textColor || (disabled ? 'var(--grey-05)' : 'var(--text-primary)')
          }}
        >
          {initials}
        </p>
      )}
      
      {effectiveVariant === 'icon' && (
        <User 
          style={{ color: effectiveIconColor }}
          size={iconSize}
        />
      )}
    </div>
  );
}