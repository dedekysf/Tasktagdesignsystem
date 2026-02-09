import { ReactNode } from 'react';

interface MobileFrameProps {
  children?: ReactNode;
  className?: string;
}

export function MobileFrame({ children, className = '' }: MobileFrameProps) {
  return (
    <div className="h-full w-full flex items-center justify-center" style={{ backgroundColor: 'var(--grey-02)' }}>
      <style>{`
        .responsive-mobile-frame {
          height: 96vh;
        }
        @media (min-height: 800px) {
          .responsive-mobile-frame {
            height: 812px;
          }
        }
      `}</style>
      {/* Mobile View - Max height 812px, or 96vh if screen < 800px */}
      <div 
        className={`responsive-mobile-frame relative overflow-hidden flex flex-col w-[375px] shrink-0 ${className}`}
        style={{
          backgroundColor: 'var(--background)',
          borderRadius: 'var(--radius-24)',
          boxShadow: '0px 5px 25px 0px rgba(0,0,0,0.05)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
