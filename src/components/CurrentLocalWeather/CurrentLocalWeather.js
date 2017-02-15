import React, { Component } from 'react'
import SunriseSunset from '../SunriseSunset/SunriseSunset'

class CurrentLocalWeather extends Component {

<<<<<<< HEAD:src/components/CurrentLocalWeather.js

//   componentWillMount(){
//     const fetchLocalCurrentWeather = (position) => {
//       let latitude = position.coords.latitude
//       let longitude = position.coords.longitude
//       console.log(latitude, longitude)
//   }
// }

=======
>>>>>>> iteration-1:src/components/CurrentLocalWeather/CurrentLocalWeather.js
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
