import { Plus } from 'lucide-react';

export function FAB() {
  return (
    <button 
      className="absolute bottom-[116px] right-4 bg-foreground rounded-full px-4 py-3 flex items-center gap-2 shadow-lg hover:bg-foreground/90 transition-colors z-20"
      aria-label="Add task"
    >
      <Plus className="w-5 h-5 text-background" strokeWidth={2.5} />
      <span className="text-background text-sm" style={{ fontWeight: 500 }}>New Task</span>
    </button>
  );
}
