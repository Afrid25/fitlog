"use client";

import { useEffect, useState } from "react";
import SortDropdown, { type SortOption } from "./SortDropdown";
import WorkoutGrid from "./WorkoutGrid";
import { getWorkouts, type Workout } from "../../lib/fitlog";

export default function WorkoutLibrary() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [sort, setSort] = useState<SortOption>("duration");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getWorkouts()
            .then(setWorkouts)
            .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "Unable to load workouts."))
            .finally(() => setIsLoading(false));
    }, []);

    const sortedWorkouts = [...workouts].sort((first, second) => second[sort === "calories" ? "caloriesBurned" : sort] - first[sort === "calories" ? "caloriesBurned" : sort]);

    return (
        <section id="library" className="mx-auto w-full max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 lg:px-10" aria-labelledby="library-title">
            
            <div className="mt-4 flex flex-col justify-between gap-5 border-b border-[var(--fitlog-line)] pb-8 sm:flex-row sm:items-end">
                <div>
                    <h2 id="library-title" className="font-display text-5xl uppercase leading-none sm:text-7xl">The library.</h2>
                    <p className="mt-4 text-sm text-[var(--fitlog-muted)]">Twelve lifts covering every major muscle group.</p>
                </div>
                <SortDropdown value={sort} onChange={setSort} />
            </div>
            <div className="pt-8">
                {isLoading && <p className="py-16 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--fitlog-muted)]">Loading workouts...</p>}
                {!isLoading && error && <p role="alert" className="border border-red-200 bg-red-50 p-5 text-sm text-red-800">{error}</p>}
                {!isLoading && !error && <WorkoutGrid workouts={sortedWorkouts} />}
            </div>
        </section>
    );
}