import SelectedSpotsReviews from "./SelectedSpotsReviews";

function ReviewsMainComponent({ spot }) {
  if (!spot) return null;
  if (spot.Reviews.length === 0) return "No Reviews";
  return (
    <div>
      <p>Reviews</p>
      <div>
        {spot.Reviews.map((review) => {
          return <SelectedSpotsReviews key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
}

export default ReviewsMainComponent;
