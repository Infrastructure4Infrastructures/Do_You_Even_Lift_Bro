import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
// import Meal from "./Meal";
import { useCreateMealMutation } from "./mealSlice";

export default function Meals() {
  const token = useSelector(selectToken);
  // const [string, setString] = useState("");
  const [createMeal] = useCreateMealMutation();

  // const dispatch = useDispatch();

  const addFood = (event) => {
    event.preventDefault();
    createMeal({ meal });
  };
  // if (!token) {
  //   return <p>You must be logged in to see meals.</p>;
  // }

  return (
    <div className='meals'>
      <h3>
        {" "}
        Track your meals in the input below. Click "Add Meal" to add a new meal
        entry.{" "}
      </h3>
      <form onSubmit={addFood}>
        <label for='foodEntry'>Food Entry</label>
        <input type='text' name='foodEntry' />
        <label for='Calories'>Calories: </label>
        <input type='text' name='calories' />
        <label for='dateTime'> Date/Time: </label>
        <input type='dateTime' name='dateTime' />
        <button onClick='/food_item/' method='POST'>
          Add Food
        </button>
      </form>

      <h2>Food Journal</h2>
      <tr>
        <th>Date/Time</th>
        <th>Food Entry</th>
        <th>Calories</th>
        <th>Remove Entry</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button onClick='/food_item' method='DELETE' name='deleteFood'>
            X
          </button>
        </td>
      </tr>
    </div>
  );
}
