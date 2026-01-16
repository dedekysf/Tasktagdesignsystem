import { Check, X, AlertCircle, Info, ArrowRight, ListChecks } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  variant?: "title-only" | "title-caption" | "title-arrow" | "title-caption-arrow";
  type?: "success" | "error" | "warning" | "info" | "checklist";
  title: string;
  caption?: string;
  duration?: number;
  className?: string;
}

export function Toast({ 
  variant = "title-only",
  type = "success", 
  title, 
  caption,
  duration = 3000,
  className = "" 
}: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      
      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [duration]);

  const typeConfig = {
    success: {
      icon: Check,
      color: "#00d9a5"
    },
    error: {
      icon: X,
      color: "#FF6B6B"
    },
    warning: {
      icon: AlertCircle,
      color: "#FFB020"
    },
    info: {
      icon: Info,
      color: "#4A9EFF"
    },
    checklist: {
      icon: ListChecks,
      color: "#00d9a5"
    }
  };

  const { icon: Icon, color } = typeConfig[type];
  
  const showCaption = variant === "title-caption" || variant === "title-caption-arrow";
  const showArrow = variant === "title-arrow" || variant === "title-caption-arrow";
  
  return (
    <div 
      className={`inline-flex flex-col bg-[var(--text-primary)] rounded-[var(--radius-lg)] overflow-hidden ${className}`}
      style={{ boxShadow: 'var(--elevation-lg)' }}
    >
      {/* Content */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        {/* Icon */}
        <div className="shrink-0">
          <Icon className="size-5 text-white" strokeWidth={2} />
        </div>
        
        {/* Text */}
        <div className="min-w-0">
          <div className="text-white" style={{ fontFamily: 'var(--font-family-base)' }}>
            <div style={{ 
              fontSize: 'var(--text-label)', 
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: '1.5',
              whiteSpace: 'nowrap'
            }}>
              {title}
            </div>
            {showCaption && caption && (
              <div 
                className="text-[var(--grey-04)]"
                style={{ 
                  fontSize: 'var(--text-caption)', 
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: '1.4',
                  marginTop: '2px',
                  whiteSpace: 'nowrap'
                }}
              >
                {caption}
              </div>
            )}
          </div>
        </div>

        {/* Arrow Icon */}
        {showArrow && (
          <div className="shrink-0">
            <ArrowRight className="size-5 text-white" strokeWidth={2} />
          </div>
        )}
      </div>
      
      {/* Progress bar at bottom */}
      <div className="h-1 w-full bg-[var(--light-mint)]">
        <div 
          className="h-full transition-all duration-75 ease-linear"
          style={{ 
            backgroundColor: 'var(--secondary-green)',
            width: `${progress}%`
          }}
        />
      </div>
    </div>
  );
}