import { Plus } from 'lucide-react';

export function FAB() {
  return (
    <button 
      className="absolute bottom-[100px] right-4 bg-foreground text-background rounded-full px-4 py-3 flex items-center gap-2 shadow-lg hover:opacity-90 transition-opacity z-20"
      aria-label="Add task"
    >
      <Plus className="w-5 h-5" strokeWidth={2.5} />
      <span className="text-sm font-medium">New Task</span>
    </button>
  );
}
