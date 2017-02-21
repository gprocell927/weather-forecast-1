const currentLocalWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LOCAL_WEATHER':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default currentLocalWeatherReducer
