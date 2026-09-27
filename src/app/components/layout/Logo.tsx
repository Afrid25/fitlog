import Link from "next/link";
import { Dumbbell } from "lucide-react";

type LogoProps = {
    compact?: boolean;
    inverted?: boolean;
};

export default function Logo({ compact = false, inverted = false }: LogoProps) {
    return (
        <Link
            href="/"
            aria-label="FitLog home"
            className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${
                inverted ? "text-[var(--fitlog-paper)]" : "text-[var(--fitlog-ink)]"
            }`}
        >
            {/* Icon setup */}
            <span className="grid size-9 place-items-center rounded-full bg-[var(--fitlog-lime)] text-[var(--fitlog-deep)] shadow-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                <Dumbbell size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
            
            {/* Brand Text */}
            <span className={compact ? "sr-only" : "font-display text-lg font-bold tracking-[0.16em]"}>
                FITLOG
            </span>
        </Link>
    );
}