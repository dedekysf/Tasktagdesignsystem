import { Avatar } from './AvatarComponent';
import { Tooltip } from './Tooltip';
import { useState, useRef, useEffect } from 'react';

export interface AssignedMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
  color: string;
  role: string;
}

export interface AssignedMembersButtonProps {
  /** Array of assigned members - only displays 1 member */
  members: AssignedMember[];
  /** Click handler */
  onClick: () => void;
  /** Custom className for additional styling */
  className?: string;
}

/**
 * AssignedMembersButton Component
 * 
 * Displays a single assigned member with avatar + name and tooltip on button hover (only if text is truncated).
 * 
 * Features:
 * - Fixed width: 124px (text truncates if exceeds)
 * - Fixed height: 32px (container)
 * - Avatar size: 24px (xs)
 * - Avatar position: Vertically centered with proper padding (8px from left)
 * - Gap between avatar and text: 2px
 * - Tooltip on button hover: Shows Avatar xs (24px) + name in white (ONLY if text is truncated)
 * 
 * @example
 * ```tsx
 * <AssignedMembersButton
 *   members={[{ id: '1', name: 'John Doe', email: 'john@example.com', initials: 'JD', color: '#4F46E5', role: 'Developer' }]}
 *   onClick={() => console.log('Clicked')}
 * />
 * ```
 */
export function AssignedMembersButton({ 
  members, 
  onClick, 
  className = '' 
}: AssignedMembersButtonProps) {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerHeight = 32; // Fixed height in px
  
  // Only display first member
  if (members.length === 0) return null;
  
  const member = members[0];
  const isInvited = member.id.startsWith('invite-');
  
  // Check if text is truncated
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const isTrunc = textRef.current.scrollWidth > textRef.current.clientWidth;
        setIsTruncated(isTrunc);
      }
    };
    
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    
    return () => window.removeEventListener('resize', checkTruncation);
  }, [member]);
  
  // Tooltip content - same as My Task
  const tooltipContent = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
      <Avatar
        size="xs"
        variant={isInvited ? 'icon' : (member.avatar ? 'image' : 'initials')}
        initials={member.initials}
        imageUrl={member.avatar}
        backgroundColor={isInvited ? 'var(--grey-02)' : member.color}
        iconColor={isInvited ? 'var(--grey-05)' : 'var(--text-secondary)'}
      />
      <span style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--white)' }}>
        {member.name}
      </span>
    </div>
  );
  
  const buttonElement = (
    <div 
      onClick={onClick}
      className={`relative rounded-full shrink-0 cursor-pointer hover:bg-[var(--grey-01)] transition-colors ${className}`}
      style={{ 
        height: `${containerHeight}px`,
        width: '124px'
      }}
      data-name="Assigned Members Button"
    >
      <div className="box-border content-stretch flex items-center justify-start relative w-full h-full" style={{ gap: '2px', paddingLeft: '8px', paddingRight: '8px' }}>
        {/* Avatar - 24px (xs) - vertically centered */}
        <div className="relative shrink-0">
          <Avatar
            size="xs"
            variant={isInvited ? 'icon' : (member.avatar ? 'image' : 'initials')}
            initials={member.initials}
            imageUrl={member.avatar}
            backgroundColor={isInvited ? 'var(--grey-02)' : member.color}
            iconColor={isInvited ? 'var(--grey-05)' : 'var(--text-secondary)'}
          />
        </div>
        
        {/* Name with truncate */}
        <p 
          ref={textRef}
          className="flex-1 truncate"
          style={{ 
            fontWeight: 'var(--font-weight-regular)',
            fontSize: 'var(--text-caption)',
            lineHeight: '16px',
            color: 'var(--grey-07)',
            letterSpacing: '0.24px'
          }}
        >
          {isInvited ? member.email : member.name}
        </p>
      </div>
      
      {/* Border */}
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-0 pointer-events-none rounded-full" 
        style={{ borderColor: 'var(--border)' }} 
      />
    </div>
  );
  
  // Only wrap with tooltip if text is truncated
  if (isTruncated) {
    return (
      <Tooltip
        variant="bottom-right"
        size="sm"
        content={tooltipContent}
      >
        {buttonElement}
      </Tooltip>
    );
  }
  
  return buttonElement;
}
