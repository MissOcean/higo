import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'

export default class BNavBar extends Component {
    render() {
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
                <NavLink to='/cart'>
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