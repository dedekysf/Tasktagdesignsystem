import { useState, useEffect } from 'react';

interface ColorSwatchProps {
  name: string;
  cssVar: string;
}

export function ColorSwatch({ name, cssVar }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const [hexColor, setHexColor] = useState('');

  useEffect(() => {
    // Get the computed color value
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    
    // Convert rgba to hex
    const rgbaMatch = computedValue.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
      setHexColor(hex);
    }
  }, [cssVar]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hexColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-3 p-4 bg-card hover:bg-secondary transition-colors cursor-pointer w-full"
      style={{ 
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--elevation-sm)'
      }}
    >
      <div
        className="w-10 h-10 flex-shrink-0"
        style={{
          backgroundColor: `var(${cssVar})`,
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--elevation-sm)'
        }}
      />
      <div className="flex-1 text-left min-w-0 flex items-center justify-between">
        <p className="text-foreground">{name}</p>
        <div className="flex items-center gap-2">
          <p className="caption text-muted-foreground">{hexColor}</p>
          {copied && <span className="caption text-primary">Copied!</span>}
        </div>
      </div>
    </button>
  );
}
