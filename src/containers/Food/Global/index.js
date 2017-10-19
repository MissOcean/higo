import React, {Component} from 'react';
import './index.less'


export default class Global extends Component {
    render() {
        return (
            <div className="recommend">
                <div className="recommend-title">{this.props.global.nickname}</div>
                <a className="recommend-main">
                    <div className="recommend-main-pic"
                         style={{backgroundImage: `url(${this.props.global.picUrl})`}}></div>
                    <div className="recommend-main-info">
                        <div className="recommend-line1">
                            <div className="recommend-line1-title">
                                {this.props.title}
                            </div>
                        </div>
                        <div className="recommend-line2">
                            {this.props.global.subTitle}
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}
