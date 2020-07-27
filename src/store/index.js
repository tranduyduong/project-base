import { createStore, combineReducers } from "redux";
import countReducer from "../reducers/countReducer";

export default createStore(
  combineReducers({
    counter: countReducer,
  })
);
