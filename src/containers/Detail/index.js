import React, {Component} from 'react';
import {connect} from 'react-redux'
import Comment from "./Comment";
import Product from "./Product";
import {Route} from 'react-router-dom'
import './index.less'
import TNavbar from "../../components/TNavbar/index";

export default class Detail extends Component {
    render() {
        return (
            <div className="page">
                <TNavbar/>
                <Route exact path="/detail" component={Product}/>
                <Route exact path="/detail/:productId" component={Product}/>
                <Route path="/detail/:productId/comment" component={Comment}/>
            </div>
        )
    }
}