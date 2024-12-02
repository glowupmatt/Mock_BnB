import { useState, useEffect } from "react";
import "./ReviewStyles.css";
import { useSelector } from "react-redux";
import EditReview from "../EditReviewComponent/EditReview";
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import { useModal } from "../../../context/Modal";
import { FaStar } from "react-icons/fa";

function SelectedSpotsReviews({ review, changed, setChanged }) {
  const [userReview, setUserReview] = useState();
  const [ownedReview, setOwnedReview] = useState();
  const user = useSelector((state) => state.session.user);
  const { closeMenu } = useModal();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${review.userId}`);
      const data = await response.json();
      setUserReview(data);
    };
    fetchUser();

    if (review.userId === user.id) {
      setOwnedReview(review);
    }
  }, [review.userId, review, user.id, changed]);

  if (!userReview || !review.userId) return null;

  return (
    <div className="individual-review-container">
      <div className="user-review-container">
        <img src="/review-icon.svg" className="review-icons" />
        <p>
          {userReview.firstName} {userReview.lastName}
        </p>
      </div>
      <div className="review-rating-container">
        <p>
          {review.stars} <FaStar />
        </p>
        <p>{review.comment}</p>
      </div>
      {review.userId === user.id && (
        <OpenModalMenuItem
          modalComponent={
            <EditReview
              userReview={ownedReview}
              setReview={setOwnedReview}
              setChanged={setChanged}
            />
          }
          itemText="Edit Review"
          onItemClick={closeMenu}
        />
      )}
    </div>
  );
}

export default SelectedSpotsReviews;
