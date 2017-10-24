import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.less'

export default class TopicList extends Component {
    static defaultProps = {
        topicList: [],
    }

    componentDidMount() {
        let options = {
            observer: true,
            observeParents: true,
        }
        this._swiper = new Swiper(this.refs.swiper, options)
    }

    render() {
        let topicList = this.props.topicList
        console.log('render topicList', topicList);
        return (
            <div className="topicList">
                <div className="swiper-container" ref="swiper">
                    <div className="swiper-wrapper">
                        {topicList.map((item, idx) => {
                            console.log(item)
                            return (
                                <div className="swiper-slide" key={idx}>
                                    {idx}
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}