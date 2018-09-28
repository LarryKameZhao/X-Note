import React, { Component } from 'react'
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

class Header extends  Component {
  render() {
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
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <svg className={this.props.focused ? 'icon focused' : 'icon'} aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-pencil2"></use>
            </svg>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })

            }
          </SearchInfoList>
        </SearchInfo>
      )
    }
    else {
      return null
    }
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getList())
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
