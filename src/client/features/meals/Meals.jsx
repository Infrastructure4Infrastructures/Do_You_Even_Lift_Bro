import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useState } from "react";

import { useCreateJournalEntryMutation } from "../journal_entry/journalEntrySlice.js";

import Journal from "../journal/Journal.jsx";
import { useGetJournalQuery } from "../journal/journalSlice.js";

export default function Meals() {
  const token = useSelector(selectToken);
  const { data: journal_entry } = useGetJournalQuery();
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const [createMeal] = useCreateJournalEntryMutation();

  const addFood = (event) => {
    event.preventDefault();
    createMeal({ name, calories, date });
    setName("");
    setCalories("");
    setDate("");
  };

  if (!token) {
    return <p>You must be logged in to see meals.</p>;
  }
  return (
    <div>
      <section class='inputInfo'>
        <h3>
          Track your meals in the input below. Click "Add Meal" to add a new
          meal entry.
        </h3>
      </section>

      <form class='foodForms' onSubmit={addFood}>
        <label htmlFor='name'>
          Food Entry:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor='Calories'>
          Calories:
          <input
            type='number'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        <label htmlFor='dateTime'>
          Date/Time:
          <input
            type='date'
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
