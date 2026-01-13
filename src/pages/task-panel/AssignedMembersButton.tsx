import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Plus } from "lucide-react";

interface AssignedMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
  color: string;
  role: string;
}

interface AssignedMembersButtonProps {
  members: AssignedMember[];
  onClick: () => void;
}

function AvatarWithImage({ src, alt, zIndex, size = 24 }: { src: string; alt: string; zIndex: number; size?: number }) {
  return (
    <div 
      className="mr-[-8px] relative rounded-full shrink-0 overflow-hidden border-2 border-white" 
      style={{ zIndex, width: `${size}px`, height: `${size}px` }}
      data-name="Member Avatar"
    >
      <img alt={alt} className="block size-full object-cover" src={src} />
    </div>
  );
}

function AvatarWithInitials({ initials, color, zIndex, size = 24 }: { initials: string; color: string; zIndex: number; size?: number }) {
  const fontSize = size <= 24 ? '10px' : '12px';
  
  return (
    <div 
      className="mr-[-8px] relative rounded-full shrink-0 flex items-center justify-center border-2 border-white"
      style={{ backgroundColor: color, zIndex, width: `${size}px`, height: `${size}px` }}
      data-name="Member Avatar"
    >
      <span className="font-['Inter:Medium',sans-serif] font-medium text-white"
        style={{ fontSize }}
      >
        {initials}
      </span>
    </div>
  );
}

function AvatarWithUserIcon({ zIndex, size = 24 }: { zIndex: number; size?: number }) {
  const iconSize = size <= 24 ? 12 : 16;
  
  return (
    <div 
      className="mr-[-8px] relative rounded-full shrink-0 flex items-center justify-center border-2 border-white bg-[#E0E0E0]"
      style={{ zIndex, width: `${size}px`, height: `${size}px` }}
      data-name="Invited Member Avatar"
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function AddMoreAvatar() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[32px] flex items-center justify-center" data-name="Avatar/sm">
      <div className="w-full h-full rounded-full bg-[#E8E8E8] flex items-center justify-center">
        <Plus className="w-[16px] h-[16px] text-[#828282]" />
      </div>
    </div>
  );
}

function RemainingCountAvatar({ count, size = 24 }: { count: number; size?: number }) {
  const fontSize = size <= 24 ? '10px' : '12px';
  
  return (
    <div 
      className="mr-[-8px] relative shrink-0 flex items-center justify-center rounded-full bg-[#E8E8E8] border-2 border-white"
      style={{ zIndex: 1, width: `${size}px`, height: `${size}px` }}
    >
      <span className="font-['Inter:Medium',sans-serif] font-medium text-[#303742]"
        style={{ fontSize }}
      >
        +{count}
      </span>
    </div>
  );
}

export function AssignedMembersButton({ members, onClick }: AssignedMembersButtonProps) {
  // Special case: If only 1 member, show avatar + name
  if (members.length === 1) {
    const member = members[0];
    const isInvited = member.id.startsWith('invite-');
    
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div 
              onClick={onClick}
              className="relative rounded-[40px] shrink-0 flex-1 cursor-pointer hover:bg-[#f7f8fa] transition-colors" 
              data-name="Task Item Button/Assignee"
            >
              <div className="box-border content-stretch flex gap-[8px] items-center justify-start px-[8px] py-[6px] relative w-full">
                {/* Avatar */}
                {isInvited ? (
                  <div className="relative rounded-full shrink-0 size-[24px] flex items-center justify-center bg-[#E0E0E0]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : member.avatar ? (
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="relative rounded-full shrink-0 size-[24px] object-cover"
                  />
                ) : (
                  <div 
                    className="relative rounded-full shrink-0 size-[24px] flex items-center justify-center"
                    style={{ backgroundColor: member.color }}
                  >
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-white">
                      {member.initials}
                    </span>
                  </div>
                )}
                
                {/* Name with truncate */}
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[14px] tracking-[0.24px] truncate max-w-[120px]">
                  {isInvited ? member.email : member.name}
                </p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[40px]" />
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="bottom" 
            align="end"
            className="bg-[#303742] border-0 p-[12px] rounded-[8px]"
          >
            <div className="flex items-center gap-[12px]">
              {isInvited ? (
                <div className="w-[32px] h-[32px] rounded-full bg-[#E0E0E0] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : member.avatar ? (
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
              ) : (
                <div 
                  className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-white">
                    {member.initials}
                  </span>
                </div>
              )}
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-white whitespace-nowrap">
                {member.name}
              </span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  // Multiple members: Show max 2 members + remaining count/add more button
  const displayMembers = members.slice(0, 2);
  const remainingCount = members.length - displayMembers.length;
  const remainingMembers = members.slice(2); // Members not displayed
  const avatarSize = 32; // Larger size for multiple members
  
  return (
    <div 
      onClick={onClick}
      className="relative shrink-0 flex-1 cursor-pointer h-[32px]" 
      data-name="Task Item Button/Assignee"
    >
      <div className="box-border content-stretch flex items-center justify-start pl-[12px] pr-[16px] relative w-full h-full">
        <div className="flex items-center">
          {displayMembers.map((member, index) => {
            const isInvited = member.id.startsWith('invite-');
            
            return (
              <TooltipProvider key={member.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      {isInvited ? (
                        <AvatarWithUserIcon zIndex={displayMembers.length - index} size={avatarSize} />
                      ) : member.avatar ? (
                        <AvatarWithImage src={member.avatar} alt={member.name} zIndex={displayMembers.length - index} size={avatarSize} />
                      ) : (
                        <AvatarWithInitials initials={member.initials} color={member.color} zIndex={displayMembers.length - index} size={avatarSize} />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="bottom" 
                    align="start"
                    className="bg-[#303742] border-0 p-[12px] rounded-[8px]"
                  >
                    <div className="flex items-center gap-[12px]">
                      {isInvited ? (
                        <div className="w-[32px] h-[32px] rounded-full bg-[#E0E0E0] flex items-center justify-center shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      ) : member.avatar ? (
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-[32px] h-[32px] rounded-full object-cover"
                        />
                      ) : (
                        <div 
                          className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                          style={{ backgroundColor: member.color }}
                        >
                          <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-white">
                            {member.initials}
                          </span>
                        </div>
                      )}
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-white whitespace-nowrap">
                        {member.name}
                      </span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
          {remainingCount > 0 && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <RemainingCountAvatar count={remainingCount} size={avatarSize} />
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  align="start"
                  className="bg-[#303742] border-0 p-[12px] rounded-[8px]"
                >
                  <div className="flex flex-col gap-[8px]">
                    {remainingMembers.map((member) => {
                      const isInvited = member.id.startsWith('invite-');
                      
                      return (
                        <div key={member.id} className="flex items-center gap-[12px]">
                          {isInvited ? (
                            <div className="w-[32px] h-[32px] rounded-full bg-[#E0E0E0] flex items-center justify-center shrink-0">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          ) : member.avatar ? (
                            <img 
                              src={member.avatar} 
                              alt={member.name}
                              className="w-[32px] h-[32px] rounded-full object-cover"
                            />
                          ) : (
                            <div 
                              className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
                              style={{ backgroundColor: member.color }}
                            >
                              <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-white">
                                {member.initials}
                              </span>
                            </div>
                          )}
                          <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-white whitespace-nowrap">
                            {member.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
}
