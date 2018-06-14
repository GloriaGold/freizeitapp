import { connect } from 'react-redux'
import ActivityItem from '../components/ActivityItem'
import { bookmark } from '../actions'

const mapDispatchToProps = dispatch => ({
  bookmark: () => dispatch(bookmark()),
})

export default connect(mapDispatchToProps)(ActivityItem)
