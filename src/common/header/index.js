import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux';
import  {actionCreators}    from  './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
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
import { Link } from 'react-router-dom'
class Header extends  Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ?  <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to="/login"><NavItem className='right'>登陆</NavItem></Link>
          }
          <NavItem className='right'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-Aa"></use>
            </svg>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <svg className={focused ? 'icon zoom focused' : 'icon zoom'} aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
          <Button className='writing'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-pencil2"></use>
            </svg>
            写文章
          </Button>
          </Link>
          <Link to='/register'>
          <Button className='reg'>注册</Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea = () => {
    const { focused, mouseIn, list, totalPage, page, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for(let i = (page-1) * 10; i < page*10; ++i){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn ) {
      return (
        <SearchInfo
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={ ()=>handleChangePage(page,totalPage, this.spinIcon)  }>
              <svg ref={(icon)=>{this.spinIcon = icon}} className="icon spin" aria-hidden="true">
                <use xlinkHref="#icon-refresh"></use>
              </svg>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())

    },
    handleInputBlur () {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1))
      }
      else {
        dispatch(actionCreators.changePage(1))
      }

    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
