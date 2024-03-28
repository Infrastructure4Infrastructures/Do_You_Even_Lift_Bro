import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

import { usejournalEntryQuery } from "./journalEntrySlice";

export default function Journal() {
  const token = useSelector(selectToken);
  const { data: journalEntry, isLoading } = useGetjournalEntryQuery();

  if (!token) {
    return <p>You must be an admin to see all exercises.</p>;
  }

  return (
    <div className="journalEntry">
      <h1>Do You Even Lift Bro</h1>
      <h2>Add New Workout</h2>
      <Exercises />
      <h2>All Users</h2>
      {isLoading && <p>Loading users...</p>}
      {exercises && (
        <ul>
          {users.map((journalEntry) => (
            <User key={journalEntry.id} journalEntry={journalEntry} />
          ))}
        </ul>
      )}
    </div>
  );
}
