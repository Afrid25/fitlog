import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "../../lib/fitlog";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card group overflow-hidden rounded-2xl border border-white/10 bg-[#141619] text-[var(--fitlog-paper)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--fitlog-lime)]/50 hover:shadow-xl shadow-black/40"
    >
      {/* Workout Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1c1f24]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Body / Details */}
      <div className="card-body p-5">
        {/* Muscle Group Badges (Placed above title as shown in your screenshot) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {workout.muscleGroups.slice(0, 2).map((group) => (
            <span
              key={group}
              className="bg-[var(--fitlog-lime)] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[var(--fitlog-deep)] rounded-md"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl uppercase tracking-wide leading-tight group-hover:text-[var(--fitlog-lime)] transition-colors">
          {workout.name}
        </h3>
        <p className="truncate text-xs text-[var(--fitlog-muted-light)] mt-1">
          {workout.equipment}
        </p>

        {/* Footer Meta (Time, Calories, Rating) */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--fitlog-muted-light)]">
          <span className="inline-flex items-center gap-1.5">
            <Clock3
              size={14}
              className="text-[var(--fitlog-paper)]"
              aria-hidden="true"
            />
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Flame
              size={14}
              className="text-[var(--fitlog-paper)]"
              aria-hidden="true"
            />
            {workout.caloriesBurned} kcal
          </span>
          <span className="inline-flex items-center gap-1.5 text-[var(--fitlog-paper)]">
            <Star
              size={14}
              aria-hidden="true"
              className="fill-[var(--fitlog-paper)] text-[var(--fitlog-paper)]"
            />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
