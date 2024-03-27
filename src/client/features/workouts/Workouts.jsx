import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

import { useGetWorkoutsById } from "./workoutsSlice";

export default function Workouts() {
  const token = useSelector(selectToken);
  const { data: Workouts, isLoading } = useGetWorkoutsById();

  if (!token) {
    return <p>You must be an admin to see all users.</p>;
  }

  return (
    <div className='workouts'>
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New Workout</h2>
      <Workouts />
      <h2>All Users</h2>
      {isLoading && <p>Loading users...</p>}
      {workouts && (
        <ul>
          {users.map((workouts) => (
            <User key={workouts.id} workouts={workouts} />
          ))}
        </ul>
      )}
    </div>
  );
}
