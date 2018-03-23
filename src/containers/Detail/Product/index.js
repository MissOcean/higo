import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getProductDetail, getRcmdByProduct, login, register} from '../../../api/getData'
import actions from '../../../store/actions/detail'
import session from '../../../store/actions/session'
import './index.less'
import Item from "../../../components/Item/index";
import {Link, NavLink} from "react-router-dom/";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Route} from 'react-router-dom'
import Carousel from "../Carousel/index";
import {push} from 'react-router-redux'

import CommentItem from "../../../components/CommentItem/index";
import BackToTop from "../../../components/BackToTop/index";
import MIput from "../MIput/index";

@connect(
    state => ({...state.detail, ...state.session}),
    {...actions, ...session}
)


export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            showMask: false,
            selected: {},
            selectedArry: [],
            count: 1,
            selectedPic: null
        }

    }

    componentWillMount() {
        let id = this._productId = this.props.match.params.productId;
        console.log(this.props)
        this.props.getProductInfo(id);
        this.props.getRcmdProduct(id);
        this.props.getProductGoodRate(id);
        // login({username: 'higo', password: 'higo'})
        //     .then(res => console.log(res))
        // register({username: 'boy', password: 'boy'})
        //     .then(res => console.log(res))
        window.login = login;
    }

    toggleMask = () => {
        if (this.state.showMask) {
            document.documentElement.scrollTop = this.scrollTop
            this.setState({...this.state, showMask: false})
        } else {
            this.scrollTop = document.documentElement.scrollTop;
            document.documentElement.scrollTop = 0
            let el = this.refs.container;
            this.setState({...this.state, showMask: true})
        }
    }
    back = () => {
        if (!this.state.showMask) return
        else this.toggleMask()
    }
    handleClickSku = (sku, skuItem) => {
        let selected = {...this.state.selected}
        selected[sku.name] = selected[sku.name] == skuItem.value ? '' : skuItem.value;
        let selectedArry = []
        for (let k in selected) {
            selected[k] && selectedArry.push(selected[k]);
        }
        let selectedPic = null
        for (let k in selected) {
            if (selected[k]) {
                let skuItems = this.props.proInfo.skuList.find(sku => sku.name == k).skuItems
                skuItems.forEach(item => {
                    if (item.value == selected[k] && item.picUrl) selectedPic = item.picUrl;
                })
            }
        }
        this.setState({...this.state, selected, selectedArry, selectedPic})
    }
    addToCart = () => {
        /*{
            "img": "http://yanxuan.nosdn.127.net/7520b0d06f83bcede00f2c8c883eda43.png?imageView&amp;thumbnail=160x0&amp;quality=75",
            "title": "升级款柔软保暖羽绒被",
            "details": "220*240cm碧玺色+白色 1300g",
            "price": 1049.00,
            "count": 1,
            "checked": true
        }*/
        if (!this.state.showMask) {
            this.toggleMask()
            return
        }
        if (this.state.selectedArry.length == 0) {
            console.log('请选择规格数量')
            return
        }
        //console.log(this.props.proInfo);
        let cartList = this.props.user.cartList,
            id = this.props.match.params.productId,
            count = this.state.count,
            details = this.state.selectedArry.join(' ');

        let existOne = cartList.find(one => (one.id == id && one.details == details))

        if (existOne) {
            existOne.count += count;
            if (existOne.count > 50) {
                console.log('最多添加50个')
                existOne.count = 50
            }
            this.props.modifyCartList(cartList)
            return
        }

        let one = {
            id, details, count,
            img: this.state.selectedPic || this.props.proInfo.listPicUrl[0],
            title: this.props.proInfo.name,
            price: this.props.proInfo.retailPrice,
            checked: false
        }
        console.log('原购物车', cartList);
        console.log('单个', one)
        cartList.push(one)
        this.props.modifyCartList(cartList)

    }
    handleReduce = (e) => {
        if (this.state.selectedArry.length == 0) return
        let cnt = this.state.count
        if (cnt <= 1) {
            console.log('商品一件起售');
            return
        }
        this.setState({...this.state, count: --cnt})
    };
    handleAdd = (e) => {
        if (this.state.selectedArry.length == 0) return
        let cnt = this.state.count
        if (cnt >= 50) {
            return
        }
        this.setState({...this.state, count: ++cnt})
    };
    handleChange = (e) => {
        if (this.state.selectedArry.length == 0) return
        let count = parseInt(e.target.value)
        console.log(count);
        if (isNaN(count) || count < 1 || count > 50) {
            if (count > 50) {
                console.log('最多50')
                this.setState({...this.state, count: 50})
            }
            ;
            return
        } else {
            this.setState({...this.state, count})
        }
    };
    buyNow = () => {
        if (!this.state.showMask) {
            this.toggleMask()
            return
        }
        if (this.state.selectedArry.length == 0) {
            console.log('请选择规格数量')
            return
        }
        console.log(this.props.user.username);
        this.props.history.push('/order')

    }

    render() {
        let {
            listPicUrl, characteristicList, skuList,
            attrList, retailPrice, simpleDesc, itemTagList,
            detailPicList, comments, commentCount, name, remark,
        } = this.props.proInfo;
        let {goodRate: {goodCmtRate}} = this.props
        let items = this.props.items;
        let {selected, showMask, selectedArry, selectedPic} = this.state;

        //console.log(this.props)
        return (
            <div className="container" ref="container">
                <BackToTop/>
                <div className="puchaseNav">
                    <span className="service" onClick={this.back}>{showMask ? '返回' : '客服'}</span>
                    <span className="puchaseNow" onClick={this.buyNow}>立即购买</span>
                    <span className="addToCart" onClick={this.addToCart}>加入购物车</span>
                </div>
                {!this.state.showMask && <div>
                    <Carousel listPicUrl={listPicUrl} hasDots={true}/>
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
                    <div className="baseInfo">
                        <div className="info">
                            <span className="name">{name}</span>
                            <span className="simpleDesc">{simpleDesc}</span>
                            <span className="retailPrice">￥{retailPrice}</span>
                            {itemTagList && <div className="tags">
                                {itemTagList.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>}
                        </div>
                        <div className="commentNum">
                            <div className="num">
                                {commentCount > 1000 ? '999+' : commentCount}
                            </div>
                            <div className="com">用户评价</div>
                            <div className="more" onClick={() => {
                                this.props.history.push(`${this.props.match.url}/comment`)
                            }}>查看
                            </div>
                        </div>
                    </div>
                    <div className="puchaseInfo" onClick={this.toggleMask}>
                        <div className="choose">
                            <span>请选择规格数量</span>
                            <i className="icon-right iconfont"></i>
                        </div>
                        {remark && <div className="remark">
                            <span>{remark}</span>
                            <i className="icon-right iconfont"></i>
                        </div>}
                        <div className="promotion">
                        <span>
                            <span>促销 :  </span>
                            <span style={{color: '#f48f18'}}>券后仅售¥2089，再赠169元福袋</span>
                        </span>
                            <i className="icon-right iconfont"></i>
                        </div>
                        <div className="service">
                        <span>
                            <span>服务 : </span>
                            <span style={{color: '#7f7f7f'}}>30天无忧退换货 免费配送到家 自营品牌</span>
                        </span>
                            <i className="icon-right iconfont"></i>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="comentHeader" onClick={() => {
                            this.props.history.push(`${this.props.match.url}/comment`)
                        }}>
                            <span>{commentCount > 1000 ? '用户评价(999+)' : `用户评价(${commentCount})`}</span>
                            <div className="goodRate">
                                <span>{goodCmtRate}</span>
                                <i className="icon-right iconfont"></i>
                            </div>
                        </div>
                        {comments.length > 0 && comments.map((comment, idx) => (
                            <CommentItem key={idx} comment={comment}/>
                        ))}
                    </div>
                    <div className="productParam">
                        <div className="titile">商品参数</div>
                        {attrList.map((attr, idx) => (
                            <p key={idx} className="attr">
                                <span className="attrName">{attr.attrName}</span>
                                <span className="attrValue"
                                      dangerouslySetInnerHTML={{__html: attr.attrValue.replace(/\n/g, '<br>')}}></span>
                            </p>
                        ))}
                    </div>
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
                </div>}
                {this.state.showMask && <div className="mask">
                    <div className="selectInfo">
                        <img src={selectedPic ? selectedPic : listPicUrl[0]} alt=""/>
                        <div className="selectPrice">
                            <div className="price">价格 : ￥{retailPrice}</div>
                            <div className="selected">
                                已选择 : {selectedArry.length > 0 ? selectedArry.join(' ') : '请选择规格数量'}
                            </div>
                        </div>
                    </div>
                    <div className="skuList">
                        {skuList && skuList.map((sku, idx) => (
                            <div key={idx} className="sku">
                                <div className="header">{sku.name}</div>
                                <div className="skuItemList">
                                    {sku.skuItems.map((skuItem, idx) => (
                                        <div key={idx} onClick={() => {
                                            this.handleClickSku(sku, skuItem)
                                        }}
                                             className={selected[sku.name] == skuItem.value ? 'active skuItem' : 'skuItem'}>
                                            {skuItem.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <MIput count={this.state.count}
                           handleReduce={this.handleReduce}
                           handleChange={this.handleChange}
                           handleAdd={this.handleAdd}/>
                </div>}

            </div>
        )
    }
}