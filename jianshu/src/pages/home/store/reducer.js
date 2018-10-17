import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[],
    articalList:[],
    recommendList:[],
    articalPage:1,
    showScroll:false
});

export default (state = defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                recommendList:fromJS(action.recommendList),
                articalList:fromJS(action.articalList)
            });
        case constants.GET_LIST_MORE:
            return state.merge({
                articalList:state.get('articalList').concat(action.topicList),
                articalPage:action.articalPage
            });
        case constants.CHANGE_SCROLL:
            return state.merge({'showScroll':action.showScroll});
        default:
            return state;
    }
}