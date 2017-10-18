import * as types from '../action-types'

let initState = {
    items: [],
    proInfo: {
        listPicUrl: [],
        characteristicList: [],
        detailPicList: []
    }
}
let detail = (state = initState, action) => {
    switch (action.type) {
        case types.GET_RCMD_PRO:
            return {...state, items: action.items}
        case types.GET_PRO_INFO:
            return {...state, proInfo: action.proInfo}
    }
    return state
}
export default detail