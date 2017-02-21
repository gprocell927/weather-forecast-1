import { connect } from 'react-redux'
import App from '../components/App/App'

const mapStateToProps = ({ times, weatherInfo }) => ({
times,
weatherInfo
})

export default connect(mapStateToProps)(App)
