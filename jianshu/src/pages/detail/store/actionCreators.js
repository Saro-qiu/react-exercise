import axios from 'axios';
import * as constants from './constants';

const getDetailData=(dispatch,id)=>{
    axios.get('/api/home.json').then((res)=>{
        const result=res.data.data.articalList;
        const index=parseInt(id)-1;
        const cur_result=result[index];
        const action={
            type:constants.GET_Detail,
            title:cur_result.title,
            content:cur_result.content
        }
        dispatch(action);
    }).catch((item)=>{

    });
}


export const getDetail=(id)=>{
    return (dispatch)=>{
        getDetailData(dispatch,id);
    }
    
}