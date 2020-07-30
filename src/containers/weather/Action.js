import { GET_WEATHER } from './Constant';
import { CALL_API } from '../../middlewares/api';


export function getWeather(lat, lon) {
  return {
    [CALL_API]: {
      url: 'weather',
      method: 'get',
      params: {
        lat,
        lon,
        appid: '3de6162d3745365b168ade2bbe4e1d66'
      },
      authenticated: true,
      types: ['API_REQUEST', 'API_SUCCESS', 'API_FAILURE']
    }
  };
}

// export const  getWeather = async (latitude, longitude, imgUrl = "") => {
//   const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
//   let jsonData;
//     const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
//     try {
//       const response = await fetch(api);
//       jsonData = await response.json();
//       console.log("jsonData", jsonData);
//     } catch (error) {
//     }

//   return {
//     type: GET_WEATHER,
//     data: jsonData,
//   };
// }
