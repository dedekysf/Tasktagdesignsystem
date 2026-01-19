import { Trash2, Repeat } from 'lucide-react';
import { Avatar } from '../../components/AvatarComponent';
import { Tooltip } from '../../components/Tooltip';

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Assignee' | 'Viewer';
  avatarUrl?: string;
  initials?: string;
  color?: string;
  isPending?: boolean;
  isFromActiveMembers?: boolean;
}

export interface ProjectMemberRowProps {
  /** Member data */
  member: Member;
  /** Whether the row is hovered */
  isHovered: boolean;
  /** Whether the dropdown is open */
  isDropdownOpen: boolean;
  /** Hover handler */
  onMouseEnter: () => void;
  /** Mouse leave handler */
  onMouseLeave: () => void;
  /** Role dropdown toggle */
  onToggleDropdown: () => void;
  /** Update role handler */
  onUpdateRole: (role: 'Owner' | 'Assignee' | 'Viewer') => void;
  /** Delete member handler */
  onDelete: () => void;
  /** Resend invite handler (for pending invites) */
  onResendInvite?: () => void;
  /** Custom className for additional styling */
  className?: string;
}

// Helper functions
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06595', '#CC5DE8', '#845EF7'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

export function ProjectMemberRow({
  member,
  isHovered,
  isDropdownOpen,
  onMouseEnter,
  onMouseLeave,
  onToggleDropdown,
  onUpdateRole,
  onDelete,
  onResendInvite,
  className = ''
}: ProjectMemberRowProps) {
  const shouldHighlight = isHovered || isDropdownOpen;

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex items-center gap-[12px] p-[12px] rounded-lg border transition-colors ${className}`}
      style={{
        backgroundColor: shouldHighlight ? 'var(--grey-01)' : 'var(--white)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Avatar */}
      <Tooltip
        variant="bottom-right"
        size="sm"
        content={member.name}
      >
        <div>
          {member.isPending ? (
            <Avatar
              size="md"
              variant="icon"
              backgroundColor="var(--grey-02)"
              iconColor="var(--grey-05)"
            />
          ) : member.avatarUrl ? (
            <Avatar 
              size="md"
              variant="image"
              imageUrl={member.avatarUrl}
            />
          ) : (
            <Avatar 
              size="md"
              variant="initials"
              initials={member.initials || getInitials(member.name)}
              backgroundColor={member.color || getAvatarColor(member.name)}
            />
          )}
        </div>
      </Tooltip>

      {/* Name & Email */}
      <div className="flex flex-col flex-1 min-w-0">
        {member.isPending ? (
          <p className="truncate" style={{
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primary)',
            lineHeight: '18px'
          }}>
            {member.email}
          </p>
        ) : (
          <>
            <p className="truncate" style={{
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--text-primary)',
              lineHeight: '18px'
            }}>
              {member.name}
            </p>
            <p className="truncate" style={{
              fontSize: 'var(--text-caption)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--grey-04)',
              lineHeight: '16px'
            }}>
              {member.email}
            </p>
          </>
        )}
      </div>

      {/* Action Icons */}
      {member.isPending ? (
        <div className="flex items-center gap-[8px]">
          <Tooltip
            variant="bottom-right"
            size="sm"
            content="Resend invite"
          >
            <button 
              onClick={onResendInvite}
              className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors cursor-pointer" 
              style={{ backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent' }}
            >
              <Repeat className="size-[18px]" style={{ color: 'var(--text-primary)' }} strokeWidth={2} />
            </button>
          </Tooltip>

          <Tooltip
            variant="bottom-right"
            size="sm"
            content="Cancel invite"
          >
            <button 
              onClick={onDelete}
              className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors cursor-pointer"
              style={{ backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent' }}
            >
              <Trash2 className="size-[18px]" style={{ color: 'var(--text-primary)' }} strokeWidth={2} />
            </button>
          </Tooltip>
        </div>
      ) : (
        <Tooltip
          variant="bottom-right"
          size="sm"
          content="Delete"
        >
          <button 
            onClick={onDelete}
            className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors cursor-pointer" 
            style={{ backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent' }}
          >
            <Trash2 className="size-[18px]" style={{ color: 'var(--text-primary)' }} strokeWidth={2} />
          </button>
        </Tooltip>
      )}

      {/* Role - Owner = plain text, Email invite = plain text, Active member = dropdown */}
      {member.role === 'Owner' ? (
        // Owner - Plain text (no dropdown)
        <div className="flex items-center px-[12px] py-[6px] w-[100px] justify-end">
          <span style={{
            fontSize: 'var(--text-caption-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primary)',
          }}>
            {member.role}
          </span>
        </div>
      ) : member.isPending === true ? (
        // Email invite - Plain text (no dropdown)
        <div className="flex items-center px-[12px] py-[6px] w-[100px] justify-end">
          <span style={{
            fontSize: 'var(--text-caption-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primary)',
          }}>
            {member.role}
          </span>
        </div>
      ) : (
        // Active member (isPending === false or undefined) - Dropdown role (editable) WITHOUT Remove option
        <div className="role-dropdown-container relative">
          <button 
            onClick={onToggleDropdown}
            className="flex items-center gap-[6px] px-[12px] py-[6px] rounded transition-colors w-[100px] justify-end cursor-pointer" 
            style={{
              backgroundColor: isDropdownOpen ? 'var(--grey-01)' : (isHovered ? 'var(--grey-01)' : 'transparent')
            }}
          >
            <span style={{
              fontSize: 'var(--text-caption-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--text-primary)',
            }}>
              {member.role}
            </span>
            <div 
              className="shrink-0 transition-transform duration-200"
              style={{
                width: '16px',
                height: '16px',
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Dropdown Menu - borderless, NO Remove option */}
          {isDropdownOpen && (
            <div 
              className="absolute top-full right-0 mt-1 py-1 z-50 min-w-[120px]"
              style={{
                backgroundColor: 'var(--card)',
                boxShadow: 'var(--elevation-md)',
                borderRadius: 'var(--radius-8)',
              }}
            >
              {/* Assignee Option */}
              <button
                onClick={() => onUpdateRole('Assignee')}
                className="w-full text-left transition-colors"
                style={{
                  padding: 'var(--spacing-8) var(--spacing-12)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Assignee
              </button>

              {/* Viewer Option */}
              <button
                onClick={() => onUpdateRole('Viewer')}
                className="w-full text-left transition-colors"
                style={{
                  padding: 'var(--spacing-8) var(--spacing-12)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Viewer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
