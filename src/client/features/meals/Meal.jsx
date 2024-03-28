import { useState } from "react";
import { useDeleteMealMutation, useEditMealMutation } from "./mealSlice";
import { meal } from "../../../server/prisma";

/** Allows user to read, update, and delete a meal */
export default function Meal({ meal }) {
  const [editMeal] = useEditMealMutation();
  const [deleteMeal] = useDeleteMealMutation();

  const [description, setDescription] = useState(.description);

  /** Updates the meal's `done` status */
  const toggleMeal = async (evt) => {
    const done = evt.target.checked;
    editMeal({ ...meal, done });
  };

  /** Saves the food meal */
  const save = async (evt) => {
    evt.preventDefault();
    editMeal({ ...meal, description });
  };

  /** Deletes the meal */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteMeal(meal.id);
  };

  return (
    <li>
      <form onSubmit={save}>
        <input type="checkbox" checked={meal.done} onChange={toggleMeal} />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>Save</button>
        <button onClick={onDelete} aria-label="delete">
          🞪
        </button>
      </form>
    </li>
  );
}
