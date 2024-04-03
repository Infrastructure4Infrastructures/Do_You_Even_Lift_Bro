import { useDeleteMealMutation, useGetMealsQuery } from "./mealSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useGetJournalEntryByIdQuery } from "../journal_entry/journalEntrySlice";
/** Allows user to read, update, and delete a meal */
import "./meals.css";
import { journal_Entry } from "../../../server/prisma";

export default function Journal() {
  const { data: journal_entry } = useGetJournalByIdQuery();
  const [deleteJournal_Entry] = useDeleteJournalEntryMutation();
  const [addJournal_Entry] = useCreateJournalEntryMutation()
  const [editJournal_Entry] = useEditJournalEntryMutation()
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(journal_entry);

  const journal = journal_entry?.find((journal) => journal._id === id);
  // console.log(meal);
  if (!token) {
    return "Must be logged in to view JournaL Entries!";
  }
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
    <div className='journal_entry_container'>
      <h2 class='fjTitle'>Food Journal</h2>
      <table class='foodJournalFormName'>
        <thead>
          <tr>
            <th class='ftInpLab'>Date/Time</th>
            <th class='ftInpLab'>Food Entry</th>
            <th class='ftInpLab'>Calories</th>
            <th class='ftInpLab'>Remove Entry</th>
          </tr>
        </thead>
        <tbody>
          {journal.journal_Entry.map((journal, index) => (
            // { journal.journal_Entry.map((journal, index) => ( }
            <tr key={index}>
              <>
                <td>{journal_Entry.date}</td>
                <td>{journal_Entry.food_item.description}</td>
                <td>{journal_Entry.food_item.calories}</td>
                <td>
                  <button class='button-24' role='button' onClick={onDelete} aria-label='DELETE'>
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
  )
