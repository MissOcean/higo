import React, {Component} from 'react';
import './index.less'

export default class HeadPictureSwiper extends Component {


    componentDidMount() {
        new Swiper('.headPictureSwiper', {
            autoplay: 2000,
            speed: 700,//可选选项，自动滑动
            effect: 'cube',
            loop: true,
            autoplayDisableOnInteraction: false,
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
                        {
                            this.props.banner.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <a href={item.schemeUrl}>
                                        <img src={item.picUrl}/>
                                    </a>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}