export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-2 border-line" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-indigo border-r-brand-purple" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
