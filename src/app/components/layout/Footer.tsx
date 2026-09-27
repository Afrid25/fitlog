import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-[var(--fitlog-line)] bg-[var(--fitlog-ink)] text-[var(--fitlog-paper)]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                <Logo inverted />
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--fitlog-muted-light)]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}