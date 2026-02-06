import { Search, MoreVertical, X } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterClick: () => void;
  onSortClick: () => void;
  hasActiveFilters?: boolean;
  hasActiveSorts?: boolean;
  onFocus?: () => void;
}

export function SearchBar({ value, onChange, onFilterClick, onSortClick, hasActiveFilters = false, hasActiveSorts = false, onFocus }: SearchBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="px-4 py-2 flex items-center gap-3 bg-background relative z-30">
      <div className="bg-secondary/50 rounded-xl px-4 py-2.5 flex items-center gap-2 flex-1 transition-colors hover:bg-secondary">
        <Search className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-foreground text-base placeholder:text-muted-foreground"
          onFocus={onFocus}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-1 rounded-full hover:bg-background/50"
          >
            <X className="w-4 h-4 text-muted-foreground" strokeWidth={2} />
          </button>
        )}
      </div>
      
      <button 
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${hasActiveFilters || hasActiveSorts ? 'bg-secondary text-foreground' : 'text-foreground hover:bg-secondary'}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <MoreVertical className="w-6 h-6" strokeWidth={2} />
        {/* Badge indicator when filters or sort are active */}
        {(hasActiveFilters || hasActiveSorts) && (
          <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
        )}
      </button>
      
      <DropdownMenu 
        isOpen={isDropdownOpen} 
        onClose={() => setIsDropdownOpen(false)}
        onFilterClick={onFilterClick}
        onSortClick={onSortClick}
        hasActiveFilters={hasActiveFilters}
        hasActiveSorts={hasActiveSorts}
      />
    </div>
  );
}
