import styled from 'styled-components';
import logopic from '../../statics/nav-logo.png';

export const HeaderWrapper=styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0px;
    width:100px;
    height:56px;
    background:url(${logopic}) no-repeat center;
    background-size:contain;
`   

export const Nav = styled.div`
    width:70%;
    max-width:960px;
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
export const SearchWrapper=styled.div`
    
    position:relative;
    float:left;
    
    .zoom{
        position:absolute;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        right:5px;
        bottom:5px;
        text-align:center;
        &.focused{
            background:#969696;
            color:#fff;
        }
    }

`

export const SearchInfo=styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0px 20px;
    background:green;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    border-radius: 4px;
`

export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfoSwitch=styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-prigin:center center;
        
    }
`

export const SearchInfoList=styled.div`

`

export const SearchInfoItem=styled.a`
    line-height:20px;
    float:left;
    display:block
    padding:0px 5px;
    font-size:10px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:10px;
    &:hover{
        color:#333;
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
    padding:0px 30px 0px 20px;
    box-sizing:border-box;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }

    &.slide-exit-active{
        width:160px;
    }
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
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
