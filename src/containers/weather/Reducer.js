import { GET_WEATHER } from "./Constant";

const initialState = {
  data: [],
};
export default weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        data: action.data
      }
      break;
    default:
      return state;
  }
};
