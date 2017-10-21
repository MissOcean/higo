import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions'
import BNavBar from "../../components/BNavbar/index";
import './index.less'
import NavLink from "react-router-dom/es/NavLink";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import {getRecommendData, getCateItem} from '../../api/getData';
import BackToTop from "../../components/BackToTop/index";
import Recommend from "./Recommend/index";
import Category from "./Category/index";

@connect(
    state => state,
    actions
)
export default class Home extends Component {
    constructor() {
        super()
        let state = JSON.parse(localStorage.getItem('homeData'))
        console.log(state)
        this.state = state || {
            recommendData: {},
            cateItemInfo: {},
            /*recomendData*/
            focusList: {listPicUrl: [], index: 0},
            tagList: [],
            newItemList: [],
            popularItemList: [],
            cateList: [],
            topicList: [],
            /*限时购、严选福利*/
            flashSaleIndexVO: {},
            saleIndexVO: {},
            /*cateItemInfo*/
            currentCategory: {},
            categoryItemList: []
        }
    }

    componentWillMount() {
        getRecommendData().then(res => {
                let jsonData = res.data;
                console.log('主页推荐数据', res.data);
                this.state = {...this.state, ...jsonData}
                this.state.focusList = {...this.state.focusList, listPicUrl: jsonData.focusList.map(item => item.picUrl)}
                this.state.tagList = jsonData.tagList.slice(0, 4)
                /*this.state.newItemList = jsonData.newItemList
                this.state.popularItemList = jsonData.popularItemList
                this.state.cateList = jsonData.cateList*/
                this.setState({...this.state})
            }
        )
    }

    switchCategory = (id) => {
        if (this.state.currentCategory) {
            this.setState({...this.state, currentCategory: {}})
            return
        }
        id = id || 1005000;
        console.log(id);
        getCateItem(id).then(res => {
            let jsonData = res.data;
            this.state = {...this.state, ...jsonData}
            localStorage.setItem('homeData', JSON.stringify(this.state))
            this.setState({...this.state})
        })
    }

    render() {
        console.log(this.state.currentCategory)
        return (
            <div className="homePage">
                {/*顶部导航*/}
                <div className="topNav">
                    <div className="topBar">
                        <a className="logo" href="http://localhost:8090">嗨购不停</a>
                        <NavLink to="/search" className="searchBtn">输入商品名搜索</NavLink>
                    </div>
                    <div onClick={(e) => {
                        this.switchCategory()
                    }}
                         style={{height: '.6rem', backgroundColor: '#fff'}}>水平滚动条
                    </div>
                </div>
                {this.state.currentCategory.id ? <Category {...this.state}/> : <Recommend {...this.state} />}
                <BackToTop/>
                <BNavBar/>
            </div>
        )
    }
}