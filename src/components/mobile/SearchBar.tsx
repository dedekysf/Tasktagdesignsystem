import { MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';
import { SearchInput } from '../SearchInput';

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
      <div className="flex-1" onFocus={onFocus}>
        <SearchInput
          value={value}
          onChange={onChange}
          placeholder="Search"
          className="w-full"
        />
      </div>
      
      <div className="relative">
        <button 
          className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors active:bg-secondary ${hasActiveFilters || hasActiveSorts ? 'bg-secondary text-foreground' : 'text-foreground'}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <MoreVertical className="w-6 h-6" strokeWidth={2} />
          {/* Badge indicator when filters or sort are active */}
          {(hasActiveFilters || hasActiveSorts) && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
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
    </div>
  );
}
