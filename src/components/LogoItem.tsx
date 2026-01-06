interface LogoItemProps {
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export function LogoItem({ title, children, backgroundColor = 'transparent' }: LogoItemProps) {
  return (
    <div className="typography-card">
      <div 
        className="flex flex-col items-center justify-center p-8 rounded-lg h-[240px]"
      >
        {children}
      </div>
      <h3 className="text-center mt-1 mb-4">{title}</h3>
    </div>
  );
}