import { connect } from 'react-redux'
import { pinCity } from '../actions'
import Settings from '../components/Settings/Settings'


const mapStateToProps = (state) => {
  return { cities: state.cities }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (city, id) => {
      dispatch(pinCity(city, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
