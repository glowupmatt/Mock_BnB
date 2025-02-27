const FETCH_ALLSPOTS_REQUEST = "session/FETCH_ALLSPOTS_REQUEST";
const FETCH_ALLSPOTS_SUCCESS = "session/FETCH_ALLSPOTS_SUCCESS";
const FETCH_ALLSPOTS_FAILURE = "session/FETCH_ALLSPOTS_FAILURE";

const fetchDataRequest = () => ({
  type: FETCH_ALLSPOTS_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_ALLSPOTS_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_ALLSPOTS_FAILURE,
  payload: error,
});

export const fetchAllSpots = (pageNumber) => async (dispatch) => {
  // export const fetchAllSpots = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    // const spots = await fetch(`/api/spots/`);
    const spots = await fetch(`/api/spots?page=${pageNumber}&size=12`);
    const data = await spots.json();
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

const fetchSpotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALLSPOTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALLSPOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ALLSPOTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchSpotsReducer;
