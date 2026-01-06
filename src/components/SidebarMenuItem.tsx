interface SidebarMenuItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function SidebarMenuItem({ label, isActive, onClick }: SidebarMenuItemProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`sidebar-menu-item ${isActive ? 'active' : ''}`}
      >
        <span className="caption text-[14px]">{label}</span>
      </button>
    </li>
  );
}
