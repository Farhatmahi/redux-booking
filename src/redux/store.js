import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import bookingReducer from "./booking/bookingReducer";

const store = createStore(
  bookingReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
