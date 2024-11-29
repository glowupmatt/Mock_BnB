import { useState, useEffect } from "react";
import "./ReviewStyles.css";

function SelectedSpotsReviews({ review }) {
  const [userReview, setUserReview] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${review.userId}`);
      const data = await response.json();
      setUserReview(data);
    };
    fetchUser();
  }, [review.userId]);

  if (!userReview) return null;

  return (
    <div className="individual-review-container">
      <div className="user-review-container">
        <img src="/review-icon.svg" className="review-icons" />
        <p>
          {userReview.firstName} {userReview.lastName}
        </p>
      </div>
      <div className="review-rating-container">
        <p>{review.stars}</p>
        <p>{review.comment}</p>
      </div>
    </div>
  );
}

export default SelectedSpotsReviews;
