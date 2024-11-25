import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PropertyToggle.css";

function PropertyToggle({ sessionUser, userSpots, userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (userSpots !== undefined) {
      setIsLoading(false);
    }
  }, [userSpots]);

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
          {userSpots.length > 0 ? (
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
