import React,{Component} from 'react';
import './index.less'
export default class MoreItem extends Component{
    render(){
        return (
            <div className="more-item">
                <a className="item">
                    <div className="more-item-pic" style={{backgroundImage:`url(${this.props.itemPic})`}}></div>
                    <div className="more-item-desc">{this.props.itemDesc}</div>
                </a>
            </div>
        )
    }
}