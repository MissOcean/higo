import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions'

@connect(
    state => state,
    actions
)
export default class Home extends Component {
    render() {
        console.log(1)
        return (
            <div>Home</div>
        )
    }
}