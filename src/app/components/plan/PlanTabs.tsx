"use client";

type PlanTab = "plan" | "saved";
type PlanTabsProps = { activeTab: PlanTab; onChange: (tab: PlanTab) => void };

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
  return (
    <div className="inline-flex w-fit gap-1 rounded-full border border-[var(--fitlog-line)] bg-[var(--fitlog-soft)] p-1">
      <button
        type="button"
        onClick={() => onChange("plan")}
        className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] ${activeTab === "plan" ? "bg-[var(--fitlog-ink)] text-[var(--fitlog-paper)]" : "text-[var(--fitlog-muted)]"}`}
      >
        Today&apos;s Plan
      </button>
      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] ${activeTab === "saved" ? "bg-[var(--fitlog-ink)] text-[var(--fitlog-paper)]" : "text-[var(--fitlog-muted)]"}`}
      >
        Saved
      </button>
    </div>
  );
}
