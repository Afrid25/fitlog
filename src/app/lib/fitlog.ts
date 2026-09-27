export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export const FITLOG_API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(FITLOG_API_URL);
  if (!response.ok) {
    throw new Error("Workout library is unavailable right now.");
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Workout library returned an unexpected response.");
  }

  return data as Workout[];
}

export async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(`${FITLOG_API_URL}/${id}`, {
    cache: "no-store",
  });
  if (response.status === 404) return null;
  if (!response.ok)
    throw new Error("Workout details are unavailable right now.");

  const data: unknown = await response.json();
  return data && typeof data === "object" ? (data as Workout) : null;
}
