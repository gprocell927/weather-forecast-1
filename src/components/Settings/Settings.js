import React, { Component } from 'react'

class Settings extends Component{
  constructor(props){
    super(props)
    this.state = { text: '' }
  }

  render(){
    const { handleSubmit, cities } = this.props

    return(
      <div className="settings">
        <form onSubmit={ (e) => {
          e.prevenDefault()
          handleSubmit(this.state.text, cities.length)
        }}>
          <h3>Settings Page</h3>
          <input
            value={this.state.text}
            placeholder="Enter Zip Code"
            onChange={ (e) => this.setState({ text: e.target.value} )}
          />
          <button
            children="Submit"
          />
        </form>
      </div>
    )
  }
}

export default Settings
