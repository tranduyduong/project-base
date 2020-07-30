import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "../reducers";
import api from '../middlewares/api';
const middlewares = [api, promise]
export default createStore(rootReducer, applyMiddleware(...middlewares));
