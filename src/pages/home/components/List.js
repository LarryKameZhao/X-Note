import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  ListItem ,
  ListInfo,
  LoadMore
} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render () {
    const { articleList, getMoreList, page } = this.props
    return (
        <div>
          {
            articleList.map((item, index)=>{
              return (
                <Link to={'/detail/' + item.get('id')} key = {index} >
                <ListItem >
                  <img className='img' src={item.get('imgUrl')} alt=""/>
                  <ListInfo>

                      <h3 className='title'>{item.get('title')}</h3>
                      <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
                </Link>
              )
            })
          }
          <LoadMore onClick={()=> getMoreList(page)}>加载更多</LoadMore>
        </div>
    )
  }
}
const mapStateProps = (state) => ({
  articleList: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) =>({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateProps, mapDispatch)(List)
