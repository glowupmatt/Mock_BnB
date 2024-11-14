const FETCH_DATA_REQUEST = "session/FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "session/FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "session/FETCH_DATA_FAILURE";

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch("/api/spots");
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
