import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
import {connect} from "react-redux";

@connect(
    state => state.session,
)
export default class TNavbar extends Component {
    render() {
        let cartNum = this.props.user.cartList.reduce((sum, item) => sum + item.count, 0)
        //.log(cartNum);
        let style
        if (cartNum < 10) {
            style = {right: '-.1rem'}
        } else if (cartNum < 100) {
            style = {right: '-.15rem'}
        } else {
            style = {right: '-.25rem'}
        }
        console.log('render tnavbar')
        return (
            <div className="t_navbar">
                <div className="tabs">
                    <NavLink to="/">
                        <i className="iconfont icon-home"></i>
                    </NavLink>
                    <NavLink to="/search">
                        <i className="iconfont icon-search"></i>
                    </NavLink>
                    <NavLink to="/cart">
                        {
                            cartNum > 0 &&
                            <div className="cartNum" style={style}>{cartNum > 99 ? '99+' : cartNum}</div>
                        }
                        <i className="iconfont icon-cart"></i>
                    </NavLink>
                </div>
                <div className="logo">
                    <a href="http://localhost:8081">网易严选</a>
                </div>
            </div>
        )
    }
}