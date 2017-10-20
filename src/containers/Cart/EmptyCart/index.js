import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./index.less"
import emptyCart from '../../../common/image/emptyCart.png'
import {connect} from 'react-redux'

@connect(
    state => state.session,
)
export default class EmptyCart extends Component {
    componentWillMount() {
        this._logined = JSON.parse(localStorage.getItem('logined'));
        //console.log('获取登录状态', this._logined, typeof this._logined)
    }

    render() {
        return (
            <div className="empty-container">
                <div className="emptyCartImg">
                    <img src={emptyCart} alt=""/>
                </div>
                <div className="wantBuy">去买点什么吧</div>
                {
                    !this._logined ? <Link to="/login/cart">
                        <div className="wantLogin">登录</div>
                    </Link> : <Link to="/category">
                        <div className="wantLogin">前往选购</div>
                    </Link>
                }
            </div>
        )
    }
}