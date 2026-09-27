export default function Loading() {
  return (
    <main
      className="mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
      role="status"
      aria-live="polite"
    >
      <div className="animate-pulse border-b border-[var(--fitlog-line)] pb-8">
        <div className="h-3 w-28 rounded bg-[var(--fitlog-soft)]" />
        <div className="mt-5 h-16 w-52 rounded bg-[var(--fitlog-soft)]" />
        <div className="mt-4 h-4 w-72 rounded bg-[var(--fitlog-soft)]" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="h-28 animate-pulse rounded-xl bg-[var(--fitlog-soft)]" />
        <div className="h-28 animate-pulse rounded-xl bg-[var(--fitlog-soft)]" />
        <div className="h-28 animate-pulse rounded-xl bg-[var(--fitlog-soft)]" />
      </div>
      <div className="flex items-center justify-center gap-3 py-10 text-xs font-bold uppercase tracking-[0.16em] text-[var(--fitlog-muted)]">
        <span
          className="size-4 animate-spin rounded-full border-2 border-[var(--fitlog-line)] border-t-[var(--fitlog-lime)]"
          aria-hidden="true"
        />{" "}
        Loading your plan...
      </div>
    </main>
  );
}
