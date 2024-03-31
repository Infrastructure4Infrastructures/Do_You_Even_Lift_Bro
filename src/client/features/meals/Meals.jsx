import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useState } from "react";
import Meal from "./Meal.jsx";
import { useCreateMealMutation, useGetMealsQuery } from "./mealSlice";

export default function Meals() {
  const token = useSelector(selectToken);
  const { data: meals } = useGetMealsQuery();
  const [foodEntry, setFoodEntry] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const [createMeal] = useCreateMealMutation();

  const addFood = (event) => {
    event.preventDefault();
    createMeal({ foodEntry, calories, date });
    setFoodEntry("");
    setCalories("");
    setDate("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  if (!token) {
    return <p>You must be logged in to see meals.</p>;
  }
  return (
    <div>
      <h3>
        Track your meals in the input below. Click "Add Meal" to add a new meal
        entry.
      </h3>
      <form onSubmit={addFood}>
        <label for='foodEntry'>
          Food Entry:
          <input
            type='text'
            value={foodEntry}
            onChange={(e) => setFoodEntry(e.target.value)}
          />
        </label>

        <label for='Calories'>
          Calories:
          <input
            type='number'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </label>

        <label for='dateTime'>
          Date/Time:
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button type='submit'>Add Food</button>
      </form>
      <Meal meals={meals} newMeal={{ foodEntry, calories, date }} />
    </div>
  );
}
