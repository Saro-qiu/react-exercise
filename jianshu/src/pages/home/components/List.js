import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import {actionCreators} from '../store';
class List extends Component{
    render(){
        const {articalList,getList} = this.props;
        return (
            <div>
            {
                articalList.map((item,index)=>{
                    return (
                    <ListItem key={index}>
                        <img className="pic" src={item.get("imgUrl")} />
                        <ListInfo>
                            <h3>{item.get("title")}</h3>
                            <p>{item.get("desc")}</p>
                        </ListInfo>
                    </ListItem>
                    )
                })
            }
            <LoadMore onClick={getList}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState=(state)=>{
    return {
        articalList:state.getIn(["home","articalList"])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getList(){
            dispatch(actionCreators.getMoreList())
        }
    }
}

export default connect(mapState,mapDispatch)(List);