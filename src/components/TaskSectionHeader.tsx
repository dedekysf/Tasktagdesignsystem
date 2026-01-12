import { ChevronDown } from "lucide-react";

interface TaskSectionHeaderProps {
  title: string;
  count: number;
  isExpanded: boolean;
  onToggle: () => void;
  showCount?: boolean;
  className?: string;
}

export function TaskSectionHeader({ title, count, isExpanded, onToggle, showCount = true, className = "" }: TaskSectionHeaderProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full h-[48px] px-4 flex items-center justify-between transition-colors shrink-0 cursor-pointer ${className}`}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-[16px] text-[var(--text-primary)]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
          {title}
        </h3>
        {showCount && count > 0 && (
          <div className="flex items-center justify-center size-5 rounded-full" style={{ border: '1px solid var(--grey-03)' }}>
            <span className="text-[10px] text-[var(--text-secondary)]">{count}</span>
          </div>
        )}
      </div>
      <ChevronDown
        className={`size-5 text-[var(--text-secondary)] transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
