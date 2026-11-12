export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder image: ${label}`}
      className={`flex items-center justify-center rounded-sm bg-gradient-to-br from-secondary to-accent text-xs uppercase tracking-[0.2em] text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}
