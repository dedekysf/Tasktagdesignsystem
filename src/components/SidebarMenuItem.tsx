import { Link, useLocation } from 'react-router';
import { ReactNode } from 'react';

interface SidebarMenuItemProps {
  label: string;
  to: string;
  onClick?: () => void;
  tag?: ReactNode;
}

export function SidebarMenuItem({ label, to, onClick, tag }: SidebarMenuItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`sidebar-menu-item ${isActive ? 'active' : ''}`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <span className="text-web-label">{label}</span>
        {tag && <span style={{ marginLeft: 'var(--spacing-8)' }}>{tag}</span>}
      </Link>
    </li>
  );
}