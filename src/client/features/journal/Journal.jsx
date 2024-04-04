import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import "./journal.css";

import { useGetJournalQuery } from "./journalSlice";
import { useDeleteJournalEntryMutation } from "../journal_entry/journalEntrySlice";

export default function Journal() {
  const { data: journal } = useGetJournalQuery();
  const [deleteJournal_Entry] = useDeleteJournalEntryMutation();

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const { id } = useParams();

  // const journal = journal_entry?.find((journal) => journal._id === id);
  console.log(journal);
  if (!token) {
    return "Must be logged in to view JournaL Entries!";
  }

  // const [description, setDescription] = useState(meal.description);

  // /** Saves the food meal */
  // const save = async (evt) => {
  //   evt.preventDefault();
  //   editMeal({ ...meal, description });
  // };

  /** Deletes the meal */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteJournal_Entry(meal.id);
    navigate("/meals");
  };
  return (
    <div className='journal_entry_container'>
      <h2 class='fjTitle'>Food Journal</h2>
      <table class='foodJournalFormName'>
        <thead>
          <tr>
            <th class='ftInpLab'>Date/Time</th>
            <th class='ftInpLab'>Food Entry</th>
            {/* <th class='ftInpLab'>Calories</th> */}
            <th class='ftInpLab'>Remove Entry</th>
          </tr>
        </thead>
        <tbody>
          {/* {journal_entry &&
            (() => {
              const journalEntries = [];
              for (let i = 0; i < journal_entry.length; i++) {
                const entry = journal_entry[i];
                journalEntries.push( */}
          {journal?.[0]?.Journal_Entry.map((entry, i) => (
            <tr key={i}>
              <td>{entry.date}</td>
              <td>{entry.note}</td>
              {/* <td>{entry.food_item.description}</td>
                    <td>{entry.food_item.calories}</td> */}
              <td>
                <button
                  onClick={() => onDelete(entry.id)}
                  className='button-24'
                  role='button'
                  aria-label='DELETE'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* );
              }
              return journalEntries;
            })()} */}
        </tbody>
      </table>
    </div>
  );
}
