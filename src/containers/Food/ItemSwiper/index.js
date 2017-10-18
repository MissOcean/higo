import React, {Component} from 'react';
import './index.less'

export default class ItemSwiper extends Component {

    componentDidMount() {
        new Swiper('.item-swiper-container', {
            // autoplay: 1000,//可选选项，自动滑动
            freeMode: true,
            slidesPerView : 4
        })
    }


    render() {
        return (
            <div className="swiper-container item-swiper-container">
                <div className="swiper-wrapper item-swiper-wrapper">
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>
                    <a className="swiper-slide item">
                        <div className="item-image">

                        </div>
                        <div className="item-title">
                            严选推荐
                        </div>
                    </a>

                </div>
            </div>
        )
    }
}