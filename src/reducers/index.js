import { combineReducers } from 'redux'
import times from './timesReducer'
import weatherInfo from './currentLocalWeatherReducer'
import pinnedCities from './pinnedCitiesReducer'

const rootReducer = combineReducers({
  times,
  weatherInfo,
  pinnedCities
})

export default rootReducer
