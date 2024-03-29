import Exercises from "../exercises/Exercises";
import { NavLink } from "react-router-dom";

export default function WorkoutBeginner({}) {
  return (
    <div>
      <h1>Beginner Workout</h1>
      <Exercises />
      <section>
        <NavLink to='/meals'>Visit Food Journal</NavLink>
      </section>
    </div>
  );
}
