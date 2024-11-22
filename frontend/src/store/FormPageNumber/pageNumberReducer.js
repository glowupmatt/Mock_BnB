const ADD_PAGE_NUMBER = "ADD_PAGE_NUMBER";
const SUBTRACT_PAGE_NUMBER = "SUBTRACT_PAGE_NUMBER";

const setPageNumber = (data) => ({
  type: ADD_PAGE_NUMBER,
  payload: data,
});

export const subtractPageNumber = (data) => ({
  type: SUBTRACT_PAGE_NUMBER,
  payload: data,
});

export const addPageNumber = (pageNumber) => async (dispatch) => {
  dispatch(setPageNumber(pageNumber + 1));
  return pageNumber;
};

export const subtractPageNumberCtrl = (pageNumber) => async (dispatch) => {
  dispatch(subtractPageNumber(pageNumber - 1));
  return pageNumber;
};

const initialState = {
  pageNumber: 2,
};

const pageNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case SUBTRACT_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return state;
  }
};

export default pageNumberReducer;
