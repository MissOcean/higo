import React, {Component} from 'react';
import {connect} from 'react-redux'
import './index.less'
import BNavBar from "../../components/BNavbar/index";
import EmptyCart from "./EmptyCart/index";
import actions from "../../store/actions/session";

@connect(
    state => state.session,
    actions
)
export default class Cart extends Component {
    constructor() {
        super();
        let something = [
            {
                "img": "http://yanxuan.nosdn.127.net/d77f8cd37529d4fc10932aaf708663bc.png?imageView&amp;thumbnail=160x0&amp;quality=75",
                "title": "全棉色织磨毛四件套",
                "details": "烟紫色;1.8M",
                "price": 329.00,
                "count": 1,
                checked: true
            },
            {
                "img": "http://yanxuan.nosdn.127.net/4ecdaf2f3c2762cb9c1ffdbc51f12818.png?imageView&amp;thumbnail=160x0&amp;quality=75",
                "title": "黑凤梨 云端沙发组合",
                "details": "2P+1P+0.5P",
                "price": 3299.00,
                "count": 1,
                checked: false
            },
            {
                "img": "http://yanxuan.nosdn.127.net/7520b0d06f83bcede00f2c8c883eda43.png?imageView&amp;thumbnail=160x0&amp;quality=75",
                "title": "升级款柔软保暖羽绒被",
                "details": "220*240cm碧玺色+白色 1300g",
                "price": 1049.00,
                "count": 1,
                checked: true

            }
        ];
        something = something.concat(something);
        this.state = {something}
    }

    handleReduce = (idx, e) => {
        console.log(idx);
        let oldSomething = this.props.user.cartList;
        let oneThing = oldSomething.find((item, index) => index == idx)
        if (oneThing.count <= 1) {
            console.log('商品一件起售');
            return
        }
        oneThing.count--
        this.props.modifyCartList([...oldSomething])
    };

    handleAdd = (idx, e) => {
        let oldSomething = this.props.user.cartList,
            oneThing = oldSomething[idx]
        if (oneThing.count >= 50) {
            return
        }
        oneThing.count++;
        this.props.modifyCartList([...oldSomething])
    };
    handleChange = (idx, e) => {
        let count = parseInt(e.target.value)
        let oldSomething = this.props.user.cartList,
            oneThing = oldSomething[idx]
        if (isNaN(count) || count < 1 || count > 50) {
            if (count > 50) {
                console.log('最多50');
                oneThing.count = 50
                this.props.modifyCartList([...oldSomething])
            }
            return
        } else {
            oneThing.count = count
            this.props.modifyCartList([...oldSomething])
        }
    };
    allPrice = () => {
        let something = this.props.user.cartList;
        let allPrice = something.reduce((sum, onething) => {
            return onething.checked ? sum + onething.price * onething.count : sum
        }, 0);
        //console.log(allPrice);
        return allPrice
    };
    handleCheck = (idx, e) => {
        let oldSomething = this.props.user.cartList,
            oneThing = oldSomething[idx];
        oneThing.checked = !oneThing.checked
        this.props.modifyCartList([...oldSomething])
    };
    checkAll = (e) => {
        let oldSomething = this.props.user.cartList;
        oldSomething.forEach(item => item.checked = e.target.checked)
        this.props.modifyCartList([...oldSomething])
    };
    removeClick = (inx, e) => {
        console.log(inx);
        let oldSomething = this.props.user.cartList;
        let newSomeThing = oldSomething.filter((item, index) => index !== inx);
        console.log(oldSomething);
        this.props.modifyCartList([...newSomeThing])

    };

    render() {
        let cartList = this.props.user.cartList;
        let something = cartList;
        let oneThing = something.find(item => item.checked == false);
        let checkNum = something.reduce((sum, item) => {
            return item.checked ? sum + 1 : sum
        }, 0);
        //window.modifyCartList = this.props.modifyCartList
        return (
            <div className="cart_container">
                <BNavBar/>
                <div className="cartheader">
                    <span className="logo">购物车</span>
                    {cartList.length > 0 && <span className="right">编辑</span>}
                </div>
                {cartList.length == 0 ? <EmptyCart/> : (
                    <div>
                        <div className="baozi">
                            {
                                something.map((item, idx) => (
                                    <div className="buycart" key={idx}>
                                        <div className="check">
                                            <input type="checkbox" checked={item.checked}
                                                   onChange={(e) => {
                                                       this.handleCheck(idx, e)
                                                   }}/>
                                        </div>
                                        <div className="img"
                                             onClick={() => {
                                                 this.props.history.push(`/detail/${item.id}`)
                                             }}>
                                            <img src={item.img}/>
                                        </div>
                                        <div className="all-details">
                                            <div style={{display: "flex"}}>
                                                <span className="title">{item.title}</span>
                                                <span className="number">x{item.count}</span>
                                            </div>
                                            <div className="one-detail">{item.details}</div>
                                            <div className="price-btn">
                                                <span>$ {item.price}</span>
                                                <div className="removeBaozi">
                                                    <div className="removeOne" onClick={(e) => {
                                                        this.removeClick(idx, e)
                                                    }}>删除
                                                    </div>
                                                </div>

                                                <div className="all-btn">
                                                    <span className="reduce" onClick={(e) => {
                                                        this.handleReduce(idx, e)
                                                    }}>-</span>
                                                    <input type="text"
                                                           value={item.count}
                                                           onChange={(e) => {
                                                               this.handleChange(idx, e)
                                                           }}
                                                           className="btn"/>
                                                    <span className="add" onClick={(e) => {
                                                        this.handleAdd(idx, e)
                                                    }}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="place">
                            <div className="chooseall">
                                <div>
                                    <input type="checkbox" checked={oneThing ? false : true}
                                           onChange={this.checkAll}/>
                                    <span className="chooseyes">已选({checkNum})</span>
                                </div>
                                <div className="allprice">$ {this.allPrice().toFixed(2)}</div>
                            </div>
                            <div className={checkNum > 0 ? "buyit active" : "buyit"}>下单</div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}