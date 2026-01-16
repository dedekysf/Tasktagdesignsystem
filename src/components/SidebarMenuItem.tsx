import { Link, useLocation } from 'react-router-dom';

interface SidebarMenuItemProps {
  label: string;
  to: string;
  onClick?: () => void;
}

export function SidebarMenuItem({ label, to, onClick }: SidebarMenuItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`sidebar-menu-item ${isActive ? 'active' : ''}`}
      >
        <span className="caption text-[14px]">{label}</span>
      </Link>
    </li>
  );
}
