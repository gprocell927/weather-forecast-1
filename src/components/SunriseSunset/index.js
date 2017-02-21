import React, { Component } from 'react'
import './index.css'

class SunriseSunset extends Component {

  render(){
    const { times } = this.props
    return(
        <div className="sunrise-sunset">
          <div className="sunrise"> {times.sunrise} </div>
          <div className="sunset"> {times.sunset} </div>
        </div>
    )
  }
}

export default SunriseSunset
