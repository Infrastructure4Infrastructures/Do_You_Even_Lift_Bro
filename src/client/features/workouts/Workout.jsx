import { useState } from "react";
import {
  useEditWorkoutsMutation,
  useDeleteWorkoutsMutation,
} from "./workoutsSlice";

export default function Workout({ workout }) {
  const [editWorkout] = useEditWorkoutsMutation();
  const [deleteWorkout] = useDeleteWorkoutsMutation();

  const [description, setDescription] = useState(workout.description);

  const toggleWorkout = async (evt) => {
    const done = evt.target.checked;
    editWorkout({ ...workout, done });
  };

  const save = async (evt) => {
    evt.preventDefault();
    editWorkout({ ...workout, description });
  };

  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteWorkout(workout.id);
  };

  return (
    <li>
      <form onSubmit={save}>
        <input
          type='checkbox'
          checked={workout.done}
          onChange={toggleWorkout}
        />
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>Save</button>
        <button onClick={onDelete} aria-label='delete'>
          🞪
        </button>
      </form>
    </li>
  );
}
