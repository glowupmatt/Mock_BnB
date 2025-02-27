import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./ProfileButton.css";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const userId = user?.id;

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    navigate("/");
  };

  const loginWithGuest = () => {
    dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="profile-button" onClick={toggleMenu}>
        <FaUserCircle className="user-icon" size={50} />
      </button>
      <div className="dropdown-container">
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <>
              <li>
                Hello {user.firstName} {user.lastName}
              </li>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <NavLink
                to={`/${userId}/new-property/`}
                className="host-new-property-link"
              >
                Host A New Property
              </NavLink>
              <li>
                <button className="profile-logout-button" onClick={logout}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <div className="modal-menu-item-container">
                <OpenModalMenuItem
                  itemText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
                <OpenModalMenuItem
                  itemText="Sign Up"
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
                <div>
                  <button
                    onClick={() => loginWithGuest()}
                    className="guest-login-button"
                  >
                    Log in with guest
                  </button>
                </div>
              </div>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default ProfileButton;
