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
                                <img src={this.props.recommendTwo.avatar} alt=""/>
                            </div>
                            <div className="nickname">{this.props.recommendTwo.nickname}</div>
                        </div>
                        <div className="line1">{this.props.recommendTwo.title}</div>
                        <div className="line2">{this.props.recommendTwo.subTitle}</div>
                    </div>
                    <div className="minorPic">
                        <div className="pic" style={{backgroundImage:`url(${this.props.recommendTwo.picUrl})`}}>

                        </div>
                    </div>
                </a>
            </div>
        )
    }
}