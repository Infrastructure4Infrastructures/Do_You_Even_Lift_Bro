import React, { Fragment, useState } from "react";
import { useDeleteExercisesByIdMutation } from "./exercisesSlice";
import {
  useGetWorkoutsBeginnerQuery,
  useGetWorkoutsIntermediateQuery,
  useGetWorkoutsAdvancedQuery,
} from "../workouts/workoutsSlice";

export default function Exercises({ difficulty }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleteExercise] = useDeleteExercisesByIdMutation();

  let selectedDifficulty = null;

  // Check if the selected difficulty is strictly equal to one of the 3 given difficulties
  // If so, use the corresponding getWorkouts hook to render the exercises to the page
  if (difficulty === "beginner") {
    selectedDifficulty = useGetWorkoutsBeginnerQuery();
  } else if (difficulty === "intermediate") {
    selectedDifficulty = useGetWorkoutsIntermediateQuery();
  } else if (difficulty === "advanced") {
    selectedDifficulty = useGetWorkoutsAdvancedQuery();
  } else {
    return <div>No workouts available</div>;
  }

  // Render the data from the given getWorkouts hook and assign it the variable selectedDifficulty
  const { data: workouts, isLoading } = selectedDifficulty;

  if (!workouts) {
    return <div>No workouts available</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Create a async function that takes a parameter (exerciseId)
  const onDelete = async (exerciseId) => {
    // Execute the deleteExercise function using the useDeleteExerciseMutation hook on exerciseId
    deleteExercise(exerciseId);
  };

  // Use an arrow function handle clicking the next button for the next exercise
  const handleNext = () => {
    // Using a callback function taking in a parameter of the current index
    setCurrentIndex((current) => {
      // Check if the current index is one less the workouts array
      if (current < workouts.length - 1) {
        // If so, go to the next index
        return current + 1;
      } else {
        // if not, stay at the current index and do nothing
        return current;
      }
    });
  };
  // Use an arrow function handle clicking the previous button for the previous exercise
  const handlePrevious = () => {
    // Using a callback function taking in a parameter of the current index
    setCurrentIndex((current) => {
      // Check if the current index is greater than 0
      if (current > 0) {
        // If so, go to the previous index
        return current - 1;
      } else {
        // if not, stay at the current index and do nothing
        return current;
      }
    });
  };

  // Declare the variable exercise and assign it to the currentIndex of the workouts array
  const exercise = workouts[currentIndex];
  // These variable defines using dot notation and bracket notation
  let exerciseDescription = exercise.Workout_Exercises[0].exercises.description;
  let exerciseVideo = exercise.Workout_Exercises[0].exercises.video;
  let exerciseName = exercise.name;
  let exerciseSetsGoal = exercise.Workout_Exercises[0].setsGoals;
  let exerciseRepsGoal = exercise.Workout_Exercises[0].repsGoals;

  // Declare rows to an empty array
  const rows = [];
  // Using a for loop iterate starting at 1 to the given setsGoal number
  for (let setsGoal = 1; setsGoal <= exerciseSetsGoal; setsGoal++) {
    // Push every iteration of setsGoal to the empty array of rows
    rows.push(setsGoal);
  }
  console.log(workouts);
  return (
    <div>
      <main>
        <a>
          <button onClick={handlePrevious}>Previous</button>
        </a>
        <a>
          <button onClick={handleNext}>Next</button>
        </a>
        <h3>
          {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
        </h3>

        <iframe
          width='560'
          height='315'
          src={exerciseVideo}
          title='{exercise.name} Video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </main>
      <h2>{exerciseDescription}</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets Goal</th>
            <th>Reps Goal</th>
            <th>My Reps</th>
            <th>Delete Entry</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the rows array with two paramters, row and index */}
          {rows.map((row, index) => (
            // Pass in the current index as a prop
            <tr key={index}>
              {/* Render to the page the following table tags based of the setsGoal number */}
              <td>{exerciseName}</td>
              <td>{row}</td>
              <td>{exerciseRepsGoal}</td>
              <td>
                {/* My Reps input box */}
                <label name='reps'>
                  <input type='number' id='reps' />
                </label>
              </td>
              <td>
                <button
                  id='addBtn'
                  onClick={onDelete}
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
      <table>
        <tbody>
          <tr>
            <td>
              {/* Need to add onClick Function to add a set */}
              <button id='addBtn'>Add Another Set</button>
            </td>
            <td>
              {/* Need to add onClick Function to submit workout */}
              <button id='addBtn'>Submit Workout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
