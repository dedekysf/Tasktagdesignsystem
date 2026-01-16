import { ReactNode, useState, useRef, useEffect } from 'react';
import { usePaywall } from '../contexts/PaywallContext';

interface UpgradeTooltipProps {
  children: ReactNode;
  originalTooltip?: ReactNode;
  enabled?: boolean;
}

export function UpgradeTooltip({ children, originalTooltip, enabled = true }: UpgradeTooltipProps) {
  const { isExpiredMode } = usePaywall();
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 40,
        left: rect.left + rect.width / 2
      });
    }
  }, [isHovered]);

  if (!isExpiredMode || !enabled) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        ref={targetRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ display: 'inline-flex' }}
      >
        {children}
      </div>
      
      {isHovered && (
        <div
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--tooltip-bg)',
              color: 'var(--tooltip-text)',
              padding: '8px 12px',
              borderRadius: 'var(--radius-6)',
              whiteSpace: 'nowrap',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            className="text-web-label"
          >
            Upgrade to unlock team features
          </div>
        </div>
      )}
    </>
  );
}
