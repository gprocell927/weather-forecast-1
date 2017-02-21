import { connect } from 'react-redux'
import CurrentLocalWeather from '../components/CurrentLocalWeather/CurrentLocalWeather'

const mapStateToProps = ({ weatherInfo }) => ({
  weatherInfo,
})

export default connect(mapStateToProps)(CurrentLocalWeather)
