import React, { Component } from 'react'
import CurrentLocalWeather from '../../containers/CurrentLocalWeatherContainer'
import Settings from '../../containers/Settings'

class App extends Component {
  render() {
    // const { times } = this.props
    // const d = new Date()
    // const h = d.getHours() // returns a number
    //if the current hour is < 12 or > sunrise, display morning
    // if the current hour is >= 12 or < sunset, display afternoon
    // if the current hour is >= sunset or < sunset + 3 , display evening.
    // if the current hour is >= sunset + 3 or < sunrise, display night
    let markup
    if (this.props.path === '/settings'){
      markup = (
        <Settings />
      )
    } else {
      markup = ''
    }
    return (
      <div>
        {markup}
        <CurrentLocalWeather />
      </div>
    )
  }
}
export default App
