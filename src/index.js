import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import logger from 'redux-logger'
import axios from 'axios'
import Routes from './routes'
import thunk from 'redux-thunk'

const rootReducer = (state={}, action) => {
  return state
}
const middleware = [thunk, logger()]

const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_LOCAL_WEATHER_START'})

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const latitude = position.coords.latitude
      console.log('latitude: ', latitude);
      const longitude = position.coords.longitude
      console.log('longitude: ', longitude);

      axios
        .get(`http://api.wunderground.com/api/58583248c38e2876/conditions/q/${latitude},${longitude}.json`)
        .then((res) => console.log(res))
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
