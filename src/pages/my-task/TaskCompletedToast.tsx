import { Check } from "lucide-react";

export function TaskCompletedToast() {
  return (
    <div className="bg-[var(--text-primary)] rounded-[8px] shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px]">
      <div className="size-5 rounded-full bg-[var(--secondary-green)] flex items-center justify-center shrink-0">
        <Check className="size-3.5 text-white" strokeWidth={3} />
      </div>
      <span 
        className="text-white text-[14px]"
        style={{ fontWeight: 'var(--font-weight-regular)' }}
      >
        Task marked as complete
      </span>
    </div>
  );
}
