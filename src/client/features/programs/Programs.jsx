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
    <div>
      <h2>Select a Workout Difficulty</h2>

      <h3>Beginner Workout</h3>
      <a href='/workouts/beginner'>
        <button>Select Workout</button>
      </a>

      <h3>Intermediate Workout</h3>
      <a href='/workouts/intermediate'>
        <button>Select Workout</button>
      </a>

      <h3>Advanced Workout</h3>
      <a href='/workouts/advanced'>
        <button>Select Workout</button>
      </a>

      <>
        <NavLink to='/meals'>Visit Food Journal</NavLink>
      </>
    </div>
  );
}
