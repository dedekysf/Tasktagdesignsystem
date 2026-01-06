import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SectionHeader({ icon: Icon, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      
      <div>
        <h2>{title}</h2>
        <p className="text-web-secondary-body mt-1" style={{ color: 'var(--grey-05)' }}>{description}</p>
      </div>
    </div>
  );
}