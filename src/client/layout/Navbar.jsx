import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./Navbar.less";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className='Navbar'>
      <h1>Do You Even Lift Bro</h1>
      <menu>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <li>
            <NavLink to='/'>Welcome Page</NavLink>
          </li>
        ) : location.pathname === "/meals" ? (
          <li>
            <NavLink to='/programs'>Workout Programs</NavLink>
          </li>
        ) : location.pathname === "/programs" ? (
          <li>
            <NavLink to='/meals'>Food journal</NavLink>
          </li>
        ) : null}
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to='/login'>Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}
