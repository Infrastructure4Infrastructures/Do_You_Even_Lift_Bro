import { useGetWorkoutsBeginnerByIdQuery } from "../workouts/workoutsSlice";

export default function Exercise({ id }) {
  const { data: workouts, isLoading } = useGetWorkoutsBeginnerByIdQuery(id);
  console.log(workouts);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!workouts) {
    return <div>No workouts available</div>;
  }

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
                <label htmlFor='sets'>
                  <input type='number' id='sets' />
                </label>
              </td>
              <td>
                {/* My Reps input box */}
                <label htmlFor='reps'>
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
