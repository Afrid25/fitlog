"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
    return (
        <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--fitlog-muted)]">
            Sort by
            <span className="relative">
                <select value={value} onChange={(event) => onChange(event.target.value as SortOption)} className="appearance-none border border-[var(--fitlog-line)] bg-transparent py-3 pl-4 pr-10 text-xs font-bold uppercase tracking-[0.1em] text-[var(--fitlog-ink)] outline-none transition-colors hover:border-[var(--fitlog-ink)]">
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
                <ChevronDown size={15} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
            </span>
        </label>
    );
}