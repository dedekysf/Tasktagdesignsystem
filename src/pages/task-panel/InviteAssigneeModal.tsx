import { useState } from 'react';
import { X, Search, UserPlus } from 'lucide-react';
import { Button } from '../../components/Button';
import { getInitials, getAvatarColor } from '../../utils/avatar';
import type { Member } from './types';

interface InviteAssigneeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssignMembers: (members: any[]) => void;
}

const mockContacts = [
  {
    id: 'contact-1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 'contact-2',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 'contact-3',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export function InviteAssigneeModal({ isOpen, onClose, onAssignMembers }: InviteAssigneeModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<Set<string>>(new Set());
  const [selectedRole, setSelectedRole] = useState<'Assignee' | 'Viewer'>('Assignee');

  if (!isOpen) return null;

  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const toggleMember = (id: string) => {
    const newSelected = new Set(selectedMembers);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMembers(newSelected);
  };

  const handleInvite = () => {
    const assignedMembers = [];
    
    // Add selected contacts
    selectedMembers.forEach(id => {
      const contact = mockContacts.find(c => c.id === id);
      if (contact) {
        assignedMembers.push({
          id: contact.id,
          name: contact.name,
          email: contact.email,
          avatar: contact.avatar,
          role: selectedRole,
        });
      }
    });

    // Add email invite if valid
    if (emailInput && isValidEmail(emailInput)) {
      assignedMembers.push({
        id: `invite-${Date.now()}`,
        name: emailInput,
        email: emailInput,
        role: selectedRole,
      });
    }

    if (assignedMembers.length > 0) {
      onAssignMembers(assignedMembers);
      setSelectedMembers(new Set());
      setEmailInput('');
      setSearchQuery('');
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--overlay)' }}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl rounded-xl overflow-hidden max-h-[80vh] flex flex-col"
        style={{ 
          backgroundColor: 'var(--white)',
          boxShadow: 'var(--elevation-xl)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="px-6 py-4 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border)' }}
        >
          <h2 
            style={{ 
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            Invite Assignee
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[var(--grey-02)]"
          >
            <X className="size-5" style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Role Selection */}
          <div>
            <label 
              className="block mb-2"
              style={{ 
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-primary)',
              }}
            >
              Select Role
            </label>
            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: selectedRole === 'Assignee' ? 'var(--grey-02)' : 'var(--white)',
                  borderColor: selectedRole === 'Assignee' ? 'var(--text-secondary)' : 'var(--border)',
                }}
                onClick={() => setSelectedRole('Assignee')}
              >
                <span 
                  style={{ 
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Assignee
                </span>
              </button>
              <button
                className="flex-1 px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: selectedRole === 'Viewer' ? 'var(--grey-02)' : 'var(--white)',
                  borderColor: selectedRole === 'Viewer' ? 'var(--text-secondary)' : 'var(--border)',
                }}
                onClick={() => setSelectedRole('Viewer')}
              >
                <span 
                  style={{ 
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Viewer
                </span>
              </button>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label 
              className="block mb-2"
              style={{ 
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-primary)',
              }}
            >
              Invite by Email
            </label>
            <div className="relative">
              <UserPlus 
                className="absolute left-3 top-1/2 -translate-y-1/2 size-5"
                style={{ color: 'var(--text-secondary)' }}
              />
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter email address"
                className="w-full pl-11 pr-4 py-3 rounded-lg border"
                style={{
                  fontSize: 'var(--text-label)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--white)',
                  borderColor: 'var(--border)',
                }}
              />
            </div>
          </div>

          {/* Search Contacts */}
          <div>
            <label 
              className="block mb-2"
              style={{ 
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--text-primary)',
              }}
            >
              Or Select from Contacts
            </label>
            <div className="relative mb-3">
              <Search 
                className="absolute left-3 top-1/2 -translate-y-1/2 size-5"
                style={{ color: 'var(--text-secondary)' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search contacts..."
                className="w-full pl-11 pr-4 py-3 rounded-lg border"
                style={{
                  fontSize: 'var(--text-label)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--white)',
                  borderColor: 'var(--border)',
                }}
              />
            </div>

            {/* Contacts List */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filteredContacts.map((contact) => {
                const initials = getInitials(contact.name);
                const color = getAvatarColor(contact.name);
                
                return (
                  <button
                    key={contact.id}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: selectedMembers.has(contact.id) ? 'var(--grey-02)' : 'var(--white)',
                      borderColor: selectedMembers.has(contact.id) ? 'var(--text-secondary)' : 'var(--border)',
                    }}
                    onClick={() => toggleMember(contact.id)}
                  >
                    {/* Avatar with initials - matching task list style */}
                    <div 
                      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center relative"
                      style={{ backgroundColor: color }}
                    >
                      <span 
                        className="text-[16px]"
                        style={{ 
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {initials}
                      </span>
                    </div>
                    
                    <div className="flex-1 text-left">
                      <p 
                        style={{ 
                          fontSize: 'var(--text-label)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {contact.name}
                      </p>
                      <p 
                        style={{ 
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {contact.email}
                      </p>
                    </div>
                    {selectedMembers.has(contact.id) && (
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--secondary-green)' }}
                      >
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path
                            d="M1 5L4.5 8.5L11 1.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="px-6 py-4 border-t flex items-center justify-end gap-3"
          style={{ borderColor: 'var(--border)' }}
        >
          <Button
            variant="outlined"
            size="md"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            size="md"
            onClick={handleInvite}
            className="bg-[var(--secondary-green)]"
          >
            Invite
          </Button>
        </div>
      </div>
    </div>
  );
}