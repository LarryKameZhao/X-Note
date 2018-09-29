import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store/index'
import { Provider } from 'react-redux'
class App extends Component {
  render () {
    return (

      <Provider store={store}>
        <div>
          <Header/>
            <BrowserRouter>
              <div>
                <Route path='/' exact render={()=><div>rot</div>}></Route>
                <Route path='/detail' exact render={()=><div>detail</div>}></Route>
              </div>
            </BrowserRouter>
        </div>
      </Provider>

    )
  }
}
export default App
