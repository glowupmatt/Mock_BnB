const ADD_PAGE_NUMBER = "ADD_PAGE_NUMBER";
const SUBTRACT_PAGE_NUMBER = "SUBTRACT_PAGE_NUMBER";
const RESET_PAGE_NUMBER = "RESET_PAGE_NUMBER";

const setAddPageNumber = (data) => ({
  type: ADD_PAGE_NUMBER,
  payload: data,
});

const setSubtractPageNumber = (data) => ({
  type: SUBTRACT_PAGE_NUMBER,
  payload: data,
});

const setPageNumberToZero = () => ({
  type: RESET_PAGE_NUMBER,
});

export const addPageNumber = (pageNumber) => async (dispatch) => {
  dispatch(setAddPageNumber(pageNumber + 1));
  return pageNumber;
};

export const subtractPageNumber = (pageNumber) => async (dispatch) => {
  dispatch(setSubtractPageNumber(pageNumber - 1));
  return pageNumber;
};

export const resetPageNumber = () => async (dispatch) => {
  dispatch(setPageNumberToZero());
};

const initialState = {
  pageNumber: 1,
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
    case RESET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: 1,
      };
    default:
      return state;
  }
};

export default pageNumberReducer;
