import { combineReducers } from 'redux'
import times from './timesReducer'
import weatherInfo from './currentLocalWeatherReducer'

const rootReducer = combineReducers({
  times,
  weatherInfo
})

export default rootReducer
