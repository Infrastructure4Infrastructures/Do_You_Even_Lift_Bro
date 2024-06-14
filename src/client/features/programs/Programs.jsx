import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { NavLink } from "react-router-dom";
// import NewTask from "./NewTask";
// import { useGetTasksQuery } from "./taskSlice";

import "./programs.css";

/** Main interface for user to interact with their tasks */
export default function Programs() {
  const token = useSelector(selectToken);
  //   const { data: programs, isLoading } = useGetProgramsQuery();

  if (!token) {
    return <p>You must be logged in to see the Programs.</p>;
  }

  return (
    <div>
      <h2>Select a Workout Difficulty</h2>

      <h3>
        <a className='difbutton' href='/workouts/beginner'>
          <button id='programbutton'>Beginner Workout</button>
        </a>
      </h3>

      <h3>
        <a className='difbutton' href='/workouts/intermediate'>
          <button id='programbutton'>Intermediate Workout</button>
        </a>
      </h3>

      <h3>
        <a className='difbutton' href='/workouts/advanced'>
          <button id='programbutton'>Advanced Workout</button>
        </a>
      </h3>

      <footer>
        <section className='journalbox'>
          <NavLink className='journallink' to='/meals'>
            Visit Food Journal
          </NavLink>
        </section>
      </footer>
    </div>
  );
}
