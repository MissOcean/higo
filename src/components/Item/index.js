import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './index.less'

@connect()
export default class Item extends Component {
    render() {
        let {
            colorNum,
            name,
            retailPrice,
            simpleDesc,
            productPlace,
            listPicUrl
        } = this.props.itemInfo;
        return (
            <div className="item">
                <Link tag="div" to="/detail/product">
                    <div className="picPanel">
                        {!productPlace && colorNum ? <div className="label">{colorNum}色可选</div> : null}
                        {productPlace && <div className="label">{productPlace}</div>}
                        <img src={listPicUrl}/>
                    </div>
                    <p className="desc">{simpleDesc}</p>
                    <p className="name">{name}</p>
                    <p className="price">￥ {retailPrice}</p>
                    <div></div>
                </Link>
            </div>
        )
    }

}