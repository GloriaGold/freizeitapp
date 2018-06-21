import { connect } from 'react-redux'
import ActivityItem from '../components/ActivityItem'
import { bookmark } from '../actions'

const mapDispatchToProps = dispatch => ({
  bookmark: id => dispatch(bookmark(id)),
})

export default connect(
  null,
  mapDispatchToProps
)(ActivityItem)
