import { GET_WEATHER } from "./Constant";

const initialState = {
  data: [],
};
export default weather = (state = initialState, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      console.log('API_REQUEST');
      return state;
    case 'API_SUCCESS':
      console.log('API_SUCCESS', action);
      return {...state, data: action.res.data};
    case 'API_FAILURE':
      console.log('API_FAILURE');
      return state;
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
