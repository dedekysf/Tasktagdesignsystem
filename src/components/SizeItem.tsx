interface SizeItemProps {
  name: string;
  cssVar: string;
}

export function SizeItem({ name, cssVar }: SizeItemProps) {
  const sizeValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();

  return (
    <div className="typography-card">
      <div className="flex items-center gap-4">
        {/* Visual representation */}
        <div
          style={{
            width: `var(${cssVar})`,
            height: `var(${cssVar})`,
            backgroundColor: 'var(--secondary-green)',
            borderRadius: 'var(--radius-8)',
            flexShrink: 0
          }}
        />
        {/* Text information */}
        <div className="flex-1">
          <p style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-4)' }}>
            {name}
          </p>
          <p className="text-web-metadata-primary text-metadata">
            {sizeValue}
          </p>
        </div>
      </div>
    </div>
  );
}
