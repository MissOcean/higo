import {
    getProductDetail, getRcmdByProduct, getProductGoodRate,
    getCommentTags, getCommentByTag
} from '../../api/getData'
import * as types from '../action-types'
import {push} from 'react-router-redux'

export default {
    getRcmdProduct(id) {
        return (dispatch, getState) => {
            getRcmdByProduct(id).then(res => {
                dispatch({type: types.GET_RCMD_PRO, items: res.items})
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    getProductInfo(id) {
        return (dispatch, getState) => {
            getProductDetail(id).then(res => {
                //console.log(res);
                dispatch({type: types.GET_PRO_INFO, proInfo: res})
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    getProductGoodRate(id) {
        return (dispatch, getState) => {
            if (getState().detail.goodRate) return
            getProductGoodRate(id).then(res => {
                dispatch({type: types.GET_PRO_GOODRATE, goodRate: res.data})
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    getCommentTags(id) {
        return (dispatch, getState) => {
            getCommentTags(id).then(res => {
                dispatch({type: types.GET_COMMENT_TAGS, commentTags: res.data})
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    switchCommenTag(tag, id) {
        return (dispatch, getState) => {
            getCommentTags(tag, id, 1).then(res => {
                dispatch({type: types.GET_COMMENT_TAGS, commentTags: res.data})
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    getCommentByTag(tag, id, page) {
        return (dispatch, getState) => {
            let {isFetchComment} = getState().detail
            if (isFetchComment) {
                console.log('正在获取')
                return
            }
            dispatch({type: types.GET_COMMENT})
            getCommentByTag(tag, id, page).then(res => {
                if (tag == getState().detail.curTag) {
                    dispatch({type: types.GET_COMMENT_OVER, comments: res.data})
                } else {
                    dispatch({type: types.SWITCH_COMMENT, comments: res.data, curTag: tag})
                }
            }).catch(e => {
                    debugger
                }
            )
        }
    },
    test() {
        return (dispatch) => {
            dispatch(push('/detail/comment'))
        }
    }
}