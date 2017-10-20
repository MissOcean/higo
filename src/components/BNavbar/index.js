import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
import {connect} from "react-redux";

@connect(
    state => state.session,
)
export default class BNavBar extends Component {
    render() {
        let cartNum = this.props.user.cartList.reduce((sum,item)=>sum+item.count,0)
        //.log(cartNum);
        let style
        if(cartNum<10){
            style={right:'.05rem'}
        }else if(cartNum<100){
            style={right:'-0.05rem'}
        }else {
            style={right:'-.2rem'}
        }
        return (
            <div className="b_navbar">
                <NavLink exact to='/'>
                    <i className="iconfont icon-home"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to='/topic'>
                    <i className="iconfont icon-hot"></i>
                    <span>专题</span>
                </NavLink>
                <NavLink to='/category'>
                    <i className="iconfont icon-list"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to='/cart' style={{position:'relative'}}>
                    {
                        cartNum > 0 &&
                        <div className="cartNum" style={style}>{cartNum > 99 ? '99+' : cartNum}</div>
                    }
                    <i className="iconfont icon-cart"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to='/user'>
                    <i className="iconfont icon-people"></i>
                    <span>个人</span>
                </NavLink>
            </div>
        )
    }
}