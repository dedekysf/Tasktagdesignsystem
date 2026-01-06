import { useEffect, useState } from 'react';

interface SpacingItemProps {
  name: string;
  cssVar: string;
}

export function SpacingItem({ name, cssVar }: SpacingItemProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setValue(computedValue.trim());
  }, [cssVar]);

  return (
    <div className="typography-card">
      <div>
        <p className="text-label">{name}</p>
        <p className="text-web-metadata-primary text-metadata mt-1">{value}</p>
      </div>
    </div>
  );
}