import { Avatar, AvatarSize, AvatarVariant } from './AvatarComponent';
import { Tooltip, TooltipVariant, TooltipSize } from './Tooltip';

interface AvatarWithTooltipProps {
  /** Avatar variant: icon, image, initials */
  variant?: AvatarVariant;
  /** Avatar size: xs, sm, md, lg, xl */
  size?: AvatarSize;
  /** Custom className for additional styling */
  className?: string;
  /** Initials text (for initials variant) */
  initials?: string;
  /** Image URL (for image variant) */
  imageUrl?: string;
  /** Background color override */
  backgroundColor?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Icon color (for icon variant) */
  iconColor?: string;
  /** Tooltip content */
  tooltipContent?: React.ReactNode;
  /** Tooltip variant position */
  tooltipVariant?: TooltipVariant;
  /** Tooltip size */
  tooltipSize?: TooltipSize;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

export function AvatarWithTooltip({ 
  variant = 'icon',
  size = 'sm', 
  className = '', 
  initials, 
  imageUrl, 
  backgroundColor,
  disabled = false,
  iconColor,
  tooltipContent,
  tooltipVariant = 'bottom-center',
  tooltipSize = 'sm',
  style = {}
}: AvatarWithTooltipProps) {
  
  const avatarElement = (
    <Avatar
      size={size}
      variant={variant}
      imageUrl={imageUrl}
      initials={initials}
      backgroundColor={backgroundColor}
      disabled={disabled}
      iconColor={iconColor}
      className={className}
      style={style}
    />
  );

  // If tooltip content is provided and not disabled, wrap with Tooltip
  if (tooltipContent && !disabled) {
    return (
      <Tooltip 
        variant={tooltipVariant} 
        content={tooltipContent} 
        size={tooltipSize}
      >
        {avatarElement}
      </Tooltip>
    );
  }

  return avatarElement;
}