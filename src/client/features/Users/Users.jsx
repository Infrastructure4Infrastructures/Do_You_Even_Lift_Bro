import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
// import Task from "./Task";
import { useGetUsersQuery } from "./userSlice";

//import "./Tasks.less";

/** Main interface for admin to view users */
export default function Users() {
  const token = useSelector(selectToken);
  const { data: users, isLoading } = useGetUsersQuery();

  if (!token) {
    return <p>You must be an admin to see all users.</p>;
  }

  return (
    <div className="users">
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New User</h2>
      <NewUser />
      <h2>All Users</h2>
      {isLoading && <p>Loading users...</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}
