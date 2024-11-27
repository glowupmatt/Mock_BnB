import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import "./PropertyToggle.css";
import { getUserProperties } from "../../../store/fetchRequests/fetchCurrentUserSpots";
function PropertyToggle() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [haveProperties, setHaveProperties] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { data } = useSelector((state) => state.fetchUserSpots);

  useEffect(() => {
    if (sessionUser) {
      dispatch(getUserProperties());
    }
  }, [dispatch, sessionUser]);

  const userSpots = useMemo(() => data || [], [data]);
  const userId = sessionUser?.id;

  useEffect(() => {
    if (userSpots.length > 0) {
      setHaveProperties(true);
    } else {
      setHaveProperties(false);
    }
    setIsLoading(false);
  }, [userSpots, sessionUser]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="holdRef">
      {sessionUser ? (
        <div
          className={`property-toggle-container ${
            isHovered ? "hovered" : "non-hovered"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {haveProperties ? (
            <NavLink to={`/${userId}/current-properties/`}>
              Edit Your Properties
            </NavLink>
          ) : (
            <NavLink to={`/${userId}/new-property/`}>Host A Property</NavLink>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default PropertyToggle;
