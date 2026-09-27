"use client";

import { Bookmark, Plus } from "lucide-react";
import type { Workout } from "../../lib/fitlog";
import { useFitlog } from "../../context/FitlogContext";

export default function WorkoutAction({ workout }: { workout: Workout }) {
  const { addToPlan, saveWorkout } = useFitlog();

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="inline-flex items-center justify-center gap-2 bg-[var(--fitlog-lime)] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--fitlog-ink)] transition-transform hover:-translate-y-0.5"
      >
        <Plus size={17} strokeWidth={2.5} aria-hidden="true" /> Add to
        today&apos;s plan
      </button>
      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="inline-flex items-center justify-center gap-2 border border-[var(--fitlog-ink)] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--fitlog-ink)] transition-colors hover:bg-[var(--fitlog-ink)] hover:text-[var(--fitlog-paper)]"
      >
        <Bookmark size={17} aria-hidden="true" /> Save for later
      </button>
    </div>
  );
}
