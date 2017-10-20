import React, {Component} from 'react';
import {connect} from 'react-redux'
import ReactSwipe from 'react-swipe';
import './index.less'

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {index: 0}
    }

    render() {
        let listPicUrl = this.props.listPicUrl
        let options = {
            continuous: true,
            auto: 4000,
            disableScroll: false,
            //每轮播一次会调用此回调方法并传入最新的索引
            callback: (index) => {
                this.setState({index})
                typeof this.props.callback == 'function' && this.props.callback(index)
            }
        };
        return (
            <div className="swiper" style={this.props.style}>
                {listPicUrl.length > 0 && <ReactSwipe swipeOptions={options}>
                    {
                        listPicUrl.map((imgUrl, idx) => (
                            <div key={idx}><img src={imgUrl} alt=""/></div>
                        ))
                    }
                </ReactSwipe>}
                {this.props.hasDots && <div className="dots">
                    <span>{this.state.index + 1}</span><span className="separator">/</span><span>5</span>
                </div>}
            </div>
        )
    }
}