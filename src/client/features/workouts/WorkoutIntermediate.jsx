import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import Exercises from "../exercises/Exercises";
import { NavLink } from "react-router-dom";

import "./workouts.css";

export default function WorkoutIntermediate({}) {
  const token = useSelector(selectToken);
  const difficulty = "intermediate";

  if (!token) {
    return <p>You must be an admin to see all exercises.</p>;
  }

  return (
    <div>
      <h1 class="workoutDifTitle">Intermediate Workout</h1>
      <Exercises difficulty={difficulty} />
      <section class="workoutFoodJournal">
        <NavLink  to='/meals'>Visit Food Journal</NavLink>
      </section>
    </div>
  );
}
