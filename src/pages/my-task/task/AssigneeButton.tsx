import svgPaths from "../../../imports/svg-nwqvnvpy04";
import { getInitials, getAvatarColor } from "../../../utils/avatar";
import { Mail, User, UserPlus } from "lucide-react";
import { Button } from "../../../components/Button";
import { AvatarGroupWithTooltip } from "../../../components/AvatarGroupWithTooltip";
import { Avatar } from "../../../components/AvatarComponent";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

interface Assignee {
  name: string;
  avatar: string;
  isEmailInvite?: boolean;
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
    const initials = getInitials(assignee.name);
    const color = getAvatarColor(assignee.name);
    
    return (
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="btn-secondary shrink-0"
            style={{
              width: '120px',
              height: 'var(--size-sm)',
              padding: '0 var(--spacing-12)',
              borderRadius: 'var(--radius-full)',
              borderColor: 'var(--grey-03)',
              justifyContent: 'flex-start'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            {assignee.isEmailInvite ? (
              <Avatar
                size="xs"
                variant="icon"
                backgroundColor="var(--grey-02)"
                iconColor="var(--grey-05)"
              />
            ) : (
              <div className="size-5 rounded-full shrink-0 relative flex items-center justify-center" style={{ backgroundColor: color }}>
                <span className="text-[10px] text-[var(--text-primary)]" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                  {initials}
                </span>
              </div>
            )}
            <span className="text-[12px] text-[var(--text-secondary)] truncate" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              {assignee.name}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom"
          sideOffset={8}
          className="bg-foreground text-primary-foreground border-none shadow-lg text-[12px] tracking-[0.24px] px-3 py-2"
        >
          <div className="flex items-center gap-2">
            {assignee.isEmailInvite ? (
              <Avatar
                size="xs"
                variant="icon"
                backgroundColor="var(--grey-02)"
                iconColor="var(--grey-05)"
              />
            ) : (
              <div className="size-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: color }}>
                <span className="text-[10px] text-white" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                  {initials}
                </span>
              </div>
            )}
            <span style={{ fontWeight: 'var(--font-weight-regular)' }}>{assignee.name}</span>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  // 2-3 assignees or more - show overlapping avatars with individual tooltips
  const avatarData = assignees.map((assignee) => {
    const initials = getInitials(assignee.name);
    const color = getAvatarColor(assignee.name);
    
    return {
      variant: assignee.isEmailInvite ? ('icon' as const) : ('initials' as const),
      initials: assignee.isEmailInvite ? undefined : initials,
      imageUrl: assignee.avatar,
      backgroundColor: assignee.isEmailInvite ? 'var(--grey-02)' : color,
      iconColor: assignee.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)',
      isEmailInvite: assignee.isEmailInvite,
      tooltipContent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <Avatar
            size="xs"
            variant={assignee.isEmailInvite ? 'icon' : 'initials'}
            initials={initials}
            imageUrl={assignee.avatar}
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
        const initials = getInitials(assignee.name);
        const color = getAvatarColor(assignee.name);
        
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar
              size="xs"
              variant={assignee.isEmailInvite ? 'icon' : 'initials'}
              initials={initials}
              imageUrl={assignee.avatar}
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