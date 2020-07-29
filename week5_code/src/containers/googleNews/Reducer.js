import { FETCH_GOOGLE_NEWS } from "./Constant";

const initialState = {
  data: [],
};

const googleNews = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_NEWS:
      console.log("action", action);

      return state;
    default:
      return state;
  }
};
export default googleNews;
