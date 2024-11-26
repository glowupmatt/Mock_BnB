import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import fetchSpotsReducer from "./fetchRequests/fetchAllSpots";
import fetchUserSpotReducer from "./fetchRequests/fetchCurrentUserSpots";
import pageNumberReducer from "./FormPageNumber/pageNumberReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  fetchAllSpots: fetchSpotsReducer,
  fetchUserSpots: fetchUserSpotReducer,
  pageNumber: pageNumberReducer,
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
