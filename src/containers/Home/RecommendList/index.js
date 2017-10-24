import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.less'

export default class RecommendList extends Component {
    static defaultProps = {
        headerInfos: {},
        itemList: []
    }

    componentDidMount() {
        let options = {
            // autoplay: 1000,//可选选项，自动滑动
            freeMode: true,
            //修改swiper自己或子元素时，自动初始化swiper    重要
            observer: true,
            //修改swiper的父元素时，自动初始化swiper  重要
            observeParents: true,
            slidesPerView: 'auto' //slider容器能够同时显示的slides数量,默认为1
        }
        this._swiper = new Swiper(this.refs.swiper, options)
    }

    render() {
        let {headerInfos, itemList, match} = this.props
        console.log('render recommendList', itemList);
        return (
            <div className="recommendList">
                <div className="header"
                     style={{color: headerInfos.color, backgroundColor: headerInfos.bgColor}}>
                    <div className="btn">
                        <span className="title">{headerInfos.title}</span>
                        <span className="viewAll" style={{backgroundColor: headerInfos.btnBg}}>查看全部
                </span>
                    </div>
                    <div className="trigon"></div>
                </div>
                <div className="scroll">
                    <div className="swiper-container" ref="swiper">
                        <div className="swiper-wrapper">
                            {itemList.map((item, idx) => {
                                //console.log(item)
                                return (
                                    <div className="swiper-slide" key={idx}>
                                        <div className="item" onClick={() => {
                                            console.log(this.props);
                                        }}>
                                            <div className="picPanel">
                                                {(!item.productPlace == true && item.colorNum > 0) &&
                                                <div className="label">
                                                    {item.colorNum}色可选</div>}
                                                {item.productPlace && <div className="label">{item.productPlace}</div>}
                                                <img src={item.listPicUrl} alt=""/>
                                            </div>
                                            <div className="tag"></div>
                                            <p className="name">{item.name}</p>
                                            <p className="desc">{item.simpleDesc}</p>
                                            <p className="price">￥ {item.retailPrice}</p>
                                        </div>
                                    </div>)
                            })}
                            <div className="showAll swiper-slide">查看全部</div>
                        </div>
                        {/*<div className="swiper-pagination"></div>

                         <div className="swiper-button-prev"></div>
                         <div className="swiper-button-next"></div>

                         <div className="swiper-scrollbar"></div>*/}
                    </div>
                </div>
            </div>
        )
    }
}