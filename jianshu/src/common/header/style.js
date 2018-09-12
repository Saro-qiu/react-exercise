import styled from 'styled-components';
import logopic from '../../statics/nav-logo.png';

export const HeaderWrapper=styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Login = styled.a`
    position:absolute;
    top:0;
    left:0px;
    width:100px;
    height:56px;
    background:url(${logopic}) no-repeat center;
    background-size:contain;
`   

export const Nav = styled.div`
    width:960px;
    padding-right:50px;
    box-sizing:border-box;
    height:100%;
    margin:0 auto;
` 


export const NavItem = styled.div`
    height:56px;
    line-height:56px;
    padding:0px 15px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
` 

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    margin-top:9px;
    margin-left:20px;
    outline:none;
    padding:0px 20px;
    box-sizing:border-box;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
`

export const Addition = styled.div`
    position:absolute;
    right:0px;
    top:0px;
    height:56px;
`


export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ea6f5a;
    margin-right:20px;
    width:80px;
    text-align:center;
    float:right;
    &.red{
        color:#ea6f5a;
    }
    &.writing{
        color:#fff;
        background:#ea6f5a;
    }
`
