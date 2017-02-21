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
    let markup
    // const { weatherInfo } = this.props
    if (this.props.weatherInfo) {
      markup = (
        <div>
          <div className="currentLocalTemp">
            {this.props.weatherInfo.currentTemp}
          </div>
          <div className="currentCondition">
            {this.props.weatherInfo.currentWeather}
          </div>
        </div>
      )
    } else {
      markup = ''
    }

    return (
      <div>
        {markup}
        <SunriseSunset />
      </div>
    )
  }
}



export default CurrentLocalWeather
