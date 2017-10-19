/* App */
import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Home/index";
import Cart from "./Cart/index";
import Topic from "./Topic/index";
import Category from "./Category/index";
import User from "./User/index";
import Login from "../containers/Login/index";
import Register from "../containers/Register/index";
import BNavBar from "../components/BNavbar/index";
import {ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()

import '../api/rem'
import '../common/style/reset.less'
import TNavbar from "../components/TNavbar/index";
import Detail from "./Detail/index";
import SubCateList from "./SubCateList/index";
import Protected from "../components/Protected/index";

export default class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Protected path="/user" component={User}/>
                        <Route path="/category" component={Category}></Route>
                        <Route path="/detail" component={Detail}></Route>
                        <Route path="/subCateList" component={SubCateList}/>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}