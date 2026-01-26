import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type TooltipVariant = 'top-left' | 'top-center' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type TooltipSize = 'sm' | 'md' | 'lg';
export type TooltipStyle = 'default' | 'success' | 'custom';

interface TooltipProps {
  /** Tooltip position variant: top-left, top-center, top-center, left, right, bottom-left, bottom-center, bottom-right */
  variant?: TooltipVariant;
  /** Tooltip size: sm, md, lg */
  size?: TooltipSize;
  /** Tooltip style: default, success, custom (custom allows full styling control via content prop) */
  style?: TooltipStyle;
  /** Custom className for additional styling */
  className?: string;
  /** The content to show in the tooltip */
  content: React.ReactNode;
  /** The trigger element */
  children: React.ReactNode;
  /** Force tooltip to show (controlled mode) */
  forceShow?: boolean;
  /** Force tooltip to hide even on hover */
  forceHide?: boolean;
  /** Make wrapper take full width (useful for buttons in flex containers) */
  fullWidth?: boolean;
  /** Only show tooltip if content is truncated */
  showOnTruncateOnly?: boolean;
}

export function Tooltip({ variant = 'top-center', size = 'md', style: tooltipStyle = 'default', className = '', content, children, forceShow, forceHide, fullWidth, showOnTruncateOnly = false }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isTruncated, setIsTruncated] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Size mappings
  const sizeMap = {
    'sm': {
      padding: 'var(--spacing-8) var(--spacing-12)',
      fontSize: '12px'
    },
    'md': {
      padding: 'var(--spacing-12) var(--spacing-16)',
      fontSize: '14px'
    },
    'lg': {
      padding: 'var(--spacing-16) var(--spacing-20)',
      fontSize: '16px'
    }
  };

  const sizeConfig = sizeMap[size];

  useEffect(() => {
    if ((isVisible || forceShow) && !forceHide && triggerRef.current && tooltipRef.current) {
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
  }, [isVisible, forceShow, forceHide, variant]);

  // Check for truncation
  useEffect(() => {
    const checkTruncation = () => {
      if (triggerRef.current && showOnTruncateOnly) {
        // Find first child element with truncate class or text content
        const findTruncatedElement = (element: HTMLElement): boolean => {
          // Check if current element is truncated
          if (element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight) {
            return true;
          }
          // Check children recursively
          for (let child of Array.from(element.children) as HTMLElement[]) {
            if (findTruncatedElement(child)) {
              return true;
            }
          }
          return false;
        };
        
        setIsTruncated(findTruncatedElement(triggerRef.current));
      }
    };

    checkTruncation();
    
    // Recheck on window resize
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [showOnTruncateOnly]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        style={{ display: 'inline-block', width: fullWidth ? '100%' : 'auto' }}
      >
        {children}
      </div>
      
      {(isVisible || forceShow) && !forceHide && (showOnTruncateOnly ? isTruncated : true) && (
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed z-[9999] ${className}`}
            style={
              tooltipStyle === 'custom' 
                ? {
                    top: position.top,
                    left: position.left,
                    pointerEvents: 'none'
                  }
                : {
                    top: position.top,
                    left: position.left,
                    padding: sizeConfig.padding,
                    backgroundColor: tooltipStyle === 'success' ? 'var(--secondary-green)' : 'var(--black)',
                    color: 'var(--white)',
                    borderRadius: 'var(--radius-8)',
                    pointerEvents: 'none',
                    maxWidth: '300px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                    fontSize: sizeConfig.fontSize,
                    fontWeight: 'var(--font-weight-regular)',
                    lineHeight: '1.5'
                  }
            }
          >
            {content}
          </div>,
          document.body
        )
      )}
    </>
  );
}