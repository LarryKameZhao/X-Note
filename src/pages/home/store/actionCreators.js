import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

import * as leancloud from '../../../leancloud'
// function initAV () {
//   var AV = require('leancloud-storage')
//   var APP_ID = 'vrTIT7Lpa0iSLJuhTAa0YmNW-gzGzoHsz'
//   var APP_KEY = '0Wspun9TbXKn1EvF1tWbrknW'
//   AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY
//   })
//   return AV
// }
// export const testAv = () => {
//     console.log('try av')
//     let av = initAV()
//     console.log(av)
//     let array = []
//     let query = new av.Query('ArticleList')
//     query.find().then(
//     (res)=>{
//       console.log('----res----atributes')
//       console.log(res)
//       console.log(res[0].attributes)
//       for(let item in res) {
//         console.log('for----')
//         console.log(res[item].attributes)
//         array.push(res[item].attributes)
//       }
//     }, function (error) {
//       console.log(error)
//     })
//   console.log('array push')
//   console.log(array)
// }

export const getHomeInfo1 = () => {

  let av = leancloud.av()
  console.log(av)
  let articleList = []
  let recommendList = []
  let topicList = []
  let query = new av.Query('ArticleList')
  let result = {
    articleList:[],
    recommendList: [],
    topicList: []
  }
  query.find().then(
    (res) => {
      for (let item in res) {
        articleList.push(res[item].attributes)
      }
      result.articleList = articleList

    }, function (error) {
      console.log(error)
    })
  let query2 = new av.Query('TopicList')
  query2.find().then((res) => {
    for (let item in res) {
      topicList.push(res[item].attributes)
    }
    result.topicList = topicList
  }, function (error) {
    console.log(error)
  })
  let query3 = new av.Query('RecommendList')
  query3.find().then((res) => {
    console.log('query3----res----atributes')
    console.log(res)
    console.log(res[0].attributes)
    for (let item in res) {
      recommendList.push(res[item].attributes)
    }
    result.recommendList = recommendList
  }, function (error) {
    console.log(error)
  })
  console.log('---------data-------result-----------------')
  result.topicList = topicList
  result.recommendList = recommendList
  result.articleList = articleList
  console.log(typeof result)
  console.log('result---topiclist')
  console.log(result.topicList)
  console.log('result---recommend')
  console.log(result.recommendList)
  console.log('result---article')
  console.log(result.articleList)
  const action = changeHomeData(result)

  return (dispatch) => {
    dispatch(action)
  }
}

const changeHomeData = (result)=> ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5bcfff4e93cd6b132988ac8a/example/homeList').then((res) => {
      const result = res.data.data
      console.log('mock1')
      console.log('as1')
      console.log(result)
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page+1)
      dispatch(action)
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOOGLE_TOP_SHOW,
  show
})
