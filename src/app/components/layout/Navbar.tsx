"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useFitlog } from "../../context/FitlogContext";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { plan, saved } = useFitlog();

  const links = [
    { href: "/", label: "Workout" },
    { href: "/my-plan", label: "My Plan" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--fitlog-line)]  backdrop-blur">
      <div className="navbar mx-auto min-h-20 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Navbar Start / Logo from the home page */}
        <div className="navbar-start">
          <Logo />
        </div>

        {/* Navbar Center - Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                    isActive
                      ? "bg-[var(--fitlog-lime)] text-[var(--fitlog-deep)]"
                      : "text-[var(--fitlog-muted)] hover:text-[var(--fitlog-ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navbar End - Badges & Mobile Menu Toggle */}
        <div className="navbar-end gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 bg-[#ccff00] text-zinc-950 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
              aria-label={`${plan.length} items in today's plan`}
            >
              <span>Plan</span>
              <strong className="bg-zinc-950 text-[#ccff00] px-1.5 py-0.5 rounded text-[10px]">
                {plan.length}
              </strong>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 rounded-lg border border-[var(--fitlog-line)] bg-transparent px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--fitlog-paper)] transition-all hover:border-[var(--fitlog-muted)] hover:bg-[var(--fitlog-panel)]"
              aria-label={`${saved.length} saved workouts`}
            >
              <span>Saved</span>
              <strong className="rounded bg-[var(--fitlog-panel)] px-1.5 py-0.5 text-[10px] text-[var(--fitlog-paper)]">
                {saved.length}
              </strong>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-ghost btn-circle border border-[var(--fitlog-line)] md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu responsive */}
      {isOpen && (
        <div className="border-t border-[var(--fitlog-line)] bg-[var(--fitlog-panel)] px-5 pb-5 pt-3 md:hidden shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-[var(--fitlog-soft)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="fitlog-counter fitlog-counter--filled flex-1 justify-center py-2"
              >
                <span>Plan</span>
                <strong>{plan.length}</strong>
              </Link>
              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="fitlog-counter flex-1 justify-center py-2"
              >
                <span>Saved</span>
                <strong>{saved.length}</strong>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
