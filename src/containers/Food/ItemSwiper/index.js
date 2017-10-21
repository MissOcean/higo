import React, {Component} from 'react';
import './index.less'

export default class ItemSwiper extends Component {

    componentDidMount() {
        new Swiper('.item-swiper-container', {
            // autoplay: 1000,//可选选项，自动滑动
            freeMode: true,
            slidesPerView : 'auto'
        })
    }


    render() {
        return (
            <div className="swiper-container item-swiper-container">
                <div className="swiper-wrapper item-swiper-wrapper">
                    {
                        this.props.column.map((item,index)=>(
                            <a className="swiper-slide item" key={index}>
                                <div className="item-image" style={{backgroundImage:`url(${item.picUrl})`}}>
                                </div>
                                <div className="item-title">
                                    {item.title}
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}