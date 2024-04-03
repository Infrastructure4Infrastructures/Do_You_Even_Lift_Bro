import { useDeleteMealMutation, useGetMealsQuery } from "./mealSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useGetJournalEntryByIdQuery } from "../journal_entry/journalEntrySlice";
/** Allows user to read, update, and delete a meal */
import "./meals.css";

export default function Meal() {
  const { data: journal_entry } = useGetJournalEntryByIdQuery();
  const [deleteMeal] = useDeleteMealMutation();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(journal_entry);

  const journal = journal_entry?.find((journal) => journal._id === id);
  // console.log(meal);
  if (!token) {
    return "Must be logged in to view Meal Entries!";
  }

  // const [description, setDescription] = useState(meal.description);

  // /** Saves the food meal */
  // const save = async (evt) => {
  //   evt.preventDefault();
  //   editMeal({ ...meal, description });
  // };

  // /** Deletes the meal */
  // const onDelete = async (evt) => {
  //   evt.preventDefault();
  //   deleteMeal(meal.id);
  //   navigate("/meals");
  // };

  return (
    <div className='meals_container'>
      <h2 class='fjTitle'>Food Journal</h2>
      <table class='foodFormName'>
        <thead>
          <tr>
            <th class='ftInpLab'>Date/Time</th>
            <th class='ftInpLab'>Food Entry</th>
            <th class='ftInpLab'>Calories</th>
            <th class='ftInpLab'>Remove Entry</th>
          </tr>
        </thead>
        <tbody>
          {journal_entry.map((journal) => (
            // journal.Meal_Food_Items.map((Meal_Food_Items, index) => (
            <tr key={index}>
              <>
                <td>{journal.date}</td>
                <td>{journal.food_item.description}</td>
                <td>{journal.food_item.calories}</td>
                <td>
                  <button class='button-24' role='button'>
                    Delete
                  </button>
                  {/* <button id="#deleteButtonMeals" onClick={onDelete} aria-label='delete'>
                        X
                      </button> */}
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
