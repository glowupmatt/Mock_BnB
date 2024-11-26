const FETCH_USERSPOTS_REQUEST = "session/FETCH_USERSPOTS_REQUEST";
const FETCH_USERSPOTS_SUCCESS = "session/FETCH_USERSPOTS_SUCCESS";
const FETCH_USERSPOTS_FAILURE = "session/FETCH_USERSPOTS_FAILURE";

const fetchDataRequest = () => ({
  type: FETCH_USERSPOTS_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_USERSPOTS_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_USERSPOTS_FAILURE,
  payload: error,
});

export const getUserProperties = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch(`/api/user/spots`);
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
    return response;
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchUserSpotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERSPOTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERSPOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_USERSPOTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUserSpotReducer;
