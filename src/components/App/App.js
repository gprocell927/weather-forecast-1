import React, { Component } from 'react'
import CurrentLocalWeather from '../CurrentLocalWeather/CurrentLocalWeather'
import moment from 'moment'

class App extends Component {
  render() {
    const { times } = this.props
    const d = new Date()
    const h = d.getHours() // returns a number
    //if the current hour is < 12 or > sunrise, display morning
    // if the current hour is >= 12 or < sunset, display afternoon
    // if the current hour is >= sunset or < sunset + 3 , display evening.
    // if the current hour is >= sunset + 3 or < sunrise, display night
    return (
      <CurrentLocalWeather />
    )
  }
}
export default App
