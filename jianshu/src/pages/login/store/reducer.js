import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    loginStatus:false,
    userdata:[]
});

export default (state = defaultState,action)=>{
    switch(action.type){
        
    }
    return state;
}