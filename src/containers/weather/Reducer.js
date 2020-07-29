import { GET_WEATHER } from "./Constant";

const initialState = {
  data: [],
};
export default weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      console.log("action", action);
      return {
        ...state,
        data: action.data.articles
      }
      break;
    default:
      return state;
  }
};
