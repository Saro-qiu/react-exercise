import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHome=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articalList:result.articalList,
    recommendList:result.recommendList
})


const getMore=(result)=>({
    type:constants.GET_LIST_MORE,
    topicList:fromJS(result)
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

export const getMoreList=()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            const result=res.data.data;
            dispatch(getMore(result));
        }).catch((res)=>{
            console.log("fail111");
        })
    }
}