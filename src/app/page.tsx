import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="library" className="mx-auto min-h-[360px] w-full max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 lg:px-10" aria-labelledby="library-title">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fitlog-muted)]">The library</p>
        <div className="mt-4 flex flex-col justify-between gap-5 border-b border-[var(--fitlog-line)] pb-8 sm:flex-row sm:items-end">
          <h2 id="library-title" className="font-display text-5xl uppercase leading-none sm:text-7xl">Choose your work.</h2>
          <p className="max-w-xs text-sm leading-6 text-[var(--fitlog-muted)]">Twelve lifts covering every major muscle group.</p>
        </div>
        <p className="py-20 text-sm uppercase tracking-[0.14em] text-[var(--fitlog-muted)]">Workout library loading next.</p>
      </section>
    </div>
  );
}
