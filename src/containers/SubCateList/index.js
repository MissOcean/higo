import React, {Component} from 'react';
import {connect} from 'react-redux';
import TNavbar from "../../components/TNavbar/index";
import actions from '../../store/actions/category'
import Item from "../../components/Item/index";
import './index.less'
import SubCateNav from "../../components/SubCateNav/index";
// import {getCateItem} from '../../api/getData'
// @connect(
//     state => state.cateList,
//     actions
// )
import {goBackToTop} from "../../api/utils"
import BackToTop from "../../components/BackToTop/index";

@connect((state) => {
    return {
        subCateList: state.cateList.subCateList,//2级菜单
        categoryItems: state.cateList.categoryItems//2级当前菜单和3级列表
    }
}, {...actions})
export default class SubCateList extends Component {
    constructor() {
        super();
        this.state = {
            curSubId: null,
            categoryId: null
        }
    }

    componentWillMount() {
        let {state} = this.props.location;
        let item = (state ? state : JSON.parse(localStorage.getItem('itemId')));
        let {cateId, subId} = item;
        // let {cateId, subId} = this.props.location.state;
        // if ((this.props.categoryItems.itemList.length == 0)||(this.props.subCateList.length==0)) {
        //     this.props.fetchCateItem(cateId, subId);
        // }
        this.props.fetchCateItem(cateId, subId);
        this.props.fetchCateList(cateId);
        this.setState({curSubId: subId, categoryId: cateId});
        localStorage.setItem('itemId', JSON.stringify(item));
    }

    getSubItem = (subId) => {
        let item = JSON.parse(localStorage.getItem("itemId"));
        item.subId = subId;
        localStorage.setItem('itemId', JSON.stringify(item));
        this.props.fetchCateItem(this.state.categoryId, subId);
        this.setState({curSubId: subId});
    };

    render() {
        console.log(this.props);
        goBackToTop(null,0)
        let {category, itemList} = this.props.categoryItems;
        return (
            <div className="con">
                <TNavbar/>
                <BackToTop/>
                <SubCateNav
                    subCateList={this.props.subCateList}
                    // categoryId={category.id}
                    subCategoryId={this.state.curSubId}
                    getSubItem={this.getSubItem}
                />
                <div className="itemList">
                    <header>
                        <p>
                            {category ? category.frontName : ''}
                        </p>
                    </header>
                    <div className="goodGrid">
                        <div className="list">
                            {
                                itemList.map((item, index) => (
                                    <Item itemInfo={item} key={item.id}/>

                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}