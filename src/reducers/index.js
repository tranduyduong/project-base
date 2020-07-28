import { combineReducers } from "redux";
import countReducer from "../containers/counter/Reducer";
import googleNewsReducer from "../containers/googleNews/Reducer";
export default combineReducers({
  counter: countReducer,
  news: googleNewsReducer,
});
