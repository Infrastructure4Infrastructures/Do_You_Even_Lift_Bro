import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

import { useGetExercisesQuery } from "./foodItemSlice";

export default function Exercises() {
  const token = useSelector(selectToken);
  const { data: exercises, isLoading } = useGetExercisesQuery();

  if (!token) {
    return <p>You must be an admin to see all exercises.</p>;
  }

  return (
    <div className='exercises'>
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New Workout</h2>
      <Exercises />
      <h2>All Users</h2>
      {isLoading && <p>Loading users...</p>}
      {exercises && (
        <ul>
          {users.map((exercises) => (
            <User key={exercises.id} exercises={exercises} />
          ))}
        </ul>
      )}
    </div>
  );
}
