import SelectedSpotsReviews from "./SelectedSpotsReviews";
import { FaStar } from "react-icons/fa";

function ReviewsMainComponent({ spot }) {
  if (!spot) return null;
  if (spot.Reviews.length === 0) return "No Reviews";
  console.log(spot);
  const starAverage = spot.avgStarRating
    ? spot.avgStarRating.toFixed(2)
    : "NEW PROPERTY";
  return (
    <div>
      <div className="ratings-details">
        <p>Reviews</p>
        <div className="rating-values-total">
          <FaStar className="star-icon" />
          <p>{starAverage}</p>
          <p>
            {spot.Reviews.length}{" "}
            <span className="review-span">
              Review{spot.Reviews.length === 1 ? "" : "s"}
            </span>
          </p>
        </div>
      </div>
      <div>
        {spot.Reviews.map((review) => {
          return <SelectedSpotsReviews key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
}

export default ReviewsMainComponent;
