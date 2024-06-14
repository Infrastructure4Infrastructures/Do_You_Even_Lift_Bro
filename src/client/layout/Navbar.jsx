import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import DropDownMenu from "./DropDownMenu";

import "./Navbar.less";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const token = useSelector(selectToken);
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className='navbar'>
      <h1 className='logo'>Do You Even Lift Bro</h1>

      <div className='nav-button'>
        <div className='navbar-large-screen'>
          {currentPath === "/login" || currentPath === "/register" ? (
            <li>
              <NavLink to='/'>Welcome Page</NavLink>
            </li>
          ) : currentPath === "/" ? (
            <li>
              <NavLink to='/programs'>Workout Programs</NavLink>
            </li>
          ) : currentPath === "/programs" ? (
            <li>
              <NavLink to='/meals'>Food journal</NavLink>
            </li>
          ) : null}
          {token ? (
            <li>
              <NavLink onClick={handleLogout}>Log Out</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to='/login'>Log In / Register</NavLink>
            </li>
          )}
        </div>
      </div>

      <div className='menu-toggle' onClick={toggleMenu}>
        <span
          className={`material-symbols-outlined ${isOpen ? "icon-close" : "icon-menu"}`}
        >
          {isOpen ? "close" : "menu"}
        </span>
      </div>

      {isOpen && (
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <DropDownMenu setOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
}
