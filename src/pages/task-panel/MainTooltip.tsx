import { Tooltip } from "../../components/Tooltip";
import { ReactNode } from "react";

interface MainTooltipProps {
  children: ReactNode;
  content: ReactNode;
  variant?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  style?: 'default' | 'success' | 'custom';
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
  return (
    <Tooltip
      variant={variant}
      size={size}
      style={style}
      content={content}
      forceShow={forceShow}
      forceHide={forceHide}
    >
      {children}
    </Tooltip>
  );
}