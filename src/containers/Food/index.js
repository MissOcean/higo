import React, {Component} from 'react';
import './index.less'
import HeadPictureSwiper from "./HeadPictureSwiper/index";
import ItemSwiper from "./ItemSwiper/index";
import Recommend from "./Recommend/index";
import Global from "./Global/index";
import More from "./More/index";
import GoToTop from "./GoToTop/index";

export default class Food extends Component {


    render() {
        return (
            <div className="food">
                <HeadPictureSwiper/>
                <ItemSwiper/>
                <Recommend/>
                <Recommend/>
                <Global/>
                <More/>
                <GoToTop/>
            </div>
        )
    }
}