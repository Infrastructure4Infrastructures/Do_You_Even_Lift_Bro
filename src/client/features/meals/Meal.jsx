import { Fragment } from "react";
import { useDeleteMealMutation, useGetMealsQuery } from "./mealSlice";

/** Allows user to read, update, and delete a meal */
export default function Meal({}) {
  const { data: meals } = useGetMealsQuery();
  const [deleteMeal] = useDeleteMealMutation();
  console.log(meals);
  // const token = useSelector(selectToken);

  // const [editMeal] = useEditMealMutation();
  // const [deleteMeal] = useDeleteMealMutation();

  // const [description, setDescription] = useState(meal.description);

  // /** Updates the meal's `done` status */
  // const toggleMeal = async (evt) => {
  //   const done = evt.target.checked;
  //   editMeal({ ...meal, done });
  // };

  // /** Saves the food meal */
  // const save = async (evt) => {
  //   evt.preventDefault();
  //   editMeal({ ...meal, description });
  // };

  /** Deletes the meal */
  const onDelete = async (mealId, evt) => {
    evt.preventDefault();
    deleteMeal(mealId);
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
                <tr>
                  <Fragment key={index}>
                    <td>{meal.date}</td>
                    <td>{Meal_Food_Items.food_item.description}</td>
                    <td>{Meal_Food_Items.food_item.calories}</td>
                    <td>
                      <button onClick={onDelete}>X</button>
                    </td>
                  </Fragment>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
}
