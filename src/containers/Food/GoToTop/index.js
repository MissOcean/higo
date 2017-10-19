import React, {Component} from 'react';
import './index.less'
import {goToTop} from '../../../utils/index'

export default class GoToTop extends Component {

    componentDidMount() {
            // document.addEventListener('scroll', () => {
            //     console.log(1);
            //     if (document.documentElement.scrollTop > 100) {
            //         this.refs.goToTop.style.display = 'block';
            //     }
            // })

        // })
    }

    handleClick = () => {
        goToTop(this.refs.go);
    };

    render() {

        return (
            <div>
                <i className="goToTop" onClick={this.handleClick} ref="goToTop"></i>
            </div>
        )
    }
}