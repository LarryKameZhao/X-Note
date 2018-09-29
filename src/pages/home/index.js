import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/List'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//x-note.oss-cn-beijing.aliyuncs.com/img/banner/banner1.jpg"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          right
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home
