import {combineReducers} from 'redux'
import detail from './detail'
import session from './session'
import {routerReducer} from 'react-router-redux'
import *as types from '../action-types';

let initState = {
    cateList: [],//左边导航列表 1
    curCategoryId: 1022001,
    subCateList: [],//右边内容区域列表 2
    categoryItems: {
        category: null,//二级目录当前分类
        itemList: []//3
    }
}
let cateList = (state = initState, action) => {
    switch (action.type) {
        case types.GET_CATE_LIST:
            return {...state, ...action.state};
        case  types.GET_SUB_LIST:
            return {...state, categoryItems: action.categoryItems};
        default:
            return {...state}
    }
    return state
}
export default combineReducers({
    detail,
    session,
    router: routerReducer,
    cateList
})