import React, {Component} from 'react';
import './index.less'
import {goToTop} from '../../../utils/index'

export default class GoToTop extends Component {

    handleClick = () => {
        goToTop(this.refs.go);
    };

    render() {
        return (
            <div>
                <i className="goToTop" onClick={this.handleClick} ref="go"></i>
            </div>
        )
    }
}