import { useState, useEffect } from "react";
import "./ReviewStyles.css";
import { useSelector } from "react-redux";
import AddReviewComponent from "../AddReviewComponents/AddReviewComponent";
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import { useModal } from "../../../context/Modal";
import { FaStar } from "react-icons/fa";

function SelectedSpotsReviews({ review, spot, changed, setChanged }) {
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
        <p>
          {review.stars} <FaStar />
        </p>
        <p>{review.comment}</p>
      </div>
      {review.userId === user.id && (
        <OpenModalMenuItem
          modalComponent={
            <AddReviewComponent
              spot={spot}
              userReview={ownedReview}
              setReview={setOwnedReview}
              update={true}
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
