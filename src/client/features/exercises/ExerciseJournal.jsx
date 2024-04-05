import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

import {
  useDeleteUsersExerciseMutation,
  useGetUsersExerciseQuery,
} from "../user_exercises/user_exercisesSlice";
import { useGetExercisesByIdQuery } from "../exercises/exercisesSlice";

export default function ExerciseJournal() {
  const { data: user_exercises, isLoading } = useGetUsersExerciseQuery();
  const [deleteEntry] = useDeleteUsersExerciseMutation();

  const token = useSelector(selectToken);
  // const navigate = useNavigate([]);

  const { id } = useParams();

  if (!token) {
    return "Must be logged in to view JournaL Entries!";
  }

  // Create a async function that takes a parameter (exerciseId)
  const onDelete = async (id) => {
    // Execute the deleteExercise function using the useDeleteExerciseMutation hook on exerciseexerciseexercise
    // for (const ele of rows) {
    //   let newSetsGoal = [];
    //   if (setsGoal >= exerciseSetsGoal) {
    // e.preventDefault();
    await deleteEntry(id);
  };

  return (
    <div className='journal_entry_container'>
      <h2 className='fjTitle'>Exercise Journal</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table className='foodJournalFormName'>
          <thead>
            <tr>
              <th className='ftInpLab'>Exercise</th>
              <th className='ftInpLab'>Sets</th>
              <th className='ftInpLab'>Reps</th>
              <th className='ftInpLab'>Remove Entry</th>
            </tr>
          </thead>
          <tbody>
            {user_exercises.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.mySets}</td>
                <td>{entry.myReps}</td>
                <td>
                  <button
                    onClick={() => onDelete(entry.id)}
                    className='button-24'
                    role='button'
                    aria-label='DELETE'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
