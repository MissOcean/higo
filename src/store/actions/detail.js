import {getProductDetail, getRcmdByProduct} from '../../api/getData'
import * as types from '../action-types'

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
                dispatch({type: types.GET_PRO_INFO, proInfo: res})
            }).catch(e => {
                    debugger
                }
            )
        }
    }


}