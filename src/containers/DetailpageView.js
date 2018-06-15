import { connect } from 'react-redux'
import DetailPage from '../components/DetailPage'
import { toggleFilter } from '../actions'

/*const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(
    product => product.id === ownProps.match.params.id
  ),
})
*/
export default connect(
  mapStateToProps,
  null
)(DetailPage)
