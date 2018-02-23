import axios from 'axios';

const API_KEY = config.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const fetchWeatherAction = (payload) => ({
  type: FETCH_WEATHER,
  payload: payload
})

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  return (dispatch, getState) => {
    const url = `${ROOT_URL}&q=${city},us`;
    // axios returns a promise (doesn't actually contain any data)
    const request = axios.get(url);

    request.then((payload) => {
      dispatch(fetchWeatherAction(payload));
    }, error => {
      if (error.request.status == 404){
        let enteredCity = city.charAt(0).toUpperCase() + city.slice(1);

        alert(`${enteredCity} is not a valid city. Please try another city name.`)
      } else {
        alert("An error has occured")
      }
    })
  }
}
