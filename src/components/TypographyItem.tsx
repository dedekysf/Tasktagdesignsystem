import { useEffect, useState } from 'react';

interface TypographyItemProps {
  name: string;
  cssVar: string;
}

export function TypographyItem({ name, cssVar }: TypographyItemProps) {
  const [size, setSize] = useState('');

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setSize(computedValue.trim());
  }, [cssVar]);

  return (
    <div className="typography-card">
      <p className="text-label">{name}</p>
      <p className="caption mt-1 text-metadata">{size}</p>
    </div>
  );
}