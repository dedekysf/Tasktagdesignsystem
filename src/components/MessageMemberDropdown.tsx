import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { SearchInput } from './SearchInput';
import { Button } from './Button';

interface Member {
  id: string;
  name: string;
}

interface MessageMemberDropdownProps {
  members: Member[];
  onCreateChat: (selectedIds: string[]) => void;
  className?: string;
}

export function MessageMemberDropdown({ 
  members, 
  onCreateChat,
  className = ''
}: MessageMemberDropdownProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMember = (memberId: string) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedMembers(members.map(m => m.id));
    } else {
      setSelectedMembers([]);
    }
  };

  const allSelected = selectedMembers.length === members.length && members.length > 0;

  return (
    <div 
      className={className}
      style={{
        width: '380px',
        backgroundColor: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-8)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Search */}
      <div 
        style={{
          padding: 'var(--spacing-12)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search members..."
        />
      </div>

      {/* List */}
      <div 
        style={{
          padding: 'var(--spacing-8) 0',
          maxHeight: '300px',
          overflowY: 'auto'
        }}
      >
        {/* All option */}
        <div
          style={{
            padding: 'var(--spacing-8) var(--spacing-16)',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Checkbox
            variant="rectangular"
            checked={allSelected}
            onChange={toggleAll}
            label="All"
          />
        </div>

        {/* Members */}
        {filteredMembers.map((member) => {
          const isSelected = selectedMembers.includes(member.id);
          
          return (
            <div
              key={member.id}
              style={{
                padding: 'var(--spacing-8) var(--spacing-16)',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Checkbox
                variant="rectangular"
                checked={isSelected}
                onChange={() => toggleMember(member.id)}
                label={member.name}
              />
            </div>
          );
        })}

        {filteredMembers.length === 0 && (
          <div
            className="text-web-caption"
            style={{
              padding: 'var(--spacing-16)',
              textAlign: 'center',
              color: 'var(--text-secondary)'
            }}
          >
            No members found
          </div>
        )}
      </div>

      {/* Action */}
      <div 
        style={{
          padding: 'var(--spacing-16)',
          borderTop: '1px solid var(--border)'
        }}
      >
        <Button
          variant="ghost"
          size="md"
          className="btn-primary"
          onClick={() => onCreateChat(selectedMembers)}
          disabled={selectedMembers.length === 0}
          style={{ width: '100%' }}
        >
          Create Chat
        </Button>
      </div>
    </div>
  );
}
