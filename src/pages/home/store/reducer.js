
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '手绘',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/shouhui.jpg'
  },{
    id: 2,
    title: '读书',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/dushu.jpg'
  },{
    id: 3,
    title: '摄影',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/sheying.jpg'
  },{
    id: 4,
    title: 'X-NOTE电影',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/dianying.jpg'
  },{
    id: 5,
    title: '故事',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/gushi.jpg'
  },{
    id: 6,
    title: '旅行',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/lvxing.png'
  },{
    id: 7,
    title: '互联网',
    imgUrl: '//x-note.oss-cn-beijing.aliyuncs.com/img/Home/Topic/it.jpg'
  },
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state
  }
}
