import { GET_WEATHER } from './Constant';

export const  getWeather = async (latitude, longitude, imgUrl = "") => {
  const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
  let jsonData;
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    try {
      const response = await fetch(api);
      jsonData = await response.json();
      console.log("jsonData", jsonData);
      setLocation(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(false);
    }

  return {
    type: GET_WEATHER,
    data: jsonData,
  };
}
