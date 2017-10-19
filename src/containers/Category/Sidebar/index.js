import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.less'
export default class Sidebar extends Component {
    render() {
        return (
            <div className="side_bar">
                <ul>
                    {
                        this.props.cateList.map(item=>(
                            <li key={item.id} onClick={()=>{this.props.getCurCate(item.id,item.name,item.bannerUrl)}}>
                                <a className={item.id==this.props.curId?'active':''}>{item.name}</a>
                            </li>
                        ))
                    }


                </ul>
            </div>
        )
    }
}