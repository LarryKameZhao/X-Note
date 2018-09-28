import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
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
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
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
              in={this.state.focused}
              timeout={300}
              classNames="slide"
            >
             <NavSearch
              className = {this.state.focused ?'focused':''}
              onFocus = {this.handleInputFocus}
              onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
              <svg className = {this.state.focused ?'icon focused':'icon'} aria-hidden="true">
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
  handleInputFocus () {
    this.setState({
      focused: true
    })
  }
  handleInputBlur () {
    this.setState({
      focused: false
    })
  }
}
export default Header
