import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render () {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
                {item.get('title')}
                <img className='topic-img' src={item.get('imgUrl')}/>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  topicList: state.getIn(['home','topicList'])
})

export default connect(mapStateToProps,null)(Topic)
