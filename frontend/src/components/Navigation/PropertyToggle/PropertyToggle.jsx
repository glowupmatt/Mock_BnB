import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./PropertyToggle.css";

function PropertyToggle({ sessionUser, userSpots, userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (userSpots !== undefined) {
      setIsLoading(false);
    }
  }, [userSpots]);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {sessionUser ? (
        <div
          ref={ref}
          className={`property-toggle-container ${isHovered ? "hovered" : ""}`}
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
