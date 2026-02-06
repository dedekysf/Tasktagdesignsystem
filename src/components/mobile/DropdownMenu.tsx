import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterClick: () => void;
  onSortClick: () => void;
  hasActiveFilters: boolean;
  hasActiveSorts: boolean;
}

export function DropdownMenu({ 
  isOpen, 
  onClose,
  onFilterClick,
  onSortClick,
  hasActiveFilters,
  hasActiveSorts
}: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-4 mt-2 w-48 bg-popover rounded-xl shadow-lg border border-border py-1 z-50">
      <button 
        className="w-full px-4 py-2 text-left hover:bg-secondary flex items-center justify-between group"
        onClick={() => {
          onFilterClick();
          onClose();
        }}
      >
        <span className="text-sm">Filter</span>
        {hasActiveFilters && <div className="w-2 h-2 rounded-full bg-primary" />}
      </button>
      <button 
        className="w-full px-4 py-2 text-left hover:bg-secondary flex items-center justify-between group"
        onClick={() => {
          onSortClick();
          onClose();
        }}
      >
        <span className="text-sm">Sort</span>
        {hasActiveSorts && <div className="w-2 h-2 rounded-full bg-primary" />}
      </button>
    </div>
  );
}
