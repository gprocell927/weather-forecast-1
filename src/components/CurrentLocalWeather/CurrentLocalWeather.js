import React, { Component } from 'react'
import SunriseSunset from '../SunriseSunset/SunriseSunset'

class CurrentLocalWeather extends Component {

//   componentWillMount(){
//     const fetchLocalCurrentWeather = (position) => {
//       let latitude = position.coords.latitude
//       let longitude = position.coords.longitude
//       console.log(latitude, longitude)
//   }
// }

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
