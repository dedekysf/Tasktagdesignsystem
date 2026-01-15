import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { ReactNode } from "react";

interface MainTooltipProps {
  children: ReactNode;
  content: ReactNode;
  variant?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  style?: 'default' | 'custom';
  forceShow?: boolean;
  forceHide?: boolean;
}

export function MainTooltip({
  children,
  content,
  variant = 'top-center',
  size = 'sm',
  style = 'default',
  forceShow = false,
  forceHide = false,
}: MainTooltipProps) {
  // Map variant to shadcn tooltip side
  const sideMap: Record<string, "top" | "bottom" | "left" | "right"> = {
    'top-left': 'top',
    'top-center': 'top',
    'top-right': 'top',
    'bottom-left': 'bottom',
    'bottom-center': 'bottom',
    'bottom-right': 'bottom',
    'left': 'left',
    'right': 'right',
  };

  const alignMap: Record<string, "start" | "center" | "end"> = {
    'top-left': 'start',
    'top-center': 'center',
    'top-right': 'end',
    'bottom-left': 'start',
    'bottom-center': 'center',
    'bottom-right': 'end',
    'left': 'center',
    'right': 'center',
  };

  const side = sideMap[variant] || 'top';
  const align = alignMap[variant] || 'center';

  // If forceHide is true, don't show tooltip
  if (forceHide) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={forceShow ? true : undefined}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side={side} 
          align={align}
          className="border-0 p-[12px] rounded-[8px]"
          style={{ 
            backgroundColor: style === 'custom' ? 'transparent' : 'var(--grey-07)',
            border: 'none'
          }}
        >
          <span 
            style={{ 
              fontWeight: 'var(--font-weight-regular)',
              fontSize: 'var(--text-label)',
              color: 'white'
            }}
          >
            {content}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
