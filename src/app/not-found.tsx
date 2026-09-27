import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center px-5 text-center sm:px-8">
      <div className="w-full max-w-md rounded-2xl border border-[var(--fitlog-line)] bg-[var(--fitlog-paper)] p-8 shadow-sm">
        <span className="font-display text-6xl tracking-[0.08em] text-[var(--fitlog-lime)]">
          404
        </span>
        <h1 className="mt-4 font-display text-3xl uppercase">
          Workout not found
        </h1>
        <p className="mb-6 mt-3 text-sm leading-6 text-[var(--fitlog-muted)]">
          The workout or page you are looking for doesn&apos;t exist, has been
          removed, or the link is broken.
        </p>
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center bg-[var(--fitlog-lime)] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-[var(--fitlog-ink)] transition-transform hover:-translate-y-0.5"
        >
          Back to workout library
        </Link>
      </div>
    </div>
  );
}
