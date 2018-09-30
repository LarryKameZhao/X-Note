
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
  }
  ],
  articleList: [
    {
      "id": 1,
      "title": "梦里周庄",
      "desc": "小时候学习鲁迅的文章，知道故事里有个美丽的水乡——周庄。于是，身居北方的我，便时常把周庄装进梦乡。今年暑假，接着苏杭之旅，得以走进现实中的周庄。",
      "imgUrl": "//x-note.oss-cn-beijing.aliyuncs.com/img/homeList/zhouzhuang.jpeg"
    }, {
      "id": 2,
      "title": "八十天环游地球 ：Day 43 越南大叻-会安 越南男人生活轻松吗？",
      "desc": "八十天环游地球：Day 43 越南大叻-会安 越南男人生活轻松吗？ 八十天的行程已经过半，身体上的疲劳也随之而来。为了减少旅途的劳累，我们决",
      "imgUrl": "//x-note.oss-cn-beijing.aliyuncs.com/img/homeList/yuenan.JPG"
    }, {
      "id": 3,
      "title": "高铁生活圈 | 3-8小时车程，国庆还能到这里看展",
      "desc": "高铁开通使出行更为便利，不喜坐飞机的朋友也可以在短时间内移动到许多远方城市。除了之前介绍过的广州、深圳、香港，乘坐高铁只需3至8小时可到达的长沙",
      "imgUrl": "//x-note.oss-cn-beijing.aliyuncs.com/img/homeList/gaotie.jpg"
    }, {
      "id": 4,
      "title": "这些年走过的地方——留下记忆，带走你的美丽（泰国）",
      "desc": "泰国，似乎对这样一个地方情有独钟，于前面一直念叨的摩洛哥一样，一直内心持有着一份向往的心，而这份心，或许因为自己对生活的殷诚，而给了自己太多的眷",
      "imgUrl": "//x-note.oss-cn-beijing.aliyuncs.com/img/homeList/taiguo.jpg"
    }
  ],
  recommendList:[
    {
      "id": 1,
      "imgUrl": "https://x-note.oss-cn-beijing.aliyuncs.com/img/Home/Recommend/qiri.png"
    },
    {
      "id": 2,
      "imgUrl": "https://x-note.oss-cn-beijing.aliyuncs.com/img/Home/Recommend/30ri.png"
    },
    {
      "id": 3,
      "imgUrl": "https://x-note.oss-cn-beijing.aliyuncs.com/img/Home/Recommend/daxuetang.png"
    },
    {
      "id": 4,
      "imgUrl": "https://x-note.oss-cn-beijing.aliyuncs.com/img/Home/Recommend/jianshubanquan.png"
    },
    {
      "id": 5,
      "imgUrl": "https://x-note.oss-cn-beijing.aliyuncs.com/img/Home/Recommend/youxuan.png"
    }
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state
  }
}
