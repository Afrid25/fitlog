import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import type { Workout } from "../../lib/fitlog";
import { useFitlog } from "../../context/FitlogContext";

type PlanWorkoutCardProps = { workout: Workout; saved?: boolean };

export default function PlanWorkoutCard({
  workout,
  saved = false,
}: PlanWorkoutCardProps) {
  const { doneIds, markAsDone, removeFromPlan, removeSaved } = useFitlog();
  const isDone = doneIds.includes(workout.id);
  const remove = () =>
    saved ? removeSaved(workout.id) : removeFromPlan(workout.id);

  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl border border-[var(--fitlog-line)] bg-[var(--fitlog-panel)] p-5 shadow-sm transition-shadow hover:shadow-lg sm:flex-row sm:items-center ${isDone ? "opacity-60" : ""}`}
    >
      <div className="relative h-24 w-full shrink-0 overflow-hidden bg-[var(--fitlog-soft)] sm:w-32">
        <img
          src={workout.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 2).map((group) => (
            <span
              key={group}
              className="text-[0.58rem] font-black uppercase tracking-[0.12em] text-[var(--fitlog-muted)]"
            >
              {group}
            </span>
          ))}
        </div>
        <h3
          className={`mt-2 font-display text-2xl uppercase ${isDone ? "line-through" : ""}`}
        >
          {workout.name}
        </h3>
        <p className="mt-1 truncate text-sm text-[var(--fitlog-muted)]">
          {workout.equipment}
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--fitlog-muted)]">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={13} />
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-1">
            <Flame size={13} />
            {workout.caloriesBurned} kcal
          </span>
          <span className="inline-flex items-center gap-1">
            <Star size={13} />
            {workout.rating}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:justify-end">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-lg border border-[var(--fitlog-line)] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.08em] hover:border-[var(--fitlog-ink)]"
        >
          View details
        </Link>
        {!saved && !isDone && (
          <button
            type="button"
            onClick={() => markAsDone(workout.id)}
            className="inline-flex items-center gap-1 rounded-lg bg-[var(--fitlog-lime)] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.08em] text-[var(--fitlog-deep)] disabled:cursor-default"
          >
            <Check size={14} />
            Mark as done
          </button>
        )}
        <button
          type="button"
          onClick={remove}
          aria-label={`Remove ${workout.name}`}
          className="grid size-9 place-items-center rounded-lg border border-[var(--fitlog-line)] hover:border-red-500 hover:text-red-500"
        >
          <X size={16} />
        </button>
      </div>
    </article>
  );
}
