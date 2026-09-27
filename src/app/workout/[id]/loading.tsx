export default function Loading() {
  return (
    <main
      className="mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10 lg:py-16"
      role="status"
      aria-live="polite"
    >
      <div className="h-3 w-32 animate-pulse rounded bg-[var(--fitlog-soft)]" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="aspect-[4/3] animate-pulse rounded-2xl bg-[var(--fitlog-soft)] lg:min-h-[620px]" />
        <div className="flex flex-col justify-center animate-pulse">
          <div className="h-4 w-32 rounded bg-[var(--fitlog-soft)]" />
          <div className="mt-6 h-20 w-3/4 rounded bg-[var(--fitlog-soft)]" />
          <div className="mt-6 h-16 w-full rounded bg-[var(--fitlog-soft)]" />
          <div className="mt-10 grid grid-cols-2 gap-px bg-[var(--fitlog-line)] sm:grid-cols-4">
            <div className="h-20 bg-[var(--fitlog-panel)]" />
            <div className="h-20 bg-[var(--fitlog-panel)]" />
            <div className="h-20 bg-[var(--fitlog-panel)]" />
            <div className="h-20 bg-[var(--fitlog-panel)]" />
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[var(--fitlog-muted)]">
            Loading workout...
          </p>
        </div>
      </div>
    </main>
  );
}
