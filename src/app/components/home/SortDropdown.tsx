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
            <span className="relative inline-block">
                <select 
                    value={value} 
                    onChange={(event) => onChange(event.target.value as SortOption)} 
                    className="appearance-none border border-zinc-700 bg-[#18181b] py-3 pl-4 pr-10 text-xs font-bold uppercase tracking-[0.1em] text-white outline-none transition-colors hover:border-[#ccff00] rounded-xl cursor-pointer"
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