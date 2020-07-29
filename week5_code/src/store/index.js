import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "../reducers";

export default createStore(rootReducer, applyMiddleware(promise));
