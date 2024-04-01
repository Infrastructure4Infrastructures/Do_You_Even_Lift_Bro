import { useState } from "react";
import { useDeleteFoodItemMutation, useEditFoodItemMutation } from "./foodItemSlice";
//import { food_Item } from "../../../server/prisma";

/** Allows user to read, update, and delete a food item */
export default function FoodItem({ foodItem }) {
  const [editFoodItem] = useEditFoodItemMutation();
  const [deleteFoodItem] = useDeleteFoodItemMutation();

  const [description, setDescription] = useState(description);

  /** Updates the food item's `done` status */
  const toggleFoodItem = async (evt) => {
    const done = evt.target.checked;
    editFoodItem({ ...foodItem, done });
  };

  /** Saves the food item's */
  const save = async (evt) => {
    evt.preventDefault();
    editFoodItem({ ...foodItem, description });
  };

  /** Deletes the food item */
  const onDelete = async (evt) => {
    evt.preventDefault();
    deleteFoodItem(foodItem.id);
  };

  return (
    <li class="foodForms">
      <form onSubmit={save}>
        <input type="checkbox" checked={foodItem.done} onChange={toggleFoodItem} />
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
