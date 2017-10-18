import React, {Component} from 'react';
import './index.less'


export default class Global extends Component {
    render() {
        return (
            <div className="recommend">
                <div className="recommend-title">为你推荐</div>
                <a className="recommend-main">
                    <div className="recommend-main-pic"></div>
                    <div className="recommend-main-info">
                        <div className="recommend-line1">
                            <div className="recommend-line1-title">最激烈的南北之争即将打响</div>
                            <div className="recommend-line1-price">15元起</div>
                        </div>
                        <div className="recommend-line2">
                            南北生活有多少大不同
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}
