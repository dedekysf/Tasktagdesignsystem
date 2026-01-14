import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus, X, Repeat, Trash2, MessageSquare } from 'lucide-react';
import { getInitials, getAvatarColor } from '../../utils/avatar';
import { Avatar } from '../../components/AvatarComponent';
import { Tooltip } from '../../components/Tooltip';
import { AssigneeModal } from '../my-task/AssigneeModal';
import { RemoveInviteModal } from './RemoveInviteModal';
import { RemoveMemberModal } from './RemoveMemberModal';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Assignee' | 'Viewer';
  avatarUrl?: string;
  initials?: string;
  color?: string;
  isPending?: boolean; // Email invite (not yet accepted)
  isFromActiveMembers?: boolean; // Invited from active TaskTag members (role can be changed)
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
          {propMembers.map((member) => {
            const isHovered = hoveredMemberId === member.id;
            const isDropdownOpen = openDropdownId === member.id;
            const shouldHighlight = isHovered || isDropdownOpen;
            
            return (
            <div 
              key={member.id}
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
              className="flex items-center gap-[12px] p-[12px] rounded-lg border transition-colors"
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
                    <button className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors" style={{ backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent' }}>
                      <Repeat className="size-[18px]" style={{ color: 'var(--text-primary)' }} strokeWidth={2} />
                    </button>
                  </Tooltip>

                  <Tooltip
                    variant="bottom-right"
                    size="sm"
                    content="Cancel invite"
                  >
                    <button 
                      onClick={() => {
                        setRemoveInviteModalOpen(true);
                        setMemberToRemove(member);
                      }}
                      className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors"
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
                  content="Send Message"
                >
                  <button className="w-[32px] h-[32px] flex items-center justify-center rounded transition-colors" style={{ backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent' }}>
                    <MessageSquare className="size-[18px]" style={{ color: 'var(--text-primary)' }} strokeWidth={2} />
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
                // Active member (isPending === false or undefined) - Dropdown role (editable)
                <div className="role-dropdown-container relative">
                  <button 
                    onClick={() => setOpenDropdownId(isDropdownOpen ? null : member.id)}
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

                  {/* Dropdown Menu - borderless, with divider */}
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
                        onClick={() => updateMemberRole(member.id, 'Assignee')}
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
                        onClick={() => updateMemberRole(member.id, 'Viewer')}
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

                      {/* Divider */}
                      <div 
                        style={{ 
                          height: '1px', 
                          backgroundColor: 'var(--border)',
                          margin: 'var(--spacing-4) 0'
                        }} 
                      />

                      {/* Remove Option (Red) */}
                      <button
                        onClick={() => {
                          setMemberToRemove(member);
                          setRemoveMemberModalOpen(true);
                          setOpenDropdownId(null);
                        }}
                        className="w-full text-left transition-colors"
                        style={{
                          padding: 'var(--spacing-8) var(--spacing-12)',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--alert-red)',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            );
          })}

          {/* Add Member Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="relative rounded-lg shrink-0 w-full transition-colors"
            style={{ backgroundColor: 'var(--grey-01)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--grey-01)';
            }}
          >
            <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[16px] relative w-full">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M8 3.33333V12.6667M3.33333 8H12.6667" stroke="var(--secondary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--text-label)',
                lineHeight: '16px',
                color: 'var(--secondary-green)',
              }}>
                Add Assignee
              </p>
            </div>
          </button>
        </div>
      )}
      
      {/* Invite Assignee Modal */}
      <AssigneeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAssign={handleAssignMembers}
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