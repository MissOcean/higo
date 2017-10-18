import React, {Component} from 'react';
import {connect} from 'react-redux'
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Carousel extends Component {
    render() {
        let listPicUrl = this.props.listPicUrl
        let options = {
            continuous: true,
            auto: 4000,
            disableScroll: false,
            //每轮播一次会调用此回调方法并传入最新的索引
            callback: (index) => {
                // console.log(index)
            }
        };
        return (
            <div className="swiper">
                {listPicUrl.length > 0 && <ReactSwipe swipeOptions={options}>
                    {
                        listPicUrl.map((imgUrl, idx) => (
                            <div key={idx}><img src={imgUrl} alt=""/></div>
                        ))
                    }
                </ReactSwipe>}
                <div className="container"></div>
            </div>
        )
    }
}