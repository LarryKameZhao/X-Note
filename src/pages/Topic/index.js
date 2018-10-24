import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import {

} from './style'

class TopicDetail extends PureComponent {
  render () {
    return (
     <div>topic detail</div>
    )
  }

}

// const mapState = (state) => ({
//   title: state.getIn(['detail','title']),
//   content: state.getIn(['detail','content'])
// })
// const mapDispatch = (dispatch) => ({
//   getDetail (id) {
//     dispatch(actionCreators.getDetail(id))
//   }
// })
export default connect(null, null)(TopicDetail)
