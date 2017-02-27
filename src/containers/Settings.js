import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Settings from '../components/Settings/Settings'
import { fetchPinnedCity } from '../actions/index.js'

const mapStateToProps = (state) => {
  return { pinnedCities: state.pinnedCities }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ fetchPinnedCity }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
