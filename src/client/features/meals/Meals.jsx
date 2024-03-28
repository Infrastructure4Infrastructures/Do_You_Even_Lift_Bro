import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
import Meal from "./Meal";
import { useGetMealsQuery } from "./mealSlice";

//import "./Tasks.less";

/** Main interface for user to view food items */
export default function Meals() {
  const token = useSelector(selectToken);
  const { data: meals, isLoading } = useGetMealsQuery();

  if (!token) {
    return <p>You must be logged in to see meals.</p>;
  }

  return (
    <div className="meals">
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New Meal</h2>
      <NewMeal />
      <h2>All Meals</h2>
      {isLoading && <p>Loading meals...</p>}
      {meals && (
        <ul>
          {users.map((meal) => (
            <User key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </div>
  );
}
