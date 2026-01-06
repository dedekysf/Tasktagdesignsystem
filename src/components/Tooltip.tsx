import { useState, useRef, useEffect } from 'react';

export type TooltipVariant = 'top-left' | 'top-center' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface TooltipProps {
  /** Tooltip position variant: top-left, top-center, top-right, left, right, bottom-left, bottom-center, bottom-right */
  variant?: TooltipVariant;
  /** Custom className for additional styling */
  className?: string;
  /** The content to show in the tooltip */
  content: React.ReactNode;
  /** The trigger element */
  children: React.ReactNode;
}

export function Tooltip({ variant = 'top-center', className = '', content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (variant) {
        case 'top-left':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left;
          break;
        case 'top-center':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'top-right':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.right - tooltipRect.width;
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + 8;
          break;
        case 'bottom-left':
          top = triggerRect.bottom + 8;
          left = triggerRect.left;
          break;
        case 'bottom-center':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom-right':
          top = triggerRect.bottom + 8;
          left = triggerRect.right - tooltipRect.width;
          break;
      }

      setPosition({ top, left });
    }
  }, [isVisible, variant]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 ${className}`}
          style={{
            top: position.top,
            left: position.left,
            padding: 'var(--spacing-8) var(--spacing-12)',
            backgroundColor: 'var(--black)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-8)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            fontSize: '12px',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: '1.5'
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}