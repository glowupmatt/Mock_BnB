import "./NextPageButton.css";
import { useDispatch, useSelector } from "react-redux";
import { addPageNumber } from "../../../../store/FormPageNumber/pageNumberReducer";

function NextPageButton({ isDisabled }) {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  return (
    <button
      type="button"
      disabled={isDisabled}
      className="next-page-button"
      onClick={() => dispatch(addPageNumber(pageNumber))}
    >
      Next Page
    </button>
  );
}

export default NextPageButton;
