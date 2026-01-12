export function DropIndicator() {
  return (
    <div className="relative w-full h-[11px] pointer-events-none flex items-center">
      {/* Circle at the start */}
      <div className="absolute left-0 w-[10.67px] h-[10.67px] rounded-full bg-[var(--secondary-green)] shrink-0" />
      {/* Line */}
      <div className="absolute left-[10.67px] right-0 h-[2px] bg-[var(--secondary-green)]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
}
