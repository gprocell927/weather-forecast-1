const pinnedCities = (state=[],action) => {
  switch(action.type) {
    case 'APPEND_CITY':
      return[...state,{city: action.city}]
    default:
      return state
  }
}

export default pinnedCities
