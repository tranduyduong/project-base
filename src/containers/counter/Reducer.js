import { COUNTER_CHANGE } from "./Constant";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case "FETCH_DATA":
      console.log("Update Reducer here: FETCH_DATA", action);
      return state;
    default:
      return state;
  }
};
export default countReducer;
