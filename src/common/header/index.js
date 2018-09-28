import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-Aa"></use>
            </svg>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames="slide"
            >
             <NavSearch
              className = {this.props.focused ?'focused':''}
              onFocus = {this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
              <svg className = {this.props.focused ?'icon focused':'icon'} aria-hidden="true">
                <use xlinkHref="#icon-search"></use>
              </svg>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-pencil2"></use>
            </svg>写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      console.log('focus')
    },
    handleInputBlur () {
      console.log('blur')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
