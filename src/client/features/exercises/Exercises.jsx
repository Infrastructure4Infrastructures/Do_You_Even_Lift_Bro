import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import Exercise from "./Exercise";
import { useGetExercisesQuery } from "./foodItemSlice";

export default function Exercises() {
  const token = useSelector(selectToken);
  const { data } = useGetExercisesQuery();

  if (!token) {
    return <p>You must be an admin to see all exercises.</p>;
  }

  const previousExercise = async (evt) => {
    evt.preventDefault();
    previousExercise({ CHANGECODEHERETOGOTOPREVIOUSEXERCISE });
  };

  const nextExercise = async (evt) => {
    evt.preventDefault();
    nextExercise({ CHANGECODEHEREFORGOINGTONEXTEXERCISE });
  };

  return (
    <div className='exercises'>
      <main>
        <h1>Workout Program Here</h1>
        <a>
          <button onClick={previousExercise}>Previous</button>
        </a>
        <a>
          <button onClick={nextExercise}>Next</button>
        </a>
        <iframe src='URL'></iframe>
        <>
          <Exercise />
        </>
      </main>
    </div>
  );
}
