import React, { Component } from 'react'
import SunriseSunset from '../../containers/SunriseSunset'


class CurrentLocalWeather extends Component {

  render(){
    const { weatherInfo } = this.props
    return (
      <div>
        <div className="currentLocalTemp">
          {weatherInfo.currentTemp}
        </div>
        <div className="currentCondition">
          {weatherInfo.currentWeather}
        </div>
        <SunriseSunset />
      </div>
    )
  }
}



export default CurrentLocalWeather
