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
    // <nav className='Navbar'>
    //   <h1 class="logo" >Do You Even Lift Bro</h1>
    //   <menu>
    //     {location.pathname === "/login" || location.pathname === "/register" ? (
    //       <li>

    //         <NavLink class="navlink" id="welcomeid" to='/'>Welcome Page</NavLink>

    //       </li>
    //     ) : location.pathname === "/meals" ||
    //       location.pathname === "/workouts" ||
    //       location.pathname !== "/" ? (
    //       <li>
    //         <NavLink class="navlink" to='/programs'>Workout Programs</NavLink>
    //       </li>
    //     ) : location.pathname === "/programs" ? (
    //       <li>
    //         <NavLink class="navlink" to='/meals'>Food journal</NavLink>
    //       </li>
    //     ) : null}
    //     {token ? (
    //       <li>
    //         <a class="navlink" onClick={handleLogout}>Log Out</a>
    //       </li>
    //     ) : (
    //       <li>
    //         <NavLink class="navlink" to='/login'>Log In / Register</NavLink>
    //       </li>
    //     )}
    //   </menu>
    // </nav>
    <nav className='navbar'>
      <label
        className='navbar-toggle'
        id='js-navbar-toggle'
        htmlFor='chkToggle'
      >
        <i className='fa fa-bars'></i>
      </label>
      <a href='#' className='logo'>
        Do You Even Lift Bro
      </a>
      <input type='checkbox' id='chkToggle'></input>
      <ul className='main-nav' id='js-menu'>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <li>
            <NavLink to='/' Welcome Page href='#' className='nav-links'>
              Welcome Page
            </NavLink>
          </li>
        ) : location.pathname === "/meals" ||
          location.pathname === "/workouts" ||
          location.pathname !== "/" ? (
          <li>
            <NavLink to='/programs' href='#' className='nav-links'>
              Workout Programs
            </NavLink>
          </li>
        ) : location.pathname === "/programs" ? (
          <li>
            <NavLink to='/meals' href='#' className='nav-links'>
              Food journal
            </NavLink>
          </li>
        ) : null}
        {token ? (
          <li>
            <NavLink onClick={handleLogout} href='#' className='nav-links'>
              Log Out
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to='/login' href='#' className='nav-links'>
              Log In / Register
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
