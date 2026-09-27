"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Workout } from "../lib/fitlog";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const DONE_KEY = "fitlog-done";

type FitlogContextValue = {
    plan: Workout[];
    saved: Workout[];
    doneIds: number[];
    toast: string;
    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeSaved: (id: number) => void;
    markAsDone: (id: number) => void;
};

const FitlogContext = createContext<FitlogContextValue | null>(null);

function readWorkouts(key: string): Workout[] {
    try {
        const value = JSON.parse(window.localStorage.getItem(key) ?? "[]");
        return Array.isArray(value) ? value as Workout[] : [];
    } catch {
        return [];
    }
}

export function FitlogProvider({ children }: { children: ReactNode }) {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const [toast, setToast] = useState("");
    const [doneIds, setDoneIds] = useState<number[]>([]);

    useEffect(() => {
        setPlan(readWorkouts(PLAN_KEY));
        setSaved(readWorkouts(SAVED_KEY));
        try {
            const storedDone = JSON.parse(window.localStorage.getItem(DONE_KEY) ?? "[]");
            setDoneIds(Array.isArray(storedDone) ? storedDone : []);
        } catch {
            setDoneIds([]);
        }
    }, []);

    useEffect(() => {
        if (!toast) return;
        const timeout = window.setTimeout(() => setToast(""), 2800);
        return () => window.clearTimeout(timeout);
    }, [toast]);

    const value = useMemo<FitlogContextValue>(() => ({
        plan,
        saved,
        doneIds,
        toast,
        addToPlan: (workout) => {
            if (plan.some((item) => item.id === workout.id)) return setToast("Already in today's plan");
            if (plan.length >= 5) return setToast("Today's plan is full");
            const nextPlan = [...plan, workout];
            setPlan(nextPlan);
            window.localStorage.setItem(PLAN_KEY, JSON.stringify(nextPlan));
            window.dispatchEvent(new Event("fitlog:counts-updated"));
            setToast("Added to today's plan");
        },
        saveWorkout: (workout) => {
            if (saved.some((item) => item.id === workout.id)) return setToast("Already saved for later");
            const nextSaved = [...saved, workout];
            setSaved(nextSaved);
            window.localStorage.setItem(SAVED_KEY, JSON.stringify(nextSaved));
            window.dispatchEvent(new Event("fitlog:counts-updated"));
            setToast("Saved for later");
        },
        removeFromPlan: (id) => {
            const nextPlan = plan.filter((item) => item.id !== id);
            setPlan(nextPlan);
            window.localStorage.setItem(PLAN_KEY, JSON.stringify(nextPlan));
            window.dispatchEvent(new Event("fitlog:counts-updated"));
            setToast("Removed from today's plan");
        },
        removeSaved: (id) => {
            const nextSaved = saved.filter((item) => item.id !== id);
            setSaved(nextSaved);
            window.localStorage.setItem(SAVED_KEY, JSON.stringify(nextSaved));
            window.dispatchEvent(new Event("fitlog:counts-updated"));
            setToast("Removed from saved workouts");
        },
        markAsDone: (id) => {
            const nextDoneIds = doneIds.includes(id) ? doneIds : [...doneIds, id];
            setDoneIds(nextDoneIds);
            window.localStorage.setItem(DONE_KEY, JSON.stringify(nextDoneIds));
            setToast("Workout marked as done");
        },
    }), [doneIds, plan, saved, toast]);

    return <FitlogContext.Provider value={value}>
        {children}
        {toast && <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-[var(--fitlog-line)] border-l-4 border-l-[var(--fitlog-lime)] bg-[var(--fitlog-panel)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--fitlog-paper)] shadow-2xl">{toast}</div>}
    </FitlogContext.Provider>;
}

export function useFitlog() {
    const context = useContext(FitlogContext);
    if (!context) throw new Error("useFitlog must be used inside FitlogProvider");
    return context;
}

export default FitlogContext;
