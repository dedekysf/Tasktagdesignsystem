import * as React from "react";
import { Switch } from "./ui/switch";

export interface ToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Toggle({
  checked = false,
  onCheckedChange,
  disabled = false,
  size = 'md',
  className = '',
}: ToggleProps) {
  const sizeStyles = {
    sm: 'h-[16px] w-[28px]',
    md: 'h-[20px] w-[36px]',
    lg: 'h-[24px] w-[44px]',
  };

  const thumbSizes = {
    sm: 'size-[12px]',
    md: 'size-[16px]',
    lg: 'size-[20px]',
  };

  const thumbTranslate = {
    sm: 'data-[state=checked]:translate-x-[14px]',
    md: 'data-[state=checked]:translate-x-[18px]',
    lg: 'data-[state=checked]:translate-x-[22px]',
  };

  return (
    <Switch
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={className}
      data-size={size}
    />
  );
}