import svgPaths from "../../../imports/svg-suswvo893p";

interface ChecklistBadgeProps {
  count: number;
}

export function ChecklistBadge({ count }: ChecklistBadgeProps) {
  return (
    <div className="flex items-center gap-1 p-[2px] hover:bg-secondary transition-colors rounded cursor-pointer">
      <svg className="size-3" fill="none" viewBox="0 0 12 12">
        <path d={svgPaths.p14d36400} fill="var(--text-secondary)" />
      </svg>
      <span className="text-[10px] text-[var(--text-secondary)] underline" style={{ fontWeight: 'var(--font-weight-regular)' }}>
        {count} items
      </span>
    </div>
  );
}
