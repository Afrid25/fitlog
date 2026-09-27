export default function PlanHeader() {
  return (
    <header className="border-b border-[var(--fitlog-line)] pb-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fitlog-muted)]">
        Your training log
      </p>
      <h1 className="mt-4 font-display text-6xl uppercase leading-none sm:text-8xl">
        My plan.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-6 text-[var(--fitlog-muted)]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </header>
  );
}
