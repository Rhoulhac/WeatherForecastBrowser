import axios from 'axios';

const API_KEY = config.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios returns a promise (doesn't actually contain any data)
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
