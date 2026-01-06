import { useEffect, useState } from 'react';

interface RadiusItemProps {
  name: string;
  cssVar: string;
}

export function RadiusItem({ name, cssVar }: RadiusItemProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setValue(computedValue.trim());
  }, [cssVar]);

  return (
    <div className="typography-card">
      <div className="flex items-center gap-3">
        <div
          className="w-16 h-16 flex-shrink-0 bg-primary"
          style={{
            borderRadius: `var(${cssVar})`,
            boxShadow: 'var(--elevation-sm)'
          }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-label">{name}</p>
          <p className="text-web-metadata-primary text-metadata mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}