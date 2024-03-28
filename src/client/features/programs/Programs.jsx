import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { NavLink } from "react-router-dom";
// import NewTask from "./NewTask";
// import { useGetTasksQuery } from "./taskSlice";

// import "./Tasks.less";

/** Main interface for user to interact with their tasks */
export default function Programs() {
  const token = useSelector(selectToken);
  //   const { data: programs, isLoading } = useGetProgramsQuery();

  // if (!token) {
  //   return <p>You must be logged in to see your Programs.</p>;
  // }

  return (
    <div className="programs">
      <h2>Select a Workout Difficulty</h2>
      <li>
        <h3>Beginner Workout</h3>
        <button type="button" onClick="/workouts/beginner">
          Select Workout
        </button>
      </li>

      <li>
        <h3>Intermediate Workout</h3>
        <button type="button" onClick="/workout/intermediate">
          Select Workout
        </button>
      </li>

      <li>
        <h3>Advanced Workout</h3>
        <button type="button" onClick="/workout/advanced">
          Select Workout
        </button>
      </li>

      <footer>
        <NavLink to="/meals">Visit Food Journal</NavLink>
      </footer>
    </div>
  );
}
