import React, {Component} from 'react';
import './index.less'
export default class Star extends Component {
    totalW(n, s) {
        let w = n * parseFloat(s) * 3 / 2
        return w.toFixed(2) + 'rem'
    }

    render() {
        let {maxStar = 5, star, fSize = '.28rem'} = this.props
        let arr = []
        for (let i = 0; i < maxStar; i++) {
            arr.push(i)
        }
        return (
            <ul className="stars" style={{width: this.totalW(maxStar, fSize)}}>
                {arr.map((n, idx) => (
                    <li key={idx} className={idx > star ? 'star' : 'star active'}>
                        <i className="iconfont icon-favorfill" style={{fontSize: fSize}}></i>
                    </li>
                ))}
            </ul>
        )
    }
}