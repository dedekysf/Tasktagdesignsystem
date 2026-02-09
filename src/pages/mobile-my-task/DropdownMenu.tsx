import { ArrowUpDown, ListFilter } from 'lucide-react';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterClick: () => void;
  onSortClick: () => void;
  hasActiveFilters?: boolean;
  hasActiveSorts?: boolean;
}

export function DropdownMenu({ isOpen, onClose, onFilterClick, onSortClick, hasActiveFilters = false, hasActiveSorts = false }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop to close dropdown */}
      <div 
        className="fixed inset-0 z-[100]" 
        onClick={onClose}
      />
      
      {/* Dropdown - positioned above/in front of more actions icon */}
      <div className="absolute right-4 top-2 z-[110] bg-card rounded-lg py-2 w-[108px]" style={{ boxShadow: 'var(--elevation-sm)' }}>
        <button 
          className="w-full flex items-center gap-2 px-4 py-[9px] active:bg-secondary transition-colors"
          onClick={() => {
            onSortClick();
            onClose();
          }}
        >
          <ArrowUpDown className={`w-4 h-4 ${hasActiveSorts ? 'text-primary' : 'text-foreground'}`} strokeWidth={2} />
          <span className={`text-sm ${hasActiveSorts ? 'text-primary' : 'text-foreground'} tracking-[0.28px]`}>Sort</span>
        </button>
        
        <button 
          className="w-full flex items-center gap-2 px-4 py-[9px] active:bg-secondary transition-colors"
          onClick={() => {
            onFilterClick();
            onClose();
          }}
        >
          <ListFilter className={`w-4 h-4 ${hasActiveFilters ? 'text-primary' : 'text-foreground'}`} strokeWidth={2} />
          <span className={`text-sm ${hasActiveFilters ? 'text-primary' : 'text-foreground'} tracking-[0.28px]`}>Filter</span>
        </button>
      </div>
    </>
  );
}
