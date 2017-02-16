const timesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUNRISE_SUNSET':
      return Object.assign({}, state, action.times)
    default:
      return state
  }
}

export default timesReducer
