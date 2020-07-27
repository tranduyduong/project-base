import { createStore, combineReducers, applyMiddleware } from "redux";
import { applyMiddleWare } from "redux";
import countReducer from "../reducers/countReducer";
import promise from "redux-promise";
export default createStore(
  combineReducers({
    counter: countReducer,
  }),
  applyMiddleware(promise)
);
