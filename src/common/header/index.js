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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一换</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>小程序</SearchInfoItem>
          <SearchInfoItem>Vue</SearchInfoItem>
          <SearchInfoItem>PHP</SearchInfoItem>
          <SearchInfoItem>故事</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }
  else {
    return null
  }
}

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
          { getListArea(props.focused)}
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
    focused: state.get('header').get('focused')
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
