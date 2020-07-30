import axios from 'axios';
import {isEmpty, get} from 'lodash';
const Symbol = require('es6-symbol');
export const CALL_API = Symbol('Call API');

export default store => next => action => { // eslint-disable-line
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  let {method, url, types, data, headers, params} = callAPI;
  // because of issue http2 on android, we will have another api domain for Android only https://api-android.ymeet.me
  let apiUrl = `http://api.openweathermap.org/data/2.5/`;
  
  const API = axios.create({baseURL: apiUrl});
  API.interceptors.response.use(response => {
    return Promise.resolve(response);
  }, error => {
    return Promise.reject(error);
  });

  method = method || 'GET';
  const [requestType, successType, errorType] = types;
  const config = {
      method,
      url,
      data,
      params
    };
    // config.headers = {
    //   Authorization: `Bearer ${token}`
    // };
    next({type: requestType});
    return API.request(config)
      .then(res => {
        next({res: res, type: successType});
        return Promise.resolve({res: res, type: successType});
      })
      .catch(err => {
        next({err, type: errorType});
        return Promise.reject({err, type: errorType});
      });
};
