import "./AddReviewComponents.css";
import Input from "../../PropertyComponents/CreateNewProperty/FormInputComponents/InputComponents/Input";
import { csrfFetch } from "../../../store/csrf";
import { useEffect, useState } from "react";
import { useModal } from "../../../context/Modal";

function AddReviewComponent({ spot, setReview }) {
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorButton, setErrorButton] = useState("");
  const { closeModal } = useModal();

  const spotId = spot.id;

  useEffect(() => {
    if (comment.length > 0 && stars >= 1 && stars <= 5) {
      setButtonDisabled(false);
      setErrorButton("");
    } else {
      setButtonDisabled(true);
      setErrorButton(
        "Please provide a comment and a star rating between 1 and 5."
      );
    }
  }, [comment, stars]);

  async function handleSubmit(e) {
    e.preventDefault();

    const reviewBody = {
      comment,
      stars,
    };

    try {
      await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewBody),
      });
      setReview(reviewBody);
      console.log("Review added");
      closeModal();
    } catch (err) {
      setErrors("User already has a review.");
    }
  }

  return (
    <div className="comment-form-container">
      <p>How was your stay?</p>
      <form onSubmit={handleSubmit}>
        <Input
          classNameInput="input-container-top"
          label="comment"
          title="Comment"
          inputType="textarea"
          value={comment}
          setValue={setComment}
        />
        <Input
          classNameInput="input-container-bottom"
          label="stars"
          title="Stars"
          value={stars}
          setValue={setStars}
          dataType="number"
          inputType="number"
        />
        {errors && <p className="error-styles">{errors}</p>}
        <button
          disabled={buttonDisabled}
          className="submit-comment-button"
          type="submit"
          value="Submit"
        >
          Submit your review
        </button>
        {buttonDisabled && <p className="error-styles">{errorButton}</p>}
      </form>
    </div>
  );
}

export default AddReviewComponent;
