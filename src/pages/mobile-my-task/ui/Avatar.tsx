import { getAssigneeConfig } from '../utils/assignees';

interface AvatarProps {
  name: string;
  initials: string;
  color: string;
  avatar: string | null;
  size?: number;
}

export function Avatar({ name, initials, color, avatar, size = 32 }: AvatarProps) {
  return (
    <div 
      className="rounded-full overflow-hidden shrink-0 flex items-center justify-center text-white font-medium"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        fontSize: size * 0.4
      }}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}
