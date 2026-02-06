import { ChevronDown, ChevronUp } from 'lucide-react';
import { CountBadge } from './CountBadge';

interface FilterSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  selectedCount: number;
  children: React.ReactNode;
}

export function FilterSection({ title, isExpanded, onToggle, selectedCount, children }: FilterSectionProps) {
  return (
    <div className="w-full flex flex-col">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between px-4 py-3 w-full"
      >
        <div className="flex items-center gap-2">
          <p className="body text-foreground" style={{ fontWeight: 600 }}>{title}</p>
          {selectedCount > 0 && <CountBadge count={selectedCount} />}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-grey-4" strokeWidth={2} />
        ) : (
          <ChevronDown className="w-5 h-5 text-grey-4" strokeWidth={2} />
        )}
      </button>
      
      {isExpanded && (
        <div className="flex flex-col w-full pb-2">
          {children}
        </div>
      )}
    </div>
  );
}
