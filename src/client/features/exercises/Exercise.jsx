import {
  useGetWorkoutsBeginnerQuery,
  // useGetWorkoutsIntermediateQuery,
  // useGetWorkoutsAdvancedQuery,
} from "../workouts/workoutsSlice";

export default function Exercise({}) {
  const { data: workouts, isLoading } = useGetWorkoutsBeginnerQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!workouts) {
    return <div>No workouts available</div>;
  }
  console.log(workouts);
  return (
    <div>
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
              <td>{workout.setsGoals}</td>
              <td>{workout.repsGoals}</td>
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
              <td>Delete Box</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id='addBtn'>Submit Workout</button>
    </div>
  );
}
