export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

export const receiveForecast = (forecastData) => ({
  // action object
})

export const fetchForecast = options => dispatch => {
  // return fetch API call
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
