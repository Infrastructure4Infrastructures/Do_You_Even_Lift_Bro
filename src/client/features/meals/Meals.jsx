import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
import Meal from "./Meal";
import { useGetMealsQuery, addToJournal } from "./mealSlice";


/** Main interface for user to view food items */
export default function Meals() {
  const token = useSelector(selectToken);
  const { data: meal, isLoading } = useGetMealsQuery();

  if (!token) {
    return <p>You must be logged in to see meals.</p>;
  }
}
  
  export default function AddFoodForm() {
    const [string, setString] = useState("");
  
    const dispatch = useDispatch();
  
    const addFood = (event) => {
      event.preventDefault();
      dispatch(addToJournal(String))
    }
  }
  
  return (
    <div className="meals">

        <h3> Track your meals in the input below.  Click "Add Meal" to add a new meal entry. </h3>
        <form onSubmit={addFood}>
            </form><label for="foodEntry">Food Entry</label>
            <input type="text" name="foodEntry">
            <label for="Calories">Calories: </label>
            <input type="text" name="calories">
            <label for="dateTime"> Date/Time: </label>
            <input type="dateTime" name="dateTime">
            <button onClick="/food_item/" method="POST">Add Food</button>
        </form>

     

       <h2>Food Journal</h2>
      <tr>
        <th>date/Time</th>
        <th>Food Entry</th>
        <th>Calories</th>
        <th>Remove Entry</th>

      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button onClick="/food_item" method="DELETE" name="deleteFood">X</button>
        </td>
      </tr>
    </div>
  )
