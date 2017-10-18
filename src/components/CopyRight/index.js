import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './index.less'
@connect()
export default class CopyRight extends Component {
    render() {
        return (
            <div className="footer">
                <div className="appAndPc">
                    <div>下载APP</div>
                    <div>电脑版</div>
                </div>
                <div className="copyright">
                    <span>网易公司版权所有 © 1997-2017</span>
                    <span>食品经营许可证：JY13301080111719</span>
                </div>
            </div>
        )
    }
}