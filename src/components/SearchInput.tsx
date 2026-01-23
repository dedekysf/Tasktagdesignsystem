import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ 
  value, 
  onChange, 
  placeholder = "Search", 
  className = '' 
}: SearchInputProps) {
  const hasValue = value.trim().length > 0;

  return (
    <div 
      className={`flex items-center rounded-lg ${className}`}
      style={{ 
        gap: 'var(--spacing-8)',
        padding: 'var(--spacing-12) var(--spacing-16)',
        backgroundColor: 'var(--grey-01)',
        borderRadius: 'var(--radius-8)',
        height: '40px'
      }}
    >
      <Search size={24} style={{ color: 'var(--text-primary)', flexShrink: 0 }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-web-secondary-body"
        style={{ 
          color: 'var(--text-primary)',
          minWidth: 0
        }}
        placeholder={placeholder}
      />
      {hasValue && (
        <button
          onClick={() => onChange('')}
          className="p-1 rounded transition-colors"
          style={{ 
            borderRadius: 'var(--radius-4)',
            flexShrink: 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <X size={16} style={{ color: 'var(--text-primary)' }} />
        </button>
      )}
    </div>
  );
}