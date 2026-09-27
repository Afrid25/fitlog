export default function WorkoutInstructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <section aria-labelledby="instructions-title">
      <h2
        id="instructions-title"
        className="mt-10 text-xs font-black uppercase tracking-[0.2em]"
      >
        Instructions
      </h2>
      <ol className="mt-5 space-y-4">
        {instructions.map((instruction, index) => (
          <li
            key={instruction}
            className="flex items-start gap-4 text-sm leading-6 text-[var(--fitlog-muted)]"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--fitlog-soft)] text-xs font-black text-[var(--fitlog-ink)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{instruction}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
