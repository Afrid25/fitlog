import type { Workout } from "../../lib/fitlog";

export default function WorkoutSpecs({ workout }: { workout: Workout }) {
  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#18181b] divide-y divide-zinc-800/80">
      {specs.map((spec, index) => (
        <div key={index} className="flex items-center justify-between px-5 py-3 text-xs sm:text-sm">
          <span className="font-bold uppercase tracking-wider text-zinc-400">
            {spec.label}
          </span>
          <span className="font-semibold text-white">
            {spec.value}
          </span>
        </div>
      ))}
    </div> );
}