"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
    return (
        <label className="flex w-full items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--fitlog-muted)] sm:w-auto sm:justify-start">
            Sort by
            <span className="relative inline-block">
                <select 
                    aria-label="Sort workouts by"
                    value={value} 
                    onChange={(event) => onChange(event.target.value as SortOption)} 
                    className="w-44 cursor-pointer appearance-none rounded-xl border border-zinc-700 bg-[#18181b] py-3 pl-4 pr-10 text-xs font-bold uppercase tracking-[0.1em] text-white outline-none transition-colors hover:border-[#ccff00] focus:border-[#ccff00] sm:w-auto"
                >
                    <option value="duration" className="bg-[#18181b] text-white">Duration</option>
                    <option value="calories" className="bg-[#18181b] text-white">Calories</option>
                    <option value="rating" className="bg-[#18181b] text-white">Rating</option>
                </select>
                <ChevronDown size={15} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            </span>
        </label>
    );
}