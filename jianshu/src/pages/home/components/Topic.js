import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    TopicMore
} from '../style';


class Topic extends PureComponent{
    render(){
        return (
           <TopicWrapper>
               {
                   this.props.topicList.map((item)=>{
                       return (
                            <TopicItem key={item.get("id")}>
                                <img alt="" className="topic-img" src={item.get("imgUrl")} />
                                {item.get("title")}
                            </TopicItem>
                       )
                   })
               }
                <TopicMore>更多热门专题 ></TopicMore>
           </TopicWrapper>
        )
    }
}

const mapState=(state)=>{
    return {
        topicList:state.getIn(["home","topicList"])
    }
}

export default connect(mapState)(Topic);