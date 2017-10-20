import * as types from "../action-types"

let initState = {
    user: {
        username: null,
        password: null,
        cartList: []
    },//如果登录成功的话 会把登录用户信息放在user里
    success: null,//这里放成功的消息
    error: null,//这里放失败的消息
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.SET_SESSION_INFO:
            //console.log(action.session)
            return action.session;
        default:
            return state;
    }
}


