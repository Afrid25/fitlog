"use client";

import { useState } from "react";
import EmptyPlan from "../components/plan/EmptyPlan";
import PlanHeader from "../components/plan/PlanHeader";
import PlanMetrics from "../components/plan/PlanMetrics";
import PlanTabs from "../components/plan/PlanTabs";
import PlanWorkoutCard from "../components/plan/PlanWorkoutCard";
import SortDropdown, { type SortOption } from "../components/home/SortDropdown";
import { useFitlog } from "../context/FitlogContext";

export default function MyPlanPage() {
  const { plan, saved } = useFitlog();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sort, setSort] = useState<SortOption>("duration");
  const current = activeTab === "plan" ? plan : saved;
  const sorted = [...current].sort(
    (first, second) =>
      second[sort === "calories" ? "caloriesBurned" : sort] -
      first[sort === "calories" ? "caloriesBurned" : sort],
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <PlanHeader />
      <div className="mt-10">
        <PlanMetrics />
      </div>
      <div className="mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <PlanTabs activeTab={activeTab} onChange={setActiveTab} />
        <SortDropdown value={sort} onChange={setSort} />
      </div>
      <div className="mt-7 space-y-4">
        {sorted.length === 0 ? (
          <EmptyPlan saved={activeTab === "saved"} />
        ) : (
          sorted.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              saved={activeTab === "saved"}
            />
          ))
        )}
      </div>
    </main>
  );
}
