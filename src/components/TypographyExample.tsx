import { useEffect, useState } from 'react';

interface TypographyExampleProps {
  name: string;
  cssVar: string;
}

export function TypographyExample({ name, cssVar }: TypographyExampleProps) {
  const [size, setSize] = useState('');

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setSize(computedValue.trim());
  }, [cssVar]);

  return (
    <div 
      className="flex items-center justify-between p-4 bg-card" 
      style={{ 
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--elevation-sm)'
      }}
    >
      <p className="text-foreground">{name}</p>
      <p className="caption text-muted-foreground">{size}</p>
    </div>
  );
}
