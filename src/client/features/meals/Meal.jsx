import { useDeleteMealMutation, useGetMealsQuery } from "./mealSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
/** Allows user to read, update, and delete a meal */
export default function Meal({ meal }) {
  const { data: meals } = useGetMealsQuery();
  const [deleteMeal] = useDeleteMealMutation();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    return "Must be logged in to view Meal Entries!";
  }

  console.log(meals);
  // const [description, setDescription] = useState(meal.description);

  // /** Saves the food meal */
  // const save = async (evt) => {
  //   evt.preventDefault();
  //   editMeal({ ...meal, description });
  // };

  /** Deletes the meal */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteMeal(meal.id);
    navigate("/meals");
  };

  return (
    <div className='meals_container'>
      <h2>Food Journal</h2>
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Food Entry</th>
            <th>Calories</th>
            <th>Remove Entry</th>
          </tr>
        </thead>
        <tbody>
          {meals &&
            meals.map((meal) =>
              meal.Meal_Food_Items.map((Meal_Food_Items, index) => (
                <tr key={index}>
                  <>
                    <td>{meal.date}</td>
                    <td>{Meal_Food_Items.food_item.description}</td>
                    <td>{Meal_Food_Items.food_item.calories}</td>
                    <td>
                      <button onClick={onDelete} aria-label='delete'>
                        X
                      </button>
                    </td>
                  </>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
}
