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
import WorkoutBeginner from "./features/workouts/WorkoutBeginner.jsx";
import WorkoutIntermediate from "./features/workouts/WorkoutIntermediate.jsx";
import WorkoutAdvanced from "./features/workouts/WorkoutAdvanced.jsx";

// import "features/programs.css";

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
      { path: "/workouts/beginner", element: <WorkoutBeginner /> },
      { path: "/workouts/intermediate", element: <WorkoutIntermediate /> },
      { path: "/workouts/advanced", element: <WorkoutAdvanced /> },
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
