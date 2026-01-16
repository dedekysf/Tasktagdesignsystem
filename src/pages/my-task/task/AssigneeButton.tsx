import svgPaths from "../../../imports/svg-nwqvnvpy04";
import { Mail, User, UserPlus } from "lucide-react";
import { Button } from "../../../components/Button";
import { AvatarGroupWithTooltip } from "../../../components/AvatarGroupWithTooltip";
import { Avatar } from "../../../components/AvatarComponent";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { getUserByEmail, getColorFromEmail, getInitials } from "../../../data/userData";
import { AssignedMembersButton } from "../../../components/AssignedMembersButton";

interface Assignee {
  name: string;
  avatar: string;
  isEmailInvite?: boolean;
  email?: string;
  avatarUrl?: string;
}

interface AssigneeButtonProps {
  assignees: Assignee[];
  onClick?: () => void;
}

export function AssigneeButton({ assignees, onClick }: AssigneeButtonProps) {
  // No assignees - show "Assignee" button
  if (assignees.length === 0) {
    return (
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        className="bg-white relative rounded-[40px] shrink-0 hover:bg-secondary transition-colors"
        style={{
          width: '120px',
          height: 'var(--size-sm)'
        }}
      >
        <div className="flex flex-row items-center justify-center max-w-inherit min-w-inherit size-full">
          <div className="box-border content-stretch flex gap-[4px] items-center justify-center max-w-inherit min-w-inherit overflow-clip px-[16px] py-[8px] relative size-full">
            <UserPlus className="size-3 shrink-0 text-[var(--text-secondary)]" strokeWidth={2} />
            <p className="text-[12px] text-[var(--text-secondary)] text-nowrap whitespace-pre truncate" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              Assignee
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </button>
    );
  }

  // 1 assignee - show single avatar with name or email with tooltip
  if (assignees.length === 1) {
    const assignee = assignees[0];
    
    // Get consistent color from userData
    const userData = assignee.email ? getUserByEmail(assignee.email) : null;
    const initials = userData?.initials || getInitials(assignee.name);
    const color = assignee.isEmailInvite ? '' : (userData?.color || getColorFromEmail(assignee.email || assignee.name));
    
    // Use AssignedMembersButton from main components
    const member = {
      id: assignee.isEmailInvite ? `invite-${assignee.email}` : assignee.email || assignee.name,
      name: assignee.name,
      email: assignee.email || '',
      avatar: assignee.avatar || userData?.avatarUrl,
      initials: initials,
      color: color,
      role: 'Assignee'
    };
    
    return (
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <AssignedMembersButton
          members={[member]}
          onClick={(e) => {
            onClick?.();
          }}
        />
      </div>
    );
  }

  // 2-3 assignees or more - show overlapping avatars with individual tooltips
  const avatarData = assignees.map((assignee) => {
    // Get consistent color from userData
    const userData = assignee.email ? getUserByEmail(assignee.email) : null;
    const initials = userData?.initials || getInitials(assignee.name);
    const color = assignee.isEmailInvite ? '' : (userData?.color || getColorFromEmail(assignee.email || assignee.name));
    
    return {
      variant: assignee.isEmailInvite ? ('icon' as const) : ('initials' as const),
      initials: assignee.isEmailInvite ? undefined : initials,
      imageUrl: assignee.avatar || userData?.avatarUrl,
      backgroundColor: assignee.isEmailInvite ? 'var(--grey-02)' : color,
      iconColor: assignee.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)',
      isEmailInvite: assignee.isEmailInvite,
      tooltipContent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <Avatar
            size="xs"
            variant={assignee.isEmailInvite ? 'icon' : 'initials'}
            initials={initials}
            imageUrl={assignee.avatar || userData?.avatarUrl}
            backgroundColor={assignee.isEmailInvite ? 'var(--grey-02)' : color}
            iconColor={assignee.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)'}
          />
          <span style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--white)' }}>{assignee.name}</span>
        </div>
      )
    };
  });

  // Remaining assignees tooltip content for +N
  const remainingTooltipContent = assignees.length > 3 ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      {assignees.slice(3).map((assignee, idx) => {
        // Get consistent color from userData
        const userData = assignee.email ? getUserByEmail(assignee.email) : null;
        const initials = userData?.initials || getInitials(assignee.name);
        const color = assignee.isEmailInvite ? '' : (userData?.color || getColorFromEmail(assignee.email || assignee.name));
        
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar
              size="xs"
              variant={assignee.isEmailInvite ? 'icon' : 'initials'}
              initials={initials}
              imageUrl={assignee.avatar || userData?.avatarUrl}
              backgroundColor={assignee.isEmailInvite ? 'var(--grey-02)' : color}
              iconColor={assignee.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)'}
            />
            <span style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--white)' }}>{assignee.name}</span>
          </div>
        );
      })}
    </div>
  ) : undefined;

  return (
    <div 
      className="shrink-0 cursor-pointer flex items-center justify-start"
      style={{
        width: '120px',
        height: 'var(--size-sm)'
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <AvatarGroupWithTooltip
        avatars={avatarData}
        size="sm"
        max={3}
        remainingTooltipContent={remainingTooltipContent}
      />
    </div>
  );
}