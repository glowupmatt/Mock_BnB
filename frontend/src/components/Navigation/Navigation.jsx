import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

import PropertyToggle from "./PropertyToggle/PropertyToggle";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul className="navigation-container">
      <li>
        <NavLink to="/">
          <img src="/images/logo.svg" />
        </NavLink>
      </li>
      {isLoaded && (
        <li className="user-controls-container">
          <PropertyToggle sessionUser={sessionUser} />
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
