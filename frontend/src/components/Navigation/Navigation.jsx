import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { getUserProperties } from "../../store/fetchRequests/fetchCurrentUserSpots";
import PropertyToggle from "./PropertyToggle/PropertyToggle";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { data, loading, error } = useSelector((state) => state.fetchUserSpots);

  useEffect(() => {
    dispatch(getUserProperties());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const userSpots = data || [];
  const userId = sessionUser?.id;

  return (
    <ul className="navigation-container">
      <li>
        <NavLink to="/">
          <img src="/images/logo.svg" />
        </NavLink>
      </li>
      {isLoaded && (
        // NEED TO ADD CHANGES TO BOTH MODALS
        <li className="user-controls-container">
          <PropertyToggle
            sessionUser={sessionUser}
            userSpots={userSpots}
            userId={userId}
          />
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;
