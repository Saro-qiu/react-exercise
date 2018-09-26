import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem,
    Code,
    CodeRight,
    ShowCode
} from '../style';

class Recommend extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        };

        this.handleMouseEnter=this.handleMouseEnter.bind(this);
        this.handleMouseLeave=this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({
            isShow:true
        })

    }

    handleMouseLeave(){
        this.setState({
            isShow:false
        })
    }

    getCode(){
        return(
            <ShowCode>
                <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
            </ShowCode>
        )
    }

    render(){
        return (
            
            <RecommendWrapper>
                
                {
                    this.props.recommendList.map((item)=>{
                        return (
                            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
                        )
                    })
                }
                <Code onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <img className="leftImg" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                    <CodeRight>
                        <h4>下载简书手机App<i className="iconfont">&#xe600;</i></h4>
                        <p>随时随地发现和创作内容</p>
                    </CodeRight>
                    {
                        this.state.isShow&&this.getCode()
                        
                    }
                </Code>
               
                
            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>{
    return {
        recommendList:state.getIn(["home","recommendList"]),
        
    }
}

export default connect(mapState)(Recommend);

