import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken } from "../features/auth/authSlice";

export default function DropDownMenu({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector(selectToken);
  const currentPath = location.pathname;

  const handleClick = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const handleLogoutAndClose = async () => {
    handleClick();
    await handleLogout();
  };

  return (
    <>
      <div className='drop-nav-button'>
        <menu>
          {currentPath === "/login" || currentPath === "/register" ? (
            <li>
              <NavLink to='/' onClick={handleClick}>
                Welcome Page
              </NavLink>
            </li>
          ) : currentPath === "/" ? (
            <li>
              <NavLink to='/programs' onClick={handleClick}>
                Workout Programs
              </NavLink>
            </li>
          ) : currentPath === "/programs" ? (
            <li>
              <NavLink to='/meals' onClick={handleClick}>
                Food journal
              </NavLink>
            </li>
          ) : null}
          {token ? (
            <li>
              <NavLink onClick={handleLogoutAndClose}>Log Out</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to='/login' onClick={handleClick}>
                Log In / Register
              </NavLink>
            </li>
          )}
        </menu>
      </div>
    </>
  );
}
