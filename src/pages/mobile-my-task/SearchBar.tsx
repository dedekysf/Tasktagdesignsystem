import { Search, EllipsisVertical, X } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';
import svgPaths from "../../imports/svg-cqzenso6nw";

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
    <div className="px-4 py-2 flex items-center gap-3 bg-card relative">
      <div className="bg-secondary rounded-lg px-4 py-3 flex items-center gap-2 flex-1">
        <Search className="w-6 h-6 text-grey-4" strokeWidth={2} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-foreground text-sm tracking-[0.28px] placeholder:text-grey-4"
          onFocus={onFocus}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-0 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-grey-4" strokeWidth={2} />
          </button>
        )}
      </div>
      
      <button 
        className={`p-0 w-10 h-10 flex items-center justify-center relative transition-all flex-shrink-0 ${hasActiveFilters || hasActiveSorts ? 'bg-secondary rounded-full' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <EllipsisVertical className="w-6 h-6 text-foreground" strokeWidth={2} />
        {/* Badge indicator when filters or sort are active */}
        {(hasActiveFilters || hasActiveSorts) && (
          <div className="absolute bg-primary right-0 rounded-full w-2.5 h-2.5 top-0" />
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
