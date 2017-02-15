<<<<<<< HEAD:src/components/App.js
import React from 'react'
import CurrentLocalWeather from './CurrentLocalWeather'
=======
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CurrentLocalWeather from '../CurrentLocalWeather/CurrentLocalWeather'
>>>>>>> iteration-1:src/components/App/App.js

const App = () => {
  return (
    <CurrentLocalWeather />
  )
}

export default App
