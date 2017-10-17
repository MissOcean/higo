import React, {Component} from 'react';
import {connect} from 'react-redux'
import TNavbar from "../../components/TNavbar/index";
import BNavBar from "../../components/BNavbar/index";
import Sidebar from "./Sidebar/index";
import Cate from "./Cate/index";
import {getCateList,getCateItem} from '../../api/getData'
export default class Category extends Component {
    componentDidMount(){
        let data=getCateList(1022001);
        console.log(data);
    }
    render() {
        return (
            <div className='category'>
                <TNavbar/>
                <Sidebar/>
                <Cate/>
                <BNavBar/>
            </div>
        )
    }
}