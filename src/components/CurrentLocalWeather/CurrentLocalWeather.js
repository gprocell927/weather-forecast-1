import React, { Component } from 'react'
import SunriseSunset from '../../containers/SunriseSunset'


class CurrentLocalWeather extends Component {
  // <div className="currentLocalTemp">
  //   {weatherInfo.currentTemp}
  // </div>
  // <div className="currentCondition">
  //   {weatherInfo.currentWeather}
  // </div>
  render(){
    const { weatherInfo } = this.props
    return (
      <div>
        <SunriseSunset />
      </div>
    )
  }
}



export default CurrentLocalWeather
