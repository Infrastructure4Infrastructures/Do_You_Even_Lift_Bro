import { useState } from "react";
import {
  useEditExercisesMutation,
  useDeleteExercisesMutation,
} from "./exercisesSlice";

export default function Exercise({ exercise }) {
  // const [editExercise] = useEditExercisesMutation();
  // const [deleteExercise] = useDeleteExercisesMutation();

  // const [description, setDescription] = useState(exercise.description);

  // const toggleExercise = async (evt) => {
  //   const done = evt.target.checked;
  //   editExercise({ ...exercise, done });
  // };

  // const save = async (evt) => {
  //   evt.preventDefault();
  //   editExercise({ ...exercise, description });
  // };

  // const onDelete = async (evt) => {
  //   evt.preventDefault();
  //   deleteExercise(exercise.id);
  // };

  return (
    <div>
      <h2>Description of Exercise here</h2>
      <table>
        <tr>
          <th>Exercise</th>
          <th>Sets Goal</th>
          <th>Reps Goal</th>
          <th>My Sets</th>
          <th>My Reps</th>
          <th>Delete Entry</th>
        </tr>
        <tr>
          <td>Exercise Name Goes Here</td>
          <td>Set Number Goes Here</td>
          <td>Reps Number Goes Here</td>
          <td>
            {/* My Sets input box */}
            <label for='My Sets'>
              <input type='number' id='sets' />
            </label>
          </td>
          <td>
            {/* My Reps input box */}
            <label for='My Reps'>
              <input type='number' id='reps' />
            </label>
          </td>
          <td>Delete Box</td>
        </tr>
      </table>
      <button id='addBtn'>Add Additional Set</button>
    </div>
  );
}
