import { connect } from 'react-redux'
import Settings from '../components/Settings/Settings'
import { fetchPinnedCity } from '../actions'

const mapStateToProps = (state) => {
  return { pinnedCities: state.pinnedCities }
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPinnedCity: () =>{dispatch('APPEND_CITY')}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
