import Exercises from "../exercises/Exercises";
import { NavLink } from "react-router-dom";

export default function WorkoutAdvanced({}) {
  return (
    <div>
      <h1>Advanced Workout</h1>
      <Exercises />
      <section>
        <NavLink to='/meals'>Visit Food Journal</NavLink>
      </section>
    </div>
  );
}
