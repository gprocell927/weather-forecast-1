import axios from 'axios'
// export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

// export const receiveForecast = (forecastData) => ({
//   // action object
// })
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// }

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

export const appendCity = loc => {
  console.log('location: ',loc)
  return {
    type: 'APPEND_CITY',
    city: loc,
  }
}

export const fetchPinnedCity = (zipcode) => {
  (dispatch) => {
    return axios
      .get(`http://api.wunderground.com/api/58583248c38e2876/geolookup/q/${zipcode}.json`)
      .then(res => res.data.location)
      .then(loc => console.log(appendCity(loc)))
      .catch(err => console.log(err))
  }
}


// export const fetchPinnedCity = (city) => {
//   return {
//     type: 'PIN_CITY',
//     city,
//   }
// }
//
// export const deleteCity = (id) => {
//   return {
//     type: 'DELETE_CITY',
//     id
//   }
// }
