import "./PageButton.css";
import { useDispatch, useSelector } from "react-redux";
import { subtractPageNumber } from "../../../../../store/FormPageNumber/pageNumberReducer";

function PrevPageButton() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  return (
    <button
      type="button"
      className="page-button"
      onClick={() => dispatch(subtractPageNumber(pageNumber))}
    >
      Prev Page
    </button>
  );
}

export default PrevPageButton;
