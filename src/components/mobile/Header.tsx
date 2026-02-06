import { Avatar } from '../AvatarComponent';

interface HeaderProps {
  avatarSrc: string;
}

export function Header({ avatarSrc }: HeaderProps) {
  return (
    <div className="px-4 py-2 flex items-center justify-between bg-background">
      <h2 className="text-2xl font-semibold text-foreground">My Tasks</h2>
      <Avatar 
        size="md" 
        variant="image" 
        imageUrl={avatarSrc}
        className="ring-2 ring-border"
      />
    </div>
  );
}
