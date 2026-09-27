import { Clock3, Dumbbell, Flame } from "lucide-react";
import { useFitlog } from "../../context/FitlogContext";

export default function PlanMetrics() {
  const { plan } = useFitlog();
  const metrics = [
    ["Exercises", plan.length, <Dumbbell key="exercises" size={18} />],
    [
      "Minutes",
      plan.reduce((total, item) => total + item.duration, 0),
      <Clock3 key="minutes" size={18} />,
    ],
    [
      "Calories",
      plan.reduce((total, item) => total + item.caloriesBurned, 0),
      <Flame key="calories" size={18} />,
    ],
  ] as const;
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {metrics.map(([label, value, icon]) => (
        <div
          key={label}
          className="border border-[var(--fitlog-line)] bg-[var(--fitlog-soft)] p-5"
        >
          <div className="flex items-center justify-between text-[var(--fitlog-muted)]">
            {icon}
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em]">
              {label}
            </span>
          </div>
          <p className="mt-5 font-display text-4xl">
            {value}
            {label === "Minutes" ? " min" : label === "Calories" ? " kcal" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
