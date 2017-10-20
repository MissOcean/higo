import React, {Component} from 'react';
import {connect} from 'react-redux'
import TNavbar from "../../components/TNavbar/index";
import BNavbar from "../../components/BNavbar/index";
import Sidebar from "./Sidebar/index";
import Cate from "./Cate/index";
import actions from '../../store/actions/category'
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
// import {getCateList} from '../../api/getData'
@connect(
    state => state.cateList,
    actions
)
export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            curName: '',
            bannerUrl: 'http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png'
        }
    }

    componentDidMount() {
        if (this.props.cateList.length == 0) {
            this.props.fetchCateList();
        }
    }

    getCurCate = (curId, curName, bannerUrl) => {
        this.setState({curName, bannerUrl});
        this.props.fetchCateList(curId);
        // console.log(curId,curName)
    }

    render() {
        // console.log(this.props);
        return (
            <div className='category'>
                <div className="header">
                    <NavLink to='/search' className="searchBtn">输入商品名搜索</NavLink>
                </div>
                <Sidebar cateList={this.props.cateList}
                         getCurCate={this.getCurCate}
                         curId={this.props.curCategoryId}
                />
                <Cate subCateList={this.props.subCateList}
                      curName={this.state.curName}
                      bannerUrl={this.state.bannerUrl}
                      curCategoryId={this.props.curCategoryId}
                />
                <BNavbar/>
            </div>
        )
    }
}