import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class Cate extends Component {

    render() {
        let url = {backgroundImage: `url(${this.props.bannerUrl})`};
        let {curCategoryId,subCateList} =this.props;
        return (
            <div className="cate">
                <div className="banner" style={url}>
                </div>
                <div className="cateList">
                    <div className="hd">
                        <span className="text">
                            <span>{this.props.curName || '推荐区'}</span>
                            <span>分类</span>
                        </span>
                    </div>
                    <ul className="list">
                        {
                            subCateList.map(curCateItem => (
                                <li className="cateItem" key={curCateItem.id}>
                                    <Link to={{pathname:`/subCateList`,state:{cateId:curCategoryId,subId:curCateItem.id}}}>
                                        <div className="cateImgWrapper">
                                            <img src={curCateItem.wapBannerUrl}/>

                                        </div>
                                        <div className="name">{curCateItem.name}</div>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        )
    }
}