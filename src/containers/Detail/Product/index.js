import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getProductDetail, getRcmdByProduct, login, register} from '../../../api/getData'
import actions from '../../../store/actions/detail'
import './index.less'
import Item from "../../../components/Item/index";
import NavLink from "react-router-dom/es/NavLink";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Route} from 'react-router-dom'
import Carousel from "../Carousel/index";


@connect(
    state => state.detail,
    actions
)


export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            showMask: false
        }
    }

    componentWillMount() {
        this.props.getProductInfo(1127003);
        this.props.getRcmdProduct(1127003);
        login({username: 'higo', password: 'higo'})
            .then(res => console.log(res))
        register({username: 'boy', password: 'boy'})
            .then(res => console.log(res))
        window.login = login;
    }

    showMask = () => {
        console.log('click')
        let el = this.refs.container;
        this.setState({...this.state, showMask: true})
    }

    render() {
        let style = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.1)',
            zIndex: 50
        }
        let {listPicUrl, characteristicList, detailPicList, comments} = this.props.proInfo;
        let items = this.props.items;
        console.log(this.props)
        return (
            <div className="container" ref="container">
                <Carousel listPicUrl={listPicUrl}/>
                <div className="characterList">
                    {characteristicList.length > 0 && characteristicList.map((item, idx) => (
                        <div key={idx} className="characterItem">
                            <div className="picPanel"><img src={item.picUrl}/></div>
                            <div className="descPanel">
                                {item.simpleDescList.map((desc, idx) => (
                                    <span key={idx}>{desc}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="baseInfo">商品基本信息</div>
                <div className="puchaseInfo" onClick={this.showMask}>购买指引</div>
                <div className="comment"><NavLink to='/detail/comment'>商品评价</NavLink></div>
                <div className="productParam">商品参数</div>
                <div className="productDetail">
                    {detailPicList.length > 0 && detailPicList.map((picUrl, idx) => (
                        <p key={idx} className="detailPic">
                            <img src={picUrl} alt=""/>
                        </p>
                    ))}
                </div>
                <div className="recommend">
                    <div className="header">大家都在看</div>
                    {items.length > 0 && items.map((itemInfo, idx) => (
                        <Item key={idx} itemInfo={itemInfo}/>
                    ))}
                </div>
                {this.state.showMask && <div className="mask" onClick={() => {
                    this.setState({...this.state, showMask: false})
                }}></div>}

            </div>
        )
    }
}