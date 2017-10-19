import {getCateList,getCateItem} from '../../api/getData';
import *as types from '../action-types';
export default {
    fetchCateList(curId){
        return (dispatch,getState)=>{
            // console.log(getState())
            let {cateList:{curCategoryId}} =getState();
            if(!curId) curId=curCategoryId;
            // curId=curId||curCategoryId;

            getCateList(curId).then(state=>{
                // console.log(state);
                dispatch({type:types.GET_CATE_LIST,state});
            })


        }
    },
    fetchCateItem(categoryId,subCategoryId){
        return (dispatch,getState)=>{
            console.log(getState());
            getCateItem(categoryId,subCategoryId).then(data=>{
                // console.log(data);
                dispatch({type:types.GET_SUB_LIST,categoryItems:data.categoryItems});
                // dispatch({type:types.GET_SUB_LIST,subCategory:data})
            })
        }

    }


}