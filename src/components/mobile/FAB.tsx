import { Plus } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  showLabel?: boolean;
  absolute?: boolean;
}

export function FAB({ 
  label = "New Task", 
  icon, 
  showLabel = true, 
  className = "",
  absolute = true,
  ...props 
}: FABProps) {
  const positionClasses = absolute ? "absolute bottom-[100px] right-4" : "";
  
  return (
    <button 
      className={`${positionClasses} bg-[var(--text-primary)] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg active:opacity-90 transition-opacity z-20 ${className}`}
      aria-label={label}
      {...props}
    >
      {icon || <Plus className="w-5 h-5" strokeWidth={2.5} />}
      {showLabel && <span className="text-mobile-label-small">{label}</span>}
    </button>
  );
}
