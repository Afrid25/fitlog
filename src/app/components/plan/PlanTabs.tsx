"use client";

type PlanTab = "plan" | "saved";
type PlanTabsProps = { activeTab: PlanTab; onChange: (tab: PlanTab) => void };

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
  return (
    <div className="inline-flex w-fit gap-1 rounded-full border border-[var(--fitlog-line)] bg-[var(--fitlog-soft)] p-1">
      <button
        type="button"
        onClick={() => onChange("plan")}
        className={`rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] transition-all ${activeTab === "plan" ? "bg-[var(--fitlog-lime)] text-[var(--fitlog-deep)] shadow-md" : "border border-[var(--fitlog-line)] bg-[var(--fitlog-panel)] text-[var(--fitlog-muted)] hover:text-[var(--fitlog-paper)]"}`}
      >
        Today&apos;s Plan
      </button>
      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] transition-all ${activeTab === "saved" ? "bg-[var(--fitlog-lime)] text-[var(--fitlog-deep)] shadow-md" : "border border-[var(--fitlog-line)] bg-[var(--fitlog-panel)] text-[var(--fitlog-muted)] hover:text-[var(--fitlog-paper)]"}`}
      >
        Saved
      </button>
    </div>
  );
}
