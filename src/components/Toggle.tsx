import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch@1.1.3";
import { cn } from "./ui/utils";

export interface ToggleProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  size?: 'sm' | 'md' | 'lg';
}

export function Toggle({
  checked,
  onCheckedChange,
  disabled,
  size = 'md',
  className,
  ...props
}: ToggleProps) {
  const rootSizeClasses = {
    sm: 'h-[16px] w-[28px]',
    md: 'h-[20px] w-[36px]',
    lg: 'h-[24px] w-[44px]',
  };

  const thumbSizeClasses = {
    sm: 'size-[12px]',
    md: 'size-[16px]',
    lg: 'size-[20px]',
  };

  const thumbTranslateClasses = {
    sm: 'data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-[2px]',
    md: 'data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-[2px]',
    lg: 'data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[2px]',
  };

  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-[var(--primary)]",
        "data-[state=unchecked]:bg-[var(--grey-03)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2",
        rootSizeClasses[size],
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-white ring-0 transition-transform shadow-sm",
          thumbSizeClasses[size],
          thumbTranslateClasses[size]
        )}
      />
    </SwitchPrimitive.Root>
  );
}
