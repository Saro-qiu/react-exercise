import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList:[],
    articalList:[],
    recommendList:[]
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
            return state.merge({articalList:state.get('articalList').concat(action.topicList)});
        default:
            return state;
    }
}