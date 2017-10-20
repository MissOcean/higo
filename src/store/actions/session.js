import {register, login, logout, fetchLoginStatus, modifyCartList} from "../../api/getData"
import * as types from "../action-types"
import {push} from "react-router-redux";

export default {
    register(user) {
        return function (dispatch, getState) {
            register(user).then(data => {
                let {code, ...session} = data;//code user success error
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//注册成功 跳转到登录页 action 非常麻烦
                    dispatch(push("/login"));
                } else {

                }
            });
        }
    },
    login(user, prepath) {
        return function (dispatch, getState) {
            user = {...getState().session.user, ...user}
            console.log('action中传来的user合并cartList', user)
            login(user).then(data => {
                console.log(data);
                let {code, ...session} = data;//code user success error
                console.log(session);
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
                if (code == 0) {//登陆成功 跳转到个人中心页
                    localStorage.setItem('logined', true)
                    //console.log('将要调到个人页')
                    //console.log('aaaaaa',prepath)
                    if (prepath) dispatch(push(`${prepath}`))
                    else dispatch(push(`/`))

                } else {

                }
            });
        }
    },
    /* 查询会话信息 */
    fetchLoginStatus() {
        return function (dispatch, getState) {
            fetchLoginStatus().then(session => {
                console.log("session", session.user.username, !session.user.username)
                if (!session.user.username) localStorage.setItem('logined', false)
                else localStorage.setItem('logined', true)
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session
                });
            })
        }
    },
    /* 修改购物车 */
    modifyCartList(cartList) {
        return function (dispatch, getState) {
            let user = getState().session.user
            user.cartList = cartList
            console.log('计算新列表',user);
            if (user.username) {
                modifyCartList(user).then(data => {
                    console.log('modifymodify', data)
                    let {code, ...session} = data
                    console.log('登录时响应回',session);
                    dispatch({
                        type: types.SET_SESSION_INFO,
                        session
                    });
                })
            } else {
                console.log('未登录',user)
                modifyCartList(user).then(data => {
                    console.log('modifymodify', data)
                    let {code, ...session} = data
                    console.log('未登录时响应回',session);
                    dispatch({
                        type: types.SET_SESSION_INFO,
                        session
                    });
                })
            }
        }
    },
    /*退出登录*/
    logout() {
        return function (dispatch, getState) {
            console.log('退出登录')
            logout().then(res => {
                console.log(res);
                localStorage.setItem('logined', false)
                dispatch({
                    type: types.SET_SESSION_INFO,
                    session: res
                })
                dispatch(push('/'))
            })
        }
    }
}






