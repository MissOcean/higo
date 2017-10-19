import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions'
import BNavBar from "../../components/BNavbar/index";

@connect(
    state => state,
    actions
)
export default class Home extends Component {
    render() {
        console.log(1)
        return (
            <div>Home
                <BNavBar/>
            </div>
        )
    }
}