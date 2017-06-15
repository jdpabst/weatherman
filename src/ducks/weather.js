import { buildURL, formatWeatherData } from '../utils/weatherUtils';
// don't need axios in {} because the developers exported default...
import axios from 'axios';

// first thing for a weather app, we want to know the location to get weather from.
export function setWeather(location){
  return{
    type: SET_WEATHER,
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2129f4d62c8a52e0ee91ba73b0de6f99`)
                  .then((res)=>res.data)
  }
}
const initialState = {
  error: false,
  loading: false,
  search: true,
  weather: {}
};

const RESET = "RESET";
const SET_WEATHER = "SET_WEATHER"

export default function weather( state = initialState, action ) {
  var abc = 123;
  switch ( action.type ) {
    case RESET: return initialState;
  // /// handling results /// //
    case SET_WEATHER + '_PENDING':
      return{
        error: false,
        loading: true,
        search: false,
        weather: {}
      }
    case SET_WEATHER + '_FULFILLED':
    // it worked
      return {
        error: false,
        loading: false,
        search: false,
        weather: action.payload
      }
    case SET_WEATHER + '_REJECTED':
    // something broke
      break;
  // /// handling results /// //
    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}

