"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";

function readCount(key: string) {
    if (typeof window === "undefined") return 0;

    try {
        const value = JSON.parse(window.localStorage.getItem(key) ?? "[]");
        return Array.isArray(value) ? value.length : 0;
    } catch {
        return 0;
    }
}

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [counts, setCounts] = useState({ plan: 0, saved: 0 });

    useEffect(() => {
        const updateCounts = () => {
            setCounts({
                plan: readCount(PLAN_STORAGE_KEY),
                saved: readCount(SAVED_STORAGE_KEY),
            });
        };

        updateCounts();
        window.addEventListener("storage", updateCounts);
        window.addEventListener("fitlog:counts-updated", updateCounts);
        return () => {
            window.removeEventListener("storage", updateCounts);
            window.removeEventListener("fitlog:counts-updated", updateCounts);
        };
    }, []);

    const links = [
        { href: "/", label: "Workout" },
        { href: "/my-plan", label: "My Plan" },
    ];

    return (
        <header className="sticky top-0 z-40 border-b border-[var(--fitlog-line)] bg-[var(--fitlog-paper)]/95 backdrop-blur">
            <nav className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10" aria-label="Main navigation">
                <Logo />

                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                                    isActive
                                        ? "bg-[var(--fitlog-ink)] text-[var(--fitlog-paper)]"
                                        : "text-[var(--fitlog-muted)] hover:text-[var(--fitlog-ink)]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                    <Link href="/my-plan" className="fitlog-counter fitlog-counter--filled" aria-label={`${counts.plan} items in today's plan`}>
                        <span>Plan</span><strong>{counts.plan}</strong>
                    </Link>
                    <Link href="/my-plan" className="fitlog-counter" aria-label={`${counts.saved} saved workouts`}>
                        <span>Saved</span><strong>{counts.saved}</strong>
                    </Link>
                </div>

                <button
                    type="button"
                    className="grid size-10 place-items-center rounded-full border border-[var(--fitlog-line)] md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-[var(--fitlog-line)] px-5 pb-5 pt-3 md:hidden">
                    <div className="flex flex-col gap-2">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-[var(--fitlog-soft)]">
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-2 flex gap-2">
                            <Link href="/my-plan" onClick={() => setIsOpen(false)} className="fitlog-counter fitlog-counter--filled flex-1 justify-center">
                                <span>Plan</span><strong>{counts.plan}</strong>
                            </Link>
                            <Link href="/my-plan" onClick={() => setIsOpen(false)} className="fitlog-counter flex-1 justify-center">
                                <span>Saved</span><strong>{counts.saved}</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}