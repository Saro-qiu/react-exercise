import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHome=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articalList:result.articalList,
    recommendList:result.recommendList
})


const getMore=(result,newPage)=>({
    type:constants.GET_LIST_MORE,
    topicList:fromJS(result),
    articalPage:newPage
})

export const changeHomeData=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeHome(result));
        }).catch((res)=>{
            console.log("fail_changeHomeData");
        })
    }
    
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            const newPage=page+1;
            dispatch(getMore(result,newPage));
        }).catch((res)=>{
            console.log("fail111");
        })
    }
}

export const changeShowScroll=(status)=>({
    type:constants.CHANGE_SCROLL,
    showScroll:status
})