import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import axios from 'axios'
import moment from 'moment'
import Routes from './routes'
import store from './store'

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_LOCAL_WEATHER_START'})

  const toMoment = utcTime => moment.utc(utcTime, "hh:mm:ss a").local()

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      axios
        .get(`http://api.wunderground.com/api/58583248c38e2876/conditions/q/${latitude},${longitude}.json`)
          .then((res) => res.data.current_observation)
          .then((res) => ({                  currentTemp: res.temp_f,
          currentWeather: res.weather
          }))
          .then((weatherInfo) => dispatch({ type: 'SET_CURRENT_LOCAL_WEATHER', weatherInfo }))


      axios
        .get(`http://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`)
        .then((res) => res.data.results)
        .then((res) => ({ sunrise: res.sunrise, sunset: res.sunset }))
        .then(({ sunrise, sunset }) => ({
          sunrise: toMoment(sunrise).format("h:mm A"),
          sunset: toMoment(sunset).format("h:mm A")
        }))
        .then((times) => dispatch({ type: 'SET_SUNRISE_SUNSET', times }))
    })


  //do something async
  dispatch({type: 'BAR'})

})
render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
