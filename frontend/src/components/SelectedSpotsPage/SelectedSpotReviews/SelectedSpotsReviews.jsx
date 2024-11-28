import { useState, useEffect } from "react";

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
    <div>
      <div>
        <img src="/review-icon.svg" className="review-icons" />
        <p>
          {userReview.firstName} {userReview.lastName}
        </p>
      </div>
      <p>{review.stars}</p>
      <p>{review.comment}</p>
    </div>
  );
}

export default SelectedSpotsReviews;
