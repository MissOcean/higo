import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class Cate extends Component {

    render() {
        let url = {backgroundImage: `url(${this.props.bannerUrl})`};
        let {curCategoryId,subCateList} =this.props;
        return (
            <div className="cate">
<<<<<<< HEAD
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
=======
                <div className="banner">
                </div>
                <div className="hd">
                    <span className="text">
                        <span>餐厨</span>
                        <span>分类</span>
                    </span>
                </div>
                <ul className="list">
                    <li className="cateItem">
                        <a>
                            <div className="cateImgWrapper">
                                <img src="http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&amp;quality=85&amp;thumbnail=144x144" alt=""/>
                            </div>
                            <div className="name">
                                中秋系列
                            </div>
                        </a>

                    </li>
                    <li className="cateItem">
                        <a>
                            <div className="cateImgWrapper">
                                <img src="http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&amp;quality=85&amp;thumbnail=144x144" alt=""/>
                            </div>
                            <div className="name">
                                中秋系列
                            </div>
                        </a>

                    </li>
                    <li className="cateItem">
                        <a>
                            <div className="cateImgWrapper">
                                <img src="http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&amp;quality=85&amp;thumbnail=144x144" alt=""/>
                            </div>
                            <div className="name">
                                中秋系列
                            </div>
                        </a>

                    </li>
                    <li className="cateItem">
                        <a>
                            <div className="cateImgWrapper">
                                <img src="http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&amp;quality=85&amp;thumbnail=144x144" alt=""/>
                            </div>
                            <div className="name">
                                中秋系列
                            </div>
                        </a>

                    </li>

                </ul>

>>>>>>> 9dc1be2a45664145b1c684a5f9167bb54f09589f

            </div>
        )
    }
}