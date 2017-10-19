import React, {Component} from 'react';
import './index.less'

export default class MoreItem extends Component {
    render() {
        return (
            <div className="more-item">
                <a className="item">
                    {
                        !this.props.picList ?
                            <div className="more-item-pic"
                                 style={{backgroundImage: `url(${this.props.itemPicUrl})`}}></div> :
                            <div className="more-item-pics">
                                <div className="item-left-pic"
                                     style={{backgroundImage: `url(${this.props.picList[0]})`}}></div>
                                <div className="item-right-pics">
                                    <div className="right-pics-1"
                                         style={{backgroundImage: `url(${this.props.picList[1]})`}}></div>
                                    <div className="right-pics-2"
                                         style={{backgroundImage: `url(${this.props.picList[2]})`}}></div>
                                </div>
                            </div>
                    }
                    <div className="more-item-desc">{this.props.title}</div>
                </a>
            </div>
        )
    }
}