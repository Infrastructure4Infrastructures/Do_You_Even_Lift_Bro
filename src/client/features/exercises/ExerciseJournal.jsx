// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectToken } from "../auth/authSlice";
// import "./journal.css";

// import { useGetJournalQuery } from "./journalSlice";
// import { useDeleteJournalEntryMutation } from "../journal_entry/journalEntrySlice";

export default function ExerciseJournal() {
  //   const { data: journal } = useGetJournalQuery();
  //   const [deleteJournal_Entry] = useDeleteJournalEntryMutation();

  //   const token = useSelector(selectToken);
  //   const navigate = useNavigate([]);

  //   const { id } = useParams();

  //   // const journal = journal_entry?.find((journal) => journal._id === id);
  //   console.log(journal);
  //   if (!token) {
  //     return "Must be logged in to view JournaL Entries!";
  //   }

  //   // const [description, setDescription] = useState(meal.description);

  //   // /** Saves the food meal */
  //   // const save = async (evt) => {
  //   //   evt.preventDefault();
  //   //   editMeal({ ...meal, description });
  //   // };

  //   /** Deletes the meal */
  //   const onDelete = async (id) => {
  //     // evt.preventDefault();
  //     await deleteJournal_Entry(id);
  //     navigate("/meals");
  //   };

  // Create a async function that takes a parameter (exerciseId)
  const onDelete = async (id) => {
    // Execute the deleteExercise function using the useDeleteExerciseMutation hook on exerciseexerciseexercise
    // for (const ele of rows) {
    //   let newSetsGoal = [];
    //   if (setsGoal >= exerciseSetsGoal) {
    // e.preventDefault();
    editExercise(id);
    console.log(id);
  };

  return (
    <div className='journal_entry_container'>
      <h2 class='fjTitle'>Exercise Journal</h2>
      <table class='foodJournalFormName'>
        <thead>
          <tr>
            <th class='ftInpLab'>Exercise</th>
            <th class='ftInpLab'>Sets</th>
            <th class='ftInpLab'>Reps</th>

            <th class='ftInpLab'>Remove Entry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {journal_entry &&
            (() => {
              const journalEntries = [];
              for (let i = 0; i < journal_entry.length; i++) {
                const entry = journal_entry[i];
                journalEntries.push( */}
            {/* {journal?.[0]?.Journal_Entry.map((entry, i) => (
           
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
          {/* ))} */}
          {/* );
              }
              return journalEntries;
            })()} */}
        </tbody>
      </table>
    </div>
  );
}
