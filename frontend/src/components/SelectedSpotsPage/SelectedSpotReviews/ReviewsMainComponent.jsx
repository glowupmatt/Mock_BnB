import SelectedSpotsReviews from "./SelectedSpotsReviews";

function ReviewsMainComponent({ spot }) {
  if (!spot) return null;
  if (!spot.Reviews) return "No Reviews";
  return (
    <div>
      <p>Reviews</p>
      <div>
        {spot.Reviews.map((review) => {
          return (
            <div key={review.id}>
              <SelectedSpotsReviews review={review} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewsMainComponent;
