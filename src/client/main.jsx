import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Tasks from "./features/tasks/Tasks";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Tasks /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/", element: <Home /> },
      { path: "/programs", element: <ProgramHome /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/account", element: <Account /> },
      { path: "/workouts/beginner", element: <BeginnerWorkouts /> },
      { path: "/workouts/intermediate", element: <IntermediateWorkouts /> },
      { path: "/workouts/advanced", element: <AdvancedWorkouts /> },
      { path: "/journal", element: <Journal /> },
      { path: "/foodJournal", element: <FoodJournal /> },
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
