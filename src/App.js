import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store/index'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import TopicDetail from './pages/Topic/index.js'
class App extends Component {
  render () {
    return (

      <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header/>
                <Route path='/' exact component ={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login' exact component ={Login}></Route>
                <Route path='/write' exact component ={Write}></Route>
                <Route path='/topic/:id' exact component ={TopicDetail}/>
              </div>
            </BrowserRouter>
      </Provider>

    )
  }
}
export default App
