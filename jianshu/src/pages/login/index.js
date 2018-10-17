import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    LoginTab,
    TabItem,
    LoginCon,
    LoginInput,
    LoginBtn,
    RegisterCon
} from './style'
class Login extends Component{
    
    render(){
        const {title,content} = this.props;
        return (
            <LoginWrapper>
                <LoginBox>
                    <LoginTab>
                        <TabItem className="">登录</TabItem>·<TabItem>注册</TabItem>
                    </LoginTab>
                    <LoginCon>
                        <LoginInput>
                            <i className="iconfont">&#xe60a;</i>
                            <input type="text" placeholder="你的昵称" />
                        </LoginInput>
                        <LoginInput>
                            <i className="iconfont">&#xe606;</i>
                            <input type="text" placeholder="手机号" />
                        </LoginInput>
                        <LoginInput className="bottom_input">
                            <i className="iconfont">&#xe602;</i>
                            <input type="text" placeholder="设置密码" />
                        </LoginInput>
                    </LoginCon>
                    <RegisterCon>
                        <LoginInput>
                            <i className="iconfont">&#xe606;</i>
                            <input type="text" placeholder="手机号" />
                        </LoginInput>
                        <LoginInput className="bottom_input">
                            <i className="iconfont">&#xe602;</i>
                            <input type="text" placeholder="密码" />
                        </LoginInput>
                    </RegisterCon>
                    <LoginBtn>登录</LoginBtn>
                </LoginBox>
            </LoginWrapper>
        )
    }

    componentDidMount(){
        
    }
}


const mapState=(state) =>{
    return {
        
    }
}

const mapDispatch=(dispatch)=>{
    return{
        
    }
}

export default connect(mapState,mapDispatch)(Login);