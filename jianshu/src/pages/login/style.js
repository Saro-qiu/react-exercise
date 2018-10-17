import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position:absolute;
    left:0px;
    bottom:0px;
    right:0px;
    top:0px;
    background:#f1f1f1;
`

export const LoginBox = styled.div`
    width:400px;
    margin: 60px auto 0;
    padding: 50px 0px 30px 0px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: block;
`

export const LoginTab = styled.div`
    text-align:center;
    margin-bottom:40px;
`

export const TabItem = styled.a`
    display:inline-block;
    padding: 10px;
    font-size:18px;
    color: #969696;
    border-bottom: 2px solid #fff;
    cursor:pointer;
    &:hover{
        border-bottom: 2px solid #ea6f5a;
    }
`

export const LoginCon = styled.div`
    border: 1px solid #c8c8c8;
    border-radius:5px;
    width:300px;
    margin:auto;
    overflow:hidden;
    cursor:pointer;
`

export const LoginInput = styled.div`
    height:50px;
    line-height:50px;
    background-color: #f1f1f1;
    border-bottom: 1px solid #c8c8c8;
    overflow:hidden;
    &.bottom_input{
        border-bottom:none;
    }
    .iconfont{
        padding:0px 10px;
        color:#969696;
    }

    input{
        line-height:50px;
        border:0px;
        outline:none;
        background-color: #f1f1f1;
    }
`

export const LoginBtn = styled.div`
    width:300px;
    height:45px;
    line-height:45px;
    background:#42c02e;
    border-radius:30px;
    color:#fff;
    font-size: 18px;
    text-align:center;
    margin:auto;
    margin-top:20px;
    cursor:pointer;
`

export const RegisterCon = styled.div`
    border: 1px solid #c8c8c8;
    border-radius:5px;
    width:300px;
    margin:auto;
    overflow:hidden;
    cursor:pointer;
`