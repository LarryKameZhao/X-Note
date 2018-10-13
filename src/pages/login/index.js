import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render () {
    const {loginStatus} = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="account" innerRef={(input) => {
              this.account = input
            }}/>
            <Input placeholder="password" type="password" innerRef={(input) => {
              this.password = input
            }}/>
            <Button onClick={() => {
              this.props.login(this.account, this.password)
            }}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>

    }
  }
}
const mapStateProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})
const mapDispatchProps = (dispatch) =>({
  login(accountElement, passwordElement) {
    dispatch(actionCreators.login(accountElement, passwordElement))
    console.log(accountElement.value,passwordElement.value)
  }
})


export default connect(mapStateProps, mapDispatchProps)(Login)
