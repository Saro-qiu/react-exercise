import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import {actionCreators} from '../store';
class List extends PureComponent{
    render(){
        const {articalList,getList,articalPage} = this.props;
        return (
            <div>
            {
                articalList.map((item,index)=>{
                    return (
                    <Link key={index} to={'/detail/'+item.get("id")} >
                        <ListItem>
                            <img alt="" className="pic" src={item.get("imgUrl")} />
                            <ListInfo>
                                <h3>{item.get("title")}</h3>
                                <p>{item.get("desc")}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                    )
                })
            }
            <LoadMore onClick={()=>getList(articalPage)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState=(state)=>{
    return {
        articalList:state.getIn(["home","articalList"]),
        articalPage:state.getIn(["home","articalPage"]),
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getList(articalPage){
            dispatch(actionCreators.getMoreList(articalPage))
        }
    }
}

export default connect(mapState,mapDispatch)(List);