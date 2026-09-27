import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-[var(--fitlog-ink)] px-4 py-8 text-[var(--fitlog-paper)] sm:px-6 lg:px-8" aria-labelledby="hero-title">
            <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-[#141619] overflow-hidden shadow-2xl">
                <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
                    
                    {/* Left Content */}
                    <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
                        <div className="max-w-xl">
                            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[var(--fitlog-lime)]">
                                Workout Library
                            </p>
                            
                            <h1 id="hero-title" className="font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-[-0.03em]">
                                Train with intent.<br />
                                <span className="text-[var(--fitlog-lime)]">Log every set.</span>
                            </h1>
                            
                            <p className="mt-6 max-w-md text-sm leading-6 text-[var(--fitlog-muted-light)] sm:text-base sm:leading-7">
                                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                            </p>
                            
                            <div className="mt-8 flex flex-wrap items-center gap-5">
                                <Link 
                                    href="#library" 
                                    className="group inline-flex items-center gap-3 bg-[var(--fitlog-lime)] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--fitlog-ink)] transition-transform hover:-translate-y-1 shadow-lg shadow-[var(--fitlog-lime)]/10"
                                >
                                    Browse workouts
                                    <ArrowDownRight size={18} strokeWidth={2.5} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Container (Figma Style) */}
                    <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-12">
                        <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[460px]">
                            <Image 
                                src="/assets/banner.png" 
                                alt="Athlete training with a barbell or machine in a gym" 
                                fill 
                                priority 
                                sizes="(max-width: 1024px) 100vw, 45vw" 
                                className="object-contain object-center" 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}