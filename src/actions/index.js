export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

export const receiveForecast = (forecastData) => ({
  // action object
})

export const fetchForecast = options => dispatch => {
  // return fetch API call
}

export const setCurrentLocalWeather = (weatherInfo) => {
  return {
    type: 'SET_CURRENT_LOCAL_WEATHER',
    weatherInfo
  }
}

export const setSunriseSunset = (times) => {
  return {
    type: 'SET_SUNRISE_SUNSET',
    times
  }
}

export const pinCity = (city) => {
  return {
    type: 'PIN_CITY',
    city
  }
}

export const deleteCity = (id) => {
  return {
    type: 'DELETE_CITY',
    id
  }
}
