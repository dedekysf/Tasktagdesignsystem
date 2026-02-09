import { useEffect, useRef } from "react";
import { ArrowUpDown, ListFilter } from "lucide-react";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={ref}
      className="absolute top-0 right-0 bg-popover flex flex-col items-center py-[8px] rounded-[8px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] w-[108px] z-50"
    >
      {/* Sort Item */}
      <div 
        className="flex items-start relative shrink-0 w-full cursor-pointer transition-colors active:bg-secondary"
        onClick={() => {
          onSortClick();
          onClose();
        }}
      >
        <div className="flex gap-[8px] items-center px-[16px] py-[9px] relative self-stretch shrink-0 w-full">
          <div className="flex gap-[8px] items-center relative shrink-0">
            <ArrowUpDown className="w-4 h-4 text-foreground" />
            <p className="font-['Inter'] font-normal leading-[16px] not-italic relative shrink-0 text-foreground text-[14px] tracking-[0.28px]">
              Sort
            </p>
          </div>
          {hasActiveSorts && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
          )}
        </div>
      </div>

      {/* Filter Item */}
      <div 
        className="flex items-start relative shrink-0 w-full cursor-pointer transition-colors active:bg-secondary"
        onClick={() => {
          onFilterClick();
          onClose();
        }}
      >
        <div className="flex gap-[8px] items-center px-[16px] py-[9px] relative self-stretch shrink-0 w-full">
          <div className="flex gap-[8px] items-center relative shrink-0">
            <ListFilter className="w-4 h-4 text-foreground" />
            <p className="font-['Inter'] font-normal leading-[16px] not-italic relative shrink-0 text-foreground text-[14px] tracking-[0.28px]">
              Filter
            </p>
          </div>
          {hasActiveFilters && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
          )}
        </div>
      </div>
    </div>
  );
}
