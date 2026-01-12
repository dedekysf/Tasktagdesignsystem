import { AvatarWithTooltip } from './AvatarWithTooltip';
import { AvatarSize, AvatarVariant } from './AvatarComponent';
import { TooltipVariant } from './Tooltip';

interface AvatarData {
  variant: AvatarVariant;
  imageUrl?: string;
  initials?: string;
  backgroundColor?: string;
  iconColor?: string;
  tooltipContent?: React.ReactNode;
}

interface AvatarGroupWithTooltipProps {
  /** Array of avatar data */
  avatars: AvatarData[];
  /** Avatar size: xs, sm, md, lg, xl */
  size?: AvatarSize;
  /** Custom className for additional styling */
  className?: string;
  /** Maximum number of avatars to display before showing +N */
  max?: number;
  /** Disabled state for all avatars in the group */
  disabled?: boolean;
  /** Tooltip content for the +N avatar showing remaining avatars */
  remainingTooltipContent?: React.ReactNode;
  /** Tooltip variant for individual avatars */
  tooltipVariant?: TooltipVariant;
  /** Tooltip variant for +N avatar */
  remainingTooltipVariant?: TooltipVariant;
}

export function AvatarGroupWithTooltip({ 
  avatars, 
  size = 'sm', 
  className = '', 
  max, 
  disabled = false,
  remainingTooltipContent,
  tooltipVariant = 'bottom-right',
  remainingTooltipVariant = 'bottom-right'
}: AvatarGroupWithTooltipProps) {
  const displayAvatars = max ? avatars.slice(0, max) : avatars;
  const remainingCount = max && avatars.length > max ? avatars.length - max : 0;

  // Calculate overlap based on size - using CSS variables
  const overlapMap = {
    'xs': -8,
    'sm': -10,
    'md': -12,
    'lg': -14,
    'xl': -16
  };

  const overlap = overlapMap[size];

  return (
    <div className={`flex items-center ${className}`}>
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          style={{
            marginLeft: index === 0 ? 0 : overlap,
            position: 'relative',
            zIndex: displayAvatars.length - index
          }}
        >
          <AvatarWithTooltip
            size={size}
            variant={avatar.variant}
            imageUrl={avatar.imageUrl}
            initials={avatar.initials}
            backgroundColor={avatar.backgroundColor}
            iconColor={avatar.iconColor}
            disabled={disabled}
            tooltipContent={avatar.tooltipContent}
            tooltipVariant={tooltipVariant}
            tooltipSize="sm"
            className="avatar-group-avatar"
            style={{
              boxShadow: 'var(--elevation-sm)'
            }}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          style={{
            marginLeft: overlap,
            position: 'relative',
            zIndex: 0
          }}
        >
          <AvatarWithTooltip
            size={size}
            variant="initials"
            initials={`+${remainingCount}`}
            disabled={false}
            tooltipContent={remainingTooltipContent}
            tooltipVariant={remainingTooltipVariant}
            tooltipSize="sm"
            className="avatar-group-avatar"
            backgroundColor="var(--grey-02)"
            style={{
              border: '2px solid var(--grey-03)',
              boxShadow: 'var(--elevation-sm)',
              color: 'var(--text-secondary)'
            }}
          />
        </div>
      )}
    </div>
  );
}