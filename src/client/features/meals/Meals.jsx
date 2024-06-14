import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useState } from "react";

import { useCreateJournalEntryMutation } from "../journal_entry/journalEntrySlice.js";

import Journal from "../journal/Journal.jsx";
// import { useGetJournalQuery } from "../journal/journalSlice.js";

export default function Meals() {
  const token = useSelector(selectToken);
  // const { data: journal_entry } = useGetJournalQuery();
  // const [calories, setCalories] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [createMeal] = useCreateJournalEntryMutation();

  const addFood = (event) => {
    event.preventDefault();
    const dateString = new Date(date).toISOString();
    createMeal({ note, date: dateString });
    setNote("");
    setDate("");
  };

  if (!token) {
    return <p>You must be logged in to see meals.</p>;
  }
  return (
    <div>
      <section className='inputInfo'>
        <h3>
          Track your meals in the input below. Click "Add Meal" to add a new
          meal entry.
        </h3>
      </section>

      <form className='foodForms' onSubmit={addFood}>
        <label htmlFor='name'>
          Food Entry:
          <input
            type='text'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>

        {/* <label htmlFor='Calories'>
          Calories:
          <input
            type='number'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label> */}

        <label>
          Date/Time:
          <input
            type='datetime-local'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button id='addFoodButton' type='submit'>
          Add Food
        </button>
      </form>
      <Journal />
    </div>
  );
}
