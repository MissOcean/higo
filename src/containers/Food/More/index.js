import React, {Component} from 'react';
import './index.less'
import MoreItem from "./MoreItem/index";

export default class More extends Component {


    render() {
        let moreItems = this.props.more;
        return (
            <div className="food-more">
                <div className="more-title">
                    更多精彩
                </div>
                {
                    moreItems.map((item, index) => (
                        <MoreItem {...item} key={index}/>
                    ))
                }
            </div>
        )
    }
}