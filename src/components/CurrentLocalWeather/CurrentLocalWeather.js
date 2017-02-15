import React, { Component } from 'react'
import SunriseSunset from '../SunriseSunset/SunriseSunset'

class CurrentLocalWeather extends Component {

  render(){
    return (
      <section>
        <p>Local current forecast goes here</p>
        <SunriseSunset />
      </section>
    )
  }
}



export default CurrentLocalWeather
