import { X } from "lucide-react";

export function TaskUncompletedToast() {
  return (
    <div className="bg-[var(--text-primary)] rounded-[8px] shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px]">
      <div className="size-5 rounded-full bg-[#828282] flex items-center justify-center shrink-0">
        <X className="size-3.5 text-white" strokeWidth={3} />
      </div>
      <span 
        className="text-white text-[14px]"
        style={{ fontWeight: 'var(--font-weight-regular)' }}
      >
        Task marked as incomplete
      </span>
    </div>
  );
}
