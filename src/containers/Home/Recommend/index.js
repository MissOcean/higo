import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Carousel from "../../Detail/Carousel/index";
import RecommendList from "../RecommendList/index";
import Item from "../../../components/Item/index";
import CopyRight from "../../../components/CopyRight/index";
import './index.less'
import TopicList from "../TopicList/index";

export default class Recommend extends Component {
    render() {
        let {
            focusList: {listPicUrl, index}, tagList, topicList, flashSaleIndexVO,
            newItemList, popularItemList, cateList
        } = this.props
        console.log(tagList);
        return (
            <div className="home_recommend">
                {/*轮播图*/}
                <div className="focusList">
                    <Carousel listPicUrl={listPicUrl}
                              hasDots={false} style={{height: '4rem'}}
                              callback={(index) => {
                                  for (let i = 0; i < listPicUrl.length; i++) {
                                      this.refs[`dot${i}`].className = index == i ? 'dot active' : 'dot'
                                  }
                              }}/>
                    <div className="dots">
                        {listPicUrl.map((item, idx) => (
                            <span key={idx} className="dot" ref={`dot${idx}`}></span>
                        ))

                        }

                    </div>

                </div>
                {/*tags*/}
                <ul className="log">
                    <li><i className="iconfont icon-roundcheck"></i><span>网易自营品牌</span></li>
                    <li><i className="iconfont icon-roundcheck"></i><span>30天无忧退换</span></li>
                    <li><i className="iconfont icon-roundcheck"></i><span>48小时快速退款</span></li>
                </ul>
                {/*品牌制造商*/}
                <div className="manufactureList">
                    <div className="header">
                        <span>品牌制造商直供</span><i className="iconfont icon-roundright"></i>
                    </div>
                    <ul className="list">
                        {tagList.map((item, idx) => (
                            <li className="manufactureItem" key={idx}>
                                <div className="label">
                                    <p>{item.name}</p>
                                    <p>{item.floorPrice}起</p>
                                    {item.newOnShelf && <p className="newOnShelf">上新</p>}
                                </div>
                                <img src={item.picUrl} alt=""/>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*好物推荐*/}
                <RecommendList itemList={newItemList}
                               headerInfos={{
                                   title: '周一周四 · 新品首发', color: '#8BA0B6', bgColor: '#f1f7fd', btnBg: '#D8E5F1'
                               }}/>
                <RecommendList itemList={popularItemList}
                               headerInfos={{
                                   title: '人气推荐 · 好物精选', color: '#B4A078', bgColor: '#fef7e3', btnBg: '#f4e9cb'
                               }}/>
                {/*专题精选*/}
                <div className="topicList">
                    <div className="header">
                        <span>专题精选</span><i className="iconfont icon-roundright"></i>
                    </div>
                    <TopicList topicList={topicList}/>
                </div>
                {/*分类精选*/}
                <div className="cateList">
                    {cateList.map((subList, idx) => (
                        <div className="subList" key={idx}>
                            <p className="subListTitle">{subList.name}好物</p>
                            {subList.itemList.map((itemInfo, idx) => (
                                <Item itemInfo={itemInfo} key={idx}/>
                            ))}
                            <div className="cover">
                                <div className="more">
                                    <span>更多{subList.name}好物</span>
                                    <i className="iconfont icon-pullright"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*copyRight*/}
                <CopyRight/>
            </div>
        )
    }
}