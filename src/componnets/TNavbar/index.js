import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'

export default class TNavbar extends Component {
    render() {
        return (
            <div className="t_navbar">
                <div className="tabs">
                    <NavLink to="/home">
                        <i className="iconfont icon-home"></i>
                    </NavLink>
                    <NavLink to="/search">
                        <i className="iconfont icon-search"></i>
                    </NavLink>
                    <NavLink to="/cart">
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