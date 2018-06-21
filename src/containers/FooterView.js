import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { toggleFilter } from '../actions'

const mapStateToProps = state => ({
  filter: state.filter,
  activities: state.activities,
})

const mapDispatchToProps = dispatch => ({
  toggleFilter: () => dispatch(toggleFilter()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
