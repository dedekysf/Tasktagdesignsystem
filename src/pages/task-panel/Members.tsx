import { useState } from 'react';
import { ChevronDown, MessageSquare, Repeat, Trash2, Users as UsersIcon, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { InviteAssigneeModal } from './InviteAssigneeModal';
import type { Member } from './types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../components/ui/alert-dialog';

function Avatar({ name, url, initials, color }: { name: string; url?: string; initials?: string; color?: string }) {
  if (url) {
    return (
      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  const displayInitials = initials || name.charAt(0).toUpperCase();
  const defaultColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F7B731', '#5F27CD', '#00D2D3'];
  const bgColor = color || defaultColors[name.charCodeAt(0) % defaultColors.length];

  return (
    <div 
      className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
      style={{ 
        backgroundColor: bgColor,
        fontSize: 'var(--text-label)',
        fontWeight: 'var(--font-weight-semibold)',
      }}
    >
      {displayInitials}
    </div>
  );
}

function DefaultAvatar() {
  return (
    <div 
      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: 'var(--grey-03)' }}
    >
      <UsersIcon className="size-5" style={{ color: 'var(--grey-05)' }} />
    </div>
  );
}

export function Members() {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState<Member | null>(null);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [members, setMembers] = useState<Member[]>([
    {
      id: '1',
      name: 'Melissa Smith',
      email: 'melissasmith@gmail.com',
      role: 'Owner',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: 'Logan Smith',
      email: 'logansmith@gmail.com',
      role: 'Assignee',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: '3',
      name: 'oliver@gmail.com',
      email: 'oliver@gmail.com',
      role: 'Assignee',
      isPending: true
    }
  ]);

  const updateMemberRole = (id: string, newRole: 'Owner' | 'Assignee' | 'Viewer') => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, role: newRole } : m));
  };

  const deleteMember = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
    setRemoveModalOpen(false);
    setMemberToRemove(null);
  };

  const handleAssignMembers = (assignedMembers: any[]) => {
    const newMembers = assignedMembers.map(am => ({
      id: am.id,
      name: am.name,
      email: am.email,
      role: (am.role || 'Assignee') as 'Owner' | 'Assignee' | 'Viewer',
      avatarUrl: am.avatar,
      initials: am.initials,
      color: am.color,
      isPending: am.id.startsWith('invite-')
    }));
    
    setMembers(prev => [...prev, ...newMembers]);
  };

  return (
    <div className="flex flex-col items-start overflow-clip rounded-lg shrink-0 w-full">
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-4 py-4 cursor-pointer transition-colors"
        style={{ backgroundColor: isOpen ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <UsersIcon className="size-5" style={{ color: 'var(--text-secondary)' }} />
          <span 
            style={{ 
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            Assignee
          </span>
        </div>
        
        <div 
          className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="size-5" style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <TooltipProvider>
          <div className="w-full px-4 pb-4 space-y-3">
            {/* Members List */}
            {members.map((member) => {
              const isHovered = hoveredMemberId === member.id;
              const isDropdownOpen = openDropdownId === member.id;
              const shouldHighlight = isHovered || isDropdownOpen;
              
              return (
              <div 
                key={member.id}
                onMouseEnter={() => setHoveredMemberId(member.id)}
                onMouseLeave={() => setHoveredMemberId(null)}
                className="flex items-center gap-3 p-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: shouldHighlight ? 'var(--grey-01)' : 'var(--white)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Avatar */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      {member.isPending ? (
                        <DefaultAvatar />
                      ) : member.avatarUrl ? (
                        <Avatar name={member.name} url={member.avatarUrl} />
                      ) : (
                        <Avatar name={member.name} initials={member.initials} color={member.color} />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="end">
                    <p>{member.name}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Name & Email */}
                <div className="flex flex-col flex-1 min-w-0">
                  {member.isPending ? (
                    <p 
                      className="truncate"
                      style={{ 
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {member.email}
                    </p>
                  ) : (
                    <>
                      <p 
                        className="truncate"
                        style={{ 
                          fontSize: 'var(--text-label)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {member.name}
                      </p>
                      <p 
                        className="truncate"
                        style={{ 
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {member.email}
                      </p>
                    </>
                  )}
                </div>

                {/* Action Icons */}
                {member.isPending ? (
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          className="w-8 h-8 flex items-center justify-center rounded transition-colors hover:bg-[var(--grey-02)]"
                        >
                          <Repeat className="size-4.5" style={{ color: 'var(--text-secondary)' }} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="end">
                        <p>Resend invite</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          onClick={() => {
                            setRemoveModalOpen(true);
                            setMemberToRemove(member);
                          }}
                          className="w-8 h-8 flex items-center justify-center rounded transition-colors hover:bg-[var(--grey-02)]"
                        >
                          <Trash2 className="size-4.5" style={{ color: 'var(--text-secondary)' }} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="end">
                        <p>Remove invite</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded transition-colors hover:bg-[var(--grey-02)]"
                      >
                        <MessageSquare className="size-4.5" style={{ color: 'var(--text-secondary)' }} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="end">
                      <p>Send Message</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {/* Role Dropdown */}
                {member.role === 'Owner' ? (
                  <div className="flex items-center px-3 py-1.5 w-25 justify-end">
                    <span 
                      style={{ 
                        fontSize: 'var(--text-caption)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {member.role}
                    </span>
                  </div>
                ) : member.isPending ? (
                  <button 
                    disabled
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded cursor-not-allowed w-25 justify-end"
                  >
                    <span 
                      style={{ 
                        fontSize: 'var(--text-caption)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--grey-05)',
                      }}
                    >
                      {member.role}
                    </span>
                    <ChevronDown className="size-4" style={{ color: 'var(--grey-05)', opacity: 0.3 }} />
                  </button>
                ) : (
                  <DropdownMenu onOpenChange={(open) => setOpenDropdownId(open ? member.id : null)}>
                    <DropdownMenuTrigger asChild>
                      <button 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors w-25 justify-end"
                        style={{
                          backgroundColor: isDropdownOpen ? 'var(--grey-02)' : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          if (!isDropdownOpen) e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isDropdownOpen) e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span 
                          style={{ 
                            fontSize: 'var(--text-caption)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {member.role}
                        </span>
                        <ChevronDown className="size-4" style={{ color: 'var(--text-secondary)' }} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[150px]">
                      <DropdownMenuItem 
                        onClick={() => updateMemberRole(member.id, 'Assignee')}
                        className="cursor-pointer"
                      >
                        <span style={{ fontSize: 'var(--text-label)', color: 'var(--text-primary)' }}>
                          Assignee
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => updateMemberRole(member.id, 'Viewer')}
                        className="cursor-pointer"
                      >
                        <span style={{ fontSize: 'var(--text-label)', color: 'var(--text-primary)' }}>
                          Viewer
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => {
                          setMemberToRemove(member);
                          setRemoveModalOpen(true);
                        }} 
                        className="cursor-pointer"
                        style={{ color: 'var(--alert-red)' }}
                      >
                        <span style={{ fontSize: 'var(--text-label)' }}>
                          Remove
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              );
            })}

            {/* Add Member Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--grey-02)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--grey-03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--grey-02)';
              }}
            >
              <div className="flex items-center gap-3 px-4 py-4">
                <Plus className="size-4" style={{ color: 'var(--secondary-green)' }} />
                <p 
                  style={{ 
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--secondary-green)',
                  }}
                >
                  Add Assignee
                </p>
              </div>
            </button>
          </div>
        </TooltipProvider>
      )}
      
      {/* Invite Assignee Modal */}
      <InviteAssigneeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAssignMembers={handleAssignMembers}
      />

      {/* Remove Modal */}
      <AlertDialog open={removeModalOpen} onOpenChange={setRemoveModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {memberToRemove?.isPending ? 'Remove Invite?' : 'Remove Member?'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {memberToRemove?.isPending 
                ? `Are you sure you want to remove the invite for ${memberToRemove?.email}?`
                : `Are you sure you want to remove ${memberToRemove?.name} from this task?`
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setRemoveModalOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => memberToRemove && deleteMember(memberToRemove.id)}
              className="bg-[var(--alert-red)]"
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
