import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//x-note.oss-cn-beijing.aliyuncs.com/img/banner/banner2.jpg" alt=" " />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)

  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
}

const mapState = (state)=>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow () {
    if (document.documentElement.scrollTop > 400 ) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

// export default Home
export default connect(mapState, mapDispatch)(Home)
