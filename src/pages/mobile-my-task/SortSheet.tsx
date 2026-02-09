import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { HomeBar } from './HomeBar';
import svgPaths from "../../imports/svg-qo0e9dk7zu";

export interface SortOption {
  category: 'dueDate' | 'priority' | 'lastUpdated' | 'dateCreated';
  value: string;
}

interface SortSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentSort: SortOption | null;
  onSortChange: (sort: SortOption) => void;
}

export function SortSheet({ isOpen, onClose, currentSort, onSortChange }: SortSheetProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  const handleSelect = (option: SortOption) => {
    onSortChange(option);
    // Don't close the sheet - let user choose multiple times or close manually
  };

  const handleClearAll = () => {
    onSortChange(null as any); // Clear the sort by passing null
    // Don't close the sheet
  };

  const isSelected = (category: string, value: string) => {
    return currentSort?.category === category && currentSort?.value === value;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 z-[200]"
        onClick={handleClose}
      />

      {/* Bottom Sheet */}
      <div className={`absolute bottom-0 left-0 right-0 w-full bg-card rounded-t-3xl z-[201] flex flex-col max-h-[90vh] ${isClosing ? 'animate-slide-out-to-bottom' : 'animate-slide-in-from-bottom'}`}>
        {/* Pull Up Handle */}
        <div className="flex flex-col items-center pt-4 pb-2 shrink-0">
          <div className="bg-grey-4 h-1 rounded-full w-[56px]" />
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col items-center pt-4 px-2">
            <p className="h6 text-foreground text-center w-full mb-4" style={{ fontWeight: 600 }}>Sort</p>
            
            <div className="w-full flex flex-col">
              {/* Due Date */}
              <SortCategory title="Due Date">
                <SortOptionItem
                  label="Soonest"
                  selected={isSelected('dueDate', 'soonest')}
                  onClick={() => handleSelect({ category: 'dueDate', value: 'soonest' })}
                />
                <SortOptionItem
                  label="Latest"
                  selected={isSelected('dueDate', 'latest')}
                  onClick={() => handleSelect({ category: 'dueDate', value: 'latest' })}
                />
              </SortCategory>

              {/* Priority */}
              <SortCategory title="Priority">
                <SortOptionItem
                  label="Low to High"
                  selected={isSelected('priority', 'lowToHigh')}
                  onClick={() => handleSelect({ category: 'priority', value: 'lowToHigh' })}
                />
                <SortOptionItem
                  label="High to Low"
                  selected={isSelected('priority', 'highToLow')}
                  onClick={() => handleSelect({ category: 'priority', value: 'highToLow' })}
                />
              </SortCategory>

              {/* Last Updated */}
              <SortCategory title="Last Updated">
                <SortOptionItem
                  label="Newest"
                  selected={isSelected('lastUpdated', 'newest')}
                  onClick={() => handleSelect({ category: 'lastUpdated', value: 'newest' })}
                />
                <SortOptionItem
                  label="Oldest"
                  selected={isSelected('lastUpdated', 'oldest')}
                  onClick={() => handleSelect({ category: 'lastUpdated', value: 'oldest' })}
                />
              </SortCategory>

              {/* Created Date */}
              <SortCategory title="Created Date">
                <SortOptionItem
                  label="Newest"
                  selected={isSelected('dateCreated', 'newest')}
                  onClick={() => handleSelect({ category: 'dateCreated', value: 'newest' })}
                />
                <SortOptionItem
                  label="Oldest"
                  selected={isSelected('dateCreated', 'oldest')}
                  onClick={() => handleSelect({ category: 'dateCreated', value: 'oldest' })}
                />
              </SortCategory>

              {/* Divider Line */}
              <div className="h-2 w-full">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359 8">
                  <line stroke="rgb(var(--color-divider))" x1="4" x2="355" y1="3.5" y2="3.5" />
                </svg>
              </div>

              {/* Clear All Button */}
              <div className="flex h-14 items-center justify-center w-full">
                <button
                  onClick={handleClearAll}
                  disabled={!currentSort}
                  className={`flex-1 h-full rounded-lg ${!currentSort ? 'cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center justify-center gap-2 px-6 py-4 h-full">
                    <p className={`body text-center ${currentSort ? 'text-foreground' : 'text-tertiary'}`}>Clear All</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="h-6 shrink-0 overflow-hidden relative">
          <div className="absolute bg-foreground bottom-2 h-[5px] left-1/2 rounded-full -translate-x-1/2 w-[134px]" />
        </div>
      </div>
    </>
  );
}

interface SortOptionItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function SortOptionItem({ label, selected, onClick }: SortOptionItemProps) {
  return (
    <button
      className="h-[45px] w-full text-left transition-colors active:bg-secondary"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 px-4 py-2 h-full">
        <div className="flex-1 text-foreground overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </div>
        <RadioButton selected={selected} />
      </div>
    </button>
  );
}

interface SortCategoryProps {
  title: string;
  children: React.ReactNode;
}

function SortCategory({ title, children }: SortCategoryProps) {
  return (
    <div className="w-full">
      <div className="px-4 py-3">
        <p className="h6 text-muted-foreground" style={{ fontWeight: 600 }}>{title}</p>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

function RadioButton({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <div className="relative shrink-0 size-5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <rect fill="var(--color-primary)" height="20" rx="10" width="20" />
          <path d={svgPaths.p27503df0} fill="white" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <rect height="18" rx="9" stroke="var(--color-grey-4)" strokeWidth="2" width="18" x="1" y="1" />
      </svg>
    </div>
  );
}
