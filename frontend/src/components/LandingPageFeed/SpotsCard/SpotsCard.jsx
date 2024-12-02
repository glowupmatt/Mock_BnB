import { Link } from "react-router-dom";
import "./SpotsCard.css";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";

function SpotsCard({ spot }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [starAverage, setStarAverage] = useState();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  const toolTip = () => {
    return (
      <div
        className="tooltip spot-name"
        style={{ top: mousePosition.y + 10, left: mousePosition.x + 10 }}
      >
        <p>{spot.name}</p>
      </div>
    );
  };
  useEffect(() => {
    if (spot && spot.avgRating !== undefined) {
      setStarAverage(spot.avgRating);
    } else {
      setStarAverage(NaN);
    }
  }, [spot]);

  if (!spot) return <>No Current Spot</>;
  return (
    <Link
      to={`/spots/${spot.id}`}
      className="spot-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && toolTip()}
      <div className="spot-data-container">
        <div className="spot-image-container">
          <img className="spot-image" src={spot.previewImage} alt={spot.name} />
        </div>
        <div className="spot-info-container">
          <div>
            <h3 className="spot-location">
              {spot.city}, {spot.country}
            </h3>
            <p className="spot-price">${spot.price} night</p>
          </div>
          {spot ? (
            <div className="star-rating-container">
              {spot.reviews.length === 0 ? (
                <>
                  <FaRegNewspaper className="new-icon" />
                  <p>New Spot</p>
                </>
              ) : (
                <>
                  <FaStar className="star-icon" />
                  <p>{starAverage}</p>
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default SpotsCard;
