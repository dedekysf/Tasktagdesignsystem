interface HeaderProps {
  avatarSrc: string;
}

export function Header({ avatarSrc }: HeaderProps) {
  return (
    <div className="px-4 pt-1 pb-0 flex items-center justify-between bg-card">
      <h2 className="text-foreground">My Tasks</h2>
      <div className="size-8 rounded-full overflow-hidden">
        <img 
          src={avatarSrc} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
