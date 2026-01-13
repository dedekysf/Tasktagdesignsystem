import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, MoreVertical, Search, Users, FileText, ChevronDown, ChevronUp, Filter, MessageSquare, Link as LinkIcon, UserPlus, Trash2, RotateCw, X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ActiveMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  role: 'Owner' | 'Admin' | 'Member';
  avatarColor: string;
  initials: string;
}

interface PendingInvite {
  id: string;
  emailOrName: string;
  invitedBy: string;
  dateSent: string;
  expirationDate: string;
  role: 'Admin' | 'Member';
  isExpired: boolean;
  hasAvatar?: boolean;
  avatarColor?: string;
  initials?: string;
}

export default function TeamDetailPage() {
  const [activeExpanded, setActiveExpanded] = useState(true);
  const [pendingExpanded, setPendingExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'details' | 'members' | 'invoice'>('members');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'Admin' | 'Member'>('Member');
  const [openRoleDropdown, setOpenRoleDropdown] = useState<string | null>(null);
  const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  const [linkCopiedPosition, setLinkCopiedPosition] = useState({ top: 0, left: 0 });
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const [activeMembers, setActiveMembers] = useState<ActiveMember[]>([
    {
      id: '1',
      name: 'Melissa Monroe',
      email: 'melissamonroe@gmail.com',
      phone: '232-946-1254',
      skills: [],
      role: 'Owner',
      avatarColor: '#E91E63',
      initials: 'MM'
    },
    {
      id: '2',
      name: 'Carlos Roberto',
      email: 'carlosroberto@gmail.com',
      phone: '736-967-5990',
      skills: ['Plumber'],
      role: 'Member',
      avatarColor: '#FF5722',
      initials: 'CR'
    },
    {
      id: '3',
      name: 'Chelsea Janson',
      email: 'chelseajanson@gmail.com',
      phone: '311-972-1741',
      skills: [],
      role: 'Member',
      avatarColor: '#F44336',
      initials: 'CJ'
    },
    {
      id: '4',
      name: 'Logan Jack',
      email: 'loganjack@gmail.com',
      phone: '230-656-5436',
      skills: [],
      role: 'Member',
      avatarColor: '#607D8B',
      initials: 'LJ'
    },
    {
      id: '5',
      name: 'Chelsea Smith',
      email: 'chelseasmith@gmail.com',
      phone: '201-582-9845',
      skills: ['Carpenter', 'Electrician'],
      role: 'Admin',
      avatarColor: '#546E7A',
      initials: 'CS'
    }
  ]);

  const [pendingInvites, setPendingInvites] = useState<PendingInvite[]>([
    {
      id: '1',
      emailOrName: 'asdasdf@gmail.com',
      invitedBy: 'Melissa Monroe',
      dateSent: 'Jan 6, 2026',
      expirationDate: 'Jan 13, 2026',
      role: 'Member',
      isExpired: false
    },
    {
      id: '2',
      emailOrName: 'aa@gmail.com',
      invitedBy: 'Melissa Monroe',
      dateSent: 'Jan 3, 2026',
      expirationDate: 'Jan 10, 2026',
      role: 'Member',
      isExpired: true
    },
    {
      id: '3',
      emailOrName: 'abcd@gmail.com',
      invitedBy: 'Melissa Monroe',
      dateSent: 'Dec 30, 2025',
      expirationDate: 'Jan 6, 2026',
      role: 'Member',
      isExpired: true
    },
    {
      id: '4',
      emailOrName: 'Savannah Nguyen',
      invitedBy: 'Melissa Monroe',
      dateSent: 'Dec 18, 2025',
      expirationDate: '-',
      role: 'Member',
      isExpired: false,
      hasAvatar: true,
      avatarColor: '#FF9800',
      initials: 'SN'
    },
    {
      id: '5',
      emailOrName: 'Isabella Rodriguez',
      invitedBy: 'Melissa Monroe',
      dateSent: 'Dec 18, 2025',
      expirationDate: '-',
      role: 'Member',
      isExpired: false,
      hasAvatar: true,
      avatarColor: '#FFC107',
      initials: 'IR'
    }
  ]);

  const handleChangeRole = (memberId: string, newRole: 'Admin' | 'Member') => {
    setActiveMembers(activeMembers.map(m => 
      m.id === memberId ? { ...m, role: newRole } : m
    ));
    setOpenRoleDropdown(null);
  };

  const handleRemoveMember = (memberId: string) => {
    setActiveMembers(activeMembers.filter(m => m.id !== memberId));
    setOpenActionMenu(null);
  };

  const handleDeleteInvite = (inviteId: string) => {
    setPendingInvites(pendingInvites.filter(i => i.id !== inviteId));
  };

  const handleResendInvite = (inviteId: string) => {
    // Resend logic here
    console.log('Resending invite:', inviteId);
  };

  const handleCopyLink = () => {
    if (copyButtonRef.current) {
      const rect = copyButtonRef.current.getBoundingClientRect();
      setLinkCopiedPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
      setShowLinkCopied(true);
      setTimeout(() => setShowLinkCopied(false), 2000);
    }
  };

  const handleInviteMember = () => {
    if (inviteEmail.trim()) {
      const newInvite: PendingInvite = {
        id: Date.now().toString(),
        emailOrName: inviteEmail,
        invitedBy: 'Melissa Monroe',
        dateSent: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        role: inviteRole,
        isExpired: false
      };
      setPendingInvites([newInvite, ...pendingInvites]);
      setInviteEmail('');
      setInviteRole('Member');
      setShowInviteModal(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 px-6 py-4 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors mt-1">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[24px] leading-[32px] font-semibold text-foreground">
                  Scott 1
                </h1>
                <button className="p-1 hover:bg-secondary rounded transition-colors">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <p className="caption text-muted-foreground mt-1">
                11 N Raintree Hollow Court
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="px-4 py-2 bg-foreground text-background rounded-lg caption font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <span>+</span>
              <span>New Task</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-4">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors caption ${
              activeTab === 'details'
                ? 'border-foreground text-foreground font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Details</span>
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors caption ${
              activeTab === 'members'
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Members</span>
            <span className="px-2 py-0.5 bg-primary text-white rounded-full text-[10px] font-medium">
              {activeMembers.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('invoice')}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors caption ${
              activeTab === 'invoice'
                ? 'border-foreground text-foreground font-medium'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Invoice</span>
            <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-[10px] font-medium">
              0
            </span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-secondary transition-colors caption">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-secondary transition-colors caption text-primary">
              <MessageSquare className="w-4 h-4" />
              <span>Message Member</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={copyButtonRef}
              onClick={handleCopyLink}
              className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <LinkIcon className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setShowInviteModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors caption"
            >
              <UserPlus className="w-4 h-4" />
              <span>Invite</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content - Fixed height with individual table scrolling */}
      <div className="flex-1 px-6 py-4 overflow-hidden flex flex-col">
        {/* Active Members Section */}
        <div className="mb-6 flex flex-col min-h-0">
          <button
            onClick={() => setActiveExpanded(!activeExpanded)}
            className="flex items-center gap-2 mb-3 caption font-medium text-foreground hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <span>Active</span>
            <span className="text-muted-foreground">{activeMembers.length}</span>
            {activeExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {activeExpanded && (
            <div className="border border-border rounded-lg overflow-hidden flex flex-col min-h-0">
              <div className="overflow-auto flex-1">
                <table className="w-full">
                  <thead className="bg-secondary sticky top-0 z-10">
                    <tr>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Name</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Skills</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Email</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Phone</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Role</th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    {activeMembers.map((member, index) => (
                      <tr key={member.id} className={`${index !== activeMembers.length - 1 ? 'border-b border-border' : ''} hover:bg-secondary/30 transition-colors`}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: member.avatarColor }}
                            >
                              <span className="text-[11px] font-medium text-white">
                                {member.initials}
                              </span>
                            </div>
                            <span className="caption text-foreground">{member.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1 flex-wrap">
                            {member.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-secondary text-foreground rounded caption text-[11px]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="caption text-foreground">{member.email}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="caption text-foreground">{member.phone}</span>
                        </td>
                        <td className="px-4 py-3">
                          {member.role === 'Owner' ? (
                            <span className="caption text-foreground">{member.role}</span>
                          ) : (
                            <div className="relative">
                              <button
                                onClick={() => setOpenRoleDropdown(openRoleDropdown === member.id ? null : member.id)}
                                className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                              >
                                <span className="caption text-foreground">{member.role}</span>
                                <ChevronDown className="w-3 h-3 text-muted-foreground" />
                              </button>

                              {openRoleDropdown === member.id && createPortal(
                                <>
                                  <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setOpenRoleDropdown(null)}
                                  />
                                  <div className="fixed bg-popover border border-border rounded-lg shadow-lg z-50 py-1 min-w-[120px]">
                                    <button
                                      onClick={() => handleChangeRole(member.id, 'Admin')}
                                      className="w-full px-4 py-2 caption text-left hover:bg-secondary transition-colors text-foreground"
                                    >
                                      Admin
                                    </button>
                                    <button
                                      onClick={() => handleChangeRole(member.id, 'Member')}
                                      className="w-full px-4 py-2 caption text-left hover:bg-secondary transition-colors text-foreground"
                                    >
                                      Member
                                    </button>
                                  </div>
                                </>,
                                document.body
                              )}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {member.role !== 'Owner' && (
                            <div className="relative">
                              <button
                                onClick={() => setOpenActionMenu(openActionMenu === member.id ? null : member.id)}
                                className="p-1 hover:bg-secondary rounded transition-colors"
                              >
                                <MoreVertical className="w-4 h-4 text-muted-foreground" />
                              </button>

                              {openActionMenu === member.id && createPortal(
                                <>
                                  <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setOpenActionMenu(null)}
                                  />
                                  <div className="fixed bg-popover border border-border rounded-lg shadow-lg z-50 py-1 min-w-[140px]">
                                    <button
                                      onClick={() => handleRemoveMember(member.id)}
                                      className="w-full px-4 py-2 caption text-left hover:bg-destructive/10 transition-colors text-destructive flex items-center gap-2"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                      <span>Remove</span>
                                    </button>
                                  </div>
                                </>,
                                document.body
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Pending Invites Section */}
        <div className="flex flex-col min-h-0 flex-1">
          <button
            onClick={() => setPendingExpanded(!pendingExpanded)}
            className="flex items-center gap-2 mb-3 caption font-medium text-foreground hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <span>Pending</span>
            <span className="text-muted-foreground">{pendingInvites.length}</span>
            {pendingExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {pendingExpanded && (
            <div className="border border-border rounded-lg overflow-hidden flex flex-col min-h-0 flex-1">
              <div className="overflow-auto flex-1">
                <table className="w-full">
                  <thead className="bg-secondary sticky top-0 z-10">
                    <tr>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Email or Name</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Invited By</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Date Sent</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Expiration Date</th>
                      <th className="text-left px-4 py-3 caption font-medium text-muted-foreground">Role</th>
                      <th className="w-24"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    {pendingInvites.map((invite, index) => (
                      <tr key={invite.id} className={`${index !== pendingInvites.length - 1 ? 'border-b border-border' : ''} hover:bg-secondary/30 transition-colors`}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            {invite.hasAvatar ? (
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: invite.avatarColor }}
                              >
                                <span className="text-[11px] font-medium text-white">
                                  {invite.initials}
                                </span>
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                            <span className="caption text-foreground">{invite.emailOrName}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="caption text-foreground">{invite.invitedBy}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="caption text-foreground">{invite.dateSent}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`caption ${invite.isExpired ? 'text-destructive-foreground' : 'text-foreground'}`}>
                            {invite.expirationDate}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="caption text-foreground">{invite.role}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleResendInvite(invite.id)}
                              className="p-1 hover:bg-secondary rounded transition-colors"
                              title="Resend invite"
                            >
                              <RotateCw className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <button
                              onClick={() => handleDeleteInvite(invite.id)}
                              className="p-1 hover:bg-destructive/10 rounded transition-colors"
                              title="Delete invite"
                            >
                              <Trash2 className="w-4 h-4 text-destructive-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowInviteModal(false)}
          />
          
          <div className="relative bg-card rounded-xl shadow-2xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-card-foreground font-semibold body">Invite Member</h3>
              <button
                onClick={() => setShowInviteModal(false)}
                className="p-1 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            
            <div className="px-6 py-6 space-y-4">
              <div>
                <label className="block caption text-card-foreground mb-2 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg outline-none border border-border bg-background text-foreground caption placeholder:text-muted-foreground"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleInviteMember();
                    }
                  }}
                  autoFocus
                />
              </div>

              <div>
                <label className="block caption text-card-foreground mb-2 font-medium">
                  Role
                </label>
                <div className="flex gap-2">
                  {(['Admin', 'Member'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setInviteRole(role)}
                      className={`flex-1 px-3 py-2 rounded-lg border transition-colors caption font-medium ${
                        inviteRole === role 
                          ? 'border-foreground bg-foreground/5 text-foreground' 
                          : 'border-border bg-background text-muted-foreground hover:bg-secondary'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 caption border border-border hover:bg-secondary rounded-lg transition-colors text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handleInviteMember}
                className="px-4 py-2 caption bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
                disabled={!inviteEmail.trim()}
              >
                Send invite
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Link Copied Tooltip */}
      {showLinkCopied && createPortal(
        <div
          className="fixed z-[200] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)]"
          style={{
            top: `${linkCopiedPosition.top}px`,
            left: `${linkCopiedPosition.left}px`,
          }}
        >
          <div className="bg-white relative rounded-[4px]">
            <div className="absolute border border-[#e8e8e8] inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex gap-2 items-center px-3 py-2">
              <div className="relative shrink-0 w-4 h-4">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                  <path
                    clipRule="evenodd"
                    d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z"
                    fill="#18A87D"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[14px] leading-[16px] text-[#303742] whitespace-nowrap">
                Link copied!
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}