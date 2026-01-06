import { useEffect, useState } from 'react';

interface RadiusExampleProps {
  name: string;
  cssVar: string;
}

export function RadiusExample({ name, cssVar }: RadiusExampleProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setValue(computedValue.trim());
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
      <p className="caption text-muted-foreground">{value}</p>
    </div>
  );
}
