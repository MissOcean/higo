import React, {Component} from 'react';
import './index.less'
import RecSm from "./RecSm/index";

export default class Recommend extends Component {
    render() {
        return (
            <div className="recommend">
                <div className="recommend-title">{this.props.recommendOne.typeName}</div>
                <a className="recommend-main">
                    <div className="recommend-main-pic"
                         style={{backgroundImage: `url(${this.props.recommendOne.picUrl})`}}></div>
                    <div className="recommend-main-info">
                        <div className="recommend-line1">
                            <div className="recommend-line1-title">{this.props.recommendOne.title}</div>
                            <div className="recommend-line1-price">{this.props.recommendOne.priceInfo}元起</div>
                        </div>
                        <div className="recommend-line2">
                            {this.props.recommendOne.subTitle}
                        </div>
                    </div>
                </a>
                <RecSm recommendTwo={this.props.recommendTwo}/>
                <RecSm recommendTwo={this.props.recommendThree}/>
            </div>
        )
    }
}
