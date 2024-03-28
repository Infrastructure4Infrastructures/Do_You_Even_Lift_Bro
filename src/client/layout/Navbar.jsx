import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./Navbar.less";

/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="top">
      <h1>Do You Even Lift Bro</h1>
      <menu>
      <li>
          <NavLink to="/">Welcome Page</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>

        <li>
          <NavLink to="/workout/beginner">Beginner</NavLink>
        </li>

        <li>
          <NavLink to="/workout/intermediate">Intermediate</NavLink>
        </li>

        <li>
          <NavLink to="/workout/advanced">Advanced</NavLink>
        </li>

        <li>
          <NavLink to="/">Food journal</NavLink>
        </li>

        <li>
          <NavLink to="/puppies">Puppies</NavLink>
        </li>

          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>

          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>

      </menu>
    </nav>
  );
}
