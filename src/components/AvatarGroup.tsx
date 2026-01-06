import { Avatar, AvatarSize, AvatarVariant } from './AvatarComponent';

interface AvatarData {
  variant: AvatarVariant;
  imageUrl?: string;
  initials?: string;
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
            transition: 'opacity 0.2s ease'
          }}
        >
          <Avatar
            size={size}
            variant={avatar.variant}
            imageUrl={avatar.imageUrl}
            initials={avatar.initials}
            disabled={disabled}
            className="avatar-group-avatar"
            style={{
              border: '2px solid var(--white)',
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
            transition: 'opacity 0.2s ease'
          }}
        >
          <Avatar
            size={size}
            variant="initials"
            initials={`+${remainingCount}`}
            disabled={disabled}
            className="avatar-group-avatar"
            style={{
              border: '2px solid var(--white)',
              boxShadow: 'var(--elevation-sm)',
              backgroundColor: disabled ? 'var(--grey-02)' : 'var(--black)',
              color: disabled ? 'var(--grey-05)' : 'var(--white)'
            }}
          />
        </div>
      )}
    </div>
  );
}