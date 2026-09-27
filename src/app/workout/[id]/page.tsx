import { notFound } from "next/navigation";
import WorkoutDetails from "../../components/workout/WorkoutDetails";
import { getWorkout } from "../../lib/fitlog";

type WorkoutPageProps = { params: Promise<{ id: string }> };

export default async function WorkoutPage({ params }: WorkoutPageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);
  if (!workout) notFound();

  return <WorkoutDetails workout={workout} />;
}
