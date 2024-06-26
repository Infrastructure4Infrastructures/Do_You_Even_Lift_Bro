import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import Exercises from "../exercises/Exercises";
import { NavLink } from "react-router-dom";

import "./workouts.css";

export default function WorkoutAdvanced({}) {
  const token = useSelector(selectToken);
  const difficulty = "advanced";

  if (!token) {
    return <p>You must be an admin to see all exercises.</p>;
  }

  return (
    <div>
      <h1 className='workoutDifTitle'>Advanced Workout</h1>
      <Exercises difficulty={difficulty} />
      <section className='workoutFoodJournal'>
        <NavLink to='/meals'>Visit Food Journal</NavLink>
      </section>
    </div>
  );
}
