import { Avatar, AvatarSize, AvatarVariant } from './AvatarComponent';

interface AvatarData {
  variant: AvatarVariant;
  imageUrl?: string;
  initials?: string;
  backgroundColor?: string;
}

interface AvatarGroupProps {
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
}

export function AvatarGroup({ avatars, size = 'md', className = '', max, disabled = false }: AvatarGroupProps) {
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
          className="avatar-group-item"
          style={{
            marginLeft: index === 0 ? 0 : overlap,
            position: 'relative',
            zIndex: displayAvatars.length - index,
            transition: 'opacity 0.2s ease'
          }}
        >
          <Avatar
            size={size}
            variant={avatar.variant}
            imageUrl={avatar.imageUrl}
            initials={avatar.initials}
            backgroundColor={avatar.backgroundColor}
            disabled={disabled}
            className="avatar-group-avatar"
            style={{
              boxShadow: 'var(--elevation-sm)'
            }}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className="avatar-group-item"
          style={{
            marginLeft: overlap,
            position: 'relative',
            zIndex: 0,
            transition: 'opacity 0.2s ease'
          }}
        >
          <Avatar
            size={size}
            variant="initials"
            initials={`+${remainingCount}`}
            disabled={false}
            backgroundColor="var(--grey-02)"
            className="avatar-group-avatar"
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