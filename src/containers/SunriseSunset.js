import { connect } from 'react-redux'
import SunriseSunset from '../components/SunriseSunset'

const mapStateToProps = ({ times }) => ({
  times,
})

export default connect(mapStateToProps)(SunriseSunset)
