import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.less'

export default class RecommendList extends Component {
    static defaultProps = {
        headerInfos: {},
        itemList: []
    }

    render() {
        let {headerInfos} = this.props
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
                    滚动部分
                </div>
            </div>
        )
    }
}