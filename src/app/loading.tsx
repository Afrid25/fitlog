export default function Loading() {
  return (
    <div
      className="flex min-h-[75vh] flex-col items-center justify-center gap-5 px-5 text-center"
      role="status"
      aria-live="polite"
    >
      <span
        className="relative grid size-14 place-items-center rounded-full border-4 border-[var(--fitlog-line)] border-t-[var(--fitlog-lime)] motion-safe:animate-spin"
        aria-hidden="true"
      />
      <div>
        <p className="font-display text-3xl uppercase">Loading workouts</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--fitlog-muted)]">
          Preparing your next session...
        </p>
      </div>
    </div>
  );
}
