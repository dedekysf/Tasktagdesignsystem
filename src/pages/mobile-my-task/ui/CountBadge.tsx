interface CountBadgeProps {
  count: number;
}

export function CountBadge({ count }: CountBadgeProps) {
  return (
    <div className="flex items-center justify-center bg-primary rounded-full min-w-[20px] h-5 px-1.5">
      <p className="text-[11px] font-semibold text-primary-foreground leading-none">
        {count}
      </p>
    </div>
  );
}
