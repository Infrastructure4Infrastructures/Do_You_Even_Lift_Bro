import { useState } from "react";
import {
  useEditExercisesMutation,
  useDeleteExercisesMutation,
} from "./exercisesSlice";

export default function Exercise({ exercise }) {
  const [editExercise] = useEditExercisesMutation();
  const [deleteExercise] = useDeleteExercisesMutation();

  const [description, setDescription] = useState(exercise.description);

  const toggleExercise = async (evt) => {
    const done = evt.target.checked;
    editExercise({ ...exercise, done });
  };

  const save = async (evt) => {
    evt.preventDefault();
    editExercise({ ...exercise, description });
  };

  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteExercise(exercise.id);
  };

  return (
    <li>
      <form onSubmit={save}>
        <input
          type='checkbox'
          checked={exercise.done}
          onChange={toggleExercise}
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
