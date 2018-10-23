import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Topic extends PureComponent {
  render () {
    const { topicList } = this.props
    return (

      <TopicWrapper>
        {
          topicList.map((item)=>{
            return (
              <Link to ={'/topic/'+item.get('id')} key={item.get('id')}>
              <TopicItem >
                {item.get('title')}
                <img className='topic-img' src={item.get('imgUrl')} alt=""/>
              </TopicItem>
              </Link>
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
