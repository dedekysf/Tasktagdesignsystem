import { Wifi, BatteryFull, Signal } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="h-11 relative shrink-0 w-full bg-background flex items-center justify-between px-6 select-none">
      {/* Time */}
      <div className="text-[15px] font-semibold text-foreground tracking-tight">
        9:41
      </div>
      
      {/* Status icons */}
      <div className="flex items-center gap-1.5 text-foreground">
        <Signal className="w-4 h-4" strokeWidth={2.5} />
        <Wifi className="w-4 h-4" strokeWidth={2.5} />
        <div className="relative">
          <BatteryFull className="w-5 h-5 rotate-0" strokeWidth={2.5} />
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold pl-0.5">
            100
          </div>
        </div>
      </div>
    </div>
  );
}
