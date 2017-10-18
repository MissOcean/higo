import * as types from '../action-types'

let initState = {
    items: [],
    proInfo: {
        listPicUrl: [],
        characteristicList: [],
        detailPicList: [],
        comments: []
    },
    goodRate: {},
    commentTags: [],
    comments: {
        pagination: {}
    },
    curTag: '全部',
    allComments: [],
    isFetchComment: false
}
let detail = (state = initState, action) => {
    switch (action.type) {
        case types.GET_RCMD_PRO:
            return {...state, items: action.items}
        case types.GET_PRO_INFO:
            return {...state, proInfo: action.proInfo}
        case types.GET_PRO_GOODRATE:
            return {...state, goodRate: action.goodRate}
        case types.GET_COMMENT_TAGS:
            return {...state, commentTags: action.commentTags}
        case types.SWITCH_COMMENT:
            return {...state, comments: action.comments,
                isFetchComment: false,
                allComments: action.comments.result, curTag: action.curTag,}
        case types.GET_COMMENT_OVER:
            return {
                ...state, comments: action.comments,
                isFetchComment: false,
                allComments: state.allComments.concat(action.comments.result)
            }
        case types.GET_COMMENT:
            return {...state, isFetchComment: true}

    }
    return state
}
export default detail