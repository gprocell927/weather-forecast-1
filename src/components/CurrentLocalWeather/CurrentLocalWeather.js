import React, { Component } from 'react'
import SunriseSunset from '../../containers/SunriseSunset'


class CurrentLocalWeather extends Component {

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

    // console.log(this.props);
    return (
      <div>
        {markup}
        <SunriseSunset />
      </div>
    )
  }
}



export default CurrentLocalWeather
