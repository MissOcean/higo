import React, {Component} from 'react';
import './index.less'
import HeadPictureSwiper from "./HeadPictureSwiper/index";
import ItemSwiper from "./ItemSwiper/index";
import Recommend from "./Recommend/index";
import Global from "./Global/index";
import More from "./More/index";
import GoToTop from "./GoToTop/index";
import BNavBar from "../../components/BNavbar/index";
import {getTopicData} from '../../api/getData';
import {upLoadMore,downRefresh} from '../../utils/index'


export default class Food extends Component {
    constructor() {
        super();
        this.state = {data: ''}
    }

    componentWillMount() {
        getTopicData().then((res) => {
            this.setState({data: res.data})
        })
    }

    componentDidUpdate() {

        this.state.data && upLoadMore(() => {
            getTopicData().then((res) => {
                this.setState({data: {...this.state.data, findMore: [...this.state.data.findMore, ...res.data.findMore]}})
                setTimeout(() => {
                    console.log(this.state.data);
                }, 1000)
            })
        })
        this.state.data&&downRefresh(this.refs.foodContainer,()=>{

        })
    }

    render() {
        return (
            <div className="food">
                {this.state.data && <div className="food-container" ref="foodContainer">

                    <HeadPictureSwiper banner={this.state.data.banner}/>
                    <ItemSwiper column={this.state.data.column}/>
                    <Recommend recommendOne={this.state.data.recommendOne} recommendTwo={this.state.data.recommendTwo}
                               recommendThree={this.state.data.recommendThree}/>
                    <Recommend recommendOne={this.state.data.zhenOne} recommendTwo={this.state.data.zhenTwo}
                               recommendThree={this.state.data.zhenThree}/>

                    <Global global={this.state.data.yxGlobal}/>
                    <More more={this.state.data.findMore}/>
                    <GoToTop/>
                </div>

                }

                <BNavBar/>
            </div>
        )
    }
}