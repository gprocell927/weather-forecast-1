import { connect } from 'react-redux'
import Settings from '../components/Settings/Settings'
import { fetchPinnedCity } from '../actions'

const mapStateToProps = (state) => {
  return { pinnedCities: state.pinnedCities }
}

const mapDispatchToProps = (dispatch) => {
  fetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
