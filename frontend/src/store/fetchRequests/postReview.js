const POST_REVIEW = "fetchRequests/POST_REVIEW";

const postReview = (review) => ({
  type: POST_REVIEW,
  payload: review,
});

export const postReviewRequest = (spotId, review) => (dispatch) => {
  dispatch(postReview({ spotId, review }));
};

const initialState = {
  data: {},
};

const postReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REVIEW:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default postReviewReducer;
