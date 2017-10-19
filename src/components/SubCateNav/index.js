import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {horizontalMove} from '../../api/utils';
import './index.less'

export default class SubCateNav extends Component {
    constructor() {
        super();
        // this.state = {
        //     subList: []
        // }
    }

    componentWillMount() {
        // let subCateList = this.props.subCateList;
        // console.log(subCateList);
        // let subList = (subCateList ? subCateList : JSON.parse(localStorage.getItem('subCateList')));
        //
        // this.setState({subList:subList});
        // localStorage.setItem('subCateList', JSON.stringify(subList));
    }

    componentDidMount() {
        let touch = new horizontalMove({
            innerEle: this.refs.inner,
            wrapEle: this.refs.wrap,
            speed: 0.5
        });
    }

    render() {
        // console.log(this.props);
        return (
            <div className="wrap" ref="wrap">
                <div className="inner" ref="inner">
                    <ul className="list">
                        {
                            this.props.subCateList.map((item, index) => (
                                <li key={item.id} onClick={() => {
                                    this.props.getSubItem(item.id)
                                }} className={this.props.subCategoryId == item.id ? 'active' : ''}>{item.name}</li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        )
    }

}