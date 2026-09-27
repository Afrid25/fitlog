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
    <main className="min-h-screen bg-[#111111] text-white flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Back Link */}
        <Link
          href="/#library"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={15} aria-hidden="true" /> Back to library
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative w-full h-[720px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-5">
            {/* Workout Name */}
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              {workout.name}
            </h1>
            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              {workout.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="bg-[#ccff00] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-zinc-950 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specs Table */}
            <WorkoutSpecs workout={workout} />

            {/* Instructions List */}
            <WorkoutInstructions instructions={workout.instructions} />

            {/* Action Buttons */}
            <div className="pt-2">
              <WorkoutAction workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
