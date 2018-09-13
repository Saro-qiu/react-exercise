import React from 'react';
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    Login,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style';


const Header =(props)=>{
    return(
        <HeaderWrapper>
            <Login href="#" />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">Aa</NavItem>
                <NavSearch 
                    className={props.focused?'focused':''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                >
                </NavSearch>
            </Nav>
            <Addition>
                <Button className="writing">写文章</Button>
                <Button className="red">注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}


const mapStateToPros=(state)=>{
    return {
        focused:state.focused
    }
}

const mapDispathToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            const action = {
                type:'search_focused'
            }
            dispatch(action);
        },
        handleInputBlur(){
            const action = {
                type:'search_blur'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToPros,mapDispathToProps)(Header);
