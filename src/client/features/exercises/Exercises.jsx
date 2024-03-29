import React, { Fragment } from "react";

import {
  useGetWorkoutsBeginnerQuery,
  useGetWorkoutsIntermediateQuery,
  useGetWorkoutsAdvancedQuery,
} from "../workouts/workoutsSlice";

export default function Exercises({ difficulty }) {
  let selectedDifficulty = null;

  if (difficulty === "beginner") {
    selectedDifficulty = useGetWorkoutsBeginnerQuery();
  } else if (difficulty === "intermediate") {
    selectedDifficulty = useGetWorkoutsIntermediateQuery();
  } else if (difficulty === "advanced") {
    selectedDifficulty = useGetWorkoutsAdvancedQuery();
  } else {
    return <div>No workouts available</div>;
  }

  const { data: workouts, isLoading } = selectedDifficulty;

  if (!workouts) {
    return <div>No workouts available</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(workouts);

  const previousExercise = async (evt) => {
    evt.preventDefault();
    previousExercise({ CHANGECODEHERETOGOTOPREVIOUSEXERCISE });
  };

  const nextExercise = async (evt) => {
    evt.preventDefault();
    nextExercise({ CHANGECODEHEREFORGOINGTONEXTEXERCISE });
  };

  const exercise = workouts.find((ele) => ele);
  console.log(exercise);

  // const result = workouts.Workout_Exercises.map(
  //   (Workout_Exercises, index) => Workout_Exercises[index]
  // );

  // console.log(result);

  return (
    <div>
      <main>
        <a>
          <button>Previous</button>
        </a>
        <a>
          <button>Next</button>
        </a>
        <h3>
          {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
        </h3>
        <br /> {/** Remove this before Lester see's it */}
        <iframe src='URL'></iframe>
      </main>
      <h2>Description of Exercise here</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets Goal</th>
            <th>Reps Goal</th>
            <th>My Sets</th>
            <th>My Reps</th>
            <th>Delete Entry</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.name}</td>
              {workout.Workout_Exercises.map((Workout_Exercise, index) => (
                <Fragment key={index}>
                  <td>{Workout_Exercise.setsGoals}</td>
                  <td>{Workout_Exercise.repsGoals}</td>
                </Fragment>
              ))}
              <td>
                {/* My Sets input box */}
                <label name='sets'>
                  <input type='number' id='sets' />
                </label>
              </td>
              <td>
                {/* My Reps input box */}
                <label name='reps'>
                  <input type='number' id='reps' />
                </label>
              </td>
              <td>
                <button
                  onClick='/exercise'
                  method='DELETE'
                  name='deleteExercise'
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id='addBtn'>Submit Workout</button>
    </div>
  );
}
