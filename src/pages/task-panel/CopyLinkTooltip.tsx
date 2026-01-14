import { useEffect, useState } from 'react';
import { CircleCheckBig } from 'lucide-react';

interface CopyLinkTooltipProps {
  isVisible: boolean;
  buttonRef: React.RefObject<HTMLElement>;
  onHide: () => void;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

export function CopyLinkTooltip({ isVisible, buttonRef, onHide, side = 'top', align = 'end' }: CopyLinkTooltipProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isVisible && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Tooltip dimensions
      const tooltipWidth = 120;
      const tooltipHeight = 40;
      const offset = 8;
      
      // Calculate position based on side and align
      let top = 0;
      let left = 0;

      // Calculate vertical position
      if (side === 'bottom') {
        top = rect.bottom + offset;
      } else if (side === 'top') {
        top = rect.top - tooltipHeight - offset;
      }

      // Calculate horizontal position
      if (align === 'end') {
        left = rect.right - tooltipWidth;
      } else if (align === 'start') {
        left = rect.left;
      } else {
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
      }

      setPosition({ top, left });

      // Auto hide after 2 seconds
      const timer = setTimeout(() => {
        onHide();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, buttonRef, onHide, side, align]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed z-[60]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s',
      }}
    >
      <div 
        style={{
          backgroundColor: 'var(--white)',
          border: '1px solid var(--grey-03)',
          borderRadius: 'var(--radius-4)',
          padding: 'var(--spacing-8) var(--spacing-12)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.05)',
          minWidth: '120px'
        }}
      >
        <CircleCheckBig 
          size={16}
          color="var(--secondary-green)"
          strokeWidth={2}
        />
        <p 
          style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '14px', 
            lineHeight: '16px',
            margin: 0,
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-family-base)'
          }}
        >
          Link copied!
        </p>
      </div>
    </div>
  );
}