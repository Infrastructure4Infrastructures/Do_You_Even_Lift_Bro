import React, { Fragment, useState } from "react";

import {
  useGetWorkoutsBeginnerQuery,
  useGetWorkoutsIntermediateQuery,
  useGetWorkoutsAdvancedQuery,
} from "../workouts/workoutsSlice";
import { useCreateUsersExerciseMutation } from "../user_exercises/user_exercisesSlice";
import ExerciseJournal from "./ExerciseJournal";
import "./exercises.css";

export default function Exercises({ difficulty }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [createExercise] = useCreateUsersExerciseMutation();
  const [myReps, setMyReps] = useState([]);

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

  const handleNext = () => {
    setCurrentIndex((current) => {
      if (current < workouts.length - 1) {
        return current + 1;
      } else {
        return current;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((current) => {
      if (current > 0) {
        return current - 1;
      } else {
        return current;
      }
    });
  };

  const exercise = workouts[currentIndex];
  let exerciseDescription = exercise.Workout_Exercises[0].exercises.description;
  let exerciseVideo = exercise.Workout_Exercises[0].exercises.video;
  let exerciseName = exercise.name;
  let exerciseSetsGoal = exercise.Workout_Exercises[0].setsGoals;
  let exerciseRepsGoal = exercise.Workout_Exercises[0].repsGoals;

  const rows = [];
  for (let setsGoal = 1; setsGoal <= exerciseSetsGoal; setsGoal++) {
    rows.push(setsGoal);
  }

  const repsGoal = [];
  for (const ele of rows) {
    let updatedRows =
      ele === exerciseRepsGoal[0] ? exerciseRepsGoal : 1 * exerciseRepsGoal;
    repsGoal.push(updatedRows);
  }

  const submitWorkout = async (e) => {
    e.preventDefault();
    console.log("Button Clicked");

    const { id: exerciseId } = exercise;
    const userId = "27";
    if (!exercise) {
      console.error("Exercise is undefined");
      return;
    }

    const allReps = [];
    for (let i = 0; i < rows.length; i++) {
      const reps = prompt(`Enter reps for set ${i + 1}:`);
      allReps.push(reps);
    }

    createExercise({
      userId,
      exerciseId,
      mySets: rows.length,
      myReps: allReps.reduce((acc, cur) => acc + cur, 0),
    });
    setMyReps([]);
  };

  return (
    <div>
      <main>
        <section class='buttonsect'>
          <a id=''>
            <button id='prebut' onClick={handlePrevious}>
              Previous
            </button>
          </a>
          <a>
            <button id='nextbut' onClick={handleNext}>
              Next
            </button>
          </a>
        </section>

        <section class='exnamesec'>
          <h2 id='exname'>
            {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
          </h2>
        </section>

        <div class='video'>
          <iframe
            width='560'
            height='315'
            src={exerciseVideo}
            title='{exercise.name} Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <h3 class='exdesc'>{exerciseDescription}</h3>
      <form onSubmit={submitWorkout}>
        <table class='tablelabel'>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets #</th>
              <th>Reps Goal</th>
              <th>My Reps</th>
              {/* <th>Delete Entry</th> */}
            </tr>
          </thead>
          <tbody class='tbodyex'>
            {/* Map over the rows array with two parameters, row and index */}
            {rows.map((row, index) => (
              // Pass in the current index as a prop
              <tr class='toprowtablerow' key={index}>
                {/* Render to the page the following table tags based of the setsGoal number */}
                <td>{exerciseName}</td>
                <td>{row}</td>
                <td>{exerciseRepsGoal}</td>
                <td>
                  <label name='reps'>
                    <input
                      type='number'
                      value={myReps}
                      onChange={(e) => setMyReps(e.target.value)}
                      id='reps'
                      placeholder='Enter data in window prompt'
                    />
                  </label>
                </td>
                <td>
                  {/* <button
                    id='addBtn'
                    onClick={() => onDelete(exercise.id)}
                    method='DELETE'
                    name='deleteExercise'
                    class='button-24'
                    role='button'
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <tbody>
          <tr class='tablebuttons'>
            {/* <td class='bottomTabBut'>
              Need to add onClick Function to add a set
              <button class='button-91' role='button'>
                Add Another Set
              </button>
            </td> */}
            {/* onClick={addSet} method='POST' */}
            <td class='bottomTabBut'>
              {/* Need to add onClick Function to submit workout */}
              <button type='submit' class='button-91' role='button'>
                Submit Workout
              </button>
            </td>
            {/* onClick={submitworkout} method='POST' */}
          </tr>
        </tbody>
      </form>

      <ExerciseJournal />
    </div>
  );
}
