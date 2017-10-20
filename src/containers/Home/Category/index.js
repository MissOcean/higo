import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.less'
import Item from "../../../components/Item/index";

export default class Category extends Component {
    render() {
        let {currentCategory, categoryItemList} = this.props
        return (

            <div className="home_category">
                <div className="banner">
                    <img src={currentCategory.bannerUrl} alt=""/>
                </div>
                <div className="itemFloors">{
                    categoryItemList.map((subItems, idx) => (
                        <div className="itemFloor" key={idx}>
                            <div className="header">
                                <p>{subItems.category.name}</p>
                                <p>{subItems.category.frontName}</p>
                            </div>
                            {subItems.itemList.map((itemInfo, index) => (
                                <Item itemInfo={itemInfo} key={index}/>
                            ))}
                        </div>
                    ))
                }</div>
            </div>
        )
    }
}