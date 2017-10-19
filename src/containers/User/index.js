import React, {Component} from "react";
import "./index.less";
import avatar from "../../common/image/profiles.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/session";
import BNavBar from "../../components/BNavbar/index";

@connect(
    state => state.session,
    actions
)
export default class User extends Component {
    render() {
        return (
            <div className="profile">
                <BNavBar/>
                <img src={avatar}/>
                <div className="my-user">
                    <span>{this.props.user.username}</span>
                    <a href="">普通用户</a>
                </div>

                <span className="my-order">我的订单</span>
                <ul className="order">
                    <li><i className="iconfont icon-qianbao"><span>待付款</span></i></li>
                    <li><i className="iconfont icon-daifahuo-copy"><span>待发货</span></i></li>
                    <li><i className="iconfont icon-yifahuo"><span>已发货</span></i></li>
                    <li><i className="iconfont icon-daipingjia"><span>待评价</span></i></li>
                    <li><i className="iconfont icon-tuihuanhuo"><span>售后</span></i></li>
                </ul>

                <span className="my-server">我的服务</span>
                <ul className="server server-one">
                    <li><i className="iconfont icon-pintuan"><span>拼团订单</span></i></li>
                    <li><i className="iconfont icon-zhongchou1"><span>众筹订单</span></i></li>
                    <li><i className="iconfont icon-yaoqing"><span>邀请好友</span></i></li>
                    <li><i className="iconfont icon-youhuiquan"><span>优惠券</span></i></li>
                </ul>
                <ul className="server server-two">
                    <li><i className="iconfont icon-hongbao1"><span>红包</span></i></li>
                    <li><i className="iconfont icon-gouwudai"><span>优先购</span></i></li>
                    <li><i className="iconfont icon-lipinqia"><span>礼品卡</span></i></li>
                    <li><i className="iconfont icon-huiyuan1"><span>会员</span></i></li>
                </ul>
                <ul className="server server-three">
                    <li><i className="iconfont icon-zuanshi1"><span>甄选家</span></i></li>
                    <li><i className="iconfont icon-zuji1"><span>足迹</span></i></li>
                    <li><i className="iconfont icon-shoucang1"><span>收藏</span></i></li>
                    <li><i className="iconfont icon-dizhi"><span>地址</span></i></li>
                </ul>
                <ul className="server server-four">
                    <li><i className="iconfont icon-kefu"><span>客服</span></i></li>
                    <li><i className="iconfont icon-bangzhu"><span>帮助</span></i></li>
                    <li><i className="iconfont icon-shezhi"><span>设置</span></i></li>
                    <li><i className="iconfont icon-gengduo"><span>更多</span></i></li>
                </ul>

            </div>
        )
    }
}


