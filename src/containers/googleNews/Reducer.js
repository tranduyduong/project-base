import { FETCH_GOOGLE_NEWS } from "./Constant";

const initialState = {
  data: [],
};
export default googleNews = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_NEWS:
      console.log("action", action);
      break;
    default:
      return state;
  }
};
