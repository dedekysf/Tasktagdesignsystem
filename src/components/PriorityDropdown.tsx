import { ChevronsUp, Minus, ChevronsDown } from "lucide-react";

interface PriorityDropdownProps {
  onSelect: (priority: "high" | "medium" | "low") => void;
  onClose: () => void;
  className?: string;
}

export function PriorityDropdown({ onSelect, onClose, className = "" }: PriorityDropdownProps) {
  const priorities = [
    {
      value: "high" as const,
      label: "High",
      icon: <ChevronsUp className="size-5" style={{ color: 'var(--alert-red)' }} />,
    },
    {
      value: "medium" as const,
      label: "Medium",
      icon: (
        <div className="flex flex-col gap-0.5">
          <Minus className="size-5" style={{ color: 'var(--vivid-yellow)', marginBottom: '-8px' }} />
          <Minus className="size-5" style={{ color: 'var(--vivid-yellow)', marginTop: '-8px' }} />
        </div>
      ),
    },
    {
      value: "low" as const,
      label: "Low",
      icon: <ChevronsDown className="size-5" style={{ color: 'var(--pastel-blue)' }} />,
    },
  ];

  return (
    <div className={`w-[180px] bg-white rounded-[8px] shadow-lg border border-[#e8e8e8] py-2 ${className}`}>
      {priorities.map((priority) => (
        <button
          key={priority.value}
          onClick={() => onSelect(priority.value)}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-secondary transition-colors cursor-pointer"
        >
          {priority.icon}
          <span 
            className="text-[14px] text-[var(--text-primary)]"
            style={{ fontWeight: 'var(--font-weight-regular)' }}
          >
            {priority.label}
          </span>
        </button>
      ))}
    </div>
  );
}