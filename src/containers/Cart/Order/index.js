import React, {Component} from 'react';
import orderImg from '../../../common/image/order.png'
import TNavbar from "../../../components/TNavbar/index";
import './index.less'
import NavLink from "react-router-dom/es/NavLink";

export default class Order extends Component {
    render() {
        let style = {
            backgroundImage: orderImg,
        }
        return (
            <div className="orderPage" style={style}>
                <TNavbar/>
                <div className="pay">
                    <div className="price">应付 ：￥79.00</div>
                    <NavLink className="goPay" to="/pay">去付款</NavLink>
                </div>
            </div>
        )
    }
}