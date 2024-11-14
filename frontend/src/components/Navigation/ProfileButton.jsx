import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
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
  };

  const loginWithGuest = () => {
    dispatch(
      sessionActions.login({ credential: "guest", password: "guest1234" })
    );
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div>
      <button className="profile-button" onClick={toggleMenu}>
        <FaUserCircle className="user-icon" size={50} />
      </button>
      <div className="dropdown-container">
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <>
              <li>{user.username}</li>
              <li>
                {user.firstName} {user.lastName}
              </li>
              <li>{user.email}</li>
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
    </div>
  );
}

export default ProfileButton;
