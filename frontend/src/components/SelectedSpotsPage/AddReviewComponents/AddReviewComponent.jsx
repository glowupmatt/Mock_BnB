import "./AddReviewComponents.css";
import Input from "../../PropertyComponents/CreateNewProperty/FormInputComponents/InputComponents/Input";
import { csrfFetch } from "../../../store/csrf";
import { useState } from "react";

function AddReviewComponent({ spot, setReview }) {
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const spotId = spot.id;

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
    } catch (err) {
      console.log(err);
    }
    console.log(comment, stars);
  }

  return (
    <div className="comment-form-container">
      <p>Add a comment</p>
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
        <input className="submit-comment-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddReviewComponent;
