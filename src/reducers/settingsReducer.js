const pinnedCities = (state=[], action) => {
  switch(action.type){
    case 'PIN_CITY':
      return [...state,{id: action.id, city: action.city, completed: false}]
    case 'DELETE_CITY':
      return state.map(city => {
        if(city.id !== action.id){
          return city
        }
        return Object.assign({}, city, {completed: !city.completed})
      })
      default:
        return state
  }
}

export default pinnedCities
