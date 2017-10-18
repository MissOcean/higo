import React, {Component} from 'react';
import './index.less'

export default class HeadPictureSwiper extends Component {


    componentDidMount() {
        new Swiper('.headPictureSwiper', {
            autoplay: 2000,
            speed:700,//可选选项，自动滑动
            effect: 'cube',
            loop: true,
            autoplayDisableOnInteraction : false,
            cube: {
                slideShadows: false,
                shadow: false,
                shadowOffset: 1000,
                shadowScale: 0.6
            }
            // slidesPerView: 2,
            // centeredSlides: true,
            // coverflow: {
                // rotate: 30,
                // stretch: 10,
                // depth: 60,
                // modifier: 2,
                // slideShadows : false
            // }
        })
    }

    render() {
        return (
            <div>
                <div className="swiper-container headPictureSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img
                                src="https://yanxuan.nosdn.127.net/74373b06b38aa134e2df9f8d017370b6.jpg?imageView&quality=75"
                                alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img
                                src="https://yanxuan.nosdn.127.net/48f7fc275398b6cb48aa670e896f6dd6.jpg?imageView&quality=75"
                                alt=""/>
                        </div>
                        <div className="swiper-slide"><img
                            src="https://yanxuan.nosdn.127.net/c646886fdf9abe1c69c4267380137ccc.jpg?imageView&quality=75"
                            alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }
}