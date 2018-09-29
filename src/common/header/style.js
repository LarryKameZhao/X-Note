import styled from 'styled-components'
const logoPic = '//x-note.oss-cn-beijing.aliyuncs.com/img/nav-logo.png'
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  height: 58px;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  display:block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  &.icon{
    margin-left: 20px;
  }
 `
export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
 `
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  margin: 9px;
  padding: 0px 35px 0px 20px;
  margin-left: 20px;
  width: 160px;
  line-height:38px;
  border: none;
  outline:none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
   &.slide-enter{
    width: 160px;
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
      transition: all .3s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &::palceholder{
    color:#999;
  }
  &.focused {
    width: 200px;
  }
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  right:0;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height:20px;
  font-size:14px;
  color:#969696; 
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-top:3px;
    font-size: 14px;
    margin-right: 5px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color:#787878;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
`
export const  SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom {
    position:absolute;
    right: 5px;
    width: 30px;
    line-height: 30px;
    padding: 9px 0;
    margin: 7px 0 ;
    margin-right: 7px;
    border-radius: 15px;
    bottom: 5px;
    text-align:center;
    &.focused {
      background: #777;
      color: white;
    }
  }
`
