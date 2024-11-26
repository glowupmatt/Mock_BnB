import "./PageButton.css";
import { useDispatch, useSelector } from "react-redux";
import { subtractPageNumber } from "../../../../../store/FormPageNumber/pageNumberReducer";
import { useState } from "react";

function PrevPageButton() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      type="button"
      className={`page-button ${isHovered ? "hovered" : "non-hovered"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => dispatch(subtractPageNumber(pageNumber))}
    >
      Prev Page
    </button>
  );
}

export default PrevPageButton;
