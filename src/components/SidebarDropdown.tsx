import { ReactNode } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarDropdownProps {
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SidebarDropdown({ label, isOpen, isActive, onToggle, children }: SidebarDropdownProps) {
  return (
    <li>
      <button
        onClick={onToggle}
        className={`sidebar-dropdown ${isActive ? 'active' : ''}`}
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      {isOpen && (
        <ul className="sidebar-submenu">
          {children}
        </ul>
      )}
    </li>
  );
}
