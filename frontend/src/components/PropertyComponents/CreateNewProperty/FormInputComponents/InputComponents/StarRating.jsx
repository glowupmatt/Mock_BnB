import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating({ value, onChange }) {
  const handleClick = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`star ${star <= value ? "selected" : ""}`}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
}

export default StarRating;
