// import { useSelector } from "react-redux";
// import { selectToken } from "../auth/authSlice";
import Exercise from "./Exercise";

export default function Exercises() {
  // const token = useSelector(selectToken);
  // const { data } = useGetExercisesQuery();

  // if (!token) {
  //   return <p>You must be an admin to see all exercises.</p>;
  // }

  // const previousExercise = async (evt) => {
  //   evt.preventDefault();
  //   previousExercise({ CHANGECODEHERETOGOTOPREVIOUSEXERCISE });
  // };

  // const nextExercise = async (evt) => {
  //   evt.preventDefault();
  //   nextExercise({ CHANGECODEHEREFORGOINGTONEXTEXERCISE });
  // };

  return (
    <div className='exercises'>
      <main>
        <a>
          <button>Previous</button>
        </a>
        <a>
          <button>Next</button>
        </a>
        <br /> {/** Remove this before Lester see's it */}
        <iframe src='URL'></iframe>
        <>
          <Exercise />
        </>
      </main>
    </div>
  );
}
