import svgPaths from "../../imports/svg-3x9ir0o7gu";

interface PriorityDropdownProps {
  onSelect: (priority: "high" | "medium" | "low") => void;
  onClose: () => void;
}

export function PriorityDropdown({ onSelect, onClose }: PriorityDropdownProps) {
  const priorities = [
    {
      value: "high" as const,
      label: "High",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.p2d174700} fill="var(--alert-red)" fillRule="evenodd" />
        </svg>
      ),
    },
    {
      value: "medium" as const,
      label: "Medium",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3a90b5c0} fill="var(--vivid-yellow)" />
          <path d={svgPaths.p140f5900} fill="var(--vivid-yellow)" />
        </svg>
      ),
    },
    {
      value: "low" as const,
      label: "Low",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.pcab4b00} fill="var(--pastel-blue)" fillRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-[180px] bg-white rounded-[8px] shadow-lg border border-[#e8e8e8] py-2">
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
