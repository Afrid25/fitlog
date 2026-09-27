import Image from "next/image";
import Link from "next/link";
import type { Workout } from "../../lib/fitlog";
import WorkoutAction from "./WorkoutAction";
import WorkoutInstructions from "./WorkoutInstructions";
import WorkoutSpecs from "./WorkoutSpecs";
import { ArrowLeft } from "lucide-react";

type WorkoutDetailsProps = { workout: Workout };

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
      <Link
        href="/#library"
        className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--fitlog-muted)] hover:text-[var(--fitlog-ink)]"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Back to library
      </Link>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--fitlog-soft)] lg:aspect-auto lg:min-h-[620px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-[var(--fitlog-lime)] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em]"
              >
                {group}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
            {workout.name}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fitlog-muted)]">
            {workout.description}
          </p>
          <WorkoutSpecs workout={workout} />
          <WorkoutInstructions instructions={workout.instructions} />
          <div className="mt-10">
            <WorkoutAction workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}
