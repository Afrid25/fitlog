import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="footer footer-center mt-auto border-t border-[var(--fitlog-line)] bg-[var(--fitlog-ink)] p-6 text-[var(--fitlog-paper)] sm:p-8 lg:px-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* left side */}
                <div>
                    <Logo inverted />
                    <p className="mt-3 text-xs text-[var(--fitlog-muted-light)]">Train with intent. Log every set.</p>
                </div>
                {/* right side */}
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--fitlog-muted-light)]">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
}