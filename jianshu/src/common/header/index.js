import React, { Component } from 'react';
import {
    HeaderWrapper,
    Login,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style';


class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Login href="#" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className="writing">写文章</Button>
                    <Button className="red">注册</Button>
                </Addition>
            </HeaderWrapper>
          );
    }
}

export default Header;