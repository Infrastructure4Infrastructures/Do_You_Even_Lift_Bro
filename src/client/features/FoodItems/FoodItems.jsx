import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
import FoodItem from "./FoodItem";
import { useGetFoodItemsQuery } from "./foodItemSlice";

//import "./Tasks.less";

/** Main interface for user to view food items */
export default function FoodItems() {
  const token = useSelector(selectToken);
  const { data: foodItems, isLoading } = useGetFoodItemsQuery();

  if (!token) {
    return <p>You must be an admin to see all users.</p>;
  }

  return (
    <div className="foodItems">
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New Food Item</h2>
      <NewFoodItem />
      <h2>All Users</h2>
      {isLoading && <p>Loading users...</p>}
      {foodItems && (
        <ul>
          {users.map((food_Item) => (
            <User key={food_Item.id} food_Item={food_Item} />
          ))}
        </ul>
      )}
    </div>
  );
}
