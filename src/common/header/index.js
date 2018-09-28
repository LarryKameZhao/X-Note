import React from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux';
import  {actionCreators}    from  './store'
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
const Header = (props) => {
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
            in={props.focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              className = {props.focused ?'focused':''}
              onFocus = {props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <svg className = {props.focused ?'icon focused':'icon'} aria-hidden="true">
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = actionCreators.searchFocus()


      dispatch(action)
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
