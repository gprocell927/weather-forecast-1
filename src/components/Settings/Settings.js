import React, { Component } from 'react'

const zipcodeIsValid = (zipcode) => {
  // if (zipcode.match(/\d\d\d\d\d/) && zipcode.length === 5){
  //   console.log('it matches');
  // } else {
  //   console.log('it does not match');
  // }
  return true;
}

class Settings extends Component{
  constructor(props){
    super(props)
    this.state = { zipcode: '90210' }
    // this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    const { zipcode } = this.state;
    if (zipcodeIsValid(zipcode) === true) {
      return this.props.fetchPinnedCity(zipcode)
    } //else {
    //   // show some errors (but probably just do nothing right now)
    // }
  }
  render(){
    return(

      <div className="settings">
        <form
          onSubmit={(e)=> {
            e.preventDefault()
            this.submitForm(e)
          }}>
          <h3>Settings Page</h3>
          <input
            value={this.state.zipcode}
            placeholder="Enter Zip Code"
            onChange={ (e) => this.setState({ zipcode: e.target.value})}
          />
          <button
            children="Submit"
          />
        </form>

        <h3>Pinned Cities</h3>
        <ul>
          {this.props.pinnedCities.map(c => <li>c.name</li>)}
        </ul>
      </div>
    )
  }
}


export default Settings
