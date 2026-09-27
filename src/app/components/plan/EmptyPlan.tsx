import Link from "next/link";

export default function EmptyPlan({ saved = false }: { saved?: boolean }) {
  return (
    <div className="border border-dashed border-[var(--fitlog-line)] px-6 py-16 text-center">
      <p className="font-display text-4xl uppercase">Nothing here yet.</p>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[var(--fitlog-muted)]">
        {saved
          ? "Save a workout from the library and keep it ready for later."
          : "Browse the library and add a lift to get today moving."}
      </p>
      <Link
        href="/#library"
        className="mt-7 inline-flex bg-[var(--fitlog-lime)] px-5 py-3 text-xs font-black uppercase tracking-[0.12em]"
      >
        Go to workouts
      </Link>
    </div>
  );
}
