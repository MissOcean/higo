import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.less'
export default class MIput extends Component {
    render() {
        return (
            <div className="m_input">
                <div className="num">数量</div>
                <div className="all-btn">
                    <span className="reduce" onClick={this.props.handleReduce}>-</span>
                    <input type="text"
                           value={this.props.count}
                           onChange={this.props.handleChange}
                           className="btn"/>
                    <span className="add" onClick={this.props.handleAdd}>+</span>
                </div>
            </div>
        )
    }
}