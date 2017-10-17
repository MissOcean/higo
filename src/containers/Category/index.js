import React, {Component} from 'react';
import {connect} from 'react-redux'
import TNavbar from "../../components/TNavbar/index";
import Sidebar from "./Sidebar/index";
import Cate from "./Cate/index";
export default class Category extends Component {
    render() {
        return (
            <div className='category'>
                <TNavbar/>
                <Sidebar/>
                <Cate/>
            </div>
        )
    }
}