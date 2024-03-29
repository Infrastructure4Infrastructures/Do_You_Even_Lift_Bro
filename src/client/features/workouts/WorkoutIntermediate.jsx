import Exercises from "../exercises/Exercises";
import { NavLink } from "react-router-dom";

export default function WorkoutIntermediate({}) {
  return (
    <div>
      <h1>Intermediate Workout</h1>
      <Exercises />
      <section>
        <NavLink to='/meals'>Visit Food Journal</NavLink>
      </section>
    </div>
  );
}
