import { Clock3, Flame, Gauge, Star } from "lucide-react";
import type { ReactNode } from "react";
import type { Workout } from "../../lib/fitlog";

export default function WorkoutSpecs({ workout }: { workout: Workout }) {
  const specs: Array<[string, string, ReactNode]> = [
    ["Equipment", workout.equipment, <Gauge key="equipment" size={16} />],
    ["Difficulty", workout.difficulty, null],
    ["Sets / Reps", `${workout.sets} / ${workout.reps}`, null],
    [
      "Duration",
      `${workout.duration} min`,
      <Clock3 key="duration" size={16} />,
    ],
    [
      "Calories",
      `${workout.caloriesBurned} kcal`,
      <Flame key="calories" size={16} />,
    ],
    ["Rating", `${workout.rating} / 5`, <Star key="rating" size={16} />],
  ];

  return (
    <div className="mt-10 grid grid-cols-2 border-y border-[var(--fitlog-line)] sm:grid-cols-4">
      {specs.map(([label, value, icon]) => (
        <div
          key={label}
          className="border-b border-r border-[var(--fitlog-line)] px-3 py-4 sm:px-4"
        >
          <p className="flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[var(--fitlog-muted)]">
            {icon}
            {label}
          </p>
          <p className="mt-2 text-xs font-bold leading-4">{value}</p>
        </div>
      ))}
    </div>
  );
}
