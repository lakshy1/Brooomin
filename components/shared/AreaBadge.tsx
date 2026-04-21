type AreaBadgeProps = {
  label: string;
};

export function AreaBadge({ label }: AreaBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/10 bg-white/80 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm">
      {label}
    </span>
  );
}
