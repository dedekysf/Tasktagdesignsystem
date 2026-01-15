import { useState, useEffect, useRef } from 'react';
import { MoreVertical, ChevronDown, Users, Trash2, MessageSquare, Repeat } from 'lucide-react';
import { Avatar } from '../../components/AvatarComponent';
import { Dropdown } from '../../components/Dropdown';
import { AssigneeModal } from '../my-task/AssigneeModal';
import { RemoveInviteModal } from './RemoveInviteModal';
import { RemoveMemberModal } from './RemoveMemberModal';
import { Tooltip } from '../../components/Tooltip';
import { MemberRow, Member } from '../../components/MemberRow';
import { Button } from '../../components/Button';

// Helper functions for avatar
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

function MembersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
          fill="var(--text-primary)"
        />
      </svg>
    </div>
  );
}

export function Members({ members: propMembers, onUpdateRole, onDeleteMember, onAddMembers }: {
  members: Member[];
  onUpdateRole: (id: string, role: 'Owner' | 'Assignee' | 'Viewer') => void;
  onDeleteMember: (id: string) => void;
  onAddMembers: (members: Member[]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false); // Collapsed by default
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removeInviteModalOpen, setRemoveInviteModalOpen] = useState(false);
  const [removeMemberModalOpen, setRemoveMemberModalOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState<Member | null>(null);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const updateMemberRole = (id: string, newRole: 'Owner' | 'Assignee' | 'Viewer') => {
    onUpdateRole(id, newRole);
    setOpenDropdownId(null); // Close dropdown after selection
  };

  const deleteMember = (id: string) => {
    onDeleteMember(id);
    setRemoveInviteModalOpen(false);
    setRemoveMemberModalOpen(false);
    setMemberToRemove(null);
  };

  const handleAssignMembers = (assignedMembers: any[]) => {
    // Convert from AssigneeModal format to Task Panel Member format
    const newMembers = assignedMembers.map(am => {
      // AssigneeModal returns role as "assignee" | "viewer" (lowercase)
      // We need to convert to Task Panel format: 'Owner' | 'Assignee' | 'Viewer'
      let role: 'Owner' | 'Assignee' | 'Viewer' = 'Assignee';
      if (am.role === 'viewer') {
        role = 'Viewer';
      } else if (am.role === 'assignee') {
        role = 'Assignee';
      }

      return {
        id: am.id,
        name: am.name,
        email: am.email,
        role: role,
        avatarUrl: am.avatarUrl,
        initials: am.initials,
        color: am.color,
        isPending: am.isEmailInvite || am.id.startsWith('invite-'), // Email invite (show user icon)
        isFromActiveMembers: !am.isEmailInvite && !am.id.startsWith('invite-') // Active member (role can be changed)
      };
    });
    
    // Instead of adding, we need to REPLACE all non-owner members
    // Get current owner
    const owner = propMembers.find(m => m.role === 'Owner');
    
    // Replace all members with owner + new members from modal
    const updatedMembers = owner ? [owner, ...newMembers] : newMembers;
    
    // Call parent to update the full members list (this will replace, not add)
    // We need to clear existing non-owner members and replace with new ones
    // First, delete all non-owner members
    propMembers.forEach(m => {
      if (m.role !== 'Owner') {
        onDeleteMember(m.id);
      }
    });
    
    // Then add all new members
    onAddMembers(newMembers);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (openDropdownId && !target.closest('.role-dropdown-container')) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <div className="content-stretch flex flex-col items-start relative rounded-lg shrink-0 w-full" style={{ fontFamily: 'var(--font-family-base)', overflow: 'visible' }}>
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-[16px] py-[16px] cursor-pointer transition-colors"
        style={{ backgroundColor: isHovered ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-[12px]">
          <MembersIcon />
          <span style={{
            fontWeight: 'var(--font-weight-semibold)',
            fontSize: 'var(--text-body)',
            color: 'var(--text-primary)',
            lineHeight: '21px'
          }}>
            Assignee
          </span>
        </div>
        
        <div className="flex items-center gap-[16px]">
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <ChevronDownIcon isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="relative shrink-0 w-full px-[16px] pb-[16px] flex flex-col gap-[12px]" style={{ overflow: 'visible' }}>
          {/* Members List */}
          {propMembers.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              isHovered={hoveredMemberId === member.id}
              isDropdownOpen={openDropdownId === member.id}
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
              onToggleDropdown={() => setOpenDropdownId(openDropdownId === member.id ? null : member.id)}
              onUpdateRole={(role) => updateMemberRole(member.id, role)}
              onDelete={() => {
                setMemberToRemove(member);
                if (member.isPending) {
                  setRemoveInviteModalOpen(true);
                } else {
                  setRemoveMemberModalOpen(true);
                }
              }}
              onResendInvite={() => {
                // Resend invite logic here
                console.log('Resending invite to', member.email);
              }}
            />
          ))}

          {/* Add Member Button */}
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            style={{
              backgroundColor: 'var(--grey-01)',
              color: 'var(--secondary-green)',
              width: '100%',
              border: 'none',
              justifyContent: 'flex-start'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-01)';
            }}
          >
            <svg className="block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M8 3.33333V12.6667M3.33333 8H12.6667" stroke="var(--secondary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--secondary-green)',
            }}>
              Add Assignee
            </span>
          </Button>
        </div>
      )}
      
      {/* Invite Assignee Modal */}
      <AssigneeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAssignees={propMembers
          .filter(m => m.role !== 'Owner') // Exclude owner from selected assignees
          .map(m => ({
            id: m.id,
            name: m.name,
            email: m.email,
            isEmailInvite: m.isPending,
            role: m.role === 'Viewer' ? 'viewer' : 'assignee',
            avatarUrl: m.avatarUrl
          }))}
        onAssign={handleAssignMembers}
        hideInitialSelection={true} // Don't show selected chips, only validate "already added"
      />

      {/* Remove Invite Modal */}
      <RemoveInviteModal
        isOpen={removeInviteModalOpen}
        onClose={() => setRemoveInviteModalOpen(false)}
        onConfirm={() => memberToRemove && deleteMember(memberToRemove.id)}
        email={memberToRemove?.email}
      />

      {/* Remove Member Modal */}
      <RemoveMemberModal
        isOpen={removeMemberModalOpen}
        onClose={() => setRemoveMemberModalOpen(false)}
        onConfirm={() => memberToRemove && deleteMember(memberToRemove.id)}
        memberName={memberToRemove?.name}
      />
    </div>
  );
}