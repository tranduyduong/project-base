import { combineReducers } from "redux";
import countReducer from "../containers/counter/Reducer";
import googleNewsReducer from "../containers/googleNews/Reducer";
import weatherReducer from '../containers/weather/Reducer';

export default combineReducers({
  counter: countReducer,
  news: googleNewsReducer,
  weather: weatherReducer
});
