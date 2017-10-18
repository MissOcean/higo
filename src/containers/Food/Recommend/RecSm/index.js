import React, {Component} from 'react';
import './index.less'

export default class RecSm extends Component {
    render() {
        return (
            <div>
                <a className="recommend-sm">
                    <div className="topInfo">
                        <div className="author">
                            <div className="avatar">
                                <img src="https://yanxuan.nosdn.127.net/15082257347571029.png?imageView&quality=75&thumbnail=48y48" alt=""/>
                            </div>
                            <div className="nickname">服装组：小服</div>
                        </div>
                        <div className="line1">给牛仔加点火山岩</div>
                        <div className="line2">为了拒绝臃肿，不少人秋冬穿衣，会稍稍牺牲温度。如何让保暖和有型可以兼得，严选一直...</div>
                    </div>
                    <div className="minorPic">
                        <div className="pic">

                        </div>
                    </div>
                </a>
            </div>
        )
    }
}