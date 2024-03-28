import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Programs from "./features/programs/Programs";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Meals from "./features/meals/Meals.jsx";
import Workout from "./features/workouts/Workout.jsx";
import Exercises from "./features/exercises/Exercises.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { path: "/", element: <Programs /> },
      //{ path: "/tasks", element: <Tasks /> },
      { path: "/login", element: <AuthForm /> },
      // { path: "/", element: <Home /> },
      { path: "/programs", element: <Programs /> },
      // { path: "/login", element: <AuthForm /> },
      { path: "/workouts", element: <Exercises /> },
      // { path: "/workouts/beginner", element: <BeginnerWorkouts /> },
      // { path: "/workouts/intermediate", element: <IntermediateWorkouts /> },
      // { path: "/workouts/advanced", element: <AdvancedWorkouts /> },
      { path: "/meals", element: <Meals /> },
      // { path: "/foodJournal", element: <FoodJournal /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
