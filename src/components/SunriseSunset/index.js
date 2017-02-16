import React, { Component } from 'react'

class SunriseSunset extends Component {

  render(){
    console.log(this.props)
    const { times } = this.props
    return(
        <div>
          {times.sunrise}, {times.sunset}
        </div>
    )
  }
}

export default SunriseSunset
