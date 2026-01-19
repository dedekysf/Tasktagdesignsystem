import { useState, useRef } from 'react';
import { X, Copy, MapPin, Folder, Zap, Plus, Search } from 'lucide-react';
import { Textarea } from '../components/Textarea';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { UpgradePromptModal } from '../components/UpgradePromptModal';
import { SubscriptionModal } from '../components/SubscriptionModal';
import { SuccessModal } from '../components/SuccessModal';
import { Modal } from '../components/Modal';
import { ProjectMemberRow, Member } from './project-creation/ProjectMemberRow';
import { AssigneeModal } from './my-task/AssigneeModal';
import PaymentPage from './PaymentPage';

// Icon picker icons from lucide
import { 
  Bed, Grid3x3, Paintbrush, ShoppingCart, Car, Triangle, 
  GraduationCap, Lightbulb, Home, Menu, Camera, Users, 
  Droplet, Flag, Leaf, Hand, Wrench, Building, Flame, 
  Gift, Pyramid, Mountain, Brush, Mic, Moon,
  Hammer, Tent, Activity, Disc, Sparkles, Star,
  Wrench as Tool, Settings, Warehouse, Droplets
} from 'lucide-react';

// Team list modal (reusing project list style from My Task)
interface TeamListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTeam: (team: { id: string; name: string; color: string }) => void;
}

function TeamListModal({ isOpen, onClose, onSelectTeam }: TeamListModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredTeamId, setHoveredTeamId] = useState<string | null>(null);
  
  const teams = [
    { id: '1', name: 'TaskTag Project', color: '#18A87D', disabled: false },
    { id: '2', name: 'Scott 1', color: '#FF4444', disabled: false },
    { id: '3', name: 'Personal Projects', color: '#FF4444', disabled: true }
  ];

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: 'var(--spacing-16)'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-16)',
          border: '1px solid var(--neutral-200)',
          width: '100%',
          maxWidth: '504px',
          padding: 'var(--spacing-24) var(--spacing-16)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-16)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ 
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Teams
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} color="var(--text-primary)" />
          </button>
        </div>

        {/* Search Bar */}
        <TextInput
          icon={Search}
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search"
          size="md"
          showClearButton={false}
        />

        {/* Team List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          {filteredTeams.map(team => {
            const TeamRow = (
              <div
                key={team.id}
                onClick={() => {
                  if (!team.disabled) {
                    onSelectTeam(team);
                    onClose();
                  }
                }}
                onMouseEnter={() => setHoveredTeamId(team.id)}
                onMouseLeave={() => setHoveredTeamId(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-8)',
                  cursor: team.disabled ? 'not-allowed' : 'pointer',
                  padding: 0,
                  opacity: team.disabled ? 0.5 : 1
                }}
              >
                <div style={{
                  backgroundColor: team.color,
                  width: '24px',
                  height: '24px',
                  borderRadius: '1.333px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Folder size={16} color="white" />
                </div>
                <span style={{
                  fontSize: '14px',
                  color: team.disabled ? 'var(--grey-05)' : 'var(--text-primary)',
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {team.name}
                </span>
              </div>
            );

            if (team.disabled) {
              return (
                <Tooltip
                  key={team.id}
                  content="Free project limit has been reached"
                  variant="bottom-left"
                  size="md"
                  forceShow={hoveredTeamId === team.id}
                  fullWidth
                >
                  {TeamRow}
                </Tooltip>
              );
            }

            return TeamRow;
          })}
        </div>
      </div>
    </div>
  );
}

// Color picker modal
interface ColorPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectColor: (color: { id: string; name: string; value: string }) => void;
  selectedColorId?: string;
  anchorElement: HTMLElement | null;
}

function ColorPickerModal({ isOpen, onClose, onSelectColor, selectedColorId, anchorElement }: ColorPickerModalProps) {
  const colors = [
    { id: '1', name: 'Alert Red', value: '#FF4444' },
    { id: '2', name: 'Orange', value: '#FF9944' },
    { id: '3', name: 'Yellow', value: '#FFD644' },
    { id: '4', name: 'Secondary Green', value: '#18A87D' },
    { id: '5', name: 'Dark Green', value: '#0D6B52' },
    { id: '6', name: 'Blue', value: '#4488FF' },
    { id: '7', name: 'Purple', value: '#8844FF' },
    { id: '8', name: 'Light Magenta', value: '#D444FF' },
    { id: '9', name: 'Dark Magenta', value: '#A820D8' }
  ];

  if (!isOpen || !anchorElement) return null;

  const rect = anchorElement.getBoundingClientRect();
  const modalTop = rect.bottom + 8; // 8px gap below button
  const modalLeft = rect.left;

  return (
    <>
      {/* Invisible backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
        }}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: `${modalTop}px`,
          left: `${modalLeft}px`,
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-16)',
          boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.1)',
          padding: 'var(--spacing-16)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          minWidth: '180px',
          zIndex: 9999,
        }}
      >
        {colors.map(color => (
          <div
            key={color.id}
            onClick={() => {
              onSelectColor(color);
              onClose();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-12)',
              cursor: 'pointer',
              padding: 'var(--spacing-8)',
              borderRadius: 'var(--radius-8)',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--neutral-100)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: color.value
            }} />
            <span style={{
              fontSize: '14px',
              color: 'var(--text-primary)',
              flex: 1
            }}>
              {color.name}
            </span>
            {selectedColorId === color.id && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="var(--secondary-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

// Icon picker modal
interface IconPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIcon: (icon: { id: string; component: any }) => void;
  selectedIconId?: string;
  anchorElement: HTMLElement | null;
}

function IconPickerModal({ isOpen, onClose, onSelectIcon, selectedIconId, anchorElement }: IconPickerModalProps) {
  const icons = [
    { id: '1', component: Bed },
    { id: '2', component: Grid3x3 },
    { id: '3', component: Paintbrush },
    { id: '4', component: ShoppingCart },
    { id: '5', component: Car },
    { id: '6', component: Triangle },
    { id: '7', component: GraduationCap },
    { id: '8', component: Lightbulb },
    { id: '9', component: Home },
    { id: '10', component: Menu },
    { id: '11', component: Camera },
    { id: '12', component: Users },
    { id: '13', component: Droplet },
    { id: '14', component: Flag },
    { id: '15', component: Leaf },
    { id: '16', component: Hand },
    { id: '17', component: Wrench },
    { id: '18', component: Building },
    { id: '19', component: Flame },
    { id: '20', component: Gift },
    { id: '21', component: Pyramid },
    { id: '22', component: Mountain },
    { id: '23', component: Brush },
    { id: '24', component: Mic },
    { id: '25', component: Moon },
    { id: '26', component: Hammer },
    { id: '27', component: Tent },
    { id: '28', component: Activity },
    { id: '29', component: Disc },
    { id: '30', component: Sparkles },
    { id: '31', component: Star },
    { id: '32', component: Tool },
    { id: '33', component: Settings },
    { id: '34', component: Warehouse },
    { id: '35', component: Droplets },
    { id: '36', component: Zap }
  ];

  if (!isOpen || !anchorElement) return null;

  const rect = anchorElement.getBoundingClientRect();
  const modalTop = rect.bottom + 8; // 8px gap below button
  const modalRight = window.innerWidth - rect.right; // Align to right edge of button

  return (
    <>
      {/* Invisible backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
        }}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: `${modalTop}px`,
          right: `${modalRight}px`,
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-16)',
          boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.1)',
          padding: 'var(--spacing-16)',
          width: '304px',
          zIndex: 9999,
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 'var(--spacing-8)'
        }}>
          {icons.map(icon => {
            const IconComponent = icon.component;
            return (
              <button
                key={icon.id}
                onClick={() => {
                  onSelectIcon(icon);
                  onClose();
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  borderRadius: 'var(--radius-8)',
                  backgroundColor: selectedIconId === icon.id ? 'var(--neutral-200)' : 'transparent',
                  cursor: 'pointer',
                  padding: 0
                }}
                onMouseEnter={(e) => {
                  if (selectedIconId !== icon.id) {
                    e.currentTarget.style.backgroundColor = 'var(--neutral-100)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedIconId !== icon.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <IconComponent size={24} color="var(--text-primary)" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function PaywallProjectCreationPage() {
  const [projectName, setProjectName] = useState('LA Avenue 34 G');
  const [description, setDescription] = useState('This project focuses on inspecting and replacing faulty or burnt-out light bulbs across the designated areas.');
  const [address, setAddress] = useState('56 Broadway, New York, NY 10004');
  const [selectedTeam, setSelectedTeam] = useState({ id: '1', name: 'TaskTag Project', color: '#18A87D' });
  const [selectedColor, setSelectedColor] = useState({ id: '1', name: 'Alert Red', value: '#FF4444' });
  const [selectedIcon, setSelectedIcon] = useState({ id: '36', component: Zap });
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isIconModalOpen, setIsIconModalOpen] = useState(false);
  const [isAssigneeModalOpen, setIsAssigneeModalOpen] = useState(false);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  
  // Upgrade modal states
  const [isUpgradePromptModalOpen, setIsUpgradePromptModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isPaymentPageOpen, setIsPaymentPageOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  // Refs for color and icon buttons
  const colorButtonRef = useRef<HTMLDivElement>(null);
  const iconButtonRef = useRef<HTMLDivElement>(null);
  
  // Default members list
  const [members, setMembers] = useState<Member[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      role: 'Assignee',
      avatarUrl: undefined,
      initials: 'SJ',
      color: '#FF6B6B',
      isPending: false,
      isFromActiveMembers: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.c@company.com',
      role: 'Viewer',
      avatarUrl: undefined,
      initials: 'MC',
      color: '#4ECDC4',
      isPending: false,
      isFromActiveMembers: true
    }
  ]);

  const SelectedIconComponent = selectedIcon.component;

  const handleUpdateRole = (id: string, role: 'Owner' | 'Assignee' | 'Viewer') => {
    setMembers(members.map(m => m.id === id ? { ...m, role } : m));
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleAddMembers = (newMembers: Member[]) => {
    setMembers([...members, ...newMembers]);
  };

  const handleAssignMembers = (assignedMembers: any[]) => {
    // Convert from AssigneeModal format to Member format
    const newMembers: Member[] = assignedMembers.map(am => ({
      id: am.id,
      name: am.name,
      email: am.email,
      role: am.role === 'viewer' ? 'Viewer' : 'Assignee',
      avatarUrl: am.avatarUrl,
      initials: am.initials,
      color: am.color,
      isPending: am.isEmailInvite || am.id.startsWith('invite-'),
      isFromActiveMembers: !am.isEmailInvite && !am.id.startsWith('invite-')
    }));
    
    // Replace all members with new members from modal
    setMembers(newMembers);
  };

  const handleCreateProject = () => {
    // Always show upgrade modal for any team selection
    setIsUpgradePromptModalOpen(true);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f7f8fa',
      padding: 'var(--spacing-32)',
      height: '100%',
      overflow: 'auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--white)',
        boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: 'var(--radius-8)',
        width: '580px',
        maxHeight: '90vh',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '21px var(--spacing-24)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0
        }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: '32px'
          }}>
            Create Project
          </h1>
          <button
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-8)',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} color="var(--text-primary)" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 var(--spacing-24)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-32)'
        }}>
          {/* Copy from existing project */}
          <div style={{
            paddingTop: 'var(--spacing-12)',
            paddingBottom: 'var(--spacing-12)',
            borderBottom: '1px solid var(--neutral-200)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-16)',
              cursor: 'pointer'
            }}>
              <Copy size={24} color="var(--text-primary)" />
              <span style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-primary)'
              }}>
                Copy from existing project
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-24)'
          }}>
            {/* Name with counter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  lineHeight: '16px'
                }}>
                  Name
                </label>
                <span style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'var(--neutral-600)',
                  lineHeight: '12px'
                }}>
                  Required
                </span>
              </div>
              <Textarea
                value={projectName}
                onChange={setProjectName}
                placeholder="Enter project name"
                maxLength={100}
                rows={1}
                size="md"
              />
            </div>

            {/* Description with counter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: '16px'
              }}>
                Description
              </label>
              <Textarea
                value={description}
                onChange={setDescription}
                placeholder="Enter project description"
                maxLength={500}
                rows={3}
                size="md"
              />
            </div>

            {/* Address without counter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: '16px'
              }}>
                Address
              </label>
              <TextInput
                icon={MapPin}
                value={address}
                onChange={setAddress}
                placeholder="Enter address"
                size="md"
                showClearButton={false}
              />
            </div>

            {/* Team, Color, Icon */}
            <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'flex-end' }}>
              {/* Team */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'flex-start' }}>
                  <label style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: '16px',
                    flex: 1
                  }}>
                    Team
                  </label>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    color: 'var(--neutral-600)',
                    lineHeight: '12px'
                  }}>
                    Required
                  </span>
                </div>
                <Button
                  variant="fill"
                  size="md"
                  onClick={() => setIsTeamModalOpen(true)}
                  style={{
                    backgroundColor: 'var(--grey-02)',
                    border: '1px solid var(--grey-03)',
                    color: 'var(--text-primary)',
                    width: '100%',
                    height: '48px',
                    justifyContent: 'flex-start',
                    gap: 'var(--spacing-8)'
                  }}
                >
                  <Folder size={24} color={selectedTeam.color} />
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-primary)'
                  }}>
                    {selectedTeam.name}
                  </span>
                </Button>
              </div>

              {/* Color */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: '72px' }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  lineHeight: '16px'
                }}>
                  Color
                </label>
                <Button
                  variant="fill"
                  size="md"
                  onClick={() => setIsColorModalOpen(true)}
                  style={{
                    backgroundColor: 'var(--grey-02)',
                    border: '1px solid var(--grey-03)',
                    height: '48px',
                    padding: '0',
                    justifyContent: 'center'
                  }}
                  ref={colorButtonRef}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: selectedColor.value
                  }} />
                </Button>
              </div>

              {/* Icon */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: '72px' }}>
                <label style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  lineHeight: '16px'
                }}>
                  Icon
                </label>
                <Button
                  variant="fill"
                  size="md"
                  onClick={() => setIsIconModalOpen(true)}
                  style={{
                    backgroundColor: 'var(--grey-02)',
                    border: '1px solid var(--grey-03)',
                    height: '48px',
                    padding: '0',
                    justifyContent: 'center'
                  }}
                  ref={iconButtonRef}
                >
                  <SelectedIconComponent size={24} color="var(--text-primary)" />
                </Button>
              </div>
            </div>

            {/* Members */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', paddingBottom: 'var(--spacing-16)' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: '16px'
              }}>
                Members
              </label>
              
              {/* Member List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
                {members.map(member => (
                  <ProjectMemberRow
                    key={member.id}
                    member={member}
                    isHovered={hoveredMemberId === member.id}
                    isDropdownOpen={openDropdownId === member.id}
                    onMouseEnter={() => setHoveredMemberId(member.id)}
                    onMouseLeave={() => setHoveredMemberId(null)}
                    onToggleDropdown={() => setOpenDropdownId(openDropdownId === member.id ? null : member.id)}
                    onUpdateRole={(role) => handleUpdateRole(member.id, role)}
                    onDelete={() => handleDeleteMember(member.id)}
                    onResendInvite={() => {
                      console.log('Resending invite to', member.email);
                    }}
                  />
                ))}

                {/* Add Member Button */}
                <Button
                  onClick={() => setIsAssigneeModalOpen(true)}
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
                    Add Member
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{
          backgroundColor: 'var(--white)',
          padding: 'var(--spacing-24)',
          borderBottomLeftRadius: 'var(--radius-8)',
          borderBottomRightRadius: 'var(--radius-8)',
          flexShrink: 0
        }}>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-16)',
            justifyContent: 'center'
          }}>
            <Button
              variant="outline"
              size="lg"
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: '1px solid var(--black)',
                color: 'var(--black)'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="fill"
              size="lg"
              onClick={handleCreateProject}
              style={{
                flex: 1,
                backgroundColor: 'var(--black)',
                color: 'var(--white)'
              }}
            >
              Create Project
            </Button>
          </div>
        </div>
      </div>

      {/* Modals - Moved outside the panel container */}
      <TeamListModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        onSelectTeam={setSelectedTeam}
      />
      <ColorPickerModal
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
        onSelectColor={setSelectedColor}
        selectedColorId={selectedColor.id}
        anchorElement={colorButtonRef.current}
      />
      <IconPickerModal
        isOpen={isIconModalOpen}
        onClose={() => setIsIconModalOpen(false)}
        onSelectIcon={setSelectedIcon}
        selectedIconId={selectedIcon.id}
        anchorElement={iconButtonRef.current}
      />
      <AssigneeModal
        isOpen={isAssigneeModalOpen}
        onClose={() => setIsAssigneeModalOpen(false)}
        selectedAssignees={members.map(m => ({
          id: m.id,
          name: m.name,
          email: m.email,
          isEmailInvite: m.isPending,
          role: m.role === 'Viewer' ? 'viewer' : 'assignee',
          avatarUrl: m.avatarUrl
        }))}
        onAssign={handleAssignMembers}
        hideInitialSelection={true}
      />
      
      {/* Upgrade Modals */}
      {isUpgradePromptModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'var(--spacing-16)'
          }}
          onClick={() => setIsUpgradePromptModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UpgradePromptModal
              variant="confirmation"
              size="web"
              title="Unlock Team Features"
              description="Upgrade to Team Plan to create projects in Scott 1 and access all team collaboration features."
              benefitsTitle="Team Plan includes:"
              benefits={[
                "2TB shared team storage",
                "Unlimited projects & tasks",
                "Add unlimited users to projects & tasks",
                "Team admin & member roles",
                "Centralized billing",
                "Global activity log for full visibility"
              ]}
              buttonText="Upgrade to Team Plan"
              onUpgradeClick={() => {
                setIsUpgradePromptModalOpen(false);
                setTimeout(() => {
                  setIsSubscriptionModalOpen(true);
                }, 150);
              }}
            />
          </div>
        </div>
      )}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsConfirmationModalOpen(true)}
        onSuccess={() => {
          setIsSubscriptionModalOpen(false);
          setIsPaymentPageOpen(true);
        }}
      />
      
      {/* Confirmation Modal - "Complete Your Team Plan" */}
      {isConfirmationModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10002,
            padding: 'var(--spacing-16)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '100%' }}>
            <Modal
              variant="two-action"
              size="web"
              title="Complete Your Team Plan"
              description="You're close to completing your team plan. Click Continue to move forward without losing your progress."
              primaryButtonText="Continue"
              secondaryButtonText="Later"
              primaryButtonClassName="btn-secondary"
              secondaryButtonClassName="btn-secondary"
              onPrimaryClick={() => {
                // Continue: Only close the Confirmation Modal
                setIsConfirmationModalOpen(false);
              }}
              onSecondaryClick={() => {
                // Later: Close all modals and return to Paywall Project Creation page
                setIsConfirmationModalOpen(false);
                setIsSubscriptionModalOpen(false);
                setIsPaymentPageOpen(false);
                setIsUpgradePromptModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
      
      {/* Payment Page */}
      {isPaymentPageOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--white)',
            zIndex: 10001,
            overflow: 'auto',
          }}
        >
          <PaymentPage 
            onBack={() => setIsConfirmationModalOpen(true)}
            onSubscribe={() => {
              setIsPaymentPageOpen(false);
              requestAnimationFrame(() => {
                setTimeout(() => {
                  setIsSuccessModalOpen(true);
                }, 50);
              });
            }}
          />
        </div>
      )}
      
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}